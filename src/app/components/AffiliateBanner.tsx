'use client';

import Image from 'next/image';
import Link from 'next/link';

interface AffiliateBannerProps {
  imageUrl?: string;
  title: string;
  description: string;
  link: string;
  price?: string;
  buttonText?: string;
}

export default function AffiliateBanner({
  imageUrl,
  title,
  description,
  link,
  price,
  buttonText = "Shop Now →"
}: AffiliateBannerProps) {
  return (
    <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900/50 shadow-sm hover:shadow-md transition-all not-prose">
      <div className="flex flex-col sm:flex-row items-center gap-4 p-5">
        {imageUrl && (
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="flex-1 space-y-0">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Sponsored</div>
          <h4 className="text-lg font-semibold text-black dark:text-white m-0">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-0">{description}</p>
          {price && (
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-1 inline-block">
              {price}
            </span>
          )}
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-shrink-0 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}