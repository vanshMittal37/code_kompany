import { allImages, buildSrcSet, getSrc } from '../../data/images';
import styles from './DevImages.module.css';

/**
 * DevImages — development-only image review page.
 * Shows every manifest entry with srcset, key, dimensions, alt text and file size info.
 * This page ONLY renders in development (import.meta.env.DEV).
 * It is excluded from navigation, sitemaps and production builds via routing guard in App.jsx.
 */
export default function DevImages() {
  const entries = Object.entries(allImages);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Image Manifest Review</h1>
        <p className={styles.meta}>
          {entries.length} entries total ·{' '}
          {entries.filter(([, e]) => e.widths?.length > 0).length} with optimised files ·{' '}
          {entries.filter(([, e]) => !e.widths?.length).length} missing
        </p>
        <p className={styles.note}>
          ⚠ Development only — not visible in production. Run <code>npm run images</code> to
          regenerate after adding raw images.
        </p>
      </header>

      <div className={styles.grid}>
        {entries.map(([key, entry]) => {
          const hasSrc = entry.widths?.length > 0;
          const srcset = buildSrcSet(entry);
          const src    = getSrc(entry, 1024);

          return (
            <article key={key} className={`${styles.card} ${!hasSrc ? styles.missing : ''}`}>
              <div className={styles.imgWrap}>
                {hasSrc ? (
                  <img
                    src={src}
                    srcSet={srcset}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    alt={entry.alt}
                    className={styles.img}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className={styles.placeholder} aria-label="Image missing">
                    <span className={styles.missingLabel}>MISSING</span>
                    <span className={styles.fallbackLabel}>fallback: {entry.fallback}</span>
                  </div>
                )}
              </div>

              <div className={styles.info}>
                <code className={styles.key}>{key}</code>

                {hasSrc && (
                  <p className={styles.dims}>
                    {entry.width ?? '?'} × {entry.height ?? '?'}px ·{' '}
                    {entry.aspectRatio ? entry.aspectRatio.toFixed(2) : '?'}:1 ·{' '}
                    widths: [{entry.widths?.join(', ')}]
                  </p>
                )}

                <p className={styles.alt}>{entry.alt}</p>

                <div className={styles.tags}>
                  {entry.focal !== '50% 50%' && (
                    <span className={styles.tag}>focal: {entry.focal}</span>
                  )}
                  <span className={styles.tag}>fallback: {entry.fallback}</span>
                  {entry.lqip && <span className={styles.tag}>✓ LQIP</span>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
