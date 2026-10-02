import AIHub from '../../../components/AIHub/AIHub';
import ImageBlock from '../../../components/ImageBlock/ImageBlock';
import { Reveal, SplitReveal } from '../../../components/Reveal/Reveal';
import Button from '../../../components/Button/Button';
import styles from './AISection.module.css';

export default function AISection() {
  return (
    <section className={`${styles.aiSection} full-bleed`}>
      {/* Background image & dark overlay */}
      <div className={styles.bgWrap} aria-hidden="true">
        <ImageBlock
          imageKey="aiCoreWide"
          ratio="21/9"
          overlay
          parallax
          reveal={false}
          framed="never"
          className={styles.bgImage}
        />
        <div className={styles.darkOverlay} />
      </div>

      <div className={`container ${styles.contentContainer}`}>
        <Reveal className={`label ${styles.labelTag}`} style={{ color: '#8F8D87' }}>
          (03) — AI-NATIVE
        </Reveal>

        <SplitReveal as="h2" className={styles.headline}>
          {['AI That Works', 'While You Sleep.']}
        </SplitReveal>

        <Reveal delay={120} className={styles.sublineWrap}>
          <p className={styles.subline}>
            Agents and automation built into the way your business already runs.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <AIHub />
        </Reveal>

        <Reveal delay={280} className={styles.buttonWrap}>
          <Button to="/services/ai-agents" variant="primary" size="lg" arrow magnetic>
            Explore AI Agents & Automation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
