import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '../../../data/industries';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ImageBlock from '../../../components/ImageBlock/ImageBlock';
import { useMediaQuery, HOVER_CAPABLE } from '../../../hooks/useMediaQuery';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import styles from './IndustriesSection.module.css';

export default function IndustriesSection() {
  const [activeId, setActiveId] = useState(null);
  const canHover = useMediaQuery(HOVER_CAPABLE);
  const reducedMotion = useReducedMotion();

  const cardRef = useRef(null);
  const posRef  = useRef({ currX: 0, currY: 0, targetX: 0, targetY: 0, vx: 0 });
  const rafRef  = useRef(null);

  const activeIndustry = industries.find((i) => i.id === activeId) ?? null;

  // Lerp cursor follow & rotation
  useEffect(() => {
    if (!canHover || reducedMotion) return;

    const onPointerMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
    };

    const loop = () => {
      const { currX, currY, targetX, targetY } = posRef.current;
      const vx = (targetX - currX) * 0.15;
      const nextX = currX + vx;
      const nextY = currY + (targetY - currY) * 0.15;

      posRef.current.currX = nextX;
      posRef.current.currY = nextY;
      posRef.current.vx = vx;

      if (cardRef.current) {
        // Clamp rotation between -6deg and 6deg based on velocity
        const rot = Math.max(-6, Math.min(6, vx * 0.4));
        cardRef.current.style.transform = `translate3d(${nextX.toFixed(1)}px, ${nextY.toFixed(1)}px, 0) translate(-50%, -50%) rotate(${rot.toFixed(1)}deg)`;
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
    <section className={`section ${styles.industriesSection}`}>
      <div className="container">
        <SectionHeader
          index="05"
          label="INDUSTRIES"
          title="Built for the way your industry works."
          intro="Deep domain architecture tailored for manufacturing, healthcare, real estate, e-commerce and scaling startups."
        />

        {canHover ? (
          /* Desktop Typographic List with Floating Cursor Card */
          <div
            className={styles.desktopList}
            onMouseLeave={() => setActiveId(null)}
          >
            {industries.map((ind, idx) => {
              const isActive = ind.id === activeId;
              const isDimmed = activeId !== null && !isActive;

              return (
                <Link
                  key={ind.id}
                  to={ind.to}
                  className={[
                    styles.industryRow,
                    isActive ? styles.rowActive : '',
                    isDimmed ? styles.rowDimmed : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onMouseEnter={() => setActiveId(ind.id)}
                  onFocus={() => setActiveId(ind.id)}
                >
                  <span className={`label ${styles.rowNum}`}>0{idx + 1}</span>
                  <span className={styles.rowTitle}>{ind.name}</span>
                  <ArrowUpRight
                    size={36}
                    className={`${styles.rowArrow} ${isActive ? styles.rowArrowActive : ''}`}
                  />
                </Link>
              );
            })}

            {/* Floating Image Preview Card */}
            <div
              ref={cardRef}
              className={`${styles.floatingCard} ${activeIndustry ? styles.cardActive : ''}`}
              aria-hidden="true"
            >
              {activeIndustry && (
                <ImageBlock
                  key={activeIndustry.imageKey}
                  imageKey={activeIndustry.imageKey}
                  ratio="4/5"
                  reveal={false}
                  framed="always"
                />
              )}
            </div>
          </div>
        ) : (
          /* Mobile / Touch Horizontal Carousel */
          <div className={styles.mobileCarouselWrap}>
            <div className={`label ${styles.swipeHint}`}>Swipe →</div>
            <div className={styles.carouselTrack}>
              {industries.map((ind) => (
                <Link key={ind.id} to={ind.to} className={styles.carouselCard}>
                  <ImageBlock
                    imageKey={ind.imageKey}
                    ratio="4/5"
                    reveal={false}
                    overlay
                    framed="never"
                  />
                  <div className={styles.carouselContent}>
                    <span className={styles.carouselTitle}>{ind.name}</span>
                    <ArrowUpRight size={20} className={styles.carouselArrow} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
