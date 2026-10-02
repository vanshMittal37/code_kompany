import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { email, phone, phoneHref, whatsappHref, navigation } from '../../config/site';
import Button from '../Button/Button';
import ImageBlock from '../ImageBlock/ImageBlock';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './MobileMenu.module.css';

const menuLinks = [
  { label: 'Home', href: '/', num: '01' },
  ...navigation.main.map((item, i) => ({
    label: item.label,
    href: item.href,
    num: `0${i + 2}`,
  })),
  { label: 'Contact', href: '/contact', num: '05' },
];

export default function MobileMenu({ isOpen, onClose, menuBtnRef }) {
  const modalRef = useRef(null);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  // Close on route change
  useEffect(() => {
    if (isOpen) onClose();
  }, [location.pathname, isOpen, onClose]);

  // Trap focus & lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const focusables = modalRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusables && focusables.length > 0) {
      focusables[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        menuBtnRef?.current?.focus();
      }

      if (e.key === 'Tab' && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, menuBtnRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      id="mobile-menu"
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <div className={styles.inner}>
        {/* Navigation list */}
        <nav aria-label="Mobile main navigation">
          <ul className={styles.linkList}>
            {menuLinks.map((item, idx) => (
              <li
                key={item.href}
                className={styles.linkItem}
                style={{ transitionDelay: reducedMotion ? '0ms' : `${idx * 60}ms` }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.activeLink : ''}`
                  }
                >
                  <span className={styles.num}>{item.num}</span>
                  <span className={styles.label}>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Thumbnail preview row */}
        <div className={styles.thumbRow} aria-hidden="true">
          <NavLink to="/services/ai-agents" className={styles.thumbLink}>
            <ImageBlock imageKey="aiAgents" ratio="1/1" reveal={false} framed="never" alt="" />
          </NavLink>
          <NavLink to="/services/mobile-app-development" className={styles.thumbLink}>
            <ImageBlock imageKey="mobileApp" ratio="1/1" reveal={false} framed="never" alt="" />
          </NavLink>
          <NavLink to="/services/cloud-solutions" className={styles.thumbLink}>
            <ImageBlock imageKey="cloudSolutions" ratio="1/1" reveal={false} framed="never" alt="" />
          </NavLink>
        </div>

        {/* Contact info & CTA at bottom */}
        <div className={styles.bottomBar}>
          <div className={styles.contactInfo}>
            <a href={`mailto:${email}`} className={styles.infoLink}>{email}</a>
            <a href={phoneHref} className={styles.infoLink}>{phone}</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
              WhatsApp
            </a>
          </div>
          <Button to="/contact" variant="primary" size="lg" arrow className={styles.ctaBtn}>
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}
