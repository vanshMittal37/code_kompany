import { useReveal } from '../../hooks/useReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './Reveal.module.css';

export function Reveal({
  as: Component = 'div',
  children,
  delay = 0,
  stagger,
  y = 24,
  className = '',
  ...props
}) {
  const [ref, isVisible] = useReveal({ threshold: 0.15 });
  const reducedMotion = useReducedMotion();

  const computedDelay =
    typeof stagger === 'number' ? stagger * 80 : delay;

  const isRevealed = isVisible || reducedMotion;

  const styleObj = {
    '--reveal-y': `${y}px`,
    '--reveal-delay': `${computedDelay}ms`,
  };

  return (
    <Component
      ref={ref}
      className={[
        styles.reveal,
        isRevealed ? styles.revealed : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={styleObj}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SplitReveal({
  as: Component = 'h2',
  lines = [],
  children,
  className = '',
  ...props
}) {
  const [ref, isVisible] = useReveal({ threshold: 0.15 });
  const reducedMotion = useReducedMotion();

  // Standardize lines: use `lines` prop if provided, else convert children or string lines
  const lineArray =
    lines.length > 0
      ? lines
      : typeof children === 'string'
      ? children.split('\n').filter(Boolean)
      : Array.isArray(children)
      ? children
      : [children];

  const fullText = lineArray.join(' ');
  const isRevealed = isVisible || reducedMotion;

  return (
    <Component
      ref={ref}
      className={`${styles.splitWrapper} ${className}`}
      aria-label={fullText}
      {...props}
    >
      {lineArray.map((line, idx) => (
        <span key={idx} className={styles.lineMask} aria-hidden="true">
          <span
            className={[
              styles.lineContent,
              isRevealed ? styles.lineRevealed : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
