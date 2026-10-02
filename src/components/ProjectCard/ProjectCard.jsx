import ImageBlock from '../ImageBlock/ImageBlock';
import Tag from '../Tag/Tag';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  project,
  ratio = '4/3',
  priority = false,
  className = '',
}) {
  if (!project) return null;

  const isPlaceholder = project.status === 'placeholder';

  return (
    <article
      className={`${styles.card} ${className}`}
      data-cursor="view"
      data-cursor-label={isPlaceholder ? 'SOON' : 'VIEW'}
    >
      <div className={styles.imageWrap}>
        <ImageBlock
          imageKey={project.coverKey}
          ratio={ratio}
          priority={priority}
          hoverZoom
          framed="never"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.metaRow}>
          <span className={`label ${styles.number}`}>
            PROJECT {project.number}
          </span>
          {isPlaceholder ? (
            <Tag variant="muted">Case study coming soon</Tag>
          ) : (
            project.industry && <Tag variant="default">{project.industry}</Tag>
          )}
        </div>

        <h3 className={styles.title}>
          {isPlaceholder ? 'Project details coming soon' : project.name}
        </h3>

        {!isPlaceholder && project.shortDescription && (
          <p className={styles.description}>{project.shortDescription}</p>
        )}

        {!isPlaceholder && project.technologies?.length > 0 && (
          <div className={styles.tagGroup}>
            {project.technologies.map((tech) => (
              <Tag key={tech} variant="muted">
                {tech}
              </Tag>
            ))}
          </div>
        )}

        {!isPlaceholder && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
          >
            View live site →
          </a>
        )}
      </div>
    </article>
  );
}
