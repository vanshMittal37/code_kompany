import styles from './PlaceholderPage.module.css';

/**
 * PlaceholderPage — temporary placeholder used for pages not yet built.
 * Will be replaced in later phases.
 */
export default function PlaceholderPage({ title, note }) {
  return (
    <section className={styles.page}>
      <h1 className="display">{title}</h1>
      <p className="muted">{note || 'Coming in a later phase.'}</p>
    </section>
  );
}
