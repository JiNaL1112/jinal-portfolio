import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// featured_work</p>
          <h2 className="section-title">Projects</h2>
          <div className="glow-line" />
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              {/* Preview image */}
              {project.image && (
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                </div>
              )}

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>
                      GitHub <span className={styles.linkArrow}>&gt;</span>
                    </a>
                  )}
                  {project.article && (
                    <a href={project.article} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.linkArticle}`}>
                      Medium <span className={styles.linkArrow}>&gt;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.githubCta}>
          <a href="https://github.com/JiNaL1112" target="_blank" rel="noreferrer" className={styles.githubBtn}>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}