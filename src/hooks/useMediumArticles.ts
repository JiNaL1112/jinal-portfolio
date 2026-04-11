import { useState, useEffect } from 'react';

export interface MediumArticle {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const FEED_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jinalpatel11121999';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function estimateReadTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function useMediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        if (data.status !== 'ok') {
          throw new Error(data.message ?? 'Feed error');
        }

        const parsed: MediumArticle[] = (data.items ?? []).map(
          (item: any, i: number) => {
            const fullTitle: string = item.title ?? '';
            const colonIdx = fullTitle.indexOf(':');
            const title =
              colonIdx > 0 ? fullTitle.slice(0, colonIdx).trim() : fullTitle;
            const subtitle =
              colonIdx > 0 ? fullTitle.slice(colonIdx + 1).trim() : '';

            return {
              title,
              subtitle,
              date: formatDate(item.pubDate ?? ''),
              readTime: estimateReadTime(item.content ?? ''),
              url: item.link ?? '',
              tags: (item.categories ?? []).slice(0, 3),
              image: item.thumbnail ?? '',
              featured: i === 0,
            };
          }
        );

        setArticles(parsed);
      } catch (err) {
        console.error('Medium feed error:', err);
        setError('Could not load live articles.');
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return { articles, loading, error };
}