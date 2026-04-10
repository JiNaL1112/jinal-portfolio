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
          <p className="section-label" style={{ marginBottom: '24px' }}>// certifications</p>
          <div className={styles.certGrid}>
            {certifications.map(cert => (
              <div key={cert.name} className={`card ${styles.certCard}`}>
                <div className={styles.certTop}>
                  <span className={styles.certIcon}>{cert.icon}</span>
                  <span className={styles.certCode}>{cert.name}</span>
                </div>
                <p className={styles.certFull}>{cert.full}</p>
                <div className={styles.certBar}>
                  <div className={styles.certBarFill} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
