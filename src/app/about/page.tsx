import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

const Page = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="font-script text-3xl md:text-4xl text-gray-600 dark:text-gray-400 block mb-4">
            About <span>{process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME}</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
            Stories, Ideas &amp; Curiosity
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We believe that everyone has a story worth sharing. Kyro is where thoughts turn into stories and ideas find a voice.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=800&fit=crop"
              alt="Writing"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=800&fit=crop"
              alt="Ideas"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=800&fit=crop"
              alt="Curiosity"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <span>{process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME}</span> was created to build a space where diverse voices can explore topics ranging from technology and creativity to life&apos;s random wonders. We are committed to thoughtful, honest storytelling that informs, inspires, and connects.
          </p>
        </div>

        {/* What We Do */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Curated Content
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Thoughtfully crafted articles that inform, inspire, and spark meaningful conversations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Community Voices
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A platform for emerging writers and thinkers to share their unique perspectives.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Honest Conversations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Real talk about real topics that matter — from tech to creativity and everything between.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you&apos;re here to learn, to be entertained, or to find your next great read — welcome. We&apos;re glad you&apos;re here.
          </p>
          <Link 
            href="/blogpage"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity"
          >
            Read Our Stories
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page