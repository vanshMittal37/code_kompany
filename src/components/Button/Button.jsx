import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useMediaQuery, HOVER_CAPABLE } from '../../hooks/useMediaQuery';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  magnetic = false,
  children,
  className = '',
  ...props
}) {
  const btnRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const canHover = useMediaQuery(HOVER_CAPABLE);

  const handleMouseMove = (e) => {
    if (!magnetic || reducedMotion || !canHover || disabled || loading || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) * 0.25;
    const moveY = (e.clientY - centerY) * 0.25;
    const maxMove = 6;
    setTransform({
      x: Math.max(-maxMove, Math.min(maxMove, moveX)),
      y: Math.max(-maxMove, Math.min(maxMove, moveY)),
    });
  };

  const handleMouseLeave = () => {
    if (magnetic) setTransform({ x: 0, y: 0 });
  };

  const isExternal = Boolean(href);
  const isMailtoOrTel = isExternal && (href.startsWith('mailto:') || href.startsWith('tel:'));
  const linkProps = isExternal
    ? {
        href,
        ...(isMailtoOrTel ? {} : { target: '_blank', rel: 'noopener noreferrer' }),
      }
    : {};

  const styleObj =
    magnetic && (transform.x !== 0 || transform.y !== 0)
      ? { transform: `translate3d(${transform.x.toFixed(1)}px, ${transform.y.toFixed(1)}px, 0)` }
      : undefined;

  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading ? (
        <Loader2 className={styles.spinner} size={18} aria-hidden="true" />
      ) : null}
      <span className={styles.label}>{children}</span>
      {arrow && !loading ? (
        <ArrowUpRight className={styles.arrow} size={18} aria-hidden="true" />
      ) : null}
    </>
  );

  if (to && !disabled) {
    return (
      <Link
        ref={btnRef}
        to={to}
        className={combinedClasses}
        style={styleObj}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        ref={btnRef}
        className={combinedClasses}
        style={styleObj}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        {...linkProps}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      className={combinedClasses}
      style={styleObj}
      disabled={disabled || loading}
      aria-busy={loading ? 'true' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
