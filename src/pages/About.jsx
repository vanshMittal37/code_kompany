import Seo from '../components/Seo/Seo';
import { SplitReveal, Reveal } from '../components/Reveal/Reveal';
import ImageBlock from '../components/ImageBlock/ImageBlock';
import Button from '../components/Button/Button';
import CTASection from '../components/CTASection/CTASection';
import {
  brandName,
  description,
  email,
  whatsappHref,
  location,
} from '../config/site';
import styles from './About.module.css';

/* ─── Stated values (copy only — never invent facts) ─────── */
const VALUES = [
  {
    title: 'AI-native by design',
    body: "We don't retrofit AI as a feature. Every system we build is designed with automation and intelligence at its foundation.",
  },
  {
    title: 'Engineering rigour',
    body: 'Clean architecture, secure code, and thoughtful system design — because the details determine whether software lasts.',
  },
  {
    title: 'Honest by default',
    body: "We say what's possible, what isn't, and what the trade-offs are. No inflated promises, no vanity metrics.",
  },
  {
    title: 'Outcomes, not outputs',
    body: 'We care whether your business actually improves. Software is a means, not the end.',
  },
];

/* ─── What we work with (factual capabilities) ───────────── */
const CAPABILITIES = [
  'AI Agents & Automation',
  'Custom Software Development',
  'Mobile Applications',
  'Cloud Infrastructure',
  'Digital Transformation',
  'MVP Engineering',
  'E-Commerce Systems',
  'Industry-Specific Platforms',
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={`${brandName} is an AI-native software studio based in Vadodara, India. We build custom software, AI agents, and websites. Here's who we are.`}
        path="/about"
      />

      {/* ── Opening statement ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal className={`label ${styles.eyebrow}`}>ABOUT US</Reveal>
          <SplitReveal as="h1" className={styles.heroTitle}>
            {`An AI-native studio\nbuilt for serious work.`}
          </SplitReveal>
        </div>
      </section>

      {/* ── Definition section ────────────────────────────── */}
      <section className={styles.definition}>
        <div className="container">
          <div className={styles.definitionGrid}>
            {/* Left: large visual */}
            <Reveal className={styles.studioImageWrap}>
              <ImageBlock
                imageKey="aboutStudio"
                ratio="4/3"
                hoverZoom
                framed="auto"
                alt="Code Kompany studio environment"
              />
            </Reveal>

            {/* Right: text */}
            <div className={styles.definitionText}>
              <Reveal className={`label ${styles.sectionLabel}`}>WHO WE ARE</Reveal>
              <Reveal delay={80}>
                <p className={styles.defStatement}>
                  {description}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className={styles.defBody}>
                  We are a small, focused team. We work on one problem at a time and
                  we work on it properly. Our clients are businesses — manufacturers,
                  healthcare operators, retailers, and startups — who need software that
                  genuinely works, not presentations about software.
                </p>
              </Reveal>
              <Reveal delay={240} className={styles.locationChip}>
                <span className="label">📍 {location.display}</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-bleed mindset image ───────────────────────── */}
      <section className={`${styles.mindsetSection} full-bleed`}>
        <ImageBlock
          imageKey="aboutMindset"
          ratio="21/9"
          overlay
          parallax
          framed="never"
          alt="Abstract representation of AI-native engineering philosophy"
          className={styles.mindsetImage}
        />
        <div className={`container ${styles.mindsetOverlay}`}>
          <Reveal className={styles.mindsetQuote}>
            <blockquote>
              "We don't outsource thinking to templates.<br />
              We engineer the right solution."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>HOW WE WORK</Reveal>
          <SplitReveal as="h2" className={styles.sectionTitle}>
            {`Principles we don't\ncompromise on.`}
          </SplitReveal>

          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} stagger={i} className={styles.valueCard}>
                <span className={`label ${styles.valueNumber}`}>0{i + 1}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities list ─────────────────────────────── */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.capabilitiesGrid}>
            <Reveal className={styles.capLeft}>
              <span className={`label ${styles.sectionLabel}`}>WHAT WE BUILD</span>
              <h2 className={styles.capTitle}>Our capabilities.</h2>
              <p className={styles.capIntro}>
                Eight service areas, all connected by the same goal: helping
                businesses operate more intelligently through well-built software.
              </p>
              <Button to="/services" variant="secondary" arrow>
                See all services
              </Button>
            </Reveal>

            <ul className={styles.capList}>
              {CAPABILITIES.map((cap, i) => (
                <Reveal key={cap} as="li" stagger={i} className={styles.capItem}>
                  <span className={styles.capIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{cap}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact strip ─────────────────────────────────── */}
      <section className={styles.contactStrip}>
        <div className="container">
          <Reveal className={styles.contactRow}>
            <span className={`label ${styles.sectionLabel}`}>GET IN TOUCH</span>
            <a
              href={`mailto:${email}`}
              className={styles.emailLink}
              aria-label={`Send email to ${email}`}
            >
              {email}
            </a>
          </Reveal>
          <Reveal delay={80} className={styles.waRow}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waLink}
            >
              Chat on WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTASection
        label="WORK WITH US"
        title="Ready to build something that works?"
        text="Tell us about your project. We'll tell you exactly how we'd approach it."
        primary={{ text: 'Start a Project', to: '/contact' }}
        secondary={{ text: 'See Our Services', to: '/services' }}
      />
    </>
  );
}
