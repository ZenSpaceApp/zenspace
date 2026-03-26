import Image from 'next/image';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={` ${styles.hero} full-bleed--edge`}> 
      {/* 1. The "Granola" Background */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-zen.webp" // Your 2560px export
          alt="Zen Garden"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* 2. The Glassmorphism Search Hub */}
      {/* <div className={styles.container}> */}
        <div className={styles.glassCard}>
          {/* <h1>Search and Connect</h1> */}
          <h1>Therapists available in real-time.</h1>
          <SearchBar />
        </div>
      {/* </div> */}
    </section>
  );
}
