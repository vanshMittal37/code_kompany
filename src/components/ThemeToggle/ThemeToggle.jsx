import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const labelText = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggleTheme}
      aria-label={labelText}
      title={labelText}
    >
      <span className={`${styles.iconWrap} ${isDark ? styles.showSun : styles.showMoon}`}>
        <Sun className={styles.sunIcon} size={20} aria-hidden="true" />
        <Moon className={styles.moonIcon} size={20} aria-hidden="true" />
      </span>
    </button>
  );
}
