import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { wordmark, navigation } from '../../config/site';
import { useScroll } from '../../hooks/useScroll';
import { useMediaQuery, DESKTOP_BREAK } from '../../hooks/useMediaQuery';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const { scrollY, direction, isPast20 } = useScroll();
  const isDesktop = useMediaQuery(DESKTOP_BREAK);

  // Hide on scroll down past 200px, show on scroll up or menu open
  const isHidden = scrollY > 200 && direction === 'down' && !isMenuOpen;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={[
          styles.header,
          isPast20 ? styles.scrolled : '',
          isHidden ? styles.hidden : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className={styles.headerInner}>
          {/* Left: Brand Logo */}
          <Logo
            variant={isDesktop ? 'horizontal' : 'mark'}
            size={isDesktop ? 36 : 32}
            linkToHome
          />

          {/* Right Side: ThemeToggle -> Desktop Nav (Services, Projects, About) -> Start a Project */}
          <div className={styles.actions}>
            <ThemeToggle />

            {isDesktop && (
              <nav className={styles.desktopNav} aria-label="Main navigation">
                <ul className={styles.navList}>
                  {navigation.main.map(({ label, href }) => (
                    <li key={href}>
                      <NavLink
                        to={href}
                        className={({ isActive }) =>
                          `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {isDesktop ? (
              <Button to="/contact" variant="primary" size="sm" arrow>
                Start a Project
              </Button>
            ) : (
              <button
                ref={menuBtnRef}
                type="button"
                className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnOpen : ''}`}
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className={styles.menuLine} />
                <span className={styles.menuLine} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {!isDesktop && (
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMenu}
          menuBtnRef={menuBtnRef}
        />
      )}
    </>
  );
}
