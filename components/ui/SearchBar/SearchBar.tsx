import Button from '../Button/Button';
import styles from './SearchBar.module.scss';

export default function SearchBar({ onSearch }: { onSearch: () => void }) {
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

      <div className={styles.divider} />

      <div className={styles.searchSection}>
        <label>Gender</label>
        <input type="text" placeholder="Male, Female, Non-binary..." />
      </div>

      <div className={styles.divider} />

      <div className={styles.searchSection}>
        <label>Languages</label>
        <input type="text" placeholder="English, Spanish, French..." />
      </div>
      
      <Button brand="match" onClick={onSearch}>
        <span className={styles.pulse} />
        Search
      </Button>
    </div>
  );
}