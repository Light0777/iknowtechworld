// app/disclaimer/page.tsx
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoWarningOutline,
  IoCashOutline,
  IoLinkOutline,
  IoShieldOutline,
  IoScaleOutline,
  IoDocumentTextOutline,
  IoSearchOutline,
} from 'react-icons/io5'

// ─── Last Updated Date ──────────────────────────────────────────────────────
const LAST_UPDATED = 'May 7, 2026'

// ─── Disclaimer Sections ────────────────────────────────────────────────────
const DISCLAIMER_SECTIONS = [
  {
    icon: <IoScaleOutline size={22} />,
    title: 'General Information',
    body: 'The information provided on I Know Tech World is for general informational and educational purposes only. While we strive to provide accurate and updated information, we make no guarantees regarding the completeness, reliability, or accuracy of any content.',
  },
  {
    icon: <IoWarningOutline size={22} />,
    title: 'Professional Disclaimer',
    body: 'The content on this website should not be considered professional financial, legal, medical, or technical advice. Users should conduct their own research before making purchasing or technical decisions.',
  },
  {
    icon: <IoCashOutline size={22} />,
    title: 'Affiliate Disclaimer',
    body: 'Some articles may contain affiliate links. This means we may earn a small commission if you purchase products through those links, at no extra cost to you. These commissions help support the website.',
  },
  {
    icon: <IoLinkOutline size={22} />,
    title: 'External Links Disclaimer',
    body: 'Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites.',
  },
  {
    icon: <IoShieldOutline size={22} />,
    title: 'Use at Your Own Risk',
    body: 'Any action you take based on information from this website is strictly at your own risk. I Know Tech World will not be liable for any losses or damages related to the use of our website.',
  },
]

// ─── Stats ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: '100%', label: 'Affiliate transparency' },
  { value: '0%', label: 'Sponsored content' },
  { value: 'Always', label: 'Do your own research' },
  { value: 'Honest', label: 'Our only policy' },
]

// ─── Key Points (similar to Values section) ─────────────────────────────────
const KEY_POINTS = [
  {
    icon: <IoDocumentTextOutline size={22} />,
    title: 'For education only',
    body: 'Our content is meant to inform and educate — not replace professional advice.',
  },
  {
    icon: <IoCashOutline size={22} />,
    title: 'Affiliate honesty',
    body: 'We only recommend products we genuinely believe in. Commissions keep the lights on.',
  },
  {
    icon: <IoSearchOutline size={22} />,
    title: 'Do your own research',
    body: 'Prices change, deals expire, and needs vary. Always double-check before buying.',
  },
]

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors duration-300">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background accent — consistent gradient */}
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
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
            Legal
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            <span className="text-amber-600 dark:text-amber-500">Disclaimer.</span>
            <br />
            Read{' '}
            <span className="text-blue-600 dark:text-blue-400">before you act.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Last Updated: {LAST_UPDATED}
          </p>
          <p className="text-md text-gray-400 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
            The information provided on I Know Tech World is for general informational and educational purposes only.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                {value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN DISCLAIMER SECTIONS (card grid) ─────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Please read carefully
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              What you need to know
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Transparency is our policy. Here's the fine print — written in plain English.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {DISCLAIMER_SECTIONS.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-amber-600 dark:text-amber-500">{icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY POINTS (similar to Values section on About page) ──────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
            The bottom line
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            We keep it real
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            No hidden agendas. No fake reviews. Just honest opinions and clear disclaimers.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {KEY_POINTS.map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <span className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500">
                {icon}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WARNING / VISUAL CARD (similar to About page card stack) ──── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-3">
                Important note
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
                Use at your own risk
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Any action you take based on information from this website is strictly at your own risk.
                I Know Tech World will not be liable for any losses or damages related to the use of our website.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-500">
                <IoWarningOutline size={18} />
                <span>Always verify before making purchasing decisions</span>
              </div>
            </div>

            {/* Visual card stack */}
            <div className="relative h-72 md:h-80 hidden md:block">
              <div
                className="absolute inset-x-8 top-4 h-full rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900"
                style={{ transform: 'rotate(3deg)' }}
                aria-hidden
              />
              <div
                className="absolute inset-x-4 top-2 h-full rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60"
                style={{ transform: 'rotate(-1.5deg)' }}
                aria-hidden
              />
              <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    ik
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">iknowtechworld</p>
                    <p className="text-xs text-gray-400">iknowtechworld.online</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Prices change. Deals expire.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Affiliate links = we earn a commission
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Your research = your responsibility
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Transparency first</span>
                  <span className="text-amber-600 dark:text-amber-500 font-semibold">Read carefully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Check out our Privacy Policy or reach out through our contact page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/legal/privacy-policy"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Read Privacy Policy <IoArrowForward size={16} />
            </Link>
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}