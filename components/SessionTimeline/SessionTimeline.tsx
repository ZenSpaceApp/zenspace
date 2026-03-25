// components/SessionTimeline/SessionTimeline.tsx

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './SessionTimeline.module.scss';

export interface TimelineStep {
  id: string;
  label: string;
  sublabel: string;
  tag: string;
  tagVariant: 'blue' | 'purple' | 'amber' | 'green';
  duration: number; // ms
}

export interface SessionTimelineProps {
  /** Auto-play on mount */
  autoPlay?: boolean;
  /** Loop continuously */
  loop?: boolean;
  /** Delay before looping again (ms) */
  loopDelay?: number;
  /** Show replay button */
  showReplay?: boolean;
  /** Custom steps — defaults to the Ambient clinical pipeline */
  steps?: TimelineStep[];
  /** Called when all steps complete */
  onComplete?: (elapsedMs: number) => void;
}

const DEFAULT_STEPS: TimelineStep[] = [
  {
    id: 'transcribe',
    label: 'Transcribing audio',
    sublabel: 'Deepgram · speaker diarization',
    tag: 'Whisper ASR (device)',
    tagVariant: 'blue',
    duration: 2400,
  },
  {
    id: 'extract',
    label: 'Extracting SOAP note',
    sublabel: 'SOAP complete · clinician-ready',
    tag: 'Claude',
    tagVariant: 'purple',
    duration: 3000,
  },
  {
    id: 'coding',
    label: 'Mapping ICD-10 and CPT codes',
    sublabel: 'F41.1 · F40.00 · CPT 90837 + 90785',
    tag: 'Real-time coding',
    tagVariant: 'purple',
    duration: 1100,
  },
  {
    id: 'superbill',
    label: 'Generating superbill',
    sublabel: 'CPT 90837 · 90785 · insurance-ready',
    tag: '$235.00',
    tagVariant: 'amber',
    duration: 1600,
  },
  {
    id: 'patientNote',
    label: 'Writing patient summary',
    sublabel: 'Plain-language summary · sent to patient portal',
    tag: 'Plain language',
    tagVariant: 'blue',
    duration: 1100,
  },
  {
    id: 'encrypt',
    label: 'Encrypting & saving',
    sublabel: 'AES-256 · only you can read this',
    tag: 'On device',
    tagVariant: 'green',
    duration: 1100,
  },
];

type StepState = 'idle' | 'active' | 'done';

interface StepStatus {
  state: StepState;
  tagVisible: boolean;
  visible: boolean;
}

function buildIdleStatus(steps: TimelineStep[]): StepStatus[] {
  return steps.map(() => ({ state: 'idle', tagVisible: false, visible: false }));
}

export function SessionTimeline({
  autoPlay = true,
  loop = false,
  loopDelay = 1800,
  showReplay = true,
  steps = DEFAULT_STEPS,
  onComplete,
}: SessionTimelineProps) {
  const [statuses, setStatuses] = useState<StepStatus[]>(buildIdleStatus(steps));
  const [elapsed, setElapsed] = useState<string>('0.0s');
  const [completedTime, setCompletedTime] = useState<string>('');
  const [footerVisible, setFooterVisible] = useState(false);
  const [running, setRunning] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(0);
  const abortRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const reset = useCallback(() => {
    abortRef.current = true;
    clearTimer();
    setStatuses(buildIdleStatus(steps));
    setElapsed('0.0s');
    setCompletedTime('');
    setFooterVisible(false);
    setRunning(false);
  }, [steps]);

  const start = useCallback(async () => {
    abortRef.current = false;
    setRunning(true);
    setFooterVisible(false);
    setCompletedTime('');
    setStatuses(buildIdleStatus(steps));
    setElapsed('0.0s');

    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(((Date.now() - startRef.current) / 1000).toFixed(1) + 's');
    }, 80);

    for (let i = 0; i < steps.length; i++) {
      if (abortRef.current) return;

      // Mark active
      setStatuses(prev => prev.map((s, idx) =>
        idx === i ? { ...s, state: 'active', visible: true, tagVisible: i > 0 } : s
      ));

      await new Promise<void>(resolve => {
        const id = setTimeout(resolve, steps[i].duration);
        // store so we can clear on abort — simple approach: just let it run
        void id;
      });

      if (abortRef.current) return;

      // Mark done
      setStatuses(prev => prev.map((s, idx) =>
        idx === i ? { ...s, state: 'done', tagVisible: true } : s
      ));
    }

    clearTimer();
    const ms = Date.now() - startRef.current;
    const secs = (ms / 1000).toFixed(1) + 's';
    setElapsed(secs);
    setCompletedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setFooterVisible(true);
    setRunning(false);
    onComplete?.(ms);

    if (loop) {
      await new Promise(r => setTimeout(r, loopDelay));
      if (!abortRef.current) start();
    }
  }, [steps, loop, loopDelay, onComplete]);

  const replay = useCallback(() => {
    reset();
    setTimeout(() => start(), 60);
  }, [reset, start]);

  useEffect(() => {
    if (autoPlay) start();
    return () => {
      abortRef.current = true;
      clearTimer();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.root}>
      <p className={styles.eyebrow}>Session ended · processing</p>

      <div className={styles.timeline}>
        {steps.map((step, i) => {
          const status = statuses[i];
          return (
            <div
              key={step.id}
              className={[
                styles.step,
                status.visible ? styles.stepVisible : '',
              ].join(' ')}
            >
              <span
                className={[
                  styles.dot,
                  status.state === 'active' ? styles.dotActive : '',
                  status.state === 'done' ? styles.dotDone : '',
                ].join(' ')}
              />

              <div className={styles.stepRow}>
                <span
                  className={[
                    styles.stepName,
                    status.state === 'active' ? styles.stepNameActive : '',
                    status.state === 'done' ? styles.stepNameDone : '',
                  ].join(' ')}
                >
                  {step.label}
                </span>
                <span
                  className={[
                    styles.tag,
                    styles[`tag--${step.tagVariant}`],
                    status.tagVisible ? styles.tagVisible : '',
                  ].join(' ')}
                >
                  {step.tag}
                </span>
              </div>

              <p className={styles.stepSub}>{step.sublabel}</p>

              <div className={styles.barWrap}>
                <div
                  className={[
                    styles.bar,
                    status.state === 'active' ? styles.barActive : '',
                    status.state === 'done' ? styles.barDone : '',
                  ].join(' ')}
                  style={
                    status.state === 'active'
                      ? ({ '--step-dur': `${step.duration}ms` } as React.CSSProperties)
                      : undefined
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={[styles.footer, footerVisible ? styles.footerVisible : ''].join(' ')}>
        <span className={styles.footerDot} />
        <p className={styles.footerText}>
          Note + superbill ready in <strong>{elapsed}</strong>
        </p>
        {completedTime && (
          <span className={styles.footerTime}>{completedTime}</span>
        )}
      </div>

      {showReplay && !running && (
        <button className={styles.replay} onClick={replay} type="button">
          ↺ replay
        </button>
      )}
    </div>
  );
}
