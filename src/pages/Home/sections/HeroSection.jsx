import { useEffect, useRef } from 'react';
import HeroPicture from '../../../components/ImageBlock/HeroPicture';
import Button from '../../../components/Button/Button';
import { Reveal, SplitReveal } from '../../../components/Reveal/Reveal';
import ScrollIndicator from '../../../components/ScrollIndicator/ScrollIndicator';
import { useMediaQuery, DESKTOP_BREAK, HOVER_CAPABLE } from '../../../hooks/useMediaQuery';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { useInView } from '../../../hooks/useInView';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const isDesktop = useMediaQuery(DESKTOP_BREAK);
  const canHover  = useMediaQuery(HOVER_CAPABLE);
  const reducedMotion = useReducedMotion();
  const [sectionRef, isInView] = useInView({ threshold: 0 });

  const canvasRef = useRef(null);

  // Subtle ambient interactive node canvas on desktop
  useEffect(() => {
    if (!isDesktop || !canHover || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrame = null;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    // Create 30 gentle nodes
    const nodeCount = 30;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const render = () => {
      if (!isInView || document.hidden) {
        animationFrame = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Move & draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const distToMouse = Math.hypot(n.x - mouseX, n.y - mouseY);
        const isNear = distToMouse < 160;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = isNear ? '#FF5A1F' : 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
      });

      // Connect lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 120) {
            const nearMouse =
              Math.hypot(nodes[i].x - mouseX, nodes[i].y - mouseY) < 160;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nearMouse
              ? `rgba(255, 90, 31, ${(1 - dist / 120) * 0.4})`
              : `rgba(255, 255, 255, ${(1 - dist / 120) * 0.08})`;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      if (canvas) canvas.removeEventListener('mousemove', onMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isDesktop, canHover, reducedMotion, isInView]);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Background Hero Picture for desktop */}
      {isDesktop && (
        <div className={styles.heroBgWrap} aria-hidden="true">
          <HeroPicture className={styles.heroBgPicture} />
          <div className={styles.legibilityGradient} />
          {!reducedMotion && (
            <canvas ref={canvasRef} className={styles.nodeCanvas} />
          )}
        </div>
      )}

      {/* Main Content Container */}
      <div className={`container ${styles.container}`}>
        <div className={styles.textGrid}>
          <div className={styles.textContent}>
            <Reveal className={`label ${styles.topLabel}`}>
              AI-NATIVE SOFTWARE STUDIO — VADODARA, INDIA
            </Reveal>

            <SplitReveal as="h1" className="display">
              {[
                'Build smarter.',
                <span key="sub" className={styles.mutedText}>
                  Operate better<span className={styles.accentDot}>.</span>
                </span>,
              ]}
            </SplitReveal>

            <Reveal delay={120} className={styles.supportWrap}>
              <p className={styles.supportText}>
                Code Kompany is an AI-native software studio building custom software, AI agents and digital systems that help businesses automate operations and grow.
              </p>
            </Reveal>

            <Reveal delay={200} className={styles.buttonRow}>
              <Button to="/contact" variant="primary" size="lg" arrow magnetic>
                Start a Project
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Mobile portrait hero image block */}
        {!isDesktop && (
          <Reveal delay={240} className={styles.mobileHeroWrap}>
            <HeroPicture className={styles.mobileHeroPicture} />
          </Reveal>
        )}
      </div>

      {/* Bottom scroll indicator (desktop) */}
      {isDesktop && (
        <div className={styles.scrollIndicatorWrap}>
          <ScrollIndicator />
        </div>
      )}
    </section>
  );
}
