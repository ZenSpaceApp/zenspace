

import styles from './Waveform.module.scss';

const WaveformAnim = () => {
  // Bar heights — varied to look like a natural audio waveform
  const bars = [3, 6, 10, 16, 22, 28, 22, 32, 18, 28, 14, 24, 32, 20, 28, 14, 22, 32, 18, 24, 10, 16, 6, 3];

  return (
    <svg
      className={styles.waveformIcon}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {bars.map((h, i) => {
        const x = i * 5 + 2.5;
        const y = (40 - h) / 2;
        return (
          <rect
            key={i}
            className={styles.waveformBar}
            x={x - 1}
            y={y}
            width={2}
            height={h}
            rx={1}
            style={{ animationDelay: `${i * 0.06}s` }}
          />
        );
      })}
    </svg>
  );
}

export default WaveformAnim;