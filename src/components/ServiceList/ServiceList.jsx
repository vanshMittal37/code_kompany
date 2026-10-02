import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';
import SectionHeader from '../SectionHeader/SectionHeader';
import ImageBlock from '../ImageBlock/ImageBlock';
import Tag from '../Tag/Tag';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './ServiceList.module.css';

export default function ServiceList({ showHeader = true, className = '' }) {
  const [activeSlug, setActiveSlug] = useState('ai-agents');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const activeService = services.find((s) => s.slug === activeSlug) ?? services[0];

  return (
    <section className={`section ${styles.section} ${className}`}>
      <div className="container">
        {showHeader && (
          <SectionHeader
            index="02"
            label="SERVICES"
            title="What we build."
            intro="Custom software, intelligent AI agents and robust digital systems tailored to your operation."
            link={{ text: 'All services', to: '/services' }}
            align="split"
          />
        )}

        {isDesktop ? (
          /* Desktop Interactive 7 / 5 Layout */
          <div className={styles.desktopLayout}>
            {/* Left 7 Columns: Service Accordion List */}
            <div className={styles.leftList}>
              {services.map((s) => {
                const isActive = s.slug === activeSlug;
                return (
                  <div
                    key={s.slug}
                    className={`${styles.rowWrap} ${isActive ? styles.rowActive : ''}`}
                    onMouseEnter={() => setActiveSlug(s.slug)}
                    onFocus={() => setActiveSlug(s.slug)}
                  >
                    <Link to={`/services/${s.slug}`} className={styles.rowLink}>
                      <div className={styles.rowHeader}>
                        <span className={`label ${styles.number} ${isActive ? styles.accentNum : ''}`}>
                          {s.number}
                        </span>

                        <div className={styles.titleWrap}>
                          <h3 className={styles.serviceName}>{s.name}</h3>
                          {s.featured && <Tag variant="accent">FLAGSHIP</Tag>}
                        </div>

                        <ArrowUpRight
                          size={24}
                          className={`${styles.arrow} ${isActive ? styles.accentArrow : ''}`}
                        />
                      </div>

                      {/* Expandable details */}
                      <div className={styles.expandArea}>
                        <div className={styles.expandInner}>
                          <p className={styles.oneLiner}>{s.oneLiner}</p>
                          <div className={styles.tagGroup}>
                            {s.tags.map((t) => (
                              <Tag key={t} variant="muted">
                                {t}
                              </Tag>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right 5 Columns: Sticky Image Frame */}
            <div className={styles.rightSticky}>
              <div className={styles.stickyFrame}>
                <ImageBlock
                  key={activeService.imageKey}
                  imageKey={activeService.imageKey}
                  ratio="4/5"
                  reveal={false}
                  framed="always"
                  caption={`${activeService.number} / 08 — ${activeService.name}`}
                  className={styles.stickyImage}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Tablet & Mobile Stacked Cards */
          <div className={styles.mobileGrid}>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`${styles.mobileCard} ${s.featured ? styles.featuredCard : ''}`}
              >
                <ImageBlock
                  imageKey={s.imageKey}
                  ratio={s.featured ? '4/5' : '4/3'}
                  reveal={false}
                  framed="never"
                />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className="label">{s.number}</span>
                    {s.featured && <Tag variant="accent">FLAGSHIP</Tag>}
                  </div>
                  <h3 className={styles.cardTitle}>{s.name}</h3>
                  <p className={styles.cardText}>{s.oneLiner}</p>
                  <span className={styles.cardLinkText}>
                    Explore service <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
