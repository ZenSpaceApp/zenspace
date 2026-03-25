// components/ui/SearchBar/SearchBar.tsx
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchSection}>
        <label>Find</label>
        <input type="text" placeholder="Specialty, name..." />
      </div>
      
      <div className={styles.divider} />

      <div className={styles.searchSection}>
        <label>Insurance</label>
        <input type="text" placeholder="Add provider..." />
      </div>

      <button className={styles.searchButton}>
        <span className={styles.pulse} />
        Search
      </button>
    </div>
  );
}

