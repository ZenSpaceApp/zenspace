import Image from 'next/image';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.scss';

import { useEffect, useState } from 'react';
import MatchResults from '../MatchResults/MatchResults';

export default function Hero() {

const [expanded, setExpanded] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : 'unset';
  }, [expanded]);

  // On search submit or input change:
  function handleSearch() {
    setExpanded(true);
  }
  
  return (
    <section className={` ${styles.hero} full-bleed--edge`}> 
      {/* 1. The Zen Garden Background */}
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
      <>
        {expanded ? (
          <div className={[styles.glassCard, expanded ? styles.expanded : ''].join(' ')}>
            <div className={[styles.wrapper, expanded ? styles.expanded : ''].join(' ')}>  
              <div className={styles.resultsHeader}>
                <div
                  className={styles.closeButton}
                  onClick={() => setExpanded(false)}>
                  X
                </div>
              <SearchBar onSearch={handleSearch}/>
              </div>
              <div className={styles.divider} />    
              <div className={styles.matchResults}>
              {/* This is where the MatchResults component goes */}
                <p className={styles.matchCount}>7 therapists found</p>
                {/* Map over your therapist data here */}
                <MatchResults />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.glassCard }>
            <h1>Therapists available in real-time.</h1>            
            <SearchBar onSearch={handleSearch}/>
          </div>
        )}
      </>
    </section>  
  );
}
