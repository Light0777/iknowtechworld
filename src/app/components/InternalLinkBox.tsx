'use client';

import Image from 'next/image';
import Link from 'next/link';

interface InternalLinkBoxProps {
  imageUrl?: string;
  title: string;
  description: string;
  slug: string;
}

export default function InternalLinkBox({
  imageUrl,
  title,
  description,
  slug
}: InternalLinkBoxProps) {
  return (
    <div className="my-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 rounded-r-xl p-4 not-prose">
      <div className="flex items-start gap-3">
        {imageUrl && (
          <div className="relative w-12 h-12 flex-shrink-0 mt-1">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">You Might Also Like</div>
          <Link 
            href={`/blog/${slug}`}
            className="font-semibold text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            {title}
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {description}
          </p>
          <Link 
            href={`/blog/${slug}`}
            className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
          >
            Continue reading →
          </Link>
        </div>
      </div>
    </div>
  );
}