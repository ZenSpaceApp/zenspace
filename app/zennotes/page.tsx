import React from 'react';
import { Navbar, Footer } from '../../components';
import styles from './page.module.scss';
import Link from 'next/link';
import WaveformAnim from '@/components/Waveform/WaveformAnim';
import Image from 'next/image';
import VideoInterface from '@/public/images/easy-connecting.webp';
  
import AudioTap from '@/public/icons/audio-tap.svg';
import HumanFirst from '@/public/icons/soul.svg';
import ZeroPersistence from '@/public/icons/ram-only.svg';
import HumanSignature from '@/public/icons/human-first.svg';
import { SessionTimeline } from '@/components/SessionTimeline/SessionTimeline';

import { JobsSection } from '@/components/JTBDSection/JobsSecton';

export const metadata = {
  title: 'ZenNotes',
  description: 'Your private space for notes and journaling',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: AudioTap,
    title: 'High-Fidelity Audio Tap',
    body: 'We\'re built into the call, not watching from outside, which means studio-quality audio. We capture the soul of the session, not just the computer audio.',
  },
  {
    icon: HumanFirst,
    title: 'AI is the muscle. You are the soul.',
    body: 'The system simultaneously handles documentation, ICD-10 coding, and generating plain-language patient summaries.',
  },
  {
    icon: ZeroPersistence,
    title: 'Zero-Persistence Privacy.',
    body: 'Audio is processed in real-time and not permanently stored, adhering to the highest trust and HIPAA standards.',
  },
  {
    icon: HumanSignature,
    title: 'Human Final Signature.',
    body: 'Every note remains a draft until you authenticate it. You provide the soul.',
  },
];

export default function ZenNotesPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>
              {/* <WaveformAnim /> */}
              <span>Ambient Clinical Intelligence</span>
            </div>
            <h1>
              <span className={styles.line}>Your session ends.</span>
              <span className={styles.line}>Your notes are</span>
              <span className={styles.line}>already <em>done.</em></span>
            </h1>
            <p>
              Capture every nuance. Our Ambient AI transcribes the soul of the session,
              not just the computer audio.
            </p>
            <Link
              className="btn btn--primary  fade show"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwzPnrq_3K4zCOhyUdhwroBsw-haYHsY6Xn4wgRUXCCB8Urw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              >
              Get Early Access
            </Link>
          </div>
          <div className={styles.postSessionTimeline}>
            <SessionTimeline autoPlay loop loopDelay={2200} showReplay={false} />
          </div>
        </section>

        {/* ── Trust Bar ── */}
      <section className={` ${styles.trustBar} full-bleed--edge`}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
          <WaveformAnim />
        </div>
        <h2 className={styles.trustHeading}>Built for the most sensitive<br />conversations on earth.</h2>
        <p className={styles.trustSub}>Enter Ambient Clinical Intelligence (ACI).</p>

        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <div className={styles.featureCard} key={f.title}>
              <Image
                src={f.icon}
                alt={`${f.title} icon`}
                height={32}
                width={32}
                style={{
                  marginBottom: '1rem',
                }}
                className={styles.featureIcon}
              />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        </section>
        <JobsSection />
        {/* ── We Own The Pipes Section ── */}
      <section className={styles.pipesSection}>
        <div style={{ maxWidth: '600px', margin: '0 auto 4rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
          <WaveformAnim />
        </div>
        <h2 style={{marginTop: '2rem'}}>Studio-quality calls</h2>
        <p className={styles.pipesSub}>
          ZenNotes is built into the call — not a passive recorder watching from outside.
          That&apos;s why we catch what others miss, and why nothing ever joins your session uninvited.
        </p>
        </div>
      <div className={styles.pipesInner}>
        <div className={styles.pipesImage}>
          {/* Replace with <Image src="/assets/zennotes-video-call.png" alt="Video calling interface" fill /> */}
          <Image
            src={VideoInterface}
            alt="Video calling interface"
          />
        </div>

        <div className={styles.pipesText}>
          <ul className={styles.pipesList}>
            <li>
              <div className={styles.pipesItemHeader}>
                {/* <span className={styles.pipesItemDot} /> */}
                <strong>Direct Stream Extraction</strong>
              </div>
              <p>We process <b>audio and video natively delivering a seamless HD experience</b>.
                No Bots, no third-party API lag, no security middlemen.</p>
            </li>
            <li>
              <div className={styles.pipesItemHeader}>
                {/* <span className={styles.pipesItemDot} /> */}
                <strong>Instantaneous Processing</strong>
              </div>
              <p>
                Audio is analyzed and evaporates as soon as the session ends.
                We <b>deliver the intelligence</b>, not the liability.
              </p>
            </li>
            <li>
              <div className={styles.pipesItemHeader}>
                {/* <span className={styles.pipesItemDot} /> */}
                <strong>Agentic Context Synthesis</strong>
              </div>
              <p>Unlike legacy scribes, we don&apos;t just transcribe; we <b>synthesize the Affect and Thematic Memory </b> directly into the note.</p>
            </li>
          </ul>
          </div>
          </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
