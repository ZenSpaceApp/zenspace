// components/marketing/CTAHome/CTAHome.tsx
import styles from './CTAHome.module.scss';
import Button from '../../ui/Button/Button';

export default function CTAHome() {
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.content}>
        <h3>One Platform. Two Ways to Heal.</h3>
        <p className={styles.subtitle}>
          Whether you&apos;re seeking clarity or providing care, 
          the Zenspace sanctuary is open.
        </p>

        <div className={styles.buttonGroup}>
          {/* Client Path: The Marketplace */}
          <div className={styles.ctaBlock}>
            <p>I need support today.</p>
            <Button brand="match">
              Find My Therapist
            </Button>
          </div>

          <div className={styles.divider} />

          {/* Therapist Path: The Clinical OS */}
          <div className={styles.ctaBlock}>
            <p>I want to grow my practice.</p>
            <Button brand="notes">
              Join as a Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
