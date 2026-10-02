import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CursorBadge from './components/CursorBadge/CursorBadge';
import PageTransition from './components/PageTransition/PageTransition';
import styles from './App.module.css';

/* --------------------------------------------------------------------------
   Lazy-loaded pages
   -------------------------------------------------------------------------- */
const Home          = lazy(() => import('./pages/Home'));
const Services      = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects      = lazy(() => import('./pages/Projects'));
const About         = lazy(() => import('./pages/About'));
const Contact       = lazy(() => import('./pages/Contact'));
const NotFound      = lazy(() => import('./pages/NotFound'));

// Dev-only routes — completely excluded from production builds
const DevImages = import.meta.env.DEV
  ? lazy(() => import('./pages/DevImages'))
  : null;
const DevComponents = import.meta.env.DEV
  ? lazy(() => import('./pages/DevComponents'))
  : null;

/* --------------------------------------------------------------------------
   Page loading fallback
   -------------------------------------------------------------------------- */
function PageFallback() {
  return (
    <div className={styles.fallback} aria-live="polite" aria-label="Loading page">
      <span className="label">Loading…</span>
    </div>
  );
}

/* --------------------------------------------------------------------------
   ScrollToTop — scrolls on route change, but respects hash links
   -------------------------------------------------------------------------- */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

/* --------------------------------------------------------------------------
   Main Layout Assembly
   -------------------------------------------------------------------------- */
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Skip-to-content — first focusable element on every page */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Main Navbar & Mobile Menu Overlay */}
      <Navbar />

      {/* Main Page Area */}
      <main id="main" tabIndex={-1} className={styles.mainContent}>
        <Suspense fallback={<PageFallback />}>
          <PageTransition>
            <Routes>
              <Route path="/"               element={<Home />} />
              <Route path="/services"       element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/projects"       element={<Projects />} />
              <Route path="/about"          element={<About />} />
              <Route path="/contact"        element={<Contact />} />

              {/* Dev-only tools — excluded from production */}
              {DevImages && (
                <Route path="/dev/images" element={<DevImages />} />
              )}
              {DevComponents && (
                <Route path="/dev/components" element={<DevComponents />} />
              )}

              <Route path="*"               element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer hideCta={isHome} />

      {/* Interactive Cursor Badge */}
      <CursorBadge />
    </>
  );
}

/* --------------------------------------------------------------------------
   App Root
   -------------------------------------------------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
