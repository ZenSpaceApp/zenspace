import styles from './MatchResults.module.scss';
import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { MOCK_THERAPISTS } from '@/mock-data/therapists';

const MatchResults = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className={styles.resultArea}>
      {MOCK_THERAPISTS.map((t) => (
        // Inside your SearchModal mapping
        <div key={t.id} className={`${styles.row} ${expandedId === t.id ? styles.open : ''}`}>
          {/* 1. THE GLANCE (Always Visible) */}
          <div className={styles.rowHeader}>
            <div className={styles.primaryInfo}>
              {t.isLive && <span className={styles.livePulse} />}

              <div className={styles.textGroup}>
                <h4 className={styles.name}>{t.name}</h4>
                <p className={styles.specialty}>{t.specialty}</p>
                {/* The "Hook" - just enough to create curiosity */}
                <p className={styles.bioSnippet}>"{t.bio.substring(0, 65)}..."</p>
              </div>

            </div>
                  
            <div className={styles.metaInfo}>
              <span className={styles.insuranceTag}>{t.insurance[0]} +{t.insurance.length - 1}</span>

              <div className={styles.ratingGroup}>
                <div className={styles.stars}>
                  <span className={styles.star}>★</span>
                  <span className={styles.score}>{t.rating ?? t.rate}</span>
                </div>
                <span className={styles.sourceLabel}>via {t.reviewSource}</span>
              </div>

              {/* THE TRIGGER: Only this button expands the row */}
              <button
                className={styles.expandBtn}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents clicking the whole row
                  setExpandedId(expandedId === t.id ? null : t.id);
                }}
              >
                {expandedId === t.id ? 'Close' : 'View & Book'}
              </button>
            </div>
          </div>

          {/* 2. THE DEEP DIVE (Conditional Expansion) */}
          <div className={styles.expansionPanel}>
            <div className={styles.panelContent}>
              <p className={styles.fullBio}>{t.bio}</p>
              <div className={styles.tags}>
                {t.tags?.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
              </div>
                    
              <div className={styles.finalActions}>
                <Button brand="match">Schedule Intro Session</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
   );
}
    
export default MatchResults;