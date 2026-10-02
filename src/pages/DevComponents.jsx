import Button from '../components/Button/Button';
import Tag from '../components/Tag/Tag';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ImageBlock from '../components/ImageBlock/ImageBlock';
import GenerativeVisual from '../components/GenerativeVisual/GenerativeVisual';
import { Reveal, SplitReveal } from '../components/Reveal/Reveal';
import Ticker from '../components/Ticker/Ticker';
import CTASection from '../components/CTASection/CTASection';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Seo from '../components/Seo/Seo';
import styles from './DevComponents.module.css';

const generativeVariants = [
  'ai-agents',
  'software',
  'mobile',
  'cloud',
  'transformation',
  'mvp',
  'ecommerce',
  'industry',
  'manufacturing',
  'healthcare',
  'realestate',
  'project',
  'intro',
  'cta',
  'generic',
];

const tickerServices = [
  'AI AGENTS',
  'CUSTOM SOFTWARE',
  'MOBILE APPS',
  'CLOUD',
  'AUTOMATION',
  'DIGITAL TRANSFORMATION',
  'MVP',
  'E-COMMERCE',
];

export default function DevComponents() {
  return (
    <div className={styles.devPage}>
      <Seo title="Component Gallery (Dev Only)" noindex />

      <div className="container">
        <header className={styles.header}>
          <Tag variant="accent">DEV ONLY</Tag>
          <h1 className="display">Component Gallery</h1>
          <p className="muted">
            Preview of all shared components, variants, interactive states and fallback visuals.
          </p>
        </header>

        {/* 1. Breadcrumb */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Breadcrumb</h2>
          <Breadcrumb items={[{ label: 'Development', to: '/dev/components' }, { label: 'Components' }]} />
        </section>

        {/* 2. Buttons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Buttons</h2>
          <div className={styles.row}>
            <Button variant="primary" size="md" arrow magnetic>Primary Md</Button>
            <Button variant="primary" size="lg" arrow magnetic>Primary Lg</Button>
            <Button variant="secondary" size="md" arrow>Secondary Md</Button>
            <Button variant="secondary" size="lg">Secondary Lg</Button>
            <Button variant="ghost" size="md" arrow>Ghost Md</Button>
            <Button variant="primary" size="md" loading>Loading State</Button>
            <Button variant="primary" size="md" disabled>Disabled State</Button>
          </div>
        </section>

        {/* 3. Tags */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Tags</h2>
          <div className={styles.row}>
            <Tag variant="default">Default Tag</Tag>
            <Tag variant="accent">FLAGSHIP</Tag>
            <Tag variant="muted">Coming Soon</Tag>
          </div>
        </section>

        {/* 4. CursorBadge test target */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. CursorBadge (Hover test below)</h2>
          <div className={styles.cursorTestBox} data-cursor="view" data-cursor-label="EXPLORE">
            <p>Hover over this card with a mouse to test the magnetic CursorBadge!</p>
          </div>
        </section>

        {/* 5. Section Headers */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Section Headers</h2>
          <SectionHeader
            index="01"
            label="SERVICES"
            title="Left Aligned Header Title"
            intro="This is a short two line introduction describing the section goals."
            link={{ text: 'View all services', to: '/services' }}
            align="left"
          />

          <SectionHeader
            index="02"
            label="CASE STUDIES"
            title="Split Layout Header with 7/4 Desktop Column Ratio"
            intro="This intro text is aligned to the right columns on desktop and stacks neatly on mobile."
            link={{ text: 'Explore projects', to: '/projects' }}
            align="split"
          />
        </section>

        {/* 6. Reveals */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Reveal & SplitReveal</h2>
          <Reveal y={30}>
            <div className={styles.cardBox}>
              <h3>Standard Reveal Box</h3>
              <p className="muted">Fades up 30px with smooth easing when scrolled into view.</p>
            </div>
          </Reveal>
          <SplitReveal as="h3" lines={['Line 1 Masked Reveal', 'Line 2 Masked Slide Up']} className={styles.splitHeadline} />
        </section>

        {/* 7. ImageBlock Ratios + Missing Fallback */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. ImageBlock Ratios & Fallbacks</h2>
          <div className={styles.imageGrid}>
            <div>
              <p className="label">16/9 Ratio (Hero Dark)</p>
              <ImageBlock imageKey="heroDark" ratio="16/9" framed="always" />
            </div>
            <div>
              <p className="label">3/2 Ratio (AI Agents)</p>
              <ImageBlock imageKey="aiAgents" ratio="3/2" hoverZoom />
            </div>
            <div>
              <p className="label">4/3 Ratio (Project 01)</p>
              <ImageBlock imageKey="project01" ratio="4/3" />
            </div>
            <div>
              <p className="label">1/1 Ratio (Square)</p>
              <ImageBlock imageKey="mobileApp" ratio="1/1" />
            </div>
            <div>
              <p className="label">Deliberately Missing Key (Fallback Visual)</p>
              <ImageBlock imageKey="nonExistentKey" ratio="16/9" alt="Fallback visual demonstration" />
            </div>
          </div>
        </section>

        {/* 8. GenerativeVisual Variants */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. GenerativeVisual Variants (15 Total)</h2>
          <div className={styles.visualGrid}>
            {generativeVariants.map((v) => (
              <div key={v} className={styles.visualCard}>
                <div className={styles.visualWrap}>
                  <GenerativeVisual variant={v} aria-label={v} />
                </div>
                <span className="label">{v}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 9. Ticker */}
      <section className={styles.section}>
        <h2 className={`container ${styles.sectionTitle}`}>9. Ticker Component</h2>
        <Ticker items={tickerServices} images={['aiAgents', 'softwareDevelopment', 'cloudSolutions']} speed={30} />
      </section>

      {/* 10. CTASection */}
      <section className={styles.section}>
        <h2 className={`container ${styles.sectionTitle}`}>10. CTASection Component</h2>
        <CTASection
          label="GET IN TOUCH"
          title="Ready to automate your operations?"
          text="Let’s discuss how custom AI agents and modern software can transform your business."
          imageKey="ctaRibbon"
        />
      </section>
    </div>
  );
}
