// components/budgetPc.tsx
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
} from 'react-icons/io5'

const PC_COMPONENTS = [
  {
    icon: <IoHardwareChipOutline size={20} />,
    title: 'GPUs',
    body: 'Graphics card recommendations that deliver real gaming performance without overspending.',
  },
  {
    icon: <IoHelpOutline size={20} />,
    title: 'CPUs',
    body: 'Processor picks that balance speed and value for gaming, work, and everyday use.',
  },
  {
    icon: <IoServerOutline size={20} />,
    title: 'RAM & Storage',
    body: 'Memory and SSD recommendations for faster load times and smooth multitasking.',
  },
  {
    icon: <IoFlashOutline size={20} />,
    title: 'Budget Optimization',
    body: 'Tips to save money without sacrificing the performance you actually need.',
  },
  {
    icon: <IoGitBranchOutline size={20} />,
    title: 'Upgrade Paths',
    body: 'Future-proof your build with smart component choices that leave room to grow.',
  },
  {
    icon: <IoTrendingUpOutline size={20} />,
    title: 'Price-to-Performance',
    body: 'Find the sweet spot where every rupee counts toward real-world performance.',
  },
]

export default function BudgetPc() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Build Smarter
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
              Latest Budget PC Builds
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Looking for the best performance without overspending? Our latest PC build guides help
              gamers and students choose the right components for different budgets and use cases.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              From entry-level gaming builds to productivity-focused setups, we break down everything
              you need to know.
            </p>

            {/* Component chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {PC_COMPONENTS.slice(0, 6).map(({ title }) => (
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
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Browse all builds <IoArrowForward size={14} />
            </Link>
          </div>

          {/* Right side - Visual card stack */}
          <div className="relative h-80 hidden md:block">
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
                  PC
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Budget Build</p>
                  <p className="text-xs text-gray-400">Under ₹25K • GTA 6 Ready</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Ryzen 5 5600G', '16GB DDR4 RAM', '512GB NVMe SSD', '450W PSU'].map((part) => (
                  <div key={part} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {part}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Best value • 2026</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">~₹24,800</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile component chips */}
        <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
          {PC_COMPONENTS.map(({ icon, title }) => (
            <div key={title} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400">{icon}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Whether you're building your first gaming PC or upgrading an older setup, our guides are
            designed to keep things simple and affordable.
          </p>
        </div>
      </div>
    </section>
  )
}