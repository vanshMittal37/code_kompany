import styles from './StyleCheck.module.css';

/**
 * StyleCheck — temporary design system preview.
 * Shows all type scales, colours, borders, cards and buttons.
 * REMOVE THIS COMPONENT in Phase 4 when real Home content is built.
 */
export default function StyleCheck() {
  return (
    <section className={styles.wrapper} aria-label="Design system preview">
      <div className={styles.inner}>
        <p className="label">⚠ Design System Preview — Remove in Phase 4</p>

        {/* Typography scale */}
        <div className={styles.block}>
          <p className="label">Typography</p>
          <p className="display" style={{ marginBottom: '0.5em' }}>Display Scale</p>
          <h1 style={{ marginBottom: '0.4em' }}>Heading 1 Scale</h1>
          <h2 style={{ marginBottom: '0.4em' }}>Heading 2 Scale</h2>
          <h3 style={{ marginBottom: '0.4em' }}>Heading 3 Scale</h3>
          <p style={{ marginBottom: '0.4em' }}>Body text — The quick brown fox jumps over the lazy dog. AI-native software studio building serious technology.</p>
          <p className="label">Label / Mono — CODE KOMPANY · VADODARA, INDIA</p>
        </div>

        {/* Colour swatches */}
        <div className={styles.block}>
          <p className="label">Colours</p>
          <div className={styles.swatches}>
            <div className={styles.swatch} style={{ background: 'var(--background)', border: '1px solid var(--border-strong)' }}>
              <span>--background</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--surface)' }}>
              <span>--surface</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--card)' }}>
              <span>--card</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--accent)' }}>
              <span style={{ color: 'var(--accent-contrast)' }}>--accent</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
              <span>--accent-soft</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--foreground)' }}>
              <span style={{ color: 'var(--background)' }}>--foreground</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--muted)' }}>
              <span>--muted</span>
            </div>
          </div>
        </div>

        {/* Card + Border samples */}
        <div className={styles.block}>
          <p className="label">Card &amp; Border</p>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <p className="label">Card surface</p>
              <p>Background uses <code>--card</code>. Border uses <code>--border</code>. Box shadow uses <code>--shadow</code>.</p>
            </div>
            <div className={styles.card} style={{ borderColor: 'var(--border-strong)' }}>
              <p className="label">Strong border</p>
              <p>Uses <code>--border-strong</code>.</p>
            </div>
            <div className={styles.card} style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }}>
              <p className="label">Accent card</p>
              <p>Accent soft background with accent border.</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.block}>
          <p className="label">Buttons</p>
          <div className={styles.btnRow}>
            <button className={styles.btnPrimary} type="button">
              Primary Button
            </button>
            <button className={styles.btnSecondary} type="button">
              Secondary Button
            </button>
            <button className={styles.btnAccent} type="button">
              Accent Button
            </button>
          </div>
        </div>

        {/* Border radius */}
        <div className={styles.block}>
          <p className="label">Border Radius</p>
          <div className={styles.radii}>
            <div className={styles.radius} style={{ borderRadius: 'var(--radius-sm)' }}>sm</div>
            <div className={styles.radius} style={{ borderRadius: 'var(--radius)' }}>base</div>
            <div className={styles.radius} style={{ borderRadius: 'var(--radius-lg)' }}>lg</div>
            <div className={styles.radius} style={{ borderRadius: 'var(--radius-pill)', padding: '0.5rem 1.5rem' }}>pill</div>
          </div>
        </div>
      </div>
    </section>
  );
}
