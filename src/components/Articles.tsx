import { articles } from '../data/portfolio';
import styles from './Articles.module.css';

export default function Articles() {
  return (
    <section id="articles">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// technical_writing</p>
          <h2 className="section-title">Articles on Medium</h2>
          <div className="glow-line" />
          <p className={styles.intro}>
            Sharing real-world learnings from Kubernetes, cloud infrastructure, and DevOps engineering.
          </p>
        </div>

        <div className={styles.list}>
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className={`card ${styles.card}`}
            >
              <div className={styles.number}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.subtitle}>{article.subtitle}</p>
                <div className={styles.meta}>
                  <span className={styles.date}>{article.date}</span>
                  <div className={styles.tags}>
                    {article.tags.map(tag => (
                      <span key={tag} className="tag tag-green">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>→</div>
            </a>
          ))}
        </div>

        <div className={styles.mediumCta}>
          <a href="https://medium.com/@jinalpatel11121999" target="_blank" rel="noreferrer" className={styles.mediumBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            Read all on Medium
          </a>
        </div>
      </div>
    </section>
  );
}
