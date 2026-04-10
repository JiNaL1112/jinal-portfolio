import { skills, certifications } from '../data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// tech_stack</p>
          <h2 className="section-title">Key Expertise</h2>
          <div className="glow-line" />
        </div>

        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.categoryGroup}>
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.tags}>
                {items.map(item => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.certSection}>
          <p className="section-label" style={{ marginBottom: '8px' }}>// credentials</p>
          <h2 className={styles.certTitle}>Certifications</h2>
          <p className={styles.certSubtitle}>
            Industry-recognized certifications demonstrating cloud and DevOps expertise.
          </p>

          <div className={styles.certGrid}>
            {certifications.map(cert => (
              <a
                key={cert.name}
                href={cert.credlyUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.certCard}
              >
                <div className={styles.certImageWrapper}>
                  <img
                    src={cert.imageUrl}
                    alt={cert.full}
                    className={styles.certImage}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className={styles.certIconFallback} style={{ display: 'none', color: cert.color }}>
                    <span>{cert.icon}</span>
                  </div>
                </div>

                <div className={styles.certInfo}>
                  <h3 className={styles.certName}>{cert.full}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <span className={styles.certVerify}>
                    Verify on Credly →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
