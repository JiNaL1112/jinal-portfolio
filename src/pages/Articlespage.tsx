// src/pages/ArticlesPage.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediumArticles } from '../hooks/useMediumArticles';
import { articles as staticArticles } from '../data/articles';
import styles from './Articlespage.module.css';

function ArticleIcon({ tags }: { tags: string[] }) {
  const tag = tags[0]?.toLowerCase() ?? '';
  if (tag.includes('kubernetes') || tag.includes('k8s') || tag.includes('homelab') || tag.includes('bare')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <circle cx="50" cy="50" r="36" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5 4"/>
        <polygon points="50,20 66,36 66,64 50,80 34,64 34,36" stroke="#60A5FA" strokeWidth="1.5" fill="rgba(59,130,246,0.07)"/>
        <circle cx="50" cy="50" r="8" fill="#3B82F6" opacity="0.9"/>
        <circle cx="50" cy="20" r="3.5" fill="#60A5FA"/>
        <circle cx="50" cy="80" r="3.5" fill="#60A5FA"/>
        <circle cx="66" cy="36" r="3.5" fill="#60A5FA"/>
        <circle cx="66" cy="64" r="3.5" fill="#60A5FA"/>
        <circle cx="34" cy="36" r="3.5" fill="#60A5FA"/>
        <circle cx="34" cy="64" r="3.5" fill="#60A5FA"/>
      </svg>
    );
  }
  if (tag.includes('terraform') || tag.includes('iac')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <rect x="18" y="52" width="28" height="28" rx="2" stroke="#818CF8" strokeWidth="1.5" fill="rgba(129,140,248,0.08)"/>
        <rect x="54" y="20" width="28" height="28" rx="2" stroke="#818CF8" strokeWidth="1.5" fill="rgba(129,140,248,0.08)"/>
        <rect x="54" y="56" width="28" height="24" rx="2" stroke="#60A5FA" strokeWidth="1.5" fill="rgba(59,130,246,0.08)"/>
        <line x1="46" y1="66" x2="54" y2="66" stroke="#3B82F6" strokeWidth="1.5"/>
        <line x1="68" y1="48" x2="68" y2="56" stroke="#3B82F6" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (tag.includes('argocd') || tag.includes('gitops')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <circle cx="50" cy="50" r="30" stroke="#22D3EE" strokeWidth="1.5"/>
        <path d="M34 50 Q50 24 66 50 Q50 76 34 50Z" stroke="#22D3EE" strokeWidth="1.5" fill="rgba(34,211,238,0.1)"/>
        <circle cx="50" cy="50" r="7" fill="#22D3EE"/>
      </svg>
    );
  }
  if (tag.includes('azure')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path d="M22 72 L44 24 L66 56 L44 56 Z" stroke="#38BDF8" strokeWidth="1.5" fill="rgba(56,189,248,0.1)"/>
        <path d="M44 56 L66 56 L78 72 Z" stroke="#0EA5E9" strokeWidth="1.5" fill="rgba(14,165,233,0.08)"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
      <rect x="22" y="22" width="56" height="56" rx="6" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.05)"/>
      <line x1="32" y1="38" x2="68" y2="38" stroke="#3B82F6" strokeWidth="1.5"/>
      <line x1="32" y1="50" x2="68" y2="50" stroke="#3B82F6" strokeWidth="1" opacity="0.4"/>
      <line x1="32" y1="62" x2="56" y2="62" stroke="#3B82F6" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

export default function ArticlesPage() {
  const { articles: liveArticles, loading, error } = useMediumArticles();
  const [activeTag, setActiveTag] = useState('All');

  // Use live articles if available, fall back to static
  const allArticles = liveArticles.length > 0 ? liveArticles : staticArticles;

  // Collect all unique tags
  const allTags = ['All', ...Array.from(new Set(allArticles.flatMap(a => a.tags)))];

  const filtered = activeTag === 'All'
    ? allArticles
    : allArticles.filter(a => a.tags.includes(activeTag));

  const featured = filtered.find(a => a.featured) ?? filtered[0];
  const rest = filtered.filter(a => a !== featured);

  return (
    <div className={styles.root}>

      {/* Top bar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link to="/" className={styles.back}>← Portfolio</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.crumb}>articles</span>
        </div>
      </div>

      <div className={styles.page}>

        {/* Header */}
        <div className={styles.docHeader}>
          <div className={styles.docTag}>// technical_writing</div>
          <h1 className={styles.docTitle}>Articles</h1>
          <p className={styles.docDesc}>
            Real-world learnings from Kubernetes, cloud infrastructure, GitOps,
            and DevOps engineering — written for practitioners, not tutorials.
          </p>
          <div className={styles.docMeta}>
            <span>{allArticles.length} articles</span>
            <span>·</span>
            {error && <span style={{ color: '#F87171', fontSize: '0.7rem' }}>{error} (showing cached)</span>}
            <a
              href="https://medium.com/@jinalpatel11121999"
              target="_blank" rel="noreferrer"
              className={styles.docLink}
            >
              Follow on Medium ↗
            </a>
          </div>
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
              background: '#3B82F6',
              animation: 'pulse 1.5s ease-in-out infinite',
            }} />
            $ curl medium.com/feed/@jinalpatel11121999...
          </div>
        )}

        {/* Tag filters */}
        {!loading && (
          <div className={styles.filters}>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`${styles.filterBtn} ${activeTag === tag ? styles.filterActive : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Featured article */}
        {!loading && featured && (
          <a
            href={featured.url}
            target="_blank" rel="noreferrer"
            className={styles.featured}
          >
            <div className={styles.featuredImage}>
              {featured.image ? (
                <img
                  src={featured.image} alt={featured.title}
                  className={styles.featuredImg}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ) : (
                <div className={styles.iconBox}><ArticleIcon tags={featured.tags} /></div>
              )}
              {featured.featured && <span className={styles.featuredBadge}>Featured</span>}
            </div>

            <div className={styles.featuredBody}>
              <div className={styles.meta}>
                <span className={styles.metaDate}>{featured.date}</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaRead}>{featured.readTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredSub}>{featured.subtitle}</p>
              <div className={styles.tags}>
                {featured.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <span className={styles.readCta}>Read on Medium →</span>
            </div>
          </a>
        )}

        {/* Grid */}
        {!loading && rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank" rel="noreferrer"
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  {article.image ? (
                    <img
                      src={article.image} alt={article.title}
                      className={styles.cardImg}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  ) : (
                    <div className={styles.iconBox}><ArticleIcon tags={article.tags} /></div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span className={styles.metaDate}>{article.date}</span>
                    <span className={styles.metaDot}>·</span>
                    <span className={styles.metaRead}>{article.readTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardSub}>{article.subtitle}</p>
                  <div className={styles.tags}>
                    {article.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className={styles.empty}>
            <span>No articles found for "{activeTag}"</span>
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            $ curl medium.com/@jinalpatel11121999 | grep articles
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://medium.com/@jinalpatel11121999"
              target="_blank" rel="noreferrer"
              className={styles.footerLink}
            >
              All on Medium ↗
            </a>
            <Link to="/" className={styles.footerLink}>← Portfolio</Link>
          </div>
        </div>

      </div>
    </div>
  );
}