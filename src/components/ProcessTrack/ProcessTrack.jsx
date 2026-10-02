import { useRef, useState, useEffect } from 'react';
import { processSteps } from '../../data/process';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Reveal } from '../Reveal/Reveal';
import { useScroll } from '../../hooks/useScroll';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './ProcessTrack.module.css';

export default function ProcessTrack({ className = '' }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const { scrollY } = useScroll();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reducedMotion = useReducedMotion();

  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);

  const useHorizontalScroll = isDesktop && !reducedMotion;

  useEffect(() => {
    if (!useHorizontalScroll || !outerRef.current || !trackRef.current) return;

    const outerRect = outerRef.current.getBoundingClientRect();
    const trackWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    const maxScroll = outerRect.height - window.innerHeight;
    const scrollOffset = -outerRect.top;
    const p = Math.max(0, Math.min(1, scrollOffset / maxScroll));

    // Distance to translate X so last card aligns neatly
    const maxTranslate = trackWidth - windowWidth + 60; // 60px padding
    setTranslateX(-p * Math.max(0, maxTranslate));
    setProgress(p);
  }, [scrollY, useHorizontalScroll]);

  return (
    <section
      ref={outerRef}
      className={`${styles.processSection} ${useHorizontalScroll ? styles.pinnedSection : ''} ${className}`}
    >
      <div className="container">
        <SectionHeader
          index="07"
          label="PROCESS"
          title="From first call to scale."
          intro="A structured, transparent engineering process focused on fast iteration and measurable results."
        />
      </div>

      {useHorizontalScroll ? (
        /* Desktop Pinned Horizontal Scroll Track */
        <div className={styles.stickyWindow}>
          <div
            ref={trackRef}
            className={styles.horizontalTrack}
            style={{ transform: `translate3d(${translateX.toFixed(1)}px, 0, 0)` }}
          >
            {processSteps.map((step, idx) => {
              const stepP = (idx + 1) / processSteps.length;
              const isActive = progress >= stepP - 0.2;
              return (
                <div
                  key={step.number}
                  className={`${styles.stepCard} ${isActive ? styles.stepActive : ''}`}
                >
                  <span className={styles.stepNum}>{step.number}</span>
                  <h3 className={styles.stepName}>{step.name}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Progress Bar */}
          <div className={`container ${styles.progressContainer}`}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${(progress * 100).toFixed(1)}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Tablet/Mobile Vertical Timeline */
        <div className={`container ${styles.verticalTimeline}`}>
          <div className={styles.timelineLine} />
          {processSteps.map((step, idx) => (
            <Reveal key={step.number} stagger={idx} className={styles.timelineStep}>
              <div className={styles.dot} />
              <div className={styles.stepContent}>
                <span className={`label ${styles.mobileNum}`}>{step.number}</span>
                <h3 className={styles.mobileName}>{step.name}</h3>
                <p className={styles.mobileDesc}>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
