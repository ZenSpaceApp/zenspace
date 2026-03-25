// components/JobsSection/JobsSection.tsx
'use client';

import { useState } from 'react';
import styles from './JobsSection.module.scss';

// ── Tab definitions ────────────────────────────────────────────
const TABS = [
  {
    id: 'studio',
    label: 'Studio calls',
    eyebrow: 'In-pipe intelligence',
    headline: 'Studio-quality calls',
    copy: 'ZenNotes is built into the call — not a passive recorder watching from outside. That\'s why we catch what others miss, and why nothing ever joins your session uninvited.',
    output: null,
    outputType: 'video',
  },
  {
    id: 'soap',
    label: 'SOAP note',
    eyebrow: 'Job 1 of 5',
    headline: 'Your note writes itself.',
    copy: 'By the time you say goodbye, your SOAP note is 95% complete — ready for your final review and signature.',
    outputType: 'soap',
    output: {
      sections: [
        { label: 'Subjective', text: 'Patient reports reduced anxiety since last session. Practiced box breathing daily. Avoidance of crowded spaces shortened from hours to ~30 min.' },
        { label: 'Objective', text: 'Affect appropriate, speech clear. GAD-7: 9 (moderate, down from 14). Good eye contact throughout.' },
        { label: 'Assessment', text: 'GAD with agoraphobic features. Measurable progress on avoidance. Coping strategies integrating well.' },
        { label: 'Plan', text: 'Continue weekly CBT. Introduce graduated exposure hierarchy next session. Patient to log avoidance triggers.' },
      ],
      flags: ['Homework: exposure journal', 'Follow-up: graduated exposure plan'],
    },
  },
  {
    id: 'icd',
    label: 'ICD-10 & CPT',
    eyebrow: 'Job 2 of 5',
    headline: 'Codes mapped in real time.',
    copy: 'ZenNotes maps clinical content to the correct ICD-10 and CPT codes as the session runs — eliminating manual lookup and reducing claim errors.',
    outputType: 'icd',
    output: {
      icd: [
        { code: 'F41.1', desc: 'Generalized anxiety disorder', type: 'Primary · DSM-5 matched', conf: '98%' },
        { code: 'F40.00', desc: 'Agoraphobia, unspecified', type: 'Secondary · session-evidenced', conf: '91%' },
        { code: 'Z71.1', desc: 'Person with feared complaint', type: 'Supporting · subclinical', conf: '74%' },
      ],
      cpt: [
        { code: '90837', desc: 'Psychotherapy, 60 min', fee: '$200.00' },
        { code: '90785', desc: 'Interactive complexity add-on', fee: '$35.00' },
      ],
    },
  },
  {
    id: 'superbill',
    label: 'Superbill',
    eyebrow: 'Job 3 of 5',
    headline: '$235.00 billed. One tap.',
    copy: 'The superbill is generated automatically from the codes. NPI, license, date of service, place of service — all populated. Ready to send to the patient or submit to insurance.',
    outputType: 'superbill',
    output: {
      provider: 'Dr. Maya Chen, LMFT',
      npi: 'NPI 1234567890 · License MFC 12345',
      patient: 'Sarah R.',
      date: 'Mar 20, 2026',
      pos: '02 · Telehealth',
      lines: [
        { code: '90837', desc: 'Psychotherapy, 60 min', fee: '$200.00' },
        { code: '90785', desc: 'Interactive complexity', fee: '$35.00' },
      ],
      total: '$235.00',
      diag: ['F41.1 · GAD', 'F40.00 · Agoraphobia'],
    },
  },
  {
    id: 'patient',
    label: 'Patient note',
    eyebrow: 'Job 4 of 5',
    headline: 'One session, two truths.',
    copy: 'Alongside your private SOAP note, ZenNotes generates a warm, plain-language summary for your patient — same session, two truths. Sent automatically after the call.',
    outputType: 'patient',
    output: {
      greeting: 'Hi Sarah,',
      intro: 'Here\'s a brief summary of today\'s session — written in plain language so it\'s easy to refer back to.',
      highlights: [
        'The anxiety has been more manageable this week. The breathing practice is working.',
        'Avoidance has been getting shorter. That\'s real progress, even when it doesn\'t feel that way.',
        'Your anxiety score dropped from 14 to 9 since we started. That\'s a meaningful shift.',
      ],
      homework: 'Before next session, try keeping a short note when you notice the urge to avoid something — just what triggered it and what you did.',
      closing: 'See you next week. You\'re doing the work. It shows.',
      sent: 'Sent to Sarah · 3:02 PM',
    },
  },
] as const;

