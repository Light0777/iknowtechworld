// app/contact/page.tsx
import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoMailOutline,
  IoChatbubbleEllipsesOutline,
  IoTimeOutline,
  IoGameControllerOutline,
  IoHardwareChipOutline,
  IoSchoolOutline,
  IoBulbOutline,
  IoRocketOutline,
  IoTrendingUpOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5'

// ─── Contact Email ─────────────────────────────────────────────────────────
const CONTACT_EMAIL = 'lightyagami7502@gmail.com'

// ─── What We Cover topics (matching About page card style) ─────────────────
const TOPICS_COVERED = [
  {
    icon: <IoHardwareChipOutline size={22} />,
    title: 'Technology',
    body: 'Latest tech trends, reviews, and explainers in plain English.',
  },
  {
    icon: <IoGameControllerOutline size={22} />,
    title: 'Gaming',
    body: 'Game reviews, setups, and performance guides for real budgets.',
  },
  {
    icon: <IoRocketOutline size={22} />,
    title: 'Budget PC Builds',
    body: 'Complete builds under ₹25K, ₹35K, ₹50K — no overspending.',
  },
  {
    icon: <IoBulbOutline size={22} />,
    title: 'AI Tools',
    body: 'Practical AI that actually helps you study, create, and work faster.',
  },
  {
    icon: <IoTrendingUpOutline size={22} />,
    title: 'Productivity',
    body: 'Apps, workflows, and habits that get things done.',
  },
  {
    icon: <IoSchoolOutline size={22} />,
    title: 'Student Tech',
    body: 'Gadgets and gear that won\'t wipe out your semester budget.',
  },
  {
    icon: <IoCheckmarkCircleOutline size={22} />,
    title: 'Digital Trends',
    body: 'What\'s worth knowing right now — no hype, just signal.',
  },
]

// ─── Stats ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: '24–72', label: 'Hours response time' },
  { value: '100%', label: 'Real human replies' },
  { value: '7', label: 'Topics covered' },
  { value: '∞', label: 'No spam, ever' },
]

export default function ContactPage() {
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
            Get in touch
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            Let's{' '}
            <span className="text-blue-600 dark:text-blue-400">talk.</span>
            <br />
            Questions?{' '}
            <span className="text-teal-500 dark:text-teal-400">Feedback?</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Thank you for visiting I Know Tech World. If you have any questions, feedback,
            business inquiries, or collaboration opportunities, feel free to reach out.
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

      {/* ── CONTACT INFO + EMAIL CARD ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* General Inquiries Text */}
          <div className="flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Reach out
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
              General Inquiries
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Have a question, collaboration idea, or just want to say hi?
            </p>
            <div className="flex items-center gap-3 text-lg">
              <IoMailOutline className="text-blue-600 dark:text-blue-400" size={28} />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4 text-gray-500 dark:text-gray-400">
              <IoTimeOutline size={20} className="text-gray-400" />
              <span className="text-sm">Response time: 24–72 hours</span>
            </div>
          </div>

          {/* Visual Card — similar to About page card stack */}
          <div className="relative h-72 md:h-auto hidden md:block">
            <div
              className="absolute inset-x-4 top-2 h-full rounded-2xl bg-blue-100 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60"
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
              <div className="space-y-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We reply to every message personally. No auto-responders, no bots.
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Usually within 24 hours
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Never shared with third parties
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Your privacy matters</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">We listen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ── (matching About page topic cards) ───────── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Our focus
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              What we cover at I Know Tech World
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              We publish content across these topics — always honest, always budget-aware.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOPICS_COVERED.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-blue-600 dark:text-blue-400">{icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESPONSE TIME + REASSURANCE (similar to Values section) ───── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
            What to expect
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            We're here to help
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Every message gets a real response. No templates, no delays.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <IoTimeOutline size={22} />
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">24–72 hour response</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We aim to reply within a day. Sometimes it takes a bit longer — but you'll always hear back.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <IoChatbubbleEllipsesOutline size={22} />
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">Real humans only</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              No AI chatbots. No automated replies. Just actual people who read every word.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <IoMailOutline size={22} />
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">Your data stays private</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We never share your email or information with anyone. Period.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── (return to home or browse articles) ───────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            While you wait...
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Check out our latest guides and builds. Free, honest, and actually useful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blogpage"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Browse articles <IoArrowForward size={16} />
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