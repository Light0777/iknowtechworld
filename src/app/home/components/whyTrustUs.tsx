// components/whyTrustUs.tsx
import React from 'react'
import {
  IoWalletOutline,
  IoSchoolOutline,
  IoCashOutline,
  IoRefreshOutline,
  IoSwapHorizontalOutline,
  IoHeartOutline,
} from 'react-icons/io5'

const TRUST_POINTS = [
  {
    icon: <IoWalletOutline size={22} />,
    title: 'Budget-first recommendations',
    body: 'Every guide starts with real prices — the kind people actually spend, not dream budgets.',
  },
  {
    icon: <IoSchoolOutline size={22} />,
    title: 'Beginner-friendly explanations',
    body: 'No tech jargon. Just plain-English guides that anyone can follow.',
  },
  {
    icon: <IoCashOutline size={22} />,
    title: 'No unnecessary expensive pushes',
    body: 'We don\'t recommend products just because they\'re premium. Value comes first.',
  },
  {
    icon: <IoRefreshOutline size={22} />,
    title: 'Regularly updated content',
    body: 'Tech moves fast. We keep our guides current so you\'re never acting on old info.',
  },
  {
    icon: <IoSwapHorizontalOutline size={22} />,
    title: 'Clear pros and cons',
    body: 'Every recommendation includes honest trade-offs, not just hype.',
  },
]

export default function WhyTrustUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
          Why Trust Us
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
          Honest content, not paid hype
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          We focus on honest and research-based content instead of paid hype. Every guide is written
          with real-world practicality in mind.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRUST_POINTS.map(({ icon, title, body }) => (
          <div key={title} className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              {icon}
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm">
          <IoHeartOutline size={16} />
          <span>We understand limited budgets — because we've been there too</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
          Our content prioritizes value, performance, and practicality over marketing trends.
        </p>
      </div>
    </section>
  )
}