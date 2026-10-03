import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { wordmark, legalName, email, phone, phoneHref, whatsappHref, location, navigation } from '../../config/site';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Reveal } from '../Reveal/Reveal';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ hideCta = false }) {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) skipLink.focus();
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top CTA band */}
        {!hideCta && (
          <Reveal className={styles.ctaBand}>
            <h2 className={styles.ctaTitle}>Have a business problem worth solving?</h2>
            <Button to="/contact" variant="primary" size="lg" arrow>
              Start a Project
            </Button>
          </Reveal>
        )}

        {/* Middle Grid */}
        <div className={styles.middleGrid}>
          {/* Column 1 */}
          <div className={styles.colDescription}>
            <div className={styles.footerLogoWrap}>
              <Logo variant="full" size={88} linkToHome />
            </div>
            <p className={styles.descText}>
              An AI-native software studio in Vadodara, India, building custom software, AI agents and digital systems.
            </p>
          </div>

          {/* Column 2 */}
          <div className={styles.colNav}>
            <span className={`label ${styles.colLabel}`}>NAVIGATE</span>
            <ul className={styles.linkList}>
              {navigation.footer.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.colContact}>
            <span className={`label ${styles.colLabel}`}>CONTACT</span>
            <ul className={styles.linkList}>
              <li>
                <a href={`mailto:${email}`} className={styles.footerLink}>
                  {email}
                </a>
              </li>
              <li>
                <a href={phoneHref} className={styles.footerLink}>
                  {phone}
                </a>
              </li>
              <li>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  WhatsApp
                </a>
              </li>
              <li className={styles.locationText}>{location.display}</li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <Reveal y={30} className={styles.giantWordmarkWrap}>
          <div className={styles.giantWordmark} aria-hidden="true">
            {wordmark}
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <span className={`label ${styles.copyright}`}>
            © {CURRENT_YEAR} {legalName}
          </span>

          <button
            type="button"
            className={styles.backToTopBtn}
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <span className="label">BACK TO TOP</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
