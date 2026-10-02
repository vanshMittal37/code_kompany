import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo/Seo';
import { SplitReveal, Reveal } from '../components/Reveal/Reveal';
import ContactForm from '../components/ContactForm/ContactForm';
import { email, whatsappHref, location } from '../config/site';
import styles from './Contact.module.css';

/* ── Contact detail tiles ───────────────────────────────── */
const CONTACT_ITEMS = [
  {
    label: 'EMAIL',
    value: email,
    href: `mailto:${email}`,
    desc: 'For detailed project discussions',
  },
  {
    label: 'WHATSAPP',
    value: '+91 75748 65790',
    href: whatsappHref,
    desc: "Prefer a quick message? We're on WhatsApp.",
    external: true,
  },
  {
    label: 'LOCATION',
    value: location.display,
    href: null,
    desc: 'Serving clients across India and globally',
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preService = searchParams.get('service') || '';

  return (
    <>
      <Seo
        title="Contact"
        description="Start a project with Code Kompany. Tell us what you're building and we'll get back to you within one business day."
        path="/contact"
      />

      {/* ── Page header ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal className={`label ${styles.eyebrow}`}>START A PROJECT</Reveal>
          <SplitReveal as="h1" className={styles.heroTitle}>
            {`Let's build\nsomething serious.`}
          </SplitReveal>
          <Reveal delay={160}>
            <p className={styles.heroIntro}>
              Fill in the form and we'll respond within one business day.
              No sales calls, no automated replies — a real conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main layout: form + sidebar ─────────────────── */}
      <section className={styles.main}>
        <div className="container">
          <div className={styles.layout}>

            {/* Form column */}
            <div className={styles.formCol}>
              <Reveal>
                <ContactForm preService={preService} />
              </Reveal>
            </div>

            {/* Sidebar column */}
            <aside className={styles.sidebar}>
              {/* Contact details */}
              <Reveal className={styles.contactCards}>
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className={styles.contactCard}>
                    <span className={`label ${styles.contactLabel}`}>{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={styles.contactValue}
                        {...(item.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                    <p className={styles.contactDesc}>{item.desc}</p>
                  </div>
                ))}
              </Reveal>

              {/* What to expect */}
              <Reveal delay={120} className={styles.expectBlock}>
                <h2 className={styles.expectTitle}>What happens next</h2>
                <ol className={styles.expectList}>
                  <li className={styles.expectItem}>
                    <span className={styles.expectNum}>01</span>
                    <p>We review your message and match it to the right people on our team.</p>
                  </li>
                  <li className={styles.expectItem}>
                    <span className={styles.expectNum}>02</span>
                    <p>You'll receive a reply within one business day — no automated follow-ups.</p>
                  </li>
                  <li className={styles.expectItem}>
                    <span className={styles.expectNum}>03</span>
                    <p>If it looks like a good fit, we'll schedule a discovery call to scope the work.</p>
                  </li>
                </ol>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
