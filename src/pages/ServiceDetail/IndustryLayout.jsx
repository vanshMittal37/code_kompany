import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { getNextService } from '../../data/services';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import Tag from '../../components/Tag/Tag';
import Button from '../../components/Button/Button';
import CTASection from '../../components/CTASection/CTASection';
import { Reveal, SplitReveal } from '../../components/Reveal/Reveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './IndustryLayout.module.css';

export default function IndustryLayout({ service }) {
  const [activeChapter, setActiveChapter] = useState('manufacturing');
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const nextService = getNextService(service.slug);

  // Handle direct page load with hash anchor (#manufacturing, #healthcare, #real-estate)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
        }, 150);
      }
    }
  }, [location.hash, reducedMotion]);

  // Track active chapter with IntersectionObserver
  useEffect(() => {
    const chapters = service.chapters.map((ch) => document.getElementById(ch.id)).filter(Boolean);
    if (!chapters.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -40% 0px' }
    );

    chapters.forEach((ch) => observer.observe(ch));
    return () => observer.disconnect();
  }, [service.chapters]);

  const handleChapterClick = (e, id) => {
    e.preventDefault();
    setActiveChapter(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className={styles.industryPage}>
      {/* 1. Header */}
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: service.name }]} />

          <div className={styles.headerTitleWrap}>
            <SplitReveal as="h1" className="display">
              {service.headline}
            </SplitReveal>
            <p className={styles.headerIntro}>{service.intro}</p>
          </div>

          <div className={styles.mainVisualWrap}>
            <ImageBlock
              imageKey={service.imageKey}
              ratio="21/9"
              priority
              parallax
              framed="always"
            />
          </div>
        </div>
      </section>

      {/* 2. Sticky Chapter Nav */}
      <nav aria-label="Industry chapters" className={styles.stickyChapterBar}>
        <div className={`container ${styles.chapterBarInner}`}>
          {service.chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className={`${styles.chapterLink} ${isActive ? styles.chapterActive : ''}`}
                onClick={(e) => handleChapterClick(e, ch.id)}
              >
                <span className="label">{ch.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* 3. Three Chapters */}
      <div className={styles.chaptersContainer}>
        {/* Chapter 1: Manufacturing ERP */}
        {service.chapters[0] && (
          <section id={service.chapters[0].id} className={`section ${styles.chapterSection}`}>
            <div className="container">
              <Reveal className={`label ${styles.chapterLabel}`}>
                {service.chapters[0].label}
              </Reveal>
              <SplitReveal as="h2" className={styles.chapterHeadline}>
                {service.chapters[0].headline}
              </SplitReveal>

              <div className={styles.chapterVisualWide}>
                <ImageBlock
                  imageKey={service.chapters[0].imageKey}
                  ratio="21/9"
                  parallax
                  framed="always"
                />
              </div>

              <div className={styles.featuresGrid8}>
                {service.chapters[0].features.map((feat, idx) => {
                  const isHighlighted = service.chapters[0].highlightedFeatures?.includes(feat);
                  return (
                    <Reveal key={feat} stagger={idx} className={styles.featureCard}>
                      <div className={styles.featureHeader}>
                        <span className="label">0{idx + 1}</span>
                        {isHighlighted && <Tag variant="accent">AI</Tag>}
                      </div>
                      <h3 className={styles.featureName}>{feat}</h3>
                    </Reveal>
                  );
                })}
              </div>

              <div className={styles.chapterCtaWrap}>
                <Button to="/contact?service=industry-solutions" variant="primary" size="md" arrow>
                  Discuss Manufacturing ERP
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Chapter 2: Healthcare Systems (Alternating 2-col layout) */}
        {service.chapters[1] && (
          <section id={service.chapters[1].id} className={`section ${styles.chapterSection} ${styles.altSection}`}>
            <div className="container">
              <div className={styles.chapterTwoCol}>
                <div className={styles.chapterImageCol}>
                  <ImageBlock
                    imageKey={service.chapters[1].imageKey}
                    ratio="4/5"
                    parallax
                    framed="always"
                  />
                </div>

                <div className={styles.chapterContentCol}>
                  <Reveal className={`label ${styles.chapterLabel}`}>
                    {service.chapters[1].label}
                  </Reveal>
                  <SplitReveal as="h2" className={styles.chapterHeadline}>
                    {service.chapters[1].headline}
                  </SplitReveal>

                  <div className={styles.featuresList}>
                    {service.chapters[1].features.map((feat, idx) => (
                      <Reveal key={feat} stagger={idx} className={styles.featureRow}>
                        <Check size={18} className={styles.checkIcon} />
                        <span className={styles.featureRowName}>{feat}</span>
                      </Reveal>
                    ))}
                  </div>

                  <div className={styles.chapterCtaWrapLeft}>
                    <Button to="/contact?service=industry-solutions" variant="primary" size="md" arrow>
                      Discuss Healthcare Systems
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Chapter 3: Real Estate & PropTech */}
        {service.chapters[2] && (
          <section id={service.chapters[2].id} className={`section ${styles.chapterSection}`}>
            <div className="container">
              <Reveal className={`label ${styles.chapterLabel}`}>
                {service.chapters[2].label}
              </Reveal>
              <SplitReveal as="h2" className={styles.chapterHeadline}>
                {service.chapters[2].headline}
              </SplitReveal>

              <div className={styles.chapterVisualWide}>
                <ImageBlock
                  imageKey={service.chapters[2].imageKey}
                  ratio="21/9"
                  parallax
                  framed="always"
                />
              </div>

              <div className={styles.featuresGrid4}>
                {service.chapters[2].features.map((feat, idx) => {
                  const isHighlighted = service.chapters[2].highlightedFeatures?.includes(feat);
                  return (
                    <Reveal key={feat} stagger={idx} className={styles.featureCard}>
                      <div className={styles.featureHeader}>
                        <span className="label">0{idx + 1}</span>
                        {isHighlighted && <Tag variant="accent">AI</Tag>}
                      </div>
                      <h3 className={styles.featureName}>{feat}</h3>
                    </Reveal>
                  );
                })}
              </div>

              <div className={styles.chapterCtaWrap}>
                <Button to="/contact?service=industry-solutions" variant="primary" size="md" arrow>
                  Discuss PropTech Solutions
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* 4. CTASection + Next Service */}
      <CTASection
        label="(04) — START"
        title="Ready to transform your industry operations?"
        text="Let's talk about how tailored software changes your business."
        primary={{ text: 'Start a Project', to: '/contact?service=industry-solutions' }}
        secondary={{ text: 'Book a Consultation', to: '/contact?intent=consultation&service=industry-solutions' }}
        imageKey="ctaRibbon"
        showWhatsApp
      />

      {/* Next Service Loop */}
      <section className={styles.nextServiceSection}>
        <div className="container">
          <Link to={`/services/${nextService.slug}`} className={styles.nextCard}>
            <div className={styles.nextMeta}>
              <span className="label">NEXT SERVICE</span>
              <span className="label">{nextService.number} / 08</span>
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
