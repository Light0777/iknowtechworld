import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoWalletOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoGameControllerOutline,
  IoHardwareChipOutline,
  IoBulbOutline,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from 'react-icons/io5'

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '50+', label: 'Games covered' },
  { value: '10K+', label: 'Monthly readers' },
  { value: '15+', label: 'Game genres' },
  { value: '100%', label: 'Honest reviews' },
]

// ─── What we cover cards ──────────────────────────────────────────────────────
const TOPICS = [
  {
    icon: <IoGameControllerOutline size={24} />,
    title: 'Game Reviews',
    body: 'Honest, in-depth reviews of AAA blockbusters and hidden indie gems. No fluff, just what you need to know.',
    tag: 'Core content',
    tagStyle: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  },
  {
    icon: <IoBulbOutline size={24} />,
    title: 'Walkthroughs & Guides',
    body: 'Step-by-step guides for boss fights, collectibles, achievements, and 100% completion runs.',
    tag: 'Most helpful',
    tagStyle: 'bg-red-100 text-[#ff3131] dark:bg-red-900/40 dark:text-[#ff3131]',
  },
  {
    icon: <IoFlashOutline size={24} />,
    title: 'Gaming News & Tips',
    body: 'Latest patches, meta changes, pro strategies, and insider tips to level up your play.',
    tag: 'Always fresh',
    tagStyle: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
  },
]

// ─── Values ───────────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: <IoShieldCheckmarkOutline size={22} />,
    title: 'No sponsored bias',
    body: "We don't take money for reviews. Every opinion is honest and unfiltered.",
  },
  {
    icon: <IoFlashOutline size={22} />,
    title: 'Player-first',
    body: 'Content written by gamers, for gamers. We play what we cover.',
  },
  {
    icon: <IoBulbOutline size={22} />,
    title: 'Always updated',
    body: 'Games evolve. We update guides and reviews to match current patches and meta.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors duration-300">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background accent — a soft blue gradient bleed from logo colours */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.10) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
          {/* Eyebrow */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-4">
            About I Know Tech World
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            Games that fit your{' '}
            <span className="text-[#ff3131] dark:text-[#ff3131]">playstyle.</span>
            <br />
            Guides that respect{' '}
            <span className="text-teal-500 dark:text-teal-400">your time.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I Know Tech World was built for gamers tired of surface-level reviews and paywalled guides. We write
            honest, deep-dive content about the games you actually play — from AAA blockbusters to
            indie masterpieces.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-[#ff3131] dark:text-[#ff3131] tabular-nums">
                {value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-3">
              The story
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
              Started 6 days ago. Already reaching readers worldwide.
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              <p>
                Most gaming sites are written by people who get early access and press kits. We started
                I Know Tech World because we were the other kind — the people who buy games on sale and
                still want to know if they're worth it.
              </p>
              <p>
                We cover games we genuinely play. No copy-pasted press releases, no AI-generated
                walkthroughs. Every article answers a real player question: "Is this game worth
                $60?" "How do I beat this boss?" "Where's that hidden collectible?"
              </p>
              <p>
                If we wouldn't recommend it to a friend, we don't publish it. That's the only
                strategy we have and the only one we need.
              </p>
            </div>
          </div>

          {/* Visual card stack */}
          <div className="relative h-72 md:h-80 hidden md:block">
            {/* Card 3 — back */}
            <div
              className="absolute inset-x-8 top-4 h-full rounded-2xl bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900"
              style={{ transform: 'rotate(3deg)' }}
              aria-hidden
            />
            {/* Card 2 — middle */}
            <div
              className="absolute inset-x-4 top-2 h-full rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/60"
              style={{ transform: 'rotate(-1.5deg)' }}
              aria-hidden
            />
            {/* Card 1 — front */}
            <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff3131] flex items-center justify-center text-white font-bold text-sm">
                  IK
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">I Know Tech World</p>
                  <p className="text-xs text-gray-400">iknowtechworld.online</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Elden Ring: Shadow of Erdtree Review', 'Hollow Knight 100% Guide', 'Best Indie Games 2024'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>10K+ monthly readers</span>
                <span className="text-[#ff3131] dark:text-[#ff3131] font-semibold">↑ Growing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-3">
              What we cover
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Three pillars, one mission: better gaming
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TOPICS.map(({ icon, title, body, tag, tagStyle }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
              >
                <span className={`self-start text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagStyle}`}>
                  {tag}
                </span>
                <span className="text-[#ff3131] dark:text-[#ff3131]">{icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-3">
            Our values
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            What we stand for
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {VALUES.map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <span className="p-3 rounded-2xl bg-red-100 dark:bg-red-900/40 text-[#ff3131] dark:text-[#ff3131]">
                {icon}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Ready to read?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Browse our latest guides — no fluff, no filler, just the info you actually need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blogpage"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff3131] hover:bg-[#e02b2b] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-red-300 dark:hover:shadow-red-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3131] focus-visible:ring-offset-2"
            >
              Browse all articles <IoArrowForward size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}