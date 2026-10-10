import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
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

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iknowtechworld.online'

export const metadata: Metadata = {
  title: 'Disclaimer | I Know Tech World',
  description:
    'The content on I Know Tech World is for general informational and educational purposes only. Read our affiliate, external link, and liability disclaimers.',
  keywords: [
    'disclaimer',
    'affiliate disclosure',
    'I Know Tech World disclaimer',
  ],
  authors: [{ name: 'I Know Tech World Team' }],
  creator: 'I Know Tech World',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Disclaimer | I Know Tech World',
    description:
      'For education only. Affiliate honesty. Do your own research before acting.',
    url: `${BASE_URL}/legal/disclaimer`,
    siteName: 'I Know Tech World',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Disclaimer | I Know Tech World',
    description: 'For education only. Do your own research before acting.',
  },
  alternates: {
    canonical: `${BASE_URL}/legal/disclaimer`,
  },
}

// ─── Last Updated Date ──────────────────────────────────────────────────────
const LAST_UPDATED = 'May 7, 2026'

// ─── Disclaimer Sections ────────────────────────────────────────────────────
const DISCLAIMER_SECTIONS = [
  {
    icon: <IoScaleOutline size={22} aria-hidden="true" />,
    title: 'General Information',
    body: 'The information provided on I Know Tech World is for general informational and educational purposes only. While we strive to provide accurate and updated information, we make no guarantees regarding the completeness, reliability, or accuracy of any content.',
  },
  {
    icon: <IoWarningOutline size={22} aria-hidden="true" />,
    title: 'Professional Disclaimer',
    body: 'The content on this website should not be considered professional financial, legal, medical, or technical advice. Users should conduct their own research before making purchasing or gaming decisions.',
  },
  {
    icon: <IoCashOutline size={22} aria-hidden="true" />,
    title: 'Affiliate Disclaimer',
    body: 'Some articles may contain affiliate links. This means we may earn a small commission if you purchase products through those links, at no extra cost to you. These commissions help support the website.',
  },
  {
    icon: <IoLinkOutline size={22} aria-hidden="true" />,
    title: 'External Links Disclaimer',
    body: 'Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites.',
  },
  {
    icon: <IoShieldOutline size={22} aria-hidden="true" />,
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

const EYEBROW = 'text-[11px] font-medium uppercase tracking-[0.08em]'

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Script
        id="disclaimer-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Disclaimer | I Know Tech World',
            url: `${BASE_URL}/legal/disclaimer`,
            description:
              'General information, affiliate, external link, and liability disclaimers.',
            dateModified: '2026-05-07',
          }),
        }}
      />

      <div className="mx-auto max-w-[1400px] px-4 md:px-[5.5rem]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="disclaimer-heading"
          className="flex flex-col items-center px-6 pb-16 pt-14 text-center md:pb-20 md:pt-20"
        >
          <p className={`${EYEBROW} mb-5 text-neutral-700 dark:text-neutral-300`}>
            Legal
          </p>
          <h1
            id="disclaimer-heading"
            className="max-w-3xl font-serif text-5xl leading-[1.12] tracking-tight text-balance md:text-[64px]"
          >
            Disclaimer
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            Last updated: {LAST_UPDATED}. The information provided on I Know
            Tech World is for general informational and educational purposes
            only.
          </p>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section
          aria-label="Disclosure facts"
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
          aria-labelledby="disclaimer-sections"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Please read carefully
            </p>
            <h2
              id="disclaimer-sections"
              className="mx-auto mt-2 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              What you need to know
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              Transparency is our policy. Here is the fine print, written in
              plain English.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {DISCLAIMER_SECTIONS.map(({ icon, title, body }) => (
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

        {/* ── KEY POINTS ───────────────────────────────────────── */}
        <section
          aria-labelledby="key-points"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              The bottom line
            </p>
            <h2
              id="key-points"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              We keep it real
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              No hidden agendas. No fake reviews. Just honest opinions and
              clear disclaimers.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: <IoDocumentTextOutline size={22} aria-hidden="true" />,
                title: 'For education only',
                body: 'Our content is meant to inform and educate, not replace professional advice.',
              },
              {
                icon: <IoCashOutline size={22} aria-hidden="true" />,
                title: 'Affiliate honesty',
                body: 'We only recommend products we genuinely believe in. Commissions keep the lights on.',
              },
              {
                icon: <IoSearchOutline size={22} aria-hidden="true" />,
                title: 'Do your own research',
                body: 'Prices change, deals expire, and needs vary. Always double-check before buying.',
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

        {/* ── RISK NOTE ────────────────────────────────────────── */}
        <section
          aria-labelledby="risk-note"
          className="mt-24 grid items-center gap-12 md:grid-cols-2 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="min-w-0">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Important note
            </p>
            <h2
              id="risk-note"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              Use at your own risk
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              Any action you take based on information from this website is
              strictly at your own risk. I Know Tech World will not be liable
              for any losses or damages related to the use of our website.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">
              <IoWarningOutline size={18} aria-hidden="true" />
              Always verify before making purchasing decisions
            </p>
          </div>
          <div
            aria-hidden="true"
            className="rounded-2xl border border-neutral-200 bg-neutral-100 p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p>Prices change. Deals expire.</p>
              <p>Affiliate links mean we earn a commission.</p>
              <p>Your research is your responsibility.</p>
            </div>
            <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
              Transparency first. Read carefully.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="disclaimer-cta"
          className="mt-24 flex flex-col items-center rounded-3xl bg-neutral-100 px-6 py-16 text-center dark:bg-neutral-900"
        >
          <h2
            id="disclaimer-cta"
            className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
          >
            Still have questions?
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            Check out our Privacy Policy or reach out through our contact page.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/legal/privacy-policy"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Read Privacy Policy <IoArrowForward size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
