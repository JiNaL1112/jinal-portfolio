import { useState, useEffect } from 'react';
import { profile } from '../data/portfolio';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#articles', label: 'Articles' },
  { href: '#homelab', label: 'Homelab' },
  { href: '#contact', label: 'Contact' },
];

// LinkedIn SVG icon
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Download icon
function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMono}>&gt;_</span>
          <span className={styles.logoName}>{profile.name.split(' ')[0]}</span>
          <span className={styles.logoCaret} />
        </a>

        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className={styles.actions}>
          {/* LinkedIn icon button */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>

          {/* Download CV */}
          <a
            href="/Jinal_Patel_CV.pdf"
            download
            className={styles.cvBtn}
            aria-label="Download CV"
          >
            <DownloadIcon />
            <span>CV</span>
          </a>

          {/* Hire Me */}
          <a href={`mailto:${profile.email}`} className={styles.cta}>
            Hire Me
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileOpen ? styles.barOpen : ''} />
          <span className={mobileOpen ? styles.barOpen : ''} />
          <span className={mobileOpen ? styles.barOpen : ''} />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {/* Mobile: CV + LinkedIn + Hire Me at bottom */}
          <div className={styles.mobileCtas}>
            <a
              href="/Jinal_Patel_CV.pdf"
              download
              className={styles.mobileCvBtn}
            >
              <DownloadIcon /> Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.mobileCvBtn}
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className={styles.mobileHireBtn}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}