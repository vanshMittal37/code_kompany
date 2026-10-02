import { Link } from 'react-router-dom';
import Seo from '../components/Seo/Seo';
import { Reveal } from '../components/Reveal/Reveal';
import Button from '../components/Button/Button';
import GenerativeVisual from '../components/GenerativeVisual/GenerativeVisual';
import styles from './NotFound.module.css';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function NotFound() {
  return (
    <>
      <Seo
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Head back to the Code Kompany homepage."
        path="/404"
        noindex
      />

      <section className={styles.page}>
        {/* Background generative visual */}
        <div className={styles.bgVisual} aria-hidden="true">
          <GenerativeVisual variant="generic" />
        </div>

        <div className={`container ${styles.content}`}>
          {/* Giant 404 */}
          <Reveal className={styles.codeWrap}>
            <span className={styles.code} aria-hidden="true">404</span>
          </Reveal>

          {/* Heading */}
          <Reveal delay={80}>
            <h1 className={styles.title}>Page not found.</h1>
          </Reveal>

          {/* Body */}
          <Reveal delay={160}>
            <p className={styles.body}>
              The page you're looking for doesn't exist, was moved, or had its URL changed.
            </p>
          </Reveal>

          {/* Primary CTA */}
          <Reveal delay={240} className={styles.cta}>
            <Button to="/" variant="primary" size="lg" arrow magnetic>
              Back to home
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Start a project
            </Button>
          </Reveal>

          {/* Quick nav */}
          <Reveal delay={320} className={styles.quickNav}>
            <span className={`label ${styles.quickLabel}`}>Or try one of these:</span>
            <nav aria-label="Quick navigation links">
              <ul className={styles.quickList}>
                {QUICK_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={styles.quickLink}>
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>
    </>
  );
}
