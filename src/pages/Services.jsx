import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { whatsappHref } from '../config/site';
import Seo from '../components/Seo/Seo';
import ImageBlock from '../components/ImageBlock/ImageBlock';
import Tag from '../components/Tag/Tag';
import CTASection from '../components/CTASection/CTASection';
import { Reveal, SplitReveal } from '../components/Reveal/Reveal';
import { useMediaQuery, HOVER_CAPABLE } from '../hooks/useMediaQuery';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './Services.module.css';

const processSteps = [
  'Discover',
  'Define',
  'Design',
  'Build',
  'Launch',
  'Scale',
];

export default function Services() {
  const [activeSlug, setActiveSlug] = useState(null);
  const canHover = useMediaQuery(HOVER_CAPABLE);
  const reducedMotion = useReducedMotion();

  const cardRef = useRef(null);
  const posRef  = useRef({ currX: 0, currY: 0, targetX: 0, targetY: 0 });
  const rafRef  = useRef(null);

  const activeService = services.find((s) => s.slug === activeSlug) ?? null;

  // Cursor follow lerp for floating service image
  useEffect(() => {
    if (!canHover || reducedMotion) return;

    const onPointerMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
    };

    const loop = () => {
      const { currX, currY, targetX, targetY } = posRef.current;
      const nextX = currX + (targetX - currX) * 0.15;
      const nextY = currY + (targetY - currY) * 0.15;

      posRef.current.currX = nextX;
      posRef.current.currY = nextY;

      if (cardRef.current) {
        cardRef.current.style.transform = `translate3d(${nextX.toFixed(1)}px, ${nextY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [canHover, reducedMotion]);

  return (
    <>
      <Seo
        title="Services — AI Agents, Custom Software, Apps & Cloud | Code Kompany"
        description="AI agents and automation, custom software, mobile apps, cloud, digital transformation, MVPs, e-commerce and industry solutions — built around your business."
        path="/services"
      />

      <div className={styles.servicesPage}>
        {/* Section 1 — Hero */}
        <section className={`section ${styles.heroSection}`}>
          <div className="container">
            <Reveal className={`label ${styles.topLabel}`}>
              (SERVICES) — 8 CAPABILITIES
            </Reveal>

            <SplitReveal as="h1" className="display">
              {['Technology built', 'around your business.']}
            </SplitReveal>

            <Reveal delay={120} className={styles.introWrap}>
              <p className={styles.introText}>
                From AI agents to full digital systems — designed for how your business actually runs.
              </p>
            </Reveal>

            {/* Wide 3-image collage strip */}
            <Reveal delay={200} className={styles.collageStrip}>
              <div className={styles.collageColLeft}>
                <ImageBlock
                  imageKey="aiAgents"
                  ratio="4/3"
                  parallax
                  reveal={false}
                  framed="always"
                />
              </div>
              <div className={styles.collageColCenter}>
                <ImageBlock
                  imageKey="mobileApp"
                  ratio="4/5"
                  parallax
                  reveal={false}
                  framed="always"
                />
              </div>
              <div className={styles.collageColRight}>
                <ImageBlock
                  imageKey="cloudSolutions"
                  ratio="4/3"
                  parallax
                  reveal={false}
                  framed="always"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 2 — Editorial Service Index */}
        <section className={`section ${styles.indexSection}`}>
          <div className="container">
            {canHover ? (
              /* Desktop Typographic Rows with Floating Lerp Image */
              <div
                className={styles.desktopIndexList}
                onMouseLeave={() => setActiveSlug(null)}
              >
                {services.map((s) => {
                  const isActive = s.slug === activeSlug;
                  const isDimmed = activeSlug !== null && !isActive;

                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className={[
                        styles.indexRow,
                        isActive ? styles.rowActive : '',
                        isDimmed ? styles.rowDimmed : '',
                        s.featured ? styles.featuredRow : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onMouseEnter={() => setActiveSlug(s.slug)}
                      onFocus={() => setActiveSlug(s.slug)}
                    >
                      <span className={`label ${styles.rowNum} ${s.featured ? styles.accentNum : ''}`}>
                        {s.number}
                      </span>

                      <div className={styles.rowMiddle}>
                        <div className={styles.rowTitleWrap}>
                          <h2 className={styles.rowTitle}>{s.name}</h2>
                          {s.featured && <Tag variant="accent">FLAGSHIP</Tag>}
                        </div>
                        <p className={styles.rowOneLiner}>{s.oneLiner}</p>
                      </div>

                      <div className={styles.rowRight}>
                        <div className={styles.rowTags}>
                          {s.tags.map((t) => (
                            <Tag key={t} variant="muted">
                              {t}
                            </Tag>
                          ))}
                        </div>
                        <span className={`${styles.rowArrowBtn} ${isActive ? styles.arrowActive : ''}`}>
                          <ArrowUpRight size={22} />
                        </span>
                      </div>
                    </Link>
                  );
                })}

                {/* Floating Cursor-Follow Image Preview */}
                <div
                  ref={cardRef}
                  className={`${styles.floatingCard} ${activeService ? styles.cardActive : ''}`}
                  aria-hidden="true"
                >
                  {activeService && (
                    <ImageBlock
                      key={activeService.imageKey}
                      imageKey={activeService.imageKey}
                      ratio="4/5"
                      reveal={false}
                      framed="always"
                    />
                  )}
                </div>
              </div>
            ) : (
              /* Mobile Stacked Cards */
              <div className={styles.mobileCardGrid}>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className={`${styles.mobileCard} ${s.featured ? styles.mobileFeaturedCard : ''}`}
                  >
                    <ImageBlock
                      imageKey={s.imageKey}
                      ratio={s.featured ? '4/5' : '16/9'}
                      reveal={false}
                      framed="never"
                    />
                    <div className={styles.mobileCardContent}>
                      <div className={styles.mobileCardHeader}>
                        <span className="label">{s.number}</span>
                        {s.featured && <Tag variant="accent">FLAGSHIP</Tag>}
                      </div>
                      <h2 className={styles.mobileCardTitle}>{s.name}</h2>
                      <p className={styles.mobileCardText}>{s.oneLiner}</p>
                      <span className={styles.mobileLinkText}>
                        View service details <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 3 — How We Work */}
        <section className={`section ${styles.workMethodSection}`}>
          <div className="container">
            <Reveal className={styles.methodTitleWrap}>
              <h2 className={styles.methodTitle}>
                Every engagement starts with your business — not a tech stack.
              </h2>
            </Reveal>

            <Reveal delay={120} className={styles.methodChipsRow}>
              {processSteps.map((step, idx) => (
                <div key={step} className={styles.chipStep}>
                  <span className={`label ${styles.chip}`}>{step}</span>
                  {idx < processSteps.length - 1 && (
                    <ArrowRight size={14} className={styles.chipArrow} />
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal delay={200} className={styles.methodLinkWrap}>
              <a href="/#process" className={styles.methodLink}>
                See how we work →
              </a>
            </Reveal>
          </div>
        </section>

        {/* Section 4 — CTASection */}
        <CTASection
          label="(GET STARTED)"
          title="Not sure which service fits?"
          text="Tell us the problem. We'll suggest the right approach."
          primary={{ text: 'Start a Project', to: '/contact' }}
          secondary={{ text: 'Talk on WhatsApp', to: whatsappHref }}
          imageKey="ctaRibbon"
          showWhatsApp={false}
        />
      </div>
    </>
  );
}
