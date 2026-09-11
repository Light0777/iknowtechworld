// components/gamingHardware.tsx
import React from 'react'
import Link from 'next/link'
import {
  IoHelpOutline,
  IoHardwareChipOutline,
  IoServerOutline,
  IoFlashOutline,
  IoGitBranchOutline,
  IoTrendingUpOutline,
  IoArrowForward,
  IoGameControllerOutline,
  IoTvOutline,
} from 'react-icons/io5'

const HARDWARE_TOPICS = [
  {
    icon: <IoHardwareChipOutline size={20} />,
    title: 'GPU Reviews',
    body: 'Graphics card benchmarks and buying guides for 1080p, 1440p, and 4K gaming.',
  },
  {
    icon: <IoGameControllerOutline size={20} />,
    title: 'Console Guides',
    body: 'PS5, Xbox Series X/S, Switch — which console fits your gaming style?',
  },
  {
    icon: <IoServerOutline size={20} />,
    title: 'Peripherals',
    body: 'Keyboards, mice, headsets, and controllers that actually improve your play.',
  },
  {
    icon: <IoFlashOutline size={20} />,
    title: 'Performance Tuning',
    body: 'Settings tweaks, overclocking, and driver tips for maximum FPS.',
  },
  {
    icon: <IoTvOutline size={20} />,
    title: 'Monitors & Displays',
    body: 'Refresh rates, resolution, panel types — find the right screen for your setup.',
  },
  {
    icon: <IoTrendingUpOutline size={20} />,
    title: 'Value Picks',
    body: 'Best bang-for-buck hardware that punches above its price point.',
  },
]

export default function GamingHardware() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff3131] dark:text-[#ff3131] mb-3">
              Gear Up
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
              Gaming Hardware Guides
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              The right gear makes every game better. Our hardware guides help you pick the best
              components and peripherals for your playstyle and budget.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              From GPU benchmarks to console comparisons, we break down what actually matters
              for gaming performance.
            </p>

            {/* Component chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {HARDWARE_TOPICS.slice(0, 6).map(({ title }) => (
                <span
                  key={title}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {title}
                </span>
              ))}
            </div>

            <Link
              href="/blogpage"
              className="inline-flex items-center gap-2 text-[#ff3131] dark:text-[#ff3131] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Browse all guides <IoArrowForward size={14} />
            </Link>
          </div>

          {/* Right side - Visual card stack */}
          <div className="relative h-80 hidden md:block">
            <div
              className="absolute inset-x-8 top-4 h-full rounded-2xl bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900"
              style={{ transform: 'rotate(3deg)' }}
              aria-hidden
            />
            <div
              className="absolute inset-x-4 top-2 h-full rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/60"
              style={{ transform: 'rotate(-1.5deg)' }}
              aria-hidden
            />
            <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff3131] flex items-center justify-center text-white font-bold text-sm">
                  HW
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Best Value GPU 2024</p>
                  <p className="text-xs text-gray-400">RTX 4070 Super • 1440p King</p>
                </div>
              </div>
              <div className="space-y-2">
                {['12GB VRAM', 'DLSS 3.5', 'Ray Tracing', '~$599 MSRP'].map((part) => (
                  <div key={part} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] flex-shrink-0" />
                    {part}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Top pick • 2024</span>
                <span className="text-[#ff3131] dark:text-[#ff3131] font-semibold">Best Value</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile component chips */}
        <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
          {HARDWARE_TOPICS.map(({ icon, title }) => (
            <div key={title} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-[#ff3131] dark:text-[#ff3131]">{icon}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Whether you're upgrading your rig or buying your first console, our guides help you
            make smarter hardware decisions.
          </p>
        </div>
      </div>
    </section>
  )
}