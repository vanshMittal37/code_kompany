import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from '../Reveal/Reveal';
import styles from './OfferingsGrid.module.css';

export default function OfferingsGrid({
  offerings = [],
  sectionIndex = '03',
  title = 'Ways we can help',
  subtitle = '',
}) {
  if (!offerings || offerings.length === 0) return null;

  const colClass = offerings.length === 4 ? styles.grid4 : styles.grid3;

  return (
    <section className={`section ${styles.offeringsSection}`}>
      <div className="container">
        <Reveal className={`label ${styles.sectionLabel}`}>
          ({sectionIndex}) — WAYS WE CAN HELP
        </Reveal>

        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        <div className={`${styles.grid} ${colClass}`}>
          {offerings.map((item, idx) => (
            <Reveal key={item.name} stagger={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`label ${styles.cardNum}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.cardName}>{item.name}</h3>
                {item.line && <p className={styles.cardLine}>{item.line}</p>}
              </div>

              {item.features && item.features.length > 0 && (
                <ul className={styles.featureList}>
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.link && (
                <div className={styles.linkWrap}>
                  <Link to={item.link.to} className={styles.cardLink}>
                    <span>{item.link.text}</span>
                    <ArrowRight size={14} className={styles.linkArrow} />
                  </Link>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
