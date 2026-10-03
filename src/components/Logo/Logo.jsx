import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

/**
 * Logo component — uses the real SVG files from /public/brand/
 * so the correct viewBoxes are always honoured and nothing is clipped.
 *
 * Variants:
 *  'mark'       → just the { CO / KO } mark  (logo-mark.svg)
 *  'horizontal' → mark + "CODE KOMPANY" text side-by-side
 *  'full'       → stacked: mark on top, wordmark below (logo-full.svg)
 *
 * The SVGs are black on transparent. A CSS class applies
 * filter:invert() in dark mode so they always contrast correctly.
 */
export default function Logo({
  variant = 'horizontal',
  size = '34px',
  className = '',
  linkToHome = false,
}) {
  const heightVal = typeof size === 'number' ? `${size}px` : size;

  const isAccessible = !linkToHome;
  const imgAlt = isAccessible ? 'Code Kompany' : '';

  const renderContent = () => {
    if (variant === 'mark') {
      return (
        <img
          src="/brand/logo-mark.svg"
          alt={imgAlt}
          aria-hidden={isAccessible ? undefined : 'true'}
          className={styles.logoImg}
          style={{ height: heightVal, width: 'auto' }}
          draggable={false}
        />
      );
    }

    if (variant === 'full') {
      // logo-full.svg is portrait (1465 × 1600): mark stacked above wordmark
      // aspect ratio ≈ 0.916 wide : 1 tall
      return (
        <img
          src="/brand/logo-full.svg"
          alt={imgAlt}
          aria-hidden={isAccessible ? undefined : 'true'}
          className={styles.logoImg}
          style={{ height: heightVal, width: 'auto' }}
          draggable={false}
        />
      );
    }

    // Default: 'horizontal' — mark on left, "CODE KOMPANY" text on right
    return (
      <div className={styles.horizontalWrap} style={{ height: heightVal }}>
        <img
          src="/brand/logo-mark.svg"
          alt=""
          aria-hidden="true"
          className={`${styles.logoImg} ${styles.horizontalMark}`}
          style={{ height: heightVal, width: 'auto' }}
          draggable={false}
        />
        <span className={styles.horizontalText}>
          CODE KOMPANY
        </span>
      </div>
    );
  };

  if (linkToHome) {
    return (
      <Link
        to="/"
        className={`${styles.logoWrap} ${className}`}
        aria-label="Code Kompany — home"
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <div className={`${styles.logoWrap} ${className}`}>
      {renderContent()}
    </div>
  );
}
