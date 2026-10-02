import { whatsappHref } from '../../config/site';
import Button from '../Button/Button';
import ImageBlock from '../ImageBlock/ImageBlock';
import { Reveal } from '../Reveal/Reveal';
import styles from './CTASection.module.css';

export default function CTASection({
  label = 'GET IN TOUCH',
  title = 'Ready to build something extraordinary?',
  text = 'Let’s discuss your product goals and discover how AI-native engineering can accelerate your growth.',
  primary = { text: 'Start a Project', to: '/contact' },
  secondary = { text: 'Explore Services', to: '/services' },
  imageKey = 'ctaRibbon',
  showWhatsApp = true,
  className = '',
}) {
  return (
    <section className={`${styles.ctaSection} full-bleed ${className}`}>
      {/* Background ImageBlock with overlay & parallax */}
      {imageKey && (
        <div className={styles.bgWrap} aria-hidden="true">
          <ImageBlock
            imageKey={imageKey}
            ratio="21/9"
            overlay
            parallax
            reveal={false}
            framed="never"
            alt=""
            className={styles.bgImage}
          />
          <div className={styles.extraOverlay} />
        </div>
      )}

      <div className={`container ${styles.contentContainer}`}>
        {label && <Reveal className={`label ${styles.labelTag}`}>{label}</Reveal>}

        {title && (
          <Reveal delay={80} className={styles.titleWrap}>
            <h2 className={styles.title}>{title}</h2>
          </Reveal>
        )}

        {text && (
          <Reveal delay={160} className={styles.textWrap}>
            <p className={styles.text}>{text}</p>
          </Reveal>
        )}

        <Reveal delay={240} className={styles.buttonRow}>
          {primary && (
            <Button to={primary.to} variant="primary" size="lg" arrow magnetic>
              {primary.text}
            </Button>
          )}

          {secondary && (
            <Button to={secondary.to} variant="secondary" size="lg">
              {secondary.text}
            </Button>
          )}
        </Reveal>

        {showWhatsApp && (
          <Reveal delay={300} className={styles.waWrap}>
            <span className="muted">Prefer instant messaging? </span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waLink}
            >
              Chat on WhatsApp →
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
