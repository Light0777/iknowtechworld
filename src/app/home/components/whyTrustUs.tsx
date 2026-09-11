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
    title: 'No sponsored reviews',
    body: 'We don\'t take money for reviews. Every opinion is honest and unfiltered.',
  },
  {
    icon: <IoSchoolOutline size={22} />,
    title: 'Player-first content',
    body: 'Written by gamers, for gamers. We actually play what we cover.',
  },
  {
    icon: <IoCashOutline size={22} />,
    title: 'No pay-to-win guides',
    body: 'We don\'t gatekeep content behind paywalls. Everything is free.',
  },
  {
    icon: <IoRefreshOutline size={22} />,
    title: 'Always updated',
    body: 'Games evolve. We update guides and reviews to match current patches and meta.',
  },
  {
    icon: <IoSwapHorizontalOutline size={22} />,
    title: 'Honest pros & cons',
    body: 'Every review includes what we loved AND what frustrated us.',
  },
]

export default function WhyTrustUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-3">
          Why Trust Us
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
          Honest gaming content, not paid hype
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          We focus on honest, player-first content instead of paid hype. Every article is written
          by gamers who actually play the games.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRUST_POINTS.map(({ icon, title, body }) => (
          <div key={title} className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-red-100 dark:bg-red-900/40 text-[#ff3131] dark:text-[#ff3131]">
              {icon}
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/40 text-[#ff3131] dark:text-[#ff3131] text-sm">
          <IoHeartOutline size={16} />
          <span>We understand the grind — because we've been there too</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
          Our content prioritizes honest opinions, deep research, and player experience over marketing hype.
        </p>
      </div>
    </section>
  )
}