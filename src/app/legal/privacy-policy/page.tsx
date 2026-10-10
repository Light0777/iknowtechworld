import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
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

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iknowtechworld.online'

export const metadata: Metadata = {
  title: 'Privacy Policy | I Know Tech World',
  description:
    'How I Know Tech World collects, uses, and protects your information. No data selling, transparent cookies, and clear opt-outs.',
  keywords: [
    'privacy policy',
    'I Know Tech World privacy',
    'data protection',
    'cookies',
  ],
  authors: [{ name: 'I Know Tech World Team' }],
  creator: 'I Know Tech World',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy | I Know Tech World',
    description:
      'No data selling, transparent cookies, and clear opt-outs. Your data, your trust.',
    url: `${BASE_URL}/legal/privacy-policy`,
    siteName: 'I Know Tech World',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | I Know Tech World',
    description: 'No data selling, transparent cookies, and clear opt-outs.',
  },
  alternates: {
    canonical: `${BASE_URL}/legal/privacy-policy`,
  },
}

// ─── Last Updated Date ──────────────────────────────────────────────────────
const LAST_UPDATED = 'May 7, 2026'

// ─── Privacy Sections ───────────────────────────────────────────────────────
const PRIVACY_SECTIONS = [
  {
    icon: <IoDocumentTextOutline size={22} aria-hidden="true" />,
    title: 'Information We Collect',
    body: 'We may collect basic visitor analytics, browser type and device information, cookies for website functionality and analytics, and email information if you contact us directly. We do not sell your personal information.',
  },
  {
    icon: <IoCodeOutline size={22} aria-hidden="true" />,
    title: 'Cookies',
    body: 'Our website may use cookies to improve user experience, analyze website traffic, and display personalized advertisements in the future through services like Google AdSense. You can disable cookies through your browser settings.',
  },
  {
    icon: <IoShareSocialOutline size={22} aria-hidden="true" />,
    title: 'Third-Party Services',
    body: 'We may use third-party services such as Google Analytics, Google AdSense, and Affiliate programs. These services may collect information according to their own privacy policies.',
  },
  {
    icon: <IoLinkOutline size={22} aria-hidden="true" />,
    title: 'External Links',
    body: 'Our articles may contain links to external websites. We are not responsible for the content or privacy practices of third-party websites.',
  },
  {
    icon: <IoShieldOutline size={22} aria-hidden="true" />,
    title: 'Data Protection',
    body: 'We take reasonable measures to protect user information, but no online platform can guarantee complete security.',
  },
  {
    icon: <IoPeopleOutline size={22} aria-hidden="true" />,
    title: "Children's Privacy",
    body: 'This website is not directed toward children under 13 years of age.',
  },
  {
    icon: <IoRefreshOutline size={22} aria-hidden="true" />,
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy at any time without prior notice.',
  },
  {
    icon: <IoMailOutline size={22} aria-hidden="true" />,
    title: 'Contact',
    body: 'If you have any questions regarding this Privacy Policy, please contact us through our Contact Page.',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '0', label: 'Personal data sold' },
  { value: '100%', label: 'Commitment to transparency' },
  { value: '24/7', label: 'Policy accessible' },
  { value: '1', label: 'Simple, clear language' },
]

const EYEBROW = 'text-[11px] font-medium uppercase tracking-[0.08em]'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy | I Know Tech World',
            url: `${BASE_URL}/legal/privacy-policy`,
            description:
              'How I Know Tech World collects, uses, and protects your information.',
            dateModified: '2026-05-07',
          }),
        }}
      />

      <div className="mx-auto max-w-[1400px] px-4 md:px-[5.5rem]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="privacy-heading"
          className="flex flex-col items-center px-6 pb-16 pt-14 text-center md:pb-20 md:pt-20"
        >
          <p className={`${EYEBROW} mb-5 text-neutral-700 dark:text-neutral-300`}>
            Legal
          </p>
          <h1
            id="privacy-heading"
            className="max-w-3xl font-serif text-5xl leading-[1.12] tracking-tight text-balance md:text-[64px]"
          >
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            Last updated: {LAST_UPDATED}. Welcome to I Know Tech World. Your
            privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section
          aria-label="Privacy commitments"
          className="border-y border-neutral-200 py-10 dark:border-neutral-800"
        >
          <dl className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <dt className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {label}
                </dt>
                <dd className="font-serif text-4xl tracking-tight tabular-nums">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── SECTIONS ─────────────────────────────────────────── */}
        <section
          aria-labelledby="privacy-sections"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Our commitment
            </p>
            <h2
              id="privacy-sections"
              className="mx-auto mt-2 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              How we handle your information
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              We believe in transparency, simplicity, and respecting your
              privacy.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {PRIVACY_SECTIONS.map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <span className="text-neutral-900 dark:text-white">{icon}</span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM LINE ──────────────────────────────────────── */}
        <section
          aria-labelledby="bottom-line"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              The bottom line
            </p>
            <h2
              id="bottom-line"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              No surprises. No data selling.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              We keep things simple because we value your trust above all else.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: <IoShieldOutline size={22} aria-hidden="true" />,
                title: "We don't sell data",
                body: 'Your personal information is yours. We never sell it to anyone.',
              },
              {
                icon: <IoCodeOutline size={22} aria-hidden="true" />,
                title: 'You control cookies',
                body: 'Disable cookies anytime through your browser settings.',
              },
              {
                icon: <IoRefreshOutline size={22} aria-hidden="true" />,
                title: 'Updates are rare',
                body: "If we change this policy, we'll note the date at the top.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="rounded-2xl bg-neutral-100 p-3 text-neutral-900 dark:bg-neutral-900 dark:text-white">
                  {icon}
                </span>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="privacy-cta"
          className="mt-24 flex flex-col items-center rounded-3xl bg-neutral-100 px-6 py-16 text-center dark:bg-neutral-900"
        >
          <h2
            id="privacy-cta"
            className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
          >
            Have questions?
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            We are here to help. Reach out through our contact page anytime.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Go to Contact Page <IoArrowForward size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
