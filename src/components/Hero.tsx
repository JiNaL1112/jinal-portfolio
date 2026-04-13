import { useEffect, useRef } from 'react';
import { profile } from '../data/portfolio';
import styles from './Hero.module.css';

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="about-section">
      <div className={styles.glow1} />

      <div className="container">
        <div className={styles.grid}>

          {/* ── LEFT: Content ── */}
          <div className={styles.content}>

            {/* Location + availability strip — visible immediately */}
            <div className={styles.metaStrip}>
              <span className={styles.metaItem}>
                <LocationIcon />
                Ottawa, ON · Canada
              </span>
              <span className={styles.metaSep}>·</span>
              <span className={styles.metaAvail}>
                <span className={styles.dot} />
                Open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className={styles.name}>{profile.name}</h1>

            {/* » Title */}
            <div className={styles.titleRow}>
              <span className={styles.titlePrefix}>»</span>
              <span className={styles.title}>{profile.title}</span>
            </div>

            {/* Tagline */}
            <p className={styles.tagline}>{profile.tagline}</p>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <a href="#projects" className={styles.btnPrimary}>
                View Projects
              </a>

              {/* Download CV — high visibility */}
              <a
                href="/Jinal_Patel_CV.pdf"
                download
                className={styles.btnCV}
              >
                <DownloadIcon />
                Download CV
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.btnOutline}
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
                LinkedIn
              </a>

              <a href="#contact" className={styles.btnOutline}>
                Get in touch
              </a>
            </div>

          </div>

          {/* ── RIGHT: Photo ── */}
          <div className={styles.photoSide}>
            <div className={styles.photoFrame}>
              <img
                src={profile.photo}
                alt={profile.name}
                className={styles.photo}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <TerminalFallback />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TerminalFallback() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [
      { text: '$ kubectl get nodes', delay: 0 },
      { text: 'NAME             STATUS   ROLES    AGE', delay: 600 },
      { text: 'jinal-node-01    Ready    control  3y', delay: 900 },
      { text: '$ terraform plan --auto-approve', delay: 1600 },
      { text: 'Plan: 12 to add, 0 to change, 0 to destroy.', delay: 2200 },
      { text: '✓ Apply complete! Resources: 12 added.', delay: 2800 },
    ];
    lines.forEach(({ text, delay }) => {
      setTimeout(() => {
        if (!terminalRef.current) return;
        const line = document.createElement('div');
        line.className = styles.termLine;
        line.textContent = text;
        terminalRef.current.appendChild(line);
      }, delay);
    });
  }, []);

  return (
    <div className={styles.terminal} style={{ display: 'none' }}>
      <div className={styles.termHeader}>
        <div className={styles.termDots}>
          <span style={{ background: '#FF5F57' }} />
          <span style={{ background: '#FFBD2E' }} />
          <span style={{ background: '#28C840' }} />
        </div>
        <span className={styles.termTitle}>jinal@devops ~ zsh</span>
      </div>
      <div className={styles.termBody} ref={terminalRef} />
    </div>
  );
}