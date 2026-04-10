import { useState } from 'react';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

const filters = ['All', 'Infrastructure', 'Architecture', 'CI/CD', 'Kubernetes'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.headerLabel}>PROJECTS</p>
          <h2 className={styles.headerTitle}>Featured Work</h2>
          <p className={styles.headerSubtitle}>
            Production-grade infrastructure projects on Azure &amp; AWS. Each repository includes
            architecture decisions, IaC code, and CI/CD pipelines built for scale.
          </p>
          <div className={styles.filters}>
            {filters.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
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