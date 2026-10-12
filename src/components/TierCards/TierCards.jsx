import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Tag from '../Tag/Tag';
import { Reveal } from '../Reveal/Reveal';
import styles from './TierCards.module.css';

export default function TierCards({
  tiers = [],
  sectionIndex = '03',
  sectionLabel = 'CHOOSE YOUR FIT',
  title = 'Choose your fit',
  subtitle = '',
  contactService = '',
}) {
  if (!tiers || tiers.length === 0) return null;

  return (
    <section className={`section ${styles.tierSection}`}>
      <div className="container">
        <Reveal className={`label ${styles.sectionLabel}`}>
          ({sectionIndex}) — {sectionLabel}
        </Reveal>

        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        {/* Mobile Swipe Hint */}
        <div className={`label ${styles.swipeHint}`}>Swipe →</div>

        {/* 3-column desktop grid / horizontal scroll-snap on mobile */}
        <div className={styles.track}>
          {tiers.map((tier, idx) => {
            const isFlagship = Boolean(tier.flagship);
            const linkHref = tier.link || (contactService ? `/contact?service=${contactService}` : '/contact');

            return (
              <Reveal
                key={tier.name}
                stagger={idx}
                className={`${styles.card} ${isFlagship ? styles.flagshipCard : ''}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.badgeRow}>
                    <span className={`label ${styles.tierTierLabel}`}>{tier.tierLabel || tier.label}</span>
                    {isFlagship && <Tag variant="accent">FLAGSHIP</Tag>}
                  </div>
                  <h3 className={styles.cardName}>{tier.name}</h3>
                  {tier.line && <p className={styles.cardLine}>{tier.line}</p>}
                </div>

                {tier.features && tier.features.length > 0 && (
                  <ul className={styles.featureList}>
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        <Check size={16} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className={styles.footerWrap}>
                  <Link to={linkHref} className={styles.discussLink}>
                    <span>Discuss this</span>
                    <ArrowRight size={14} className={styles.arrowIcon} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
