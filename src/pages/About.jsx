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
  reach,
  tagline,
  founder,
} from '../config/site';
import styles from './About.module.css';

/* ─── 3 Principles ────────────────────────────────────────── */
const PRINCIPLES = [
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
];

/* ─── Why choose Code Kompany ────────────────────────────── */
const WHY_CHOOSE = [
  {
    title: 'Industry focus',
    desc: 'Manufacturing, healthcare, real estate and digital commerce.',
  },
  {
    title: 'End-to-end solutions',
    desc: 'From first consultation to deployment and ongoing support.',
  },
  {
    title: 'Scalable architecture',
    desc: 'Solutions designed to grow with your business.',
  },
  {
    title: 'Modern technology',
    desc: 'Current frameworks, cloud platforms and AI capabilities.',
  },
  {
    title: 'Client-centric approach',
    desc: 'We listen, adapt and deliver.',
  },
  {
    title: 'Transparent communication',
    desc: 'Regular updates, clear timelines and realistic expectations.',
  },
  {
    title: 'Fair, transparent pricing',
    desc: 'Clear scope and pricing agreed before work starts.',
  },
];

/* ─── All 9 Service capabilities ─────────────────────────── */
const CAPABILITIES = [
  'AI Agents & Automation',
  'Software Development',
  'Website Development',
  'Mobile App Development',
  'Cloud Solutions',
  'Digital Transformation',
  'MVP Development',
  'E-Commerce Solutions',
  'Industry Solutions',
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={`${brandName} is an AI-native software studio based in Vadodara, India. We build custom software, AI agents, and websites. Here's who we are.`}
        path="/about"
      />

      {/* ── 1. Hero ────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal className={`label ${styles.eyebrow}`}>ABOUT US</Reveal>
          <SplitReveal as="h1" className={styles.heroTitle}>
            {`An AI-native studio\nbuilt for serious work.`}
          </SplitReveal>
          <Reveal delay={120}>
            <p className={styles.heroTagline}>{tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Definition section ──────────────────────────── */}
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
                  We are a focused studio working on business-critical software. Our clients are businesses — manufacturers,
                  healthcare operators, real estate developers, retailers, and startups — who need software that
                  genuinely works, built around their processes.
                </p>
              </Reveal>
              <Reveal delay={240} className={styles.locationChip}>
                <span className="label">📍 {reach}</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission block (large text, word-reveal) ─────── */}
      <section className={styles.missionSection}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>(MISSION)</Reveal>
          <SplitReveal as="blockquote" className={styles.missionQuote}>
            Our mission is to bridge the gap between vision and execution — helping startups, small businesses and established enterprises use technology to optimise operations, improve customer experiences and grow sustainably.
          </SplitReveal>
        </div>
      </section>

      {/* ── 4. An honest start block ────────────────────────── */}
      <section className={styles.honestSection}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>(AN HONEST START)</Reveal>
          <Reveal delay={80}>
            <p className={styles.honestText}>
              We're a young studio, so instead of a long client list, we show you exactly how we work — from discovery to launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Full-bleed mindset visual ────────────────────── */}
      <section className={`${styles.mindsetSection} full-bleed`}>
        <ImageBlock
          imageKey="aboutMindset"
          ratio="21/9"
          overlay
          parallax
          framed="never"
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

      {/* ── 6. Approach / 3 Principles + Vendor-agnostic line ── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>HOW WE WORK</Reveal>
          <SplitReveal as="h2" className={styles.sectionTitle}>
            {`Principles we don't\ncompromise on.`}
          </SplitReveal>

          <div className={styles.valuesGrid}>
            {PRINCIPLES.map((v, i) => (
              <Reveal key={v.title} stagger={i} className={styles.valueCard}>
                <span className={`label ${styles.valueNumber}`}>0{i + 1}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <p className={styles.vendorNote}>
              No default stack. We choose technology after discovery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 7. Why Choose Code Kompany ──────────────────────── */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>(WHY CHOOSE US)</Reveal>
          <SplitReveal as="h2" className={styles.sectionTitle}>
            Why choose Code Kompany
          </SplitReveal>

          <div className={styles.whyChooseList}>
            {WHY_CHOOSE.map((item, idx) => (
              <Reveal key={item.title} stagger={idx} className={styles.whyChooseItem}>
                <div className={styles.whyChooseTitle}>
                  <span className={styles.accentMarker}>✦</span>
                  <span>{item.title}</span>
                </div>
                <div className={styles.whyChooseDesc}>
                  {item.desc}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Founder Block ────────────────────────────────── */}
      <section className={styles.founderSection}>
        <div className="container">
          <Reveal className={`label ${styles.sectionLabel}`}>(LEADERSHIP)</Reveal>
          <Reveal delay={80}>
            <h2 className={styles.founderName}>{founder.name}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={`label ${styles.founderRole}`}>{founder.role}</p>
          </Reveal>
          <Reveal delay={160} className={styles.founderLinkWrap}>
            <a href={`mailto:${email}`} className={styles.founderEmailLink}>
              Write to Brij →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 9. Capabilities list (9 services) ───────────────── */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.capabilitiesGrid}>
            <Reveal className={styles.capLeft}>
              <span className={`label ${styles.sectionLabel}`}>WHAT WE BUILD</span>
              <h2 className={styles.capTitle}>Our capabilities.</h2>
              <p className={styles.capIntro}>
                Nine service areas, all connected by the same goal: helping
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

      {/* ── 10. Contact strip ───────────────────────────────── */}
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

      {/* ── 11. CTA ─────────────────────────────────────────── */}
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
