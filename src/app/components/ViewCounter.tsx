'use client';

import { useEffect, useState } from 'react';

interface ViewCounterProps {
  slug: string;
  className?: string;
}

export default function ViewCounter({ slug, className = '' }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function recordAndFetchViews() {
      try {
        // Record view and get count in one request
        const response = await fetch(`/api/views/${slug}`, {
          method: 'POST',
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch views');
        }
        
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error('Error fetching view count:', error);
        setViews(0);
      } finally {
        setIsLoading(false);
      }
    }

    recordAndFetchViews();
  }, [slug]);

  if (isLoading) {
    return <span className={className}>...</span>;
  }

  return <span className={className}>{views?.toLocaleString() || 0}</span>;
}