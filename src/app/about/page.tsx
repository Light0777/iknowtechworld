import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoGameControllerOutline,
  IoHardwareChipOutline,
  IoBulbOutline,
  IoFlashOutline,
  IoConstructOutline,
  IoGitCompareOutline,
  IoBookOutline,
  IoPersonOutline,
  IoRocketOutline,
  IoStarOutline,
  IoWalletOutline,
  IoSchoolOutline,
  IoCashOutline,
  IoRefreshOutline,
  IoSwapHorizontalOutline,
  IoShieldCheckmarkOutline,
  IoHeartOutline,
} from 'react-icons/io5'
import {
  whatWeCoverSection,
  hardwareSection,
  featuredGuidesSection,
  trustSection,
  newsletterSection,
} from '@/content/aboutSections'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iknowtechworld.online'

// ─── On-page SEO ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About Us | Honest Game Reviews, Guides & Gaming News',
  description:
    'I Know Tech World is a player-first gaming blog with honest game reviews, walkthroughs, gaming news, and hardware guides. No sponsored bias, no paywalls, always updated.',
  keywords: [
    'about I Know Tech World',
    'gaming blog',
    'honest game reviews',
    'game walkthroughs',
    'gaming news',
    'gaming guides',
    'indie games',
    'gaming hardware guides',
  ],
  authors: [{ name: 'I Know Tech World Team' }],
  creator: 'I Know Tech World',
  publisher: 'I Know Tech World',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'About I Know Tech World | Honest Gaming Content, Not Paid Hype',
    description:
      'Player-first game reviews, walkthroughs, gaming news, and hardware guides. No sponsored bias, no paywalls.',
    url: `${BASE_URL}/about`,
    siteName: 'I Know Tech World',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About I Know Tech World | Honest Gaming Content',
    description:
      'Player-first game reviews, walkthroughs, gaming news, and hardware guides.',
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  category: 'games',
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '50+', label: 'Games covered' },
  { value: '10K+', label: 'Monthly readers' },
  { value: '15+', label: 'Game genres' },
  { value: '100%', label: 'Honest reviews' },
]

const EYEBROW = 'text-[11px] font-medium uppercase tracking-[0.08em]'

// Icon sets attached to the stashed section data (by index)
const COVER_ICONS = [
  <IoGameControllerOutline key="c0" size={22} aria-hidden="true" />,
  <IoBulbOutline key="c1" size={22} aria-hidden="true" />,
  <IoFlashOutline key="c2" size={22} aria-hidden="true" />,
  <IoConstructOutline key="c3" size={22} aria-hidden="true" />,
  <IoGitCompareOutline key="c4" size={22} aria-hidden="true" />,
  <IoHardwareChipOutline key="c5" size={22} aria-hidden="true" />,
]

const FEATURED_ICONS = [
  <IoBookOutline key="f0" size={20} aria-hidden="true" />,
  <IoBulbOutline key="f1" size={20} aria-hidden="true" />,
  <IoGameControllerOutline key="f2" size={20} aria-hidden="true" />,
  <IoPersonOutline key="f3" size={20} aria-hidden="true" />,
  <IoStarOutline key="f4" size={20} aria-hidden="true" />,
  <IoRocketOutline key="f5" size={20} aria-hidden="true" />,
]

const TRUST_ICONS = [
  <IoWalletOutline key="t0" size={22} aria-hidden="true" />,
  <IoSchoolOutline key="t1" size={22} aria-hidden="true" />,
  <IoCashOutline key="t2" size={22} aria-hidden="true" />,
  <IoRefreshOutline key="t3" size={22} aria-hidden="true" />,
  <IoSwapHorizontalOutline key="t4" size={22} aria-hidden="true" />,
  <IoShieldCheckmarkOutline key="t5" size={22} aria-hidden="true" />,
]

