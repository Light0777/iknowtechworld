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
    <div className="my-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900/50 shadow-sm hover:shadow-md transition-all not-prose overflow-hidden">
      {/* Mobile: Stacked layout with better spacing */}
      <div className="flex flex-col p-4 sm:p-5">
        {/* Top section with image and title */}
        <div className="flex items-start gap-3 mb-3">
          {imageUrl && (
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Sponsored</div>
            <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white leading-tight">
              {title}
            </h4>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        
        {/* Bottom section with price and button */}
        <div className="flex items-center justify-between gap-3 mt-1">
          {price && (
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400 whitespace-nowrap">
              {price}
            </span>
          )}
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}