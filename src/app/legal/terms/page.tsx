// app/terms-and-conditions/page.tsx (or app/terms/page.tsx)
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoDocumentTextOutline,
  IoLockClosedOutline,
  IoPersonOutline,
  IoLinkOutline,
  IoWarningOutline,
  IoRefreshOutline,
  IoMailOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5'

// ─── Last Updated Date ──────────────────────────────────────────────────────
const LAST_UPDATED = 'May 7, 2026'

// ─── Terms Sections ─────────────────────────────────────────────────────────
const TERMS_SECTIONS = [
  {
    icon: <IoDocumentTextOutline size={22} />,
    title: 'Use of Content',
    body: 'All content published on this website is for informational purposes only. You may not copy or republish content without permission, use our content for illegal purposes, or attempt to harm or disrupt the website.',
  },
  {
    icon: <IoLockClosedOutline size={22} />,
    title: 'Intellectual Property',
    body: 'All articles, branding, logos, and website content belong to I Know Tech World unless otherwise stated.',
  },
  {
    icon: <IoPersonOutline size={22} />,
    title: 'User Responsibility',
    body: 'Users are responsible for how they use the information provided on this website.',
  },
  {
    icon: <IoLinkOutline size={22} />,
    title: 'External Links',
    body: 'We may link to third-party websites for additional resources or references. We are not responsible for those external websites.',
  },
  {
    icon: <IoWarningOutline size={22} />,
    title: 'Limitation of Liability',
    body: 'We are not responsible for any damages, losses, or issues resulting from the use of this website.',
  },
  {
    icon: <IoRefreshOutline size={22} />,
    title: 'Changes to Terms',
    body: 'We may update these Terms and Conditions at any time without notice.',
  },
  {
    icon: <IoMailOutline size={22} />,
    title: 'Contact',
    body: 'If you have questions about these Terms and Conditions, please contact us through our Contact Page.',
  },
]

// ─── Stats ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: 'Read', label: 'Before using' },
  { value: '100%', label: 'Transparency' },
  { value: 'Your', label: 'Responsibility' },
  { value: 'Always', label: 'Updated' },
]

// ─── Key Points (similar to Values section) ─────────────────────────────────
const KEY_POINTS = [
  {
    icon: <IoCheckmarkCircleOutline size={22} />,
    title: 'By using, you agree',
    body: 'Accessing this website means you accept these Terms and Conditions in full.',
  },
  {
    icon: <IoDocumentTextOutline size={22} />,
    title: 'Content is ours',
    body: 'All articles, logos, and branding are owned by I Know Tech World.',
  },
  {
    icon: <IoWarningOutline size={22} />,
    title: 'Use at your own risk',
    body: 'We are not liable for how you use the information on this site.',
  },
]

export default function TermsAndConditionsPage() {
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
            Legal Agreement
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            Terms and{' '}
            <span className="text-blue-600 dark:text-blue-400">Conditions.</span>
            <br />
            Read{' '}
            <span className="text-teal-500 dark:text-teal-400">before you browse.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Last Updated: {LAST_UPDATED}
          </p>
          <p className="text-md text-gray-400 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
            Welcome to I Know Tech World. By accessing this website, you agree to comply with these Terms and Conditions.
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

      {/* ── MAIN TERMS SECTIONS (card grid) ──────────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Agreement details
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              What you're agreeing to
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              These terms protect both you and us. Please read them carefully.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {TERMS_SECTIONS.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-blue-600 dark:text-blue-400">{icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY POINTS (similar to Values section) ───────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
            In plain English
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Here's what matters
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            No legal jargon. Just the key points you actually need to know.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {KEY_POINTS.map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                {icon}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISUAL CARD STACK (similar to About page) ────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
                Important
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
                By using this site, you agree
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Every time you visit I Know Tech World, you're agreeing to these Terms and Conditions.
                If you don't agree, please discontinue use of the website.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <IoCheckmarkCircleOutline size={18} />
                <span>Continued use = continued agreement</span>
              </div>
            </div>

            {/* Visual card stack */}
            <div className="relative h-72 md:h-80 hidden md:block">
              <div
                className="absolute inset-x-8 top-4 h-full rounded-2xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900"
                style={{ transform: 'rotate(3deg)' }}
                aria-hidden
              />
              <div
                className="absolute inset-x-4 top-2 h-full rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60"
                style={{ transform: 'rotate(-1.5deg)' }}
                aria-hidden
              />
              <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    ik
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">iknowtechworld</p>
                    <p className="text-xs text-gray-400">iknowtechworld.online</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    Terms apply to all users
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    Content is our intellectual property
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    We may update terms anytime
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Last updated: {LAST_UPDATED}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Agree to continue</span>
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
            Have questions?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            We're here to help. Reach out if anything is unclear.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Contact Us <IoArrowForward size={16} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}