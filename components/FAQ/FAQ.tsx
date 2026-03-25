// components/ui/FAQ/FAQ.tsx
'use client';
import { useState } from 'react';
import styles from './FAQ.module.scss';

interface FAQProps {
  title?: string;
  items: string[][]; // Matches your [question, answer] array format
  brand?: 'notes' | 'match' | 'parent';
}

export default function FAQ({ title = "Frequently Asked Questions", items, brand = 'parent' }: FAQProps) {
  const [selIdx, setIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setIndex(selIdx === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection} data-brand={brand}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.list}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`${styles.item} ${selIdx === idx ? styles.open : ''}`}
              onClick={() => toggle(idx)}
            >
              <div className={styles.top}>
                <h3 className={styles.question}>{item[0]}</h3>
                <span className={styles.icon}>{selIdx === idx ? "−" : "+"}</span>
              </div>
              
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  <p>{item[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