function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className="mb-10 text-center">
      <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mx-auto mt-2 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
      >
        {title}
      </h2>
      {intro && (
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          {intro}
        </p>
      )}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About I Know Tech World',
            url: `${BASE_URL}/about`,
            description:
              'Player-first game reviews, walkthroughs, gaming news, and hardware guides.',
            mainEntity: {
              '@type': 'Organization',
              name: 'I Know Tech World',
              url: BASE_URL,
              logo: `${BASE_URL}/favicon.ico`,
              sameAs: [
                'https://twitter.com/iknowtechworld',
                'https://pinterest.com/iknowtechworld',
              ],
            },
          }),
        }}
      />

      <div className="mx-auto max-w-[1400px] px-4 md:px-[5.5rem]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="about-heading"
          className="flex flex-col items-center px-6 pb-16 pt-14 text-center md:pb-20 md:pt-20"
        >
          <p className={`${EYEBROW} mb-5 text-neutral-700 dark:text-neutral-300`}>
            About I Know Tech World
          </p>
          <h1
            id="about-heading"
            className="max-w-3xl font-serif text-5xl leading-[1.12] tracking-tight text-balance md:text-[64px]"
          >
            Honest gaming content for real players
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            I Know Tech World was built for gamers tired of surface-level
            reviews and paywalled guides. We write honest, deep-dive content
            about the games you actually play, from AAA blockbusters to indie
            masterpieces.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#latest"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Browse all articles <IoArrowForward size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section
          aria-label="I Know Tech World in numbers"
          className="border-y border-neutral-200 py-10 dark:border-neutral-800"
        >
          <dl className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <dt className="order-2 mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {label}
                </dt>
                <dd className="order-1 font-serif text-4xl tracking-tight tabular-nums">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── STORY ────────────────────────────────────────────── */}
        <section
          aria-labelledby="story"
          className="mt-24 grid items-center gap-12 md:grid-cols-2"
        >
          <div className="min-w-0">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              The story
            </p>
            <h2
              id="story"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              Started recently. Already reaching readers worldwide.
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p>
                Most gaming sites are written by people who get early access
                and press kits. We started I Know Tech World because we were
                the other kind: the people who buy games on sale and still
                want to know if they are worth it.
              </p>
              <p>
                We cover games we genuinely play. No copy-pasted press
                releases, no AI-generated walkthroughs. Every article answers
                a real player question: is this game worth it, how do I beat
                this boss, where is that hidden collectible.
              </p>
              <p>
                If we would not recommend it to a friend, we do not publish
                it. That is the only strategy we have and the only one we
                need.
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="relative hidden h-80 md:block">
            <div className="absolute inset-x-8 top-4 h-full rotate-3 rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900" />
            <div className="absolute inset-x-4 top-2 h-full -rotate-1 rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60" />
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">
                  IK
                </div>
                <div>
                  <p className="text-sm font-bold">I Know Tech World</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    iknowtechworld.online
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {['Game reviews', 'Walkthroughs & guides', 'Gaming news & tips'].map(
                  (t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900 dark:bg-white" />
                      {t}
                    </div>
                  )
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Player-first, always</span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  No sponsored bias
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE COVER ────────────────────────────────────── */}
        <section
          aria-labelledby="what-we-cover"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <SectionHeading
            id="what-we-cover"
            eyebrow={whatWeCoverSection.eyebrow}
            title={whatWeCoverSection.heading}
            intro={whatWeCoverSection.intro}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeCoverSection.items.map(({ title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <span className="text-neutral-900 dark:text-white">
                  {COVER_ICONS[i % COVER_ICONS.length]}
                </span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HARDWARE ─────────────────────────────────────────── */}
        <section
          aria-labelledby="hardware"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="min-w-0">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              {hardwareSection.eyebrow}
            </p>
            <h2
              id="hardware"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              {hardwareSection.heading}
            </h2>
            {hardwareSection.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {hardwareSection.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  {chip}
                </span>
              ))}
            </div>
            <Link
              href="/#latest"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:text-white dark:focus-visible:ring-white"
            >
              Browse all guides <IoArrowForward size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ── FEATURED GUIDES ──────────────────────────────────── */}
        <section
          aria-labelledby="featured-guides"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <SectionHeading
            id="featured-guides"
            eyebrow={featuredGuidesSection.eyebrow}
            title={featuredGuidesSection.heading}
            intro={featuredGuidesSection.intro}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuidesSection.items.map(({ title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <span className="text-neutral-900 dark:text-white">
                  {FEATURED_ICONS[i % FEATURED_ICONS.length]}
                </span>
                <h3 className="mt-2 font-serif text-xl leading-snug">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST ────────────────────────────────────────────── */}
        <section
          aria-labelledby="why-trust-us"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <SectionHeading
            id="why-trust-us"
            eyebrow={trustSection.eyebrow}
            title={trustSection.heading}
            intro={trustSection.intro}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trustSection.items.map(({ title, body }, i) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="rounded-2xl bg-neutral-100 p-3 text-neutral-900 dark:bg-neutral-900 dark:text-white">
                  {TRUST_ICONS[i % TRUST_ICONS.length]}
                </span>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <IoHeartOutline size={16} aria-hidden="true" />
              <span>{trustSection.highlight}</span>
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
              {trustSection.closing}
            </p>
          </div>
        </section>

        {/* ── NEWSLETTER ───────────────────────────────────────── */}
        <section
          aria-labelledby="newsletter"
          className="mt-24 flex flex-col items-center rounded-3xl bg-neutral-100 px-6 py-16 text-center dark:bg-neutral-900"
        >
          <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
            {newsletterSection.eyebrow}
          </p>
          <h2
            id="newsletter"
            className="mt-2 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
          >
            {newsletterSection.heading}
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {newsletterSection.intro}
          </p>
          <a
            href={newsletterSection.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {newsletterSection.cta} <IoArrowForward size={16} aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-500">
            {newsletterSection.note}
          </p>
        </section>
      </div>

      <Footer />
    </div>
  )
}
