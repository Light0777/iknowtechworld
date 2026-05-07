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
    title: 'Step-by-step tutorials',
    body: 'Easy-to-follow guides that walk you through every step of the process.',
  },
  {
    icon: <IoCartOutline size={20} />,
    title: 'Budget gadget recommendations',
    body: 'Gear that actually delivers value without breaking your wallet.',
  },
  {
    icon: <IoGameControllerOutline size={20} />,
    title: 'Gaming optimization tips',
    body: 'Get better performance and higher FPS without spending a rupee.',
  },
  {
    icon: <IoPersonOutline size={20} />,
    title: 'VTuber & streaming guides',
    body: 'Setup advice for aspiring creators and streamers on a budget.',
  },
  {
    icon: <IoBulbOutline size={20} />,
    title: 'AI productivity tools',
    body: 'Practical AI apps that help you study, create, and work faster.',
  },
  {
    icon: <IoRocketOutline size={20} />,
    title: 'Smart tech buying advice',
    body: 'Know what to buy, what to skip, and when to wait for a better deal.',
  },
]

export default function FeaturedGuide() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IoStarOutline className="text-amber-500 dark:text-amber-400" size={18} />
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Featured
            </span>
            <IoStarOutline className="text-amber-500 dark:text-amber-400" size={18} />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Featured Guides
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Explore some of our most useful and beginner-friendly tech guides. We aim to create
            content that is easy to follow, practical to use, and actually helpful in real-world
            situations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_CONTENT.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200 group"
            >
              <span className="text-blue-600 dark:text-blue-400">{icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blogpage"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900"
          >
            Browse all guides <IoArrowForward size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}