// components/marketing/CTAZenNotes/CTAZenNotes.tsx
import styles from './CTAZenNotes.module.scss';
import Button from '../../ui/Button/Button';

export default function CTAZenNotes() {
  const benefits = [
    { title: "Ambient Capture", body: "Focus on the patient, not the keyboard." },
    { title: "Instant Synthesis", body: "SOAP notes ready before you leave the room." },
    { title: "Verified Shred", body: "Military-grade data security and HIPAA compliance." }
  ];

  return (
    <section className={`${styles.wrapper} full-bleed--edge`}>
      <div className={styles.inner}>
        <div className={styles.textContent}>
          <h3>Ready to transform your practice?</h3>
          <p className={styles.tagline}>One session. One minute. Done.</p>
          <Button brand="notes" className={styles.mainBtn}>
            Get Early Access
          </Button>
        </div>

        <div className={styles.benefitList}>
          {benefits.map((item, i) => (
            <div key={i} className={styles.benefitItem}>
              <span className={styles.icon}>✓</span>
              <div>
                <b className={styles.benefitTitle}>{item.title}</b>
                <p className={styles.benefitBody}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
