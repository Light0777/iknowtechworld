import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
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

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iknowtechworld.online'

export const metadata: Metadata = {
  title: 'Terms and Conditions | I Know Tech World',
  description:
    'The rules for using I Know Tech World: content use, intellectual property, user responsibility, liability limits, and how to contact us.',
  keywords: [
    'terms and conditions',
    'terms of use',
    'I Know Tech World terms',
  ],
  authors: [{ name: 'I Know Tech World Team' }],
  creator: 'I Know Tech World',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms and Conditions | I Know Tech World',
    description:
      'Plain-English terms: content use, intellectual property, and user responsibility.',
    url: `${BASE_URL}/legal/terms`,
    siteName: 'I Know Tech World',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms and Conditions | I Know Tech World',
    description: 'Plain-English terms for using I Know Tech World.',
  },
  alternates: {
    canonical: `${BASE_URL}/legal/terms`,
  },
}

// ─── Last Updated Date ──────────────────────────────────────────────────────
const LAST_UPDATED = 'May 7, 2026'

// ─── Terms Sections ─────────────────────────────────────────────────────────
const TERMS_SECTIONS = [
  {
    icon: <IoDocumentTextOutline size={22} aria-hidden="true" />,
    title: 'Use of Content',
    body: 'All content published on this website is for informational purposes only. You may not copy or republish content without permission, use our content for illegal purposes, or attempt to harm or disrupt the website.',
  },
  {
    icon: <IoLockClosedOutline size={22} aria-hidden="true" />,
    title: 'Intellectual Property',
    body: 'All articles, branding, logos, and website content belong to I Know Tech World unless otherwise stated.',
  },
  {
    icon: <IoPersonOutline size={22} aria-hidden="true" />,
    title: 'User Responsibility',
    body: 'Users are responsible for how they use the information provided on this website.',
  },
  {
    icon: <IoLinkOutline size={22} aria-hidden="true" />,
    title: 'External Links',
    body: 'We may link to third-party websites for additional resources or references. We are not responsible for those external websites.',
  },
  {
    icon: <IoWarningOutline size={22} aria-hidden="true" />,
    title: 'Limitation of Liability',
    body: 'We are not responsible for any damages, losses, or issues resulting from the use of this website.',
  },
  {
    icon: <IoRefreshOutline size={22} aria-hidden="true" />,
    title: 'Changes to Terms',
    body: 'We may update these Terms and Conditions at any time without notice.',
  },
  {
    icon: <IoMailOutline size={22} aria-hidden="true" />,
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

const EYEBROW = 'text-[11px] font-medium uppercase tracking-[0.08em]'

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms and Conditions | I Know Tech World',
            url: `${BASE_URL}/legal/terms`,
            description:
              'Rules for using I Know Tech World: content use, intellectual property, and liability.',
            dateModified: '2026-05-07',
          }),
        }}
      />

      <div className="mx-auto max-w-[1400px] px-4 md:px-[5.5rem]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="terms-heading"
          className="flex flex-col items-center px-6 pb-16 pt-14 text-center md:pb-20 md:pt-20"
        >
          <p className={`${EYEBROW} mb-5 text-neutral-700 dark:text-neutral-300`}>
            Legal agreement
          </p>
          <h1
            id="terms-heading"
            className="max-w-3xl font-serif text-5xl leading-[1.12] tracking-tight text-balance md:text-[64px]"
          >
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            Last updated: {LAST_UPDATED}. Welcome to I Know Tech World. By
            accessing this website, you agree to comply with these Terms and
            Conditions.
          </p>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section
          aria-label="Terms at a glance"
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
          aria-labelledby="terms-sections"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Agreement details
            </p>
            <h2
              id="terms-sections"
              className="mx-auto mt-2 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              What you are agreeing to
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              These terms protect both you and us. Please read them carefully.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {TERMS_SECTIONS.map(({ icon, title, body }) => (
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
              In plain English
            </p>
            <h2
              id="key-points"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              Here is what matters
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              No legal jargon. Just the key points you actually need to know.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: <IoCheckmarkCircleOutline size={22} aria-hidden="true" />,
                title: 'By using, you agree',
                body: 'Accessing this website means you accept these Terms and Conditions in full.',
              },
              {
                icon: <IoDocumentTextOutline size={22} aria-hidden="true" />,
                title: 'Content is ours',
                body: 'All articles, logos, and branding are owned by I Know Tech World.',
              },
              {
                icon: <IoWarningOutline size={22} aria-hidden="true" />,
                title: 'Use at your own risk',
                body: 'We are not liable for how you use the information on this site.',
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

        {/* ── AGREEMENT NOTE ───────────────────────────────────── */}
        <section
          aria-labelledby="agreement"
          className="mt-24 rounded-3xl bg-neutral-100 px-6 py-16 dark:bg-neutral-900"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Important
            </p>
            <h2
              id="agreement"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              By using this site, you agree
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              Every time you visit I Know Tech World, you are agreeing to these
              Terms and Conditions. If you do not agree, please discontinue use
              of the website. Last updated: {LAST_UPDATED}.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">
              <IoCheckmarkCircleOutline size={18} aria-hidden="true" />
              Continued use means continued agreement
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="terms-cta"
          className="mt-24 border-t border-neutral-200 py-16 text-center dark:border-neutral-800"
        >
          <h2
            id="terms-cta"
            className="font-serif text-4xl leading-tight tracking-tight text-balance"
          >
            Have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            We are here to help. Reach out if anything is unclear.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Contact Us <IoArrowForward size={16} aria-hidden="true" />
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
