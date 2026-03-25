import Image from 'next/image';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={` ${styles.hero} full-bleed--edge`}> 
      {/* 1. The "Granola" Background */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-zen.jpg" // Your 2560px export
          alt="Zen Garden"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* 2. The Glassmorphism Search Hub */}
      {/* <div className={styles.container}> */}
        <div className={styles.glassCard}>
          <h1>Find Your Match</h1>
          <p>Therapists available in real-time.</p>
          <SearchBar />
        </div>
      {/* </div> */}
    </section>
  );
}
