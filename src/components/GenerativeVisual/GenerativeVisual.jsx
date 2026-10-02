import styles from './GenerativeVisual.module.css';

/**
 * GenerativeVisual — SVG abstract fallback visuals when images are missing or fail to load.
 * Variants match house style: dark field (or paper field in light theme via CSS tokens),
 * thin geometric lines, glowing nodes, signal-orange (#FF5A1F) accent.
 */
export default function GenerativeVisual({
  variant = 'generic',
  className = '',
  'aria-label': ariaLabel = 'Abstract technical illustration',
}) {
  const renderSvgContent = () => {
    switch (variant) {
      case 'ai-agents':
        return (
          <g>
            <circle cx="400" cy="225" r="160" stroke="var(--border-strong)" strokeWidth="1" fill="none" strokeDasharray="6 6" className={styles.rotateSlow} />
            <circle cx="400" cy="225" r="90" stroke="var(--border)" strokeWidth="1.5" fill="none" />
            <circle cx="400" cy="225" r="45" fill="var(--accent)" className={styles.pulse} />
            <circle cx="240" cy="225" r="12" fill="var(--muted)" />
            <circle cx="560" cy="225" r="12" fill="var(--muted)" />
            <circle cx="400" cy="65" r="12" fill="var(--muted)" />
            <line x1="240" y1="225" x2="560" y2="225" stroke="var(--border-strong)" strokeWidth="1" />
            <line x1="400" y1="65" x2="400" y2="385" stroke="var(--border-strong)" strokeWidth="1" />
          </g>
        );

      case 'software':
        return (
          <g>
            <rect x="200" y="100" width="400" height="250" rx="12" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="240" y="140" width="160" height="170" rx="8" fill="var(--card)" stroke="var(--accent)" strokeWidth="1.5" />
            <rect x="420" y="140" width="140" height="20" rx="4" fill="var(--muted)" opacity="0.4" />
            <rect x="420" y="175" width="100" height="15" rx="4" fill="var(--muted)" opacity="0.3" />
            <rect x="420" y="200" width="120" height="15" rx="4" fill="var(--muted)" opacity="0.3" />
            <circle cx="270" cy="170" r="6" fill="var(--accent)" />
          </g>
        );

      case 'mobile':
        return (
          <g>
            <rect x="280" y="70" width="100" height="200" rx="18" stroke="var(--border-strong)" strokeWidth="2" fill="var(--surface)" />
            <rect x="420" y="180" width="100" height="200" rx="18" stroke="var(--accent)" strokeWidth="2" fill="var(--surface)" />
            <line x1="305" y1="90" x2="355" y2="90" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" />
            <line x1="445" y1="200" x2="495" y2="200" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="470" cy="270" r="20" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
          </g>
        );

      case 'cloud':
        return (
          <g>
            <rect x="250" y="90" width="300" height="60" rx="10" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="250" y="185" width="300" height="60" rx="10" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="250" y="280" width="300" height="60" rx="10" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <circle cx="285" cy="120" r="5" fill="var(--muted)" />
            <circle cx="285" cy="215" r="5" fill="var(--accent)" className={styles.pulse} />
            <circle cx="285" cy="310" r="5" fill="var(--muted)" />
            <line x1="400" y1="150" x2="400" y2="185" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="400" y1="245" x2="400" y2="280" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 4" />
          </g>
        );

      case 'transformation':
        return (
          <g>
            {/* Scattered left */}
            <rect x="180" y="120" width="30" height="30" rx="4" fill="var(--muted)" opacity="0.3" transform="rotate(15 180 120)" />
            <rect x="240" y="260" width="40" height="40" rx="4" fill="var(--muted)" opacity="0.3" transform="rotate(-25 240 260)" />
            {/* Structured grid right */}
            <rect x="480" y="120" width="50" height="50" rx="8" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="550" y="120" width="50" height="50" rx="8" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="480" y="190" width="50" height="50" rx="8" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="550" y="190" width="50" height="50" rx="8" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
            {/* Connecting flow */}
            <path d="M 300 225 C 380 225, 400 215, 460 215" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          </g>
        );

      case 'mvp':
        return (
          <g>
            <polygon points="250,320 280,180 370,180 340,320" fill="var(--surface)" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="4 4" />
            <polygon points="460,320 490,140 590,140 560,320" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="525" cy="230" r="18" fill="var(--accent)" className={styles.pulse} />
          </g>
        );

      case 'ecommerce':
        return (
          <g>
            <rect x="260" y="150" width="120" height="140" rx="10" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="420" y="110" width="140" height="180" rx="10" stroke="var(--accent)" strokeWidth="2" fill="var(--surface)" />
            <path d="M 450 110 C 450 70, 530 70, 530 110" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <circle cx="490" cy="200" r="16" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
          </g>
        );

      case 'industry':
      case 'manufacturing':
        return (
          <g>
            <path d="M 180 320 L 260 200 L 340 320" stroke="var(--border-strong)" strokeWidth="2" fill="none" />
            <path d="M 320 320 L 420 150 L 520 320" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <circle cx="420" cy="150" r="8" fill="var(--accent)" className={styles.pulse} />
            <line x1="150" y1="320" x2="650" y2="320" stroke="var(--border-strong)" strokeWidth="2" />
          </g>
        );

      case 'healthcare':
        return (
          <g>
            <rect x="250" y="120" width="300" height="210" rx="14" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <path d="M 280 225 L 360 225 L 380 170 L 410 270 L 430 210 L 450 225 L 520 225" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        );

      case 'realestate':
        return (
          <g>
            <rect x="250" y="100" width="120" height="220" stroke="var(--border-strong)" strokeWidth="1.5" fill="var(--surface)" />
            <rect x="400" y="60" width="150" height="260" stroke="var(--accent)" strokeWidth="2" fill="var(--surface)" />
            <rect x="430" y="90" width="30" height="40" fill="var(--accent)" opacity="0.8" />
            <rect x="480" y="90" width="30" height="40" fill="var(--muted)" opacity="0.3" />
            <rect x="430" y="160" width="30" height="40" fill="var(--muted)" opacity="0.3" />
            <rect x="480" y="160" width="30" height="40" fill="var(--accent)" opacity="0.8" />
          </g>
        );

      case 'project':
      case 'intro':
      case 'cta':
      case 'generic':
      default:
        return (
          <g>
            <circle cx="400" cy="225" r="120" stroke="var(--border-strong)" strokeWidth="1.5" fill="none" />
            <circle cx="400" cy="225" r="60" stroke="var(--accent)" strokeWidth="2" fill="var(--accent-soft)" />
            <circle cx="400" cy="225" r="8" fill="var(--accent)" className={styles.pulse} />
            <line x1="200" y1="225" x2="600" y2="225" stroke="var(--border)" strokeWidth="1" strokeDasharray="8 8" />
          </g>
        );
    }
  };

  return (
    <svg
      className={`${styles.visual} ${className}`}
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={ariaLabel}
    >
      <rect width="100%" height="100%" fill="var(--surface)" />
      {renderSvgContent()}
    </svg>
  );
}
