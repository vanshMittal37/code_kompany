import { useState } from 'react';
import Seo from '../components/Seo/Seo';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import CTASection from '../components/CTASection/CTASection';
import { Reveal } from '../components/Reveal/Reveal';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const ALL_FILTERS = ['All', 'AI & Automation', 'Web & App', 'E-Commerce', 'Industry'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // All projects are placeholders — filter UI is present but shows all items
  const displayed = projects;

  return (
    <>
      <Seo
        title="Projects"
        description="Selected work from Code Kompany — custom software, AI agents, apps and digital systems. Case studies coming soon."
        path="/projects"
      />

      {/* ── Page header ───────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal className={`label ${styles.eyebrow}`}>OUR WORK</Reveal>
          <h1 className={styles.heroTitle}>
            Built to move<br />
            <em>businesses forward.</em>
          </h1>
          <Reveal delay={160} className={styles.heroIntro}>
            <p>
              Each project is a systems-level problem solved with custom software,
              AI agents, or digital infrastructure. Full case studies are on their way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Filter row ──────────────────────────────────────── */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterRow} role="group" aria-label="Filter projects by category">
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry / editorial grid ────────────────────────── */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {displayed.map((project, i) => (
              <Reveal
                key={project.id}
                stagger={i}
                className={`${styles.gridItem} ${styles[`layout_${project.layout}`]}`}
              >
                <ProjectCard
                  project={project}
                  ratio={project.layout === 'tall' ? '3/4' : project.layout === 'square' ? '1/1' : '16/9'}
                  priority={i < 2}
                />
              </Reveal>
            ))}
          </div>

          {/* Honest placeholder note */}
          <Reveal delay={200} className={styles.placeholderNote}>
            <p>
              Case studies are being documented. Check back soon — or{' '}
              <a href="mailto:brij@codekompany.com">reach out directly</a> to hear about our work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <CTASection
        label="START A PROJECT"
        title="Your project could be next."
        text="Tell us what you're building. We'll figure out the best way to bring it to life."
        primary={{ text: 'Start a Project', to: '/contact' }}
        secondary={{ text: 'Explore Services', to: '/services' }}
      />
    </>
  );
}
