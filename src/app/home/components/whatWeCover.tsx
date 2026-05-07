// components/whatWeCover.tsx
import React from 'react'
import {
  IoGameControllerOutline,
  IoHardwareChipOutline,
  IoSchoolOutline,
  IoBulbOutline,
  IoConstructOutline,
  IoGitCompareOutline,
} from 'react-icons/io5'

const COVER_TOPICS = [
  {
    icon: <IoGameControllerOutline size={22} />,
    title: 'Budget Gaming PCs & Hardware',
    body: 'Complete builds and component guides that actually run games without breaking the bank.',
  },
  {
    icon: <IoSchoolOutline size={22} />,
    title: 'Student Gadgets & Productivity',
    body: 'Gear that helps you study, create, and stay productive on a student budget.',
  },
  {
    icon: <IoBulbOutline size={22} />,
    title: 'AI Tools & Software',
    body: 'Practical AI recommendations that actually help you work, study, and create faster.',
  },
  {
    icon: <IoConstructOutline size={22} />,
    title: 'Gaming Setup Tutorials',
    body: 'Step-by-step guides to build, optimize, and upgrade your gaming station.',
  },
  {
    icon: <IoGitCompareOutline size={22} />,
    title: 'Tech Comparisons & Buying Guides',
    body: 'Side-by-side comparisons to help you pick the right gear for your needs.',
  },
  {
    icon: <IoHardwareChipOutline size={22} />,
    title: 'Beginner-Friendly Walkthroughs',
    body: 'Plain-English guides for people who are new to building and upgrading tech.',
  },
]

export default function WhatWeCover() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
            What We Cover
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Practical tech for real people
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            At I Know Tech World, we focus on practical and affordable technology for everyday users.
            Our content is built for students, gamers, creators, and anyone trying to build a better
            setup without overspending.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COVER_TOPICS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-blue-600 dark:text-blue-400">{icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Our goal is simple: help people make smarter tech decisions on a real-world budget.
          </p>
        </div>
      </div>
    </section>
  )
}