'use client';

import { IoCalendar, IoStatsChart } from 'react-icons/io5';
import ViewCounter from './ViewCounter';
import { formatDate } from 'date-fns';
import { useState, useEffect } from 'react';

// Helper function to format numbers (1,000 -> 1k, 1,500,000 -> 1.5M)
function formatCompactNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

// Custom hook to get views with minimum 1000
function useMinimumViews(slug: string, minimum: number = 1000) {
  const [views, setViews] = useState(minimum);
  
  useEffect(() => {
    async function fetchViews() {
      try {
        const response = await fetch(`/api/views/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setViews(minimum + (data.views || 0));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchViews();
  }, [slug, minimum]);
  
  return views;
}

export default function PostMeta({ publishedAt, slug }: { publishedAt: Date; slug: string }) {
  const views = useMinimumViews(slug, 1000);

  return (
    <div className="flex items-center gap-4 text-sm text-gray-500">
      <span className='flex items-end gap-2'>
        <IoCalendar size={22} color="#4A5568" /> 
        {formatDate(publishedAt, "dd MMMM yyyy")}
      </span>
      <span className='flex items-end gap-2'>
        <IoStatsChart size={19} color="#4A5568" /> 
        {formatCompactNumber(views)}
      </span>
    </div>
  );
}