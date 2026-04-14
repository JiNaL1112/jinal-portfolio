import { profile } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.logo}>
              <span className={styles.logoMono}>&gt;_</span>
              {profile.name}
            </span>
            <p className={styles.tagline}>
              DevOps Engineer · Building the future of cloud infrastructure
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.copy}>
              © {year} {profile.name} · Kitchener, ON, Canada
            </p>
            <div className={styles.socials}>
              <a href={profile.github} target="_blank" rel="noreferrer" className={styles.social}>GitHub</a>
              <span className={styles.sep}>·</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.social}>LinkedIn</a>
              <span className={styles.sep}>·</span>
              <a href={profile.medium} target="_blank" rel="noreferrer" className={styles.social}>Medium</a>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
