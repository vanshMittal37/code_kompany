import { getFeaturedProjects } from '../../../data/projects';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import { Reveal } from '../../../components/Reveal/Reveal';
import styles from './WorkSection.module.css';

export default function WorkSection() {
  const featured = getFeaturedProjects(4);

  return (
    <section className={`section ${styles.workSection}`}>
      <div className="container">
        <SectionHeader
          index="04"
          label="SELECTED WORK"
          title="Work in progress, presented properly."
          intro="Selected client engagements and product builds currently in development."
          link={{ text: 'All projects', to: '/projects' }}
          align="split"
        />

        {/* 12-Column Asymmetric Editorial Grid */}
        <div className={styles.projectGrid}>
          {featured[0] && (
            <Reveal className={styles.item1}>
              <ProjectCard project={featured[0]} ratio="4/3" />
            </Reveal>
          )}

          {featured[1] && (
            <Reveal delay={120} className={styles.item2}>
              <ProjectCard project={featured[1]} ratio="4/5" />
            </Reveal>
          )}

          {featured[2] && (
            <Reveal className={styles.item3}>
              <ProjectCard project={featured[2]} ratio="4/5" />
            </Reveal>
          )}

          {featured[3] && (
            <Reveal delay={120} className={styles.item4}>
              <ProjectCard project={featured[3]} ratio="4/3" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
