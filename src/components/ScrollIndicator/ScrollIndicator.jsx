import { useScroll } from '../../hooks/useScroll';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator({ className = '' }) {
  const { scrollY } = useScroll();
  const isHidden = scrollY > 80;

  return (
    <div
      className={`${styles.indicator} ${isHidden ? styles.hidden : ''} ${className}`}
      aria-hidden="true"
    >
      <span className={styles.line}>
        <span className={styles.dot} />
      </span>
      <span className={`label ${styles.text}`}>SCROLL</span>
    </div>
  );
}
