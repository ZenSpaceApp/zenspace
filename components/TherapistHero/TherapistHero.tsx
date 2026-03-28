// components/marketing/TherapistHero/TherapistHero.tsx
import styles from './TherapistHero.module.scss';
import Button from '@/components/ui/Button/Button';
import Image from 'next/image';
const PILLS = ["Smart Scheduling", "ZenNotes AI", "Auto-Billing", "Telehealth", "Insurance Sync"];

export default function TherapistHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>One Platform to Simplify Your Practice</h1>
        <p className={styles.subtitle}>
          Stop the paperwork. Start the practice. Zenspace is the all-in-one platform designed to help therapists grow and manage their practice with ease.
        </p>
        
        <div className={styles.pillContainer}>
          {PILLS.map((p) => (
            <div key={p} className={styles.pill}>
              <span className={styles.dot} /> {p}
            </div>
          ))}
        </div>

        <Image
          src="/images/zennotes-ai.png"
          alt="Therapist using Zenspace on laptop"
          width={1200}
          height={1000}
          style={{
            // aspectRatio: "1200 / 628",
            // objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
            margin: "2rem auto",
            display: "block",
            border: "1px solid var(--green-200)",
            borderRadius: "12px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
          }}
          
          
          className={styles.heroImage}
        />
        <div className={styles.ctaGroup}>
          <Button brand="notes">Start My 10 Free Notes</Button>
          <p className={styles.meta}>✓ HIPAA Compliant & Zero-Knowledge Security</p>
        </div>
      </div>
    </section>
  );
}