type TabId = typeof TABS[number]['id'];

export function JobsSection() {
  const [active, setActive] = useState<TabId>('soap');
  const tab = TABS.find(t => t.id === active)!;

  return (
    <section className={styles.section}>

      {/* ── Headline ── */}
      <div className={styles.heading}>
        <p className={styles.kicker}>5 jobs. ~12.8 seconds</p>
        <h2 className={styles.title}>Say goodbye to the 27-hour workday</h2>
        <p className={styles.subtitle}>We guarantee 2 hours back every single day.</p>
      </div>

      <div className={styles.jobsContainer}>
        {/* ── Tab rail ── */}
        <div className={styles.tabRail}>
          {TABS.map(t => (
            <button
              key={t.id}
              className={[styles.tab, active === t.id ? styles.tabActive : ''].join(' ')}
              onClick={() => setActive(t.id)}
              type="button"
            >
              {t.label}
            </button>
          ))}
          <div className={styles.tabRailLine} />
        </div>

        {/* ── Content ── */}
        <div className={styles.content}>

          {/* Left — copy */}
          <div className={styles.copyCol}>
            <p className={styles.eyebrow}>{tab.eyebrow}</p>
            <h3 className={styles.jobTitle}>{tab.headline}</h3>
            <p className={styles.jobCopy}>{tab.copy}</p>
          </div>

          {/* Right — output card */}
          <div className={styles.outputCol}>
            <div className={styles.card}>
              {tab.outputType === 'soap' && tab.output && (
                <SoapOutput output={tab.output as any} />
              )}
              {tab.outputType === 'icd' && tab.output && (
                <IcdOutput output={tab.output as any} />
              )}
              {tab.outputType === 'superbill' && tab.output && (
                <SuperbillOutput output={tab.output as any} />
              )}
              {tab.outputType === 'patient' && tab.output && (
                <PatientOutput output={tab.output as any} />
              )}
              {tab.outputType === 'video' && (
                <VideoOutput />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Output sub-components ──────────────────────────────────────

function SoapOutput({ output }: { output: typeof TABS[1]['output'] }) {
  if (!output) return null;
  return (
    <div className={styles.soap}>
      {output.sections.map(s => (
        <div key={s.label} className={styles.soapRow}>
          <p className={styles.soapLabel}>{s.label}</p>
          <p className={styles.soapText}>{s.text}</p>
        </div>
      ))}
      <div className={styles.soapRow}>
        <p className={styles.soapLabel}>Clinical flags</p>
        <div className={styles.pills}>
          {output.flags.map(f => (
            <span key={f} className={[styles.pill, styles.pillAmber].join(' ')}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function IcdOutput({ output }: { output: typeof TABS[2]['output'] }) {
  if (!output) return null;
  return (
    <div className={styles.icd}>
      <p className={styles.outputSectionLabel}>ICD-10 diagnosis codes</p>
      {output.icd.map(row => (
        <div key={row.code} className={styles.icdRow}>
          <span className={styles.icdCode}>{row.code}</span>
          <div className={styles.icdBody}>
            <p className={styles.icdDesc}>{row.desc}</p>
            <p className={styles.icdType}>{row.type}</p>
          </div>
          <span className={styles.icdConf}>{row.conf}</span>
        </div>
      ))}
      <p className={[styles.outputSectionLabel, styles.mt].join(' ')}>CPT procedure codes</p>
      {output.cpt.map(row => (
        <div key={row.code} className={styles.cptRow}>
          <span className={styles.cptCode}>{row.code}</span>
          <span className={styles.cptDesc}>{row.desc}</span>
          <span className={styles.cptFee}>{row.fee}</span>
        </div>
      ))}
    </div>
  );
}

function SuperbillOutput({ output }: { output: typeof TABS[3]['output'] }) {
  if (!output) return null;
  return (
    <div className={styles.superbill}>
      <div className={styles.sbHeader}>
        <div>
          <p className={styles.sbProvider}>{output.provider}</p>
          <p className={styles.sbMeta}>{output.npi}</p>
        </div>
        <span className={[styles.pill, styles.pillTeal].join(' ')}>Insurance-ready</span>
      </div>
      <div className={styles.sbPatient}>
        <div><p className={styles.sbFieldLabel}>Patient</p><p className={styles.sbFieldVal}>{output.patient}</p></div>
        <div><p className={styles.sbFieldLabel}>Date of service</p><p className={styles.sbFieldVal}>{output.date}</p></div>
        <div><p className={styles.sbFieldLabel}>Place of service</p><p className={styles.sbFieldVal}>{output.pos}</p></div>
      </div>
      <table className={styles.sbTable}>
        <thead>
          <tr><th>CPT</th><th>Description</th><th style={{ textAlign: 'right' }}>Fee</th></tr>
        </thead>
        <tbody>
          {output.lines.map(l => (
            <tr key={l.code}>
              <td className={styles.sbCode}>{l.code}</td>
              <td>{l.desc}</td>
              <td style={{ textAlign: 'right', fontWeight: 500 }}>{l.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.sbTotal}>
        <span className={styles.sbTotalLabel}>Total billed</span>
        <span className={styles.sbTotalAmount}>{output.total}</span>
      </div>
      <div className={styles.pills}>
        {output.diag.map(d => (
          <span key={d} className={[styles.pill, styles.pillBlue].join(' ')}>{d}</span>
        ))}
      </div>
      <div className={styles.sbActions}>
        <button className={[styles.sbBtn, styles.sbBtnPrimary].join(' ')} type="button">Send to patient</button>
        <button className={styles.sbBtn} type="button">Export PDF</button>
        <button className={styles.sbBtn} type="button">Submit to insurance</button>
      </div>
    </div>
  );
}

function PatientOutput({ output }: { output: typeof TABS[4]['output'] }) {
  if (!output) return null;
  return (
    <div className={styles.patient}>
      <div className={styles.patientNote}>
        <p className={styles.patientGreeting}>{output.greeting}</p>
        <p className={styles.patientBody}>{output.intro}</p>
        {output.highlights.map((h, i) => (
          <div key={i} className={styles.patientHighlight}>
            <span className={styles.patientDot} />
            <p className={styles.patientHighlightText}>{h}</p>
          </div>
        ))}
        <p className={styles.patientBody} style={{ marginTop: '12px' }}>{output.homework}</p>
        <p className={styles.patientClosing}>{output.closing}</p>
      </div>
      <div className={styles.patientFooter}>
        <span className={styles.patientSent}>{output.sent}</span>
        <div className={styles.sbActions}>
          <button className={styles.sbBtn} type="button">Edit</button>
          <button className={[styles.sbBtn, styles.sbBtnPrimary].join(' ')} type="button">Resend</button>
        </div>
      </div>
    </div>
  );
}

function VideoOutput() {
  return (
    <div className={styles.video}>
      <div className={styles.videoCallMock}>
        <div className={styles.videoParticipant}>
          <div className={styles.videoAvatar}>SR</div>
          <p className={styles.videoName}>Sarah R.</p>
        </div>
        <div className={styles.videoDivider} />
        <div className={styles.videoParticipant}>
          <div className={[styles.videoAvatar, styles.videoAvatarTherapist].join(' ')}>MC</div>
          <p className={styles.videoName}>Dr. Chen</p>
        </div>
      </div>
      <div className={styles.videoStatus}>
        <span className={styles.videoLive} />
        <p className={styles.videoStatusText}>Session in progress · ZenNotes listening</p>
      </div>
    </div>
  );
}
