import { useRef, useState, useEffect } from 'react';
import ImageBlock from '../../../components/ImageBlock/ImageBlock';
import { Reveal } from '../../../components/Reveal/Reveal';
import { useScroll } from '../../../hooks/useScroll';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import styles from './BeliefSection.module.css';

const STATEMENT = 'Technology should fit your business — not force your business to fit the technology.';
const words = STATEMENT.split(' ');

export default function BeliefSection() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    // Calculate 0 to 1 progress while section is in center view
    const totalDist = rect.height + vh * 0.5;
    const currentPos = vh - rect.top;
    const p = Math.max(0, Math.min(1, currentPos / totalDist));
    setProgress(p);
  }, [scrollY, reducedMotion]);

  return (
    <section ref={sectionRef} className={`section ${styles.beliefSection}`}>
      <div className="container">
        <Reveal className={`label ${styles.labelTag}`}>(01) — OUR BELIEF</Reveal>

        <h2 className={`display ${styles.statement}`} aria-label={STATEMENT}>
          {words.map((word, idx) => {
            const wordThreshold = (idx + 1) / words.length;
            const isHighlighted = reducedMotion || progress >= wordThreshold * 0.8;
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
        </h2>
      </div>

      <div className={styles.imageContainer}>
        <ImageBlock
          imageKey="introWide"
          ratio="21/9"
          parallax
          reveal
          framed="never"
          caption="Engineering precision behind every solution we design."
        />
      </div>
    </section>
  );
}
