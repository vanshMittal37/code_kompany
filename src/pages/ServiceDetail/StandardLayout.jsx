import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { getNextService, TOTAL_SERVICES } from '../../data/services';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import GenerativeVisual from '../../components/GenerativeVisual/GenerativeVisual';
import Tag from '../../components/Tag/Tag';
import Button from '../../components/Button/Button';
import OfferingsGrid from '../../components/OfferingsGrid/OfferingsGrid';
import TierCards from '../../components/TierCards/TierCards';
import WorkflowList from '../../components/WorkflowList/WorkflowList';
import CTASection from '../../components/CTASection/CTASection';
import { Reveal, SplitReveal } from '../../components/Reveal/Reveal';
import { useScroll } from '../../hooks/useScroll';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './StandardLayout.module.css';

export default function StandardLayout({ service }) {
  const nextService = getNextService(service.slug);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Dynamic section numbers calculation
  let counter = 1;
  const problemIndex = String(counter++).padStart(2, '0');
  const buildIndex = String(counter++).padStart(2, '0');
  const offeringsIndex = service.offerings ? String(counter++).padStart(2, '0') : null;
  const workflowsIndex = service.workflows ? String(counter++).padStart(2, '0') : null;
  const valueIndex = String(counter++).padStart(2, '0');
  const capIndex = String(counter++).padStart(2, '0');
  const techIndex = String(counter++).padStart(2, '0');
  const useCasesIndex = String(counter++).padStart(2, '0');
  const ctaIndex = String(counter++).padStart(2, '0');

  // Problem scroll word highlight
  const problemRef = useRef(null);
  const [problemProgress, setProblemProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion || !problemRef.current) return;
    const rect = problemRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const totalDist = rect.height + vh * 0.5;
    const currentPos = vh - rect.top;
    const p = Math.max(0, Math.min(1, currentPos / totalDist));
    setProblemProgress(p);
  }, [scrollY, reducedMotion]);

  // Use cases carousel scroll state
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkCarouselScroll();
  }, [service.slug]);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const offset = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  const problemWords = (service.problem || '').split(' ');

  return (
    <div className={styles.standardPage}>
      {/* 1. Breadcrumb + Service Number */}
      <section className={styles.topBarSection}>
        <div className={`container ${styles.topBarInner}`}>
          <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: service.name }]} />
          <span className="label">
            SERVICE {service.number} / {String(TOTAL_SERVICES).padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* 2. Headline block */}
      <section className={styles.headlineSection}>
        <div className="container">
          {service.displayHeadline ? (
            <SplitReveal as="h1" className="display">
              {service.displayHeadline}
            </SplitReveal>
          ) : (
            <SplitReveal as="h1" className="display">
              {service.headline}
            </SplitReveal>
          )}
        </div>
      </section>

      {/* 3. Intro Row */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <p className={styles.introText}>{service.intro}</p>
              {service.introExtra && (
                <p className={styles.introExtra}>{service.introExtra}</p>
              )}
            </div>
            <div className={styles.introRight}>
              <div className={styles.tagGroup}>
                {service.tags.map((t) => (
                  <Tag key={t} variant="muted">
                    {t}
                  </Tag>
                ))}
              </div>
              <Button to={`/contact?service=${service.slug}`} variant="primary" size="lg" arrow magnetic>
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Large Visual */}
      <section className={styles.visualSection}>
        <div className="container">
          <ImageBlock
            imageKey={service.imageKey}
            ratio="21/9"
            priority
            parallax
            framed="always"
          />
        </div>
      </section>

      {/* 5. The Problem */}
      <section ref={problemRef} className={`section ${styles.problemSection}`}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>({problemIndex}) — THE PROBLEM</Reveal>

          <div className={styles.quoteBlock}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.problemText} aria-label={service.problem}>
              {problemWords.map((word, idx) => {
                const wordThreshold = (idx + 1) / problemWords.length;
                const isHighlighted =
                  reducedMotion || problemProgress >= wordThreshold * 0.8;
                return (
                  <span
                    key={idx}
                    className={[
                      styles.word,
                      isHighlighted ? styles.highlighted : styles.dimmed,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-hidden="true"
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </blockquote>
          </div>
        </div>
      </section>

      {/* 6. What We Build */}
      <section className={`section ${styles.buildSection}`}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>
            ({buildIndex}) — {service.buildLabel ? service.buildLabel.toUpperCase() : 'WHAT WE BUILD'}
          </Reveal>

          <div className={styles.buildGrid}>
            {service.build.map((item, idx) => (
              <Reveal key={idx} stagger={idx} className={styles.buildCard}>
                <span className={`label ${styles.cardNum}`}>0{idx + 1}</span>
                <h3 className={styles.cardText}>{item}</h3>
              </Reveal>
            ))}
          </div>

          {service.buildApproach && (
            <Reveal delay={120}>
              <p className={styles.buildApproach}>{service.buildApproach}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* 7. Ways We Can Help / Offerings / Tiers */}
      {service.offerings && (
        service.offeringsType === 'tiers' ? (
          <TierCards
            tiers={service.offerings}
            sectionIndex={offeringsIndex}
            contactService={service.slug}
          />
        ) : (
          <OfferingsGrid
            offerings={service.offerings}
            sectionIndex={offeringsIndex}
          />
        )
      )}

      {/* 8. Workflow Automation (What we automate - AI only) */}
      {service.workflows && (
        <WorkflowList
          workflows={service.workflows}
          sectionIndex={workflowsIndex}
          closingLine="Free your team for strategic work while automation handles the routine."
        />
      )}

      {/* 9. Business Value */}
      <section className={`section ${styles.valueSection}`}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>
            ({valueIndex}) — {service.valueLabel ? service.valueLabel.toUpperCase() : 'BUSINESS VALUE'}
          </Reveal>

          <div className={styles.valueList}>
            {service.value.map((item, idx) => (
              <Reveal key={idx} stagger={idx} className={styles.valueRow}>
                <span className={styles.valueStar} aria-hidden="true">
                  ✦
                </span>
                <h2 className={styles.valueText}>{item}</h2>
              </Reveal>
            ))}
          </div>

          {service.valueClosing && (
            <Reveal delay={120}>
              <p className={styles.valueClosing}>{service.valueClosing}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* 10. Capabilities */}
      <section className={`section ${styles.capabilitiesSection}`}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>({capIndex}) — CAPABILITIES</Reveal>

          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((cap, idx) => (
              <Reveal key={idx} stagger={idx} className={styles.capItem}>
                <Check size={18} className={styles.checkIcon} />
                <span className={styles.capText}>{cap}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Vendor-Agnostic Technology Section (Section E) */}
      <section className={`section ${styles.techSection}`}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>
            ({techIndex}) — HOW WE CHOOSE TECHNOLOGY
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.techBigLine}>
              No default stack. We choose tools for your business after discovery.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className={styles.techMutedLine}>
              We're vendor-agnostic — the right technology is the one that fits your needs, budget and team.
            </p>
          </Reveal>

          {service.technologies && service.technologies.length > 0 && (
            <Reveal delay={180} className={styles.techPillRow}>
              {service.technologies.map((tech) => (
                <Tag key={tech} variant="default" className={styles.largePill}>
                  {tech}
                </Tag>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* 12. Use Cases */}
      <section className={`section ${styles.useCasesSection}`}>
        <div className="container">
          <div className={styles.useCasesHeader}>
            <Reveal className={`label ${styles.sectionLabel}`}>({useCasesIndex}) — EXAMPLE USE CASES</Reveal>
            <div className={styles.carouselBtns}>
              <button
                type="button"
                className={styles.carouselBtn}
                disabled={!canScrollLeft}
                onClick={() => scrollCarousel('left')}
                aria-label="Previous use cases"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className={styles.carouselBtn}
                disabled={!canScrollRight}
                onClick={() => scrollCarousel('right')}
                aria-label="Next use cases"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className={styles.useCasesTrack}
            onScroll={checkCarouselScroll}
          >
            {service.useCases.map((uc, idx) => (
              <div key={idx} className={styles.useCaseCard}>
                <span className={`label ${styles.ucNum}`}>EXAMPLE 0{idx + 1}</span>
                <h3 className={styles.ucText}>{uc}</h3>
                <div className={styles.ucVisualWrap} aria-hidden="true">
                  <GenerativeVisual
                    variant={service.imageKey}
                    aria-label=""
                    className={styles.ucVisual}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA + Next Service */}
      <CTASection
        label={`(${ctaIndex}) — START`}
        title={`Ready to talk about ${service.shortName}?`}
        text="Tell us what you want to improve. We'll take it from there."
        primary={{ text: 'Start a Project', to: `/contact?service=${service.slug}` }}
        secondary={{
          text: 'Book a Consultation',
          to: `/contact?intent=consultation&service=${service.slug}`,
        }}
        imageKey="ctaRibbon"
        showWhatsApp
      />

      {/* Next Service Full-Width Card */}
      <section className={styles.nextServiceSection}>
        <div className="container">
          <Link to={`/services/${nextService.slug}`} className={styles.nextCard}>
            <div className={styles.nextMeta}>
              <span className="label">NEXT SERVICE</span>
              <span className="label">
                {nextService.number} / {String(TOTAL_SERVICES).padStart(2, '0')}
              </span>
            </div>
            <h2 className={styles.nextTitle}>{nextService.name}</h2>
            <div className={styles.nextVisualWrap}>
              <ImageBlock
                imageKey={nextService.imageKey}
                ratio="21/9"
                reveal={false}
                hoverZoom
                framed="never"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
