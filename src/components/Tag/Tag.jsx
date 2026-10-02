import styles from './Tag.module.css';

export default function Tag({
  children,
  variant = 'default', // 'default' | 'accent' | 'muted'
  className = '',
  ...props
}) {
  return (
    <span
      className={`label ${styles.tag} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
