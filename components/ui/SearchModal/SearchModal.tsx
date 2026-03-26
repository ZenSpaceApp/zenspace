// components/ui/SearchModal/SearchModal.tsx
'use client';
import { useState } from 'react';
import styles from './SearchModal.module.scss';

interface Therapist {
  id: string;
  name: string;
  specialty: string;
  insurance: string;
  bio: string;
  // photo: string; // Optional: URL to therapist's photo
}

export default function SearchModal({ isOpen, onClose, THERAPISTS } : { isOpen: boolean; onClose: () => void; THERAPISTS: Therapist[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* 1. Pinned Filter Bar */}
        <header className={styles.pinnedHeader}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search specialty, name..." />
            <button className={styles.filterBtn}>Filters</button>
            <button onClick={onClose} className={styles.closeBtn}>✕</button>
          </div>
        </header>

        {/* 2. Results List (Accordion) */}
        <div className={styles.resultsList}>
          {THERAPISTS.map((t) => (
            <div 
              key={t.id} 
              className={`${styles.resultRow} ${expandedId === t.id ? styles.open : ''}`}
              onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}
            >
              <div className={styles.rowHeader}>
                {/* <img src={t.photo} className={styles.avatar} /> */}
                <div className={styles.summary}>
                  <h4>{t.name}</h4>
                  <p>{t.specialty} • {t.insurance}</p>
                </div>
                <span className={styles.icon}>{expandedId === t.id ? '−' : '+'}</span>
              </div>
              
              <div className={styles.rowBody}>
                <p className={styles.bio}>{t.bio}</p>
                <button className={styles.bookBtn}>View Full Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
