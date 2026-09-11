// components/featuredGuide.tsx
import React from 'react'
import Link from 'next/link'
import {
  IoBookOutline,
  IoGameControllerOutline,
  IoBulbOutline,
  IoPersonOutline,
  IoRocketOutline,
  IoCartOutline,
  IoArrowForward,
  IoStarOutline,
} from 'react-icons/io5'

const FEATURED_CONTENT = [
  {
    icon: <IoBookOutline size={20} />,
    title: 'Complete walkthroughs',
    body: 'Step-by-step guides for 100% completion, all collectibles, and secret endings.',
  },
  {
    icon: <IoBulbOutline size={20} />,
    title: 'Boss fight strategies',
    body: 'Detailed tactics for every major boss — patterns, weaknesses, and optimal builds.',
  },
  {
    icon: <IoGameControllerOutline size={20} />,
    title: 'Meta builds & loadouts',
    body: 'Best weapons, armor, skills, and perk combinations for current patches.',
  },
  {
    icon: <IoPersonOutline size={20} />,
    title: 'Speedrun routes & tips',
    body: 'Optimized paths, glitches, and techniques for record-breaking runs.',
  },
  {
    icon: <IoStarOutline size={20} />,
    title: 'Hidden secrets & easter eggs',
    body: 'Secret areas, lore discoveries, and developer references you missed.',
  },
  {
    icon: <IoRocketOutline size={20} />,
    title: 'Achievement hunting guides',
    body: 'Roadmaps for platinum trophies and 1000/1000 achievements.',
  },
]

export default function FeaturedGuide() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IoStarOutline className="text-amber-500 dark:text-amber-400" size={18} />
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131]">
              Featured
            </span>
            <IoStarOutline className="text-amber-500 dark:text-amber-400" size={18} />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Featured Guides
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Explore some of our most helpful gaming guides. We create content that helps you
            master every game — from boss fights to 100% completion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_CONTENT.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200 group"
            >
              <span className="text-[#ff3131] dark:text-[#ff3131]">{icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blogpage"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff3131] hover:bg-[#e02b2b] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-red-300 dark:hover:shadow-red-900"
          >
            Browse all guides <IoArrowForward size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}