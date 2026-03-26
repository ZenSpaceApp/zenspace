// components/marketing/TherapistHero/TherapistHero.tsx
import styles from './TherapistHero.module.scss';
import Button from '@/components/ui/Button/Button';

const PILLS = ["Smart Scheduling", "ZenNotes AI", "Auto-Billing", "Telehealth", "Insurance Sync"];

export default function TherapistHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>The Clinical OS for 2026</h1>
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

        <div className={styles.ctaGroup}>
          <Button brand="notes">Start My 10 Free Notes</Button>
          <p className={styles.meta}>✓ HIPAA Compliant & Zero-Knowledge Security</p>
        </div>
      </div>
    </section>
  );
}
