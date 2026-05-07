// app/privacy-policy/page.tsx (or app/privacy/page.tsx)
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoDocumentTextOutline,
  IoCodeOutline,
  IoShareSocialOutline,
  IoLinkOutline,
  IoShieldOutline,
  IoPeopleOutline,
  IoRefreshOutline,
  IoMailOutline,
} from 'react-icons/io5'

// ─── Last Updated Date ──────────────────────────────────────────────────────
const LAST_UPDATED = 'May 7, 2026'

// ─── Privacy Sections ───────────────────────────────────────────────────────
const PRIVACY_SECTIONS = [
  {
    icon: <IoDocumentTextOutline size={22} />,
    title: 'Information We Collect',
    body: 'We may collect basic visitor analytics, browser type and device information, cookies for website functionality and analytics, and email information if you contact us directly. We do not sell your personal information.',
  },
  {
    icon: <IoCodeOutline size={22} />,
    title: 'Cookies',
    body: 'Our website may use cookies to improve user experience, analyze website traffic, and display personalized advertisements in the future through services like Google AdSense. You can disable cookies through your browser settings.',
  },
  {
    icon: <IoShareSocialOutline size={22} />,
    title: 'Third-Party Services',
    body: 'We may use third-party services such as Google Analytics, Google AdSense, and Affiliate programs. These services may collect information according to their own privacy policies.',
  },
  {
    icon: <IoLinkOutline size={22} />,
    title: 'External Links',
    body: 'Our articles may contain links to external websites. We are not responsible for the content or privacy practices of third-party websites.',
  },
  {
    icon: <IoShieldOutline size={22} />,
    title: 'Data Protection',
    body: 'We take reasonable measures to protect user information, but no online platform can guarantee complete security.',
  },
  {
    icon: <IoPeopleOutline size={22} />,
    title: "Children's Privacy",
    body: 'This website is not directed toward children under 13 years of age.',
  },
  {
    icon: <IoRefreshOutline size={22} />,
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy at any time without prior notice.',
  },
  {
    icon: <IoMailOutline size={22} />,
    title: 'Contact',
    body: 'If you have any questions regarding this Privacy Policy, please contact us through our Contact Page.',
  },
]

// ─── Stats (matching About page styling) ────────────────────────────────────
const STATS = [
  { value: '0', label: 'Personal data sold' },
  { value: '100%', label: 'Commitment to transparency' },
  { value: '24/7', label: 'Policy accessible' },
  { value: '1', label: 'Simple, clear language' },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors duration-300">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background accent — consistent with About page */}
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
            Privacy{' '}
            <span className="text-blue-600 dark:text-blue-400">Policy.</span>
            <br />
            Your data,{' '}
            <span className="text-teal-500 dark:text-teal-400">your trust.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Last Updated: {LAST_UPDATED}
          </p>
          <p className="text-md text-gray-400 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
            Welcome to I Know Tech World. Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── (reassurance stats, matching About page style) */}
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

      {/* ── MAIN CONTENT (Privacy sections in card grid, similar to "What we cover" layout) */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Our commitment
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              How we handle your information
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              We believe in transparency, simplicity, and respecting your privacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRIVACY_SECTIONS.map(({ icon, title, body }) => (
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

      {/* ── SUMMARY / REASSURANCE SECTION (similar to "Values" on About page) */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
            The bottom line
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            No surprises. No data selling.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            We keep things simple because we value your trust above all else.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <IoShieldOutline size={22} />
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">We don't sell data</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Your personal information is yours. We never sell it to anyone.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <IoCodeOutline size={22} />
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">You control cookies</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Disable cookies anytime through your browser settings.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <IoRefreshOutline size={22} />
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">Updates are rare</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              If we change this policy, we'll note the date at the top.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── (consistent with About page, linking to Contact) */}
      <section className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Have questions?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            We're here to help. Reach out through our contact page anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Go to Contact Page <IoArrowForward size={16} />
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