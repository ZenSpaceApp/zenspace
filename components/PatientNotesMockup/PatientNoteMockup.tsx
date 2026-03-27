'use client';

import { useState, useRef } from 'react';
import styles from './PatientNoteMockup.module.scss';

// ── Data ──────────────────────────────────────────────────────
interface Note {
  date: string;
  sent: string;
  isNew: boolean;
  preview: string;
  greeting: string;
  intro: string;
  highlights: string[];
  homework: { label: string; text: string };
  closing: string;
}

const NOTES: Note[] = [
  {
    date: 'Today · Mar 20, 2026 · 2:00 PM',
    sent: 'Sent · 3:02 PM',
    isNew: true,
    preview: 'You\'re doing the work. It shows.',
    greeting: 'Hi Sarah,',
    intro: 'Here\'s a brief summary of today\'s session — written in plain language so it\'s easy to refer back to.',
    highlights: [
      'The anxiety has been more manageable this week. The breathing practice is working — you noticed it helping in moments that would have felt overwhelming before.',
      'Avoidance has been getting shorter. That\'s real progress, even when it doesn\'t feel that way from the inside.',
      'Your score on the anxiety check-in dropped from 14 to 9 since we started. That\'s a meaningful shift.',
    ],
    homework: {
      label: 'Before next session',
      text: 'Keep a short note when you notice the urge to avoid something — just what triggered it and what you did. No pressure to change anything yet.',
    },
    closing: 'See you next week. You\'re doing the work. It shows.',
  },
  {
    date: 'Mar 13, 2026 · 2:00 PM',
    sent: 'Sent · 3:08 PM',
    isNew: false,
    preview: 'The breathing exercises are making a difference.',
    greeting: 'Hi Sarah,',
    intro: 'A quick note from today\'s session.',
    highlights: [
      'You shared that the box breathing has been helping — especially in the evenings when things feel heavier.',
      'We talked about the difference between avoidance that protects and avoidance that shrinks your world.',
      'Your GAD-7 score is 11 — down from 14 last week. Moving in the right direction.',
    ],
    homework: {
      label: 'Before next session',
      text: 'Practice the breathing exercise once a day, even when you don\'t feel anxious. Building the habit matters more than the moment.',
    },
    closing: 'Good session today. See you next week.',
  },
  {
    date: 'Mar 6, 2026 · 2:00 PM',
    sent: 'Sent · 3:15 PM',
    isNew: false,
    preview: 'Starting something new takes courage.',
    greeting: 'Hi Sarah,',
    intro: 'Notes from our first session together.',
    highlights: [
      'It takes courage to start something like this. You showed up, and that matters.',
      'We talked about what\'s been making things feel harder lately — the anxiety, the avoidance, and how long it\'s been building.',
      'Your GAD-7 score today is 14, which puts you in the moderate range. We\'ll use this as our baseline.',
    ],
    homework: {
      label: 'This week',
      text: 'Try the 4-7-8 breathing exercise once today. Breathe in for 4 seconds, hold for 7, out for 8. Just try it once.',
    },
    closing: 'Looking forward to working with you. See you next week.',
  },
  {
    date: 'Feb 27, 2026 · 2:00 PM',
    sent: 'Sent · 3:20 PM',
    isNew: false,
    preview: 'Your score on the check-in was 14 today.',
    greeting: 'Hi Sarah,',
    intro: 'Quick note from our intake session.',
    highlights: [
      'Thank you for sharing so openly in our first meeting. That\'s not easy to do.',
      'We covered your history and what you\'re hoping to work on together.',
      'Your GAD-7 score was 14 today.',
    ],
    homework: {
      label: 'Before next session',
      text: 'No homework this week — just show up.',
    },
    closing: 'See you next week.',
  },
];

// ── Component ─────────────────────────────────────────────────
export default function PatientNoteMockup() {
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [view, setView] = useState<'list' | 'note'>('list');
  const noteScreenRef = useRef<HTMLDivElement>(null);

  function openNote(note: Note) {
    setActiveNote(note);
    setView('note');
    setTimeout(() => noteScreenRef.current?.scrollTo(0, 0), 0);
  }

  function goBack() {
    setView('list');
    setActiveNote(null);
  }

  return (
    <div className={styles.phoneWrap}>
      <div className={styles.phone}>

        {/* Status bar */}
        <div className={styles.statusBar}>
          <span className={styles.statusTime}>9:41</span>
          <div className={styles.notch} />
          <span className={styles.statusIcons}>●●●</span>
        </div>

        <div className={styles.screen}>

          {/* ── Session list ── */}
          <div className={[styles.panel, view === 'list' ? styles.panelVisible : styles.panelHidden].join(' ')}>
            <div className={styles.listHeader}>
              <div className={styles.listAvatar}>SR</div>
              <div>
                <p className={styles.listGreeting}>Hi Sarah</p>
                <p className={styles.listSub}>Notes from Dr. Chen</p>
              </div>
            </div>

            <div className={styles.sessionList}>
              {NOTES.map((note, i) => (
                <button
                  key={i}
                  className={styles.sessionCard}
                  onClick={() => openNote(note)}
                  type="button"
                >
                  <span className={[styles.sessionDot, note.isNew ? styles.dotNew : styles.dotRead].join(' ')} />
                  <div className={styles.sessionInfo}>
                    <p className={styles.sessionDate}>{note.date}</p>
                    <p className={styles.sessionPreview}>{note.preview}</p>
                  </div>
                  {note.isNew && <span className={styles.newBadge}>New</span>}
                  <span className={styles.chevron}>›</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Note detail ── */}
          <div
            ref={noteScreenRef}
            className={[styles.panel, styles.notePanel, view === 'note' ? styles.panelVisible : styles.panelHidden].join(' ')}
          >
            {activeNote && (
              <>
                <div className={styles.noteHeader}>
                  <button className={styles.backBtn} onClick={goBack} type="button">‹</button>
                  <div className={styles.noteHeaderText}>
                    <p className={styles.noteHeaderTitle}>{activeNote.isNew ? 'Today\'s note' : 'Session note'}</p>
                    <p className={styles.noteHeaderSub}>Dr. Maya Chen, LMFT</p>
                  </div>
                </div>

                <div className={styles.noteMeta}>
                  <p className={styles.noteMetaDate}>{activeNote.date}</p>
                </div>

                <div className={styles.noteBody}>
                  <p className={styles.noteGreeting}>{activeNote.greeting}</p>
                  <p className={styles.noteIntro}>{activeNote.intro}</p>

                  <div className={styles.noteHighlights}>
                    {activeNote.highlights.map((h, i) => (
                      <div key={i} className={styles.highlight}>
                        <span className={styles.highlightDot} />
                        <p className={styles.highlightText}>{h}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.hwBox}>
                    <p className={styles.hwLabel}>{activeNote.homework.label}</p>
                    <p className={styles.hwText}>{activeNote.homework.text}</p>
                  </div>

                  <p className={styles.noteClosing}>{activeNote.closing}</p>
                </div>

                <div className={styles.noteFooter}>
                  <p className={styles.noteSent}>{activeNote.sent}</p>
                  <div className={styles.noteActions}>
                    <button className={styles.noteBtn} type="button">Message Dr. Chen</button>
                    <button className={[styles.noteBtn, styles.noteBtnPrimary].join(' ')} type="button">
                      Book next session
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>

        <div className={styles.homeBar} />
      </div>
      <p>[Live Preview]</p>
    </div>
  );
}
