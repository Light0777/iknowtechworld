// components/whatWeCover.tsx
import React from 'react'
import {
  IoGameControllerOutline,
  IoHardwareChipOutline,
  IoSchoolOutline,
  IoBulbOutline,
  IoConstructOutline,
  IoGitCompareOutline,
  IoFlashOutline,
} from 'react-icons/io5'

const COVER_TOPICS = [
  {
    icon: <IoGameControllerOutline size={22} />,
    title: 'Game Reviews',
    body: 'Honest, in-depth reviews of AAA blockbusters and hidden indie gems. No fluff, just what you need to know.',
  },
  {
    icon: <IoBulbOutline size={22} />,
    title: 'Walkthroughs & Guides',
    body: 'Step-by-step guides for boss fights, collectibles, achievements, and 100% completion runs.',
  },
  {
    icon: <IoFlashOutline size={22} />,
    title: 'Gaming News & Tips',
    body: 'Latest patches, meta changes, pro strategies, and insider tips to level up your play.',
  },
  {
    icon: <IoConstructOutline size={22} />,
    title: 'Indie Spotlights',
    body: 'Hidden gems and rising indie games that deserve your attention — before they blow up.',
  },
  {
    icon: <IoGitCompareOutline size={22} />,
    title: 'Game Strategies',
    body: 'Meta builds, speedrun routes, competitive play guides, and advanced tactics.',
  },
  {
    icon: <IoHardwareChipOutline size={22} />,
    title: 'Upcoming Releases',
    body: 'Previews, release calendars, and what to watch for each month across all platforms.',
  },
]

export default function WhatWeCover() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-3">
            What We Cover
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Practical tech for real people
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            At I Know Tech World, we focus on honest gaming content for every type of player.
            Our content is built for hardcore gamers, casual players, completionists, and anyone
            looking for their next favorite game.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COVER_TOPICS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-[#ff3131] dark:text-[#ff3131]">{icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Our goal is simple: help gamers discover, master, and enjoy great games.
          </p>
        </div>
      </div>
    </section>
  )
}