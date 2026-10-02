import ImageBlock from '../ImageBlock/ImageBlock';
import styles from './Ticker.module.css';

export default function Ticker({
  items = [],
  images = [],
  speed = 40,
  className = '',
}) {
  if (!items.length) return null;

  const renderItemContent = (item, idx) => {
    const isOutlined = idx % 2 === 1;
    const hasThumb = images.length > 0 && idx > 0 && idx % 2 === 0;
    const imageKey = images[(idx / 2 - 1) % images.length];

    return (
      <span key={idx} className={styles.tickerGroup}>
        <span
          className={[
            styles.tickerText,
            isOutlined ? styles.outlined : styles.solid,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {item}
        </span>

        {hasThumb && imageKey && (
          <span className={styles.thumbWrap}>
            <ImageBlock
              imageKey={imageKey}
              ratio="1/1"
              reveal={false}
              framed="never"
              alt=""
              className={styles.thumbImage}
            />
          </span>
        )}

        <span className={styles.starDot} aria-hidden="true">
          ✦
        </span>
      </span>
    );
  };

  return (
    <section className={`${styles.tickerSection} full-bleed ${className}`}>
      {/* Visually hidden accessibility list */}
      <ul className="visually-hidden">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Animated infinite ticker track */}
      <div className={styles.trackWrapper} aria-hidden="true">
        <div
          className={styles.track}
          style={{ animationDuration: `${speed}s` }}
        >
          <div className={styles.set}>{items.map(renderItemContent)}</div>
          <div className={styles.set}>{items.map(renderItemContent)}</div>
        </div>
      </div>
    </section>
  );
}
