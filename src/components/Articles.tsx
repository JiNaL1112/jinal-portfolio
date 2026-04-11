// src/components/Articles.tsx
import { Link } from 'react-router-dom';
import { useMediumArticles } from '../hooks/useMediumArticles';
import { articles as staticArticles } from '../data/articles';
import styles from './Articles.module.css';

function ArticleIcon({ tags }: { tags: string[] }) {
  const tag = tags[0]?.toLowerCase() ?? '';

  if (tag.includes('kubernetes') || tag.includes('k8s') || tag.includes('homelab')) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <circle cx="40" cy="40" r="28" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3"/>
        <polygon points="40,16 52,28 52,52 40,64 28,52 28,28" stroke="#60A5FA" strokeWidth="1.5" fill="rgba(59,130,246,0.08)"/>
        <circle cx="40" cy="40" r="6" fill="#3B82F6"/>
        <circle cx="40" cy="16" r="3" fill="#60A5FA"/>
        <circle cx="40" cy="64" r="3" fill="#60A5FA"/>
        <circle cx="52" cy="28" r="3" fill="#60A5FA"/>
        <circle cx="52" cy="52" r="3" fill="#60A5FA"/>
        <circle cx="28" cy="28" r="3" fill="#60A5FA"/>
        <circle cx="28" cy="52" r="3" fill="#60A5FA"/>
      </svg>
    );
  }
  if (tag.includes('terraform') || tag.includes('iac')) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <rect x="16" y="40" width="20" height="20" stroke="#818CF8" strokeWidth="1.5" fill="rgba(129,140,248,0.08)"/>
        <rect x="44" y="20" width="20" height="20" stroke="#818CF8" strokeWidth="1.5" fill="rgba(129,140,248,0.08)"/>
        <rect x="44" y="44" width="20" height="16" stroke="#60A5FA" strokeWidth="1.5" fill="rgba(59,130,246,0.08)"/>
        <line x1="36" y1="50" x2="44" y2="50" stroke="#3B82F6" strokeWidth="1.5"/>
        <line x1="54" y1="40" x2="54" y2="44" stroke="#3B82F6" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (tag.includes('argocd') || tag.includes('gitops')) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <circle cx="40" cy="40" r="22" stroke="#22D3EE" strokeWidth="1.5"/>
        <path d="M30 40 Q40 24 50 40 Q40 56 30 40Z" stroke="#22D3EE" strokeWidth="1.5" fill="rgba(34,211,238,0.1)"/>
        <circle cx="40" cy="40" r="5" fill="#22D3EE"/>
      </svg>
    );
  }
  if (tag.includes('azure')) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <path d="M20 56 L36 24 L52 44 L36 44 Z" stroke="#38BDF8" strokeWidth="1.5" fill="rgba(56,189,248,0.1)"/>
        <path d="M36 44 L52 44 L60 56 Z" stroke="#0EA5E9" strokeWidth="1.5" fill="rgba(14,165,233,0.08)"/>
      </svg>
    );
  }
  if (tag.includes('aws') || tag.includes('eks')) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <rect x="20" y="28" width="40" height="24" rx="4" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.07)"/>
        <path d="M28 40 L40 32 L52 40 L40 48 Z" stroke="#FCD34D" strokeWidth="1.5" fill="rgba(252,211,77,0.1)"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="20" y="20" width="40" height="40" rx="4" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.06)"/>
      <line x1="28" y1="32" x2="52" y2="32" stroke="#3B82F6" strokeWidth="1.5"/>
      <line x1="28" y1="40" x2="52" y2="40" stroke="#3B82F6" strokeWidth="1" opacity="0.5"/>
      <line x1="28" y1="48" x2="44" y2="48" stroke="#3B82F6" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

export default function Articles() {
  const { articles: liveArticles, loading, error } = useMediumArticles();

  // Use live articles if loaded, fall back to static list on error
  const articles = liveArticles.length > 0 ? liveArticles : staticArticles;

  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <section id="articles">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">// technical_writing</p>
          <h2 className="section-title">Articles on Medium</h2>
          <div className="glow-line" />
          <p className={styles.intro}>
            Sharing real-world learnings from Kubernetes, cloud infrastructure, and DevOps engineering.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            padding: '40px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--blue)',
              animation: 'blink 1s step-end infinite',
            }} />
            $ curl medium.com/feed/@jinalpatel11121999...
          </div>
        )}

        {/* Error notice — subtle, non-blocking */}
        {error && !loading && (
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            marginBottom: '24px',
          }}>
            // showing cached articles — live feed unavailable
          </p>
        )}

        {/* Featured card */}
        {!loading && featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className={styles.featuredCard}
          >
            {/* Image / icon area */}
            <div className={styles.featuredImage}>
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className={styles.featuredImg}
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={styles.iconWrap} style={{ display: featured.image ? 'none' : 'flex' }}>
                <ArticleIcon tags={featured.tags} />
              </div>
              <span className={styles.featuredBadge}>Featured</span>
            </div>

            {/* Content */}
            <div className={styles.featuredBody}>
              <div className={styles.cardMeta}>
                <span className={styles.cardDate}>{featured.date}</span>
                <span className={styles.cardDot}>·</span>
                <span className={styles.cardRead}>{featured.readTime}</span>
              </div>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredSubtitle}>{featured.subtitle}</p>
              <div className={styles.cardTags}>
                {featured.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <span className={styles.readLink}>Read on Medium →</span>
            </div>
          </a>
        )}

        {/* Grid of remaining cards */}
        {!loading && rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
              >
                {/* Image / icon */}
                <div className={styles.cardImage}>
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className={styles.cardImg}
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const next = e.currentTarget.nextElementSibling as HTMLElement;
                        if (next) next.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={styles.iconWrap} style={{ display: article.image ? 'none' : 'flex' }}>
                    <ArticleIcon tags={article.tags} />
                  </div>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDate}>{article.date}</span>
                    <span className={styles.cardDot}>·</span>
                    <span className={styles.cardRead}>{article.readTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardSubtitle}>{article.subtitle}</p>
                  <div className={styles.cardTags}>
                    {article.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardArrow}>→</div>
              </a>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <Link to="/articles" className={styles.viewAllBtn}>
            View All Articles
          </Link>
          <a
            href="https://medium.com/@jinalpatel11121999"
            target="_blank"
            rel="noreferrer"
            className={styles.mediumBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            Follow on Medium
          </a>
        </div>

      </div>
    </section>
  );
}