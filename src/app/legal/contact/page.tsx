import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoMailOutline,
  IoChatbubbleEllipsesOutline,
  IoTimeOutline,
  IoGameControllerOutline,
  IoBulbOutline,
  IoRocketOutline,
  IoTrendingUpOutline,
  IoCheckmarkCircleOutline,
  IoFlashOutline,
} from 'react-icons/io5'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iknowtechworld.online'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch With I Know Tech World',
  description:
    'Questions, feedback, or collaboration ideas? Contact the I Know Tech World team. We reply to every message personally, usually within 24 to 72 hours.',
  keywords: [
    'contact I Know Tech World',
    'gaming blog contact',
    'collaboration',
    'feedback',
  ],
  authors: [{ name: 'I Know Tech World Team' }],
  creator: 'I Know Tech World',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Contact I Know Tech World',
    description:
      'Questions, feedback, or collaboration ideas? We reply to every message personally.',
    url: `${BASE_URL}/legal/contact`,
    siteName: 'I Know Tech World',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact I Know Tech World',
    description:
      'Questions, feedback, or collaboration ideas? We reply to every message personally.',
  },
  alternates: {
    canonical: `${BASE_URL}/legal/contact`,
  },
}

// ─── Contact Email ─────────────────────────────────────────────────────────
const CONTACT_EMAIL = 'lightyagami7502@gmail.com'

// ─── Topics ────────────────────────────────────────────────────────────────
const TOPICS_COVERED = [
  {
    icon: <IoGameControllerOutline size={22} aria-hidden="true" />,
    title: 'Game Reviews',
    body: 'Honest, in-depth reviews of AAA blockbusters and hidden indie gems.',
  },
  {
    icon: <IoBulbOutline size={22} aria-hidden="true" />,
    title: 'Walkthroughs & Guides',
    body: 'Step-by-step guides for boss fights, collectibles, and 100% completion.',
  },
  {
    icon: <IoFlashOutline size={22} aria-hidden="true" />,
    title: 'Gaming News & Tips',
    body: 'Latest patches, meta changes, pro strategies, and insider tips.',
  },
  {
    icon: <IoTrendingUpOutline size={22} aria-hidden="true" />,
    title: 'Indie Spotlights',
    body: 'Hidden gems and rising indie games that deserve your attention.',
  },
  {
    icon: <IoRocketOutline size={22} aria-hidden="true" />,
    title: 'Game Strategies',
    body: 'Meta builds, speedrun routes, and competitive play guides.',
  },
  {
    icon: <IoCheckmarkCircleOutline size={22} aria-hidden="true" />,
    title: 'Upcoming Releases',
    body: 'Previews, release dates, and what to watch for each month.',
  },
]

// ─── Stats ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: '24-72', label: 'Hour response time' },
  { value: '100%', label: 'Real human replies' },
  { value: '7', label: 'Topics covered' },
  { value: 'Zero', label: 'Spam, ever' },
]

const EYEBROW = 'text-[11px] font-medium uppercase tracking-[0.08em]'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact I Know Tech World',
            url: `${BASE_URL}/legal/contact`,
            description:
              'Contact the I Know Tech World team with questions, feedback, or collaboration ideas.',
          }),
        }}
      />

      <div className="mx-auto max-w-[1400px] px-4 md:px-[5.5rem]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="contact-heading"
          className="flex flex-col items-center px-6 pb-16 pt-14 text-center md:pb-20 md:pt-20"
        >
          <p className={`${EYEBROW} mb-5 text-neutral-700 dark:text-neutral-300`}>
            Get in touch
          </p>
          <h1
            id="contact-heading"
            className="max-w-3xl font-serif text-5xl leading-[1.12] tracking-tight text-balance md:text-[64px]"
          >
            Let us talk
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            Thank you for visiting I Know Tech World. If you have any
            questions, feedback, business inquiries, or collaboration
            opportunities, feel free to reach out.
          </p>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section
          aria-label="Contact facts"
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

        {/* ── EMAIL ────────────────────────────────────────────── */}
        <section
          aria-labelledby="general-inquiries"
          className="mt-24 grid items-center gap-12 md:grid-cols-2"
        >
          <div className="min-w-0">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Reach out
            </p>
            <h2
              id="general-inquiries"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              General inquiries
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              Have a question, collaboration idea, or just want to say hi?
            </p>
            <div className="mt-4 flex items-center gap-3">
              <IoMailOutline
                aria-hidden="true"
                size={24}
                className="shrink-0 text-neutral-900 dark:text-white"
              />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-white dark:decoration-neutral-700 dark:focus-visible:ring-white"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <IoTimeOutline size={18} aria-hidden="true" />
              Response time: 24 to 72 hours
            </p>
          </div>
          <div aria-hidden="true" className="relative hidden h-72 md:block">
            <div className="absolute inset-x-4 top-2 h-full -rotate-1 rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900" />
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
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                We reply to every message personally. No auto-responders, no
                bots.
              </p>
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Your privacy matters</span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  We listen
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPICS ───────────────────────────────────────────── */}
        <section
          aria-labelledby="topics"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              Our focus
            </p>
            <h2
              id="topics"
              className="mx-auto mt-2 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              What we cover at I Know Tech World
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              We publish content across these topics. Always honest, always
              player-first.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS_COVERED.map(({ icon, title, body }) => (
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

        {/* ── EXPECTATIONS ─────────────────────────────────────── */}
        <section
          aria-labelledby="expectations"
          className="mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
        >
          <div className="mb-10 text-center">
            <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
              What to expect
            </p>
            <h2
              id="expectations"
              className="mt-2 font-serif text-4xl leading-tight tracking-tight text-balance"
            >
              We are here to help
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: <IoTimeOutline size={22} aria-hidden="true" />,
                title: '24 to 72 hour response',
                body: "We aim to reply within a day. Sometimes it takes a bit longer, but you'll always hear back.",
              },
              {
                icon: <IoChatbubbleEllipsesOutline size={22} aria-hidden="true" />,
                title: 'Real humans only',
                body: 'No AI chatbots. No automated replies. Just actual people who read every word.',
              },
              {
                icon: <IoMailOutline size={22} aria-hidden="true" />,
                title: 'Your data stays private',
                body: 'We never share your email or information with anyone. Period.',
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
          aria-labelledby="contact-cta"
          className="mt-24 flex flex-col items-center rounded-3xl bg-neutral-100 px-6 py-16 text-center dark:bg-neutral-900"
        >
          <h2
            id="contact-cta"
            className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance"
          >
            While you wait
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            Check out our latest guides and builds. Free, honest, and actually
            useful.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/#latest"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Browse articles <IoArrowForward size={16} aria-hidden="true" />
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
