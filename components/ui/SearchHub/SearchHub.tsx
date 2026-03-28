'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import styles from './SearchHub.module.scss';
import Button from '@/components/ui/Button/Button';

// Your Mock Data
const MOCK_THERAPISTS = [
  { id: 1, name: "Dr. Sarah Chen", specialty: "Anxiety & Burnout", insurance: "Blue Cross", isLive: true, bio: "Specializing in tech-industry pressures..." },
  { id: 2, name: "Marcus Rivera", specialty: "Grief Support", insurance: "Aetna", isLive: true, bio: "Helping you find the granola path back..." },
];

// const zenTransition = {
//   type: "spring",
//   stiffness: 100,   // Lower = softer/slower
//   damping: 20,      // Higher = less "bounce"
//   mass: 1,
//   duration: 0.8     // Total time for the "unfold"
// };

// export default function SearchHub() {
//   const [status, setStatus] = useState<'idle' | 'active'>('idle');
//   const [expandedId, setExpandedId] = useState<number | null>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Close on Escape key
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setStatus('idle');
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   const isActive = status === 'active';

//   return (
//     <div className={`${styles.hubWrapper} ${isActive ? styles.isActive : ''}`}>
//       {/* 1. THE MIST OVERLAY (Only visible when active) */}
//       <AnimatePresence>
//         {isActive && (
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             exit={{ opacity: 0 }}
//             className={styles.overlay} 
//             onClick={() => setStatus('idle')} 
//           />
//         )}
//       </AnimatePresence>

//       <div className={styles.hubContainer}>
//         {/* 2. THE MORPHING SEARCH BAR */}
//         <header className={styles.header}>
//           <div className={styles.searchPill}>
//             <div className={styles.inputSection}>
//               <label className={isActive ? styles.showLabel : ''}>Find Clarity</label>
//               <input 
//                 ref={inputRef}
//                 onFocus={() => setStatus('active')}
//                 placeholder="Search specialty, name, or insurance..." 
//               />
//             </div>
            
//             {isActive && <div className={styles.divider} />}

//             <div className={styles.actionSection}>
//               <button className={styles.searchBtn}>
//                 <span className={styles.pulse} />
//                 {isActive ? 'Search' : ''}
//               </button>
//               {isActive && (
//                 <button className={styles.closeBtn} onClick={() => setStatus('idle')}>✕</button>
//               )}
//             </div>
//           </div>
//         </header>

//         {/* 3. THE RESULTS (Accordion Logic) */}
//         <AnimatePresence>
//           {isActive && (
//             <motion.main 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               className={styles.resultsArea}
//             >
          //     {MOCK_THERAPISTS.map((t) => (
          //       <article key={t.id} className={`${styles.row} ${expandedId === t.id ? styles.open : ''}`}>
          //         <div className={styles.rowHeader}>
          //           <div className={styles.info}>
          //             {t.isLive && <span className={styles.liveDot} />}
          //             <b>{t.name}</b>
          //             <span>{t.specialty} • {t.insurance}</span>
          //           </div>
          //           <button 
          //             className={styles.viewBtn}
          //             onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}
          //           >
          //             {expandedId === t.id ? 'Close' : 'View & Book'}
          //           </button>
          //         </div>

          //         <div className={styles.expansion}>
          //           <div className={styles.innerContent}>
          //             <p>{t.bio}</p>
          //             <Button brand="match" size="small">Schedule Intro</Button>
          //           </div>
          //         </div>
          //       </article>
          //     ))}
          //   </motion.main>
          // )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
// components/ui/SearchHub/SearchHub.tsx





export default function SearchHub() {
  const [status, setStatus] = useState<'idle' | 'active'>('idle');
  const isActive = status === 'active';

  
  const [expandedId, setExpandedId] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <LayoutGroup>
      <motion.div 
        layout // This triggers the "Paper Lamp" smooth expansion
        className={`${styles.hubWrapper} ${isActive ? styles.isActive : ''}`}
        transition={{ type: 'tween', stiffness: 300, damping: 30, duration: 0.3 }}
      >
        <div className={styles.hubContainer}>
          {/* Header wraps the Search Bar */}
          <motion.header layout className={styles.header}>
            <motion.div layout className={styles.searchPill}>
              <input 
                ref={inputRef}
                onFocus={() => setStatus('active')}
                placeholder="Search specialty, name, or insurance..." 
              />
            </motion.div>
          </motion.header>

          {/* Results appear underneath */}
           <AnimatePresence>
            {isActive && (
              <motion.main 
                key="results"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: 'auto', 
                  opacity: 1,
                  transition: {
                    height: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }, // Slow 'Zen' ease
                    opacity: { duration: 0.4, delay: 0.2 }
                  }
                }}
                exit={{ height: 0, opacity: 0 }}
                className={styles.resultsArea}
                style={{ overflow: 'hidden' }} // Critical: prevents content from popping
              >
              {MOCK_THERAPISTS.map((t) => (
                <article key={t.id} className={`${styles.row} ${expandedId === t.id ? styles.open : ''}`}>
                  <div className={styles.rowHeader}>
                    <div className={styles.info}>
                      {t.isLive && <span className={styles.liveDot} />}
                      <b>{t.name}</b>
                      <span>{t.specialty} • {t.insurance}</span>
                    </div>
                    <button 
                      className={styles.viewBtn}
                      onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}
                    >
                      {expandedId === t.id ? 'Close' : 'View & Book'}
                    </button>
                  </div>

                  <div className={styles.expansion}>
                    <div className={styles.innerContent}>
                      <p>{t.bio}</p>
                      {/* <Button brand="match" size="small">Schedule Intro</Button> */}
                    </div>
                  </div>
                </article>
              ))}
              </motion.main>
              )}
          </AnimatePresence>
            
        </div>
      </motion.div>
    </LayoutGroup>
  );
}
