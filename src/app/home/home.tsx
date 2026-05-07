// app/page.tsx  ─  Server Component (no "use client" needed)
// Posts are fetched at request time and revalidated every 60 seconds.
// Every time you publish a blog on wisp, the homepage will reflect it
// within 1 minute — zero manual work required.

import Image from 'next/image'
import Link from 'next/link'
import {
    IoGameControllerOutline,
    IoChatbubblesOutline,
    IoHardwareChipOutline,
    IoBulbOutline,
    IoArrowForward,
    IoFlashOutline,
    IoShieldCheckmarkOutline,
    IoWalletOutline,
    IoTimeOutline,
    IoNewspaperOutline,
} from 'react-icons/io5'
import WhatWeCover from './components/whatWeCover'
import WhyTrustUs from './components/whyTrustUs'
import BudgetPc from './components/budgetPc'
import FeaturedGuide from './components/featuredGuide'

// ─── Wisp types (subset we actually use) ─────────────────────────────────────
interface WispPost {
    id: string
    title: string
    description: string | null
    slug: string
    image: string | null
    createdAt: string
    tags: { id: string; name: string }[]
}

interface WispResponse {
    posts: WispPost[]
}

// ─── Fetch latest posts from wisp ─────────────────────────────────────────────
// Uses Next.js ISR: page is cached and regenerated every 60 seconds.
// Swap in `wisp` JS SDK if you prefer: const result = await wisp.getPosts({ limit: 4 })
async function getLatestPosts(limit = 4): Promise<WispPost[]> {
    const blogId = process.env.NEXT_PUBLIC_BLOG_ID

    if (!blogId) {
        console.warn('NEXT_PUBLIC_BLOG_ID is not set — returning empty posts')
        return []
    }

    try {
        const res = await fetch(
            `https://www.wisp.blog/api/v1/${blogId}/posts?limit=${limit}`,
            {
                next: { revalidate: 60 }, // refresh every 60 seconds
            }
        )

        if (!res.ok) {
            console.error('wisp API error:', res.status, res.statusText)
            return []
        }

        const data: WispResponse = await res.json()
        return data.posts ?? []
    } catch (err) {
        console.error('Failed to fetch posts:', err)
        return []
    }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Map the first tag of a post to a colour class
// Palette is derived from the iknowtechworld logo (blue/teal/indigo family)
function tagColor(tag?: string) {
    const map: Record<string, string> = {
        gaming: 'bg-amber-100  text-amber-800  dark:bg-amber-900/40  dark:text-amber-300',
        students: 'bg-blue-100   text-blue-800   dark:bg-blue-900/40   dark:text-blue-300',
        ai: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
        tech: 'bg-teal-100   text-teal-800   dark:bg-teal-900/40   dark:text-teal-300',
    }
    const key = (tag ?? '').toLowerCase()
    return map[key] ?? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}

// ─── Skeleton for loading state (used by Suspense on blogpage) ────────────────
export function PostCardSkeleton({ large = false }: { large?: boolean }) {
    return (
        <div className={`animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden ${large ? 'h-64 md:h-52' : 'h-64'}`} />
    )
}

// ─── Post card ────────────────────────────────────────────────────────────────
function PostCard({ post, large = false }: { post: WispPost; large?: boolean }) {
    const tag = post.tags?.[0]?.name
    const fallbackImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60'

    return (
        <Link
            href={`/blog/${post.slug}`}
            className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${large ? 'md:flex-row' : ''}`}
            aria-label={`Read article: ${post.title}`}
        >
            {/* Thumbnail */}
            <div className={`relative overflow-hidden flex-shrink-0 ${large ? 'h-52 md:h-auto md:w-72' : 'h-44'}`}>
                <Image
                    src={post.image ?? fallbackImage}
                    alt={post.title}
                    fill
                    sizes={large ? '(max-width: 768px) 100vw, 288px' : '400px'}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 p-5 flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                    {tag && (
                        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColor(tag)}`}>
                            {tag}
                        </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 ml-auto">
                        <IoTimeOutline size={12} />
                        {formatDate(post.createdAt)}
                    </span>
                </div>

                <h2 className={`font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${large ? 'text-xl md:text-2xl' : 'text-base'}`}>
                    {post.title}
                </h2>

                {post.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
                        {post.description}
                    </p>
                )}

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    Read article
                    <IoArrowForward size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    )
}

// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState() {
    return (
        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <IoNewspaperOutline size={48} className="text-gray-300 dark:text-gray-700 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">No posts yet — check back soon!</p>
        </div>
    )
}

// ─── Category pills ───────────────────────────────────────────────────────────
const CATEGORIES = [
    { label: 'Gaming Builds', icon: <IoGameControllerOutline size={18} />, slug: 'gaming' },
    { label: 'Student Gadgets', icon: <IoBulbOutline size={18} />, slug: 'students' },
    { label: 'AI & Tools', icon: <IoChatbubblesOutline size={18} />, slug: 'ai' },
    { label: 'Tech Guides', icon: <IoHardwareChipOutline size={18} />, slug: 'tech' },
]

const INFINITE_CATEGORIES = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

// ─── Page (async Server Component) ───────────────────────────────────────────
export default async function Home() {
    const posts = await getLatestPosts(4)
    const [featured, ...rest] = posts

    return (
        <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors duration-300">

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">

                {/* Trust bar */}
                <div className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
                    {[
                        { icon: <IoWalletOutline size={16} />, text: 'Budget-first picks' },
                        { icon: <IoShieldCheckmarkOutline size={16} />, text: 'No paid promotions' },
                        { icon: <IoFlashOutline size={16} />, text: 'Updated regularly' },
                    ].map(({ icon, text }) => (
                        <span key={text} className="sm:inline-flex items-center gap-1.5 hidden text-sm text-gray-500 dark:text-gray-400">
                            <span className="text-blue-600">{icon}</span>
                            {text}
                        </span>
                    ))}
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                    Budget Tech Guides<br />
                    <span className="text-blue-600 dark:text-blue-400">for Gamers & Students</span>
                </h1>

                <p className="mt-4 text-xs sm:text-md text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                    Honest buying guides, gaming PC builds, and gadget picks all under a real budget.
                </p>

                {/* Category quick-nav */}
                <div className="relative">
                    {/* Left fade effect */}
                    <div className="absolute -left-1 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none"></div>

                    {/* Right fade effect */}
                    <div className="absolute -right-1 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none"></div>

                    <nav
                        aria-label="Browse by category"
                        className="mt-8 overflow-x-auto scrollbar-thin hide-scrollbar scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500"
                        style={{
                            scrollBehavior: 'smooth',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        <div className="flex flex-nowrap gap-3 px-4 animate-scroll hover:animation-pause">
                            {INFINITE_CATEGORIES.map(({ label, icon, slug }, index) => (
                                <Link
                                    key={`${slug}-${index}`}
                                    href={`/blogpage?tag=${slug}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex-shrink-0"
                                >
                                    <span className="text-blue-600 dark:text-blue-400">{icon}</span>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </section>

            {/* ── POSTS GRID ───────────────────────────────────────────────── */}
            <main className="max-w-5xl mx-auto px-4 pb-20">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Latest Articles
                    </h2>
                    <Link
                        href="/blogpage"
                        className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                        View all <IoArrowForward size={14} />
                    </Link>
                </div>

                {posts.length === 0 ? (
                    <EmptyState />
                ) : (
                    <>
                        {/* Featured post — full-width horizontal card */}
                        {featured && (
                            <div className="mb-5">
                                <PostCard post={featured} large />
                            </div>
                        )}

                        {/* Remaining posts — responsive grid */}
                        {rest.length > 0 && (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {rest.map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* Browse-all CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="/blogpage"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Browse all articles <IoArrowForward size={16} />
                    </Link>
                </div>
            </main>

            <div>
                <WhatWeCover />
                <BudgetPc />
                <FeaturedGuide />
                <WhyTrustUs />
            </div>

            {/* ── WHY US ───────────────────────────────────────────────────── */}
            <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#09090b]">
                <div className="max-w-5xl mx-auto px-4 py-14 grid sm:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            icon: <IoWalletOutline size={28} />,
                            title: 'Real budgets',
                            body: 'Every guide is built around prices people actually spend — not aspirational numbers.',
                        },
                        {
                            icon: <IoShieldCheckmarkOutline size={28} />,
                            title: 'No sponsored bias',
                            body: "We don't take money to recommend products. If it's here, we genuinely think it's worth it.",
                        },
                        {
                            icon: <IoFlashOutline size={28} />,
                            title: 'Always current',
                            body: 'Prices and specs change fast. We keep guides updated so you\'re never buying yesterday\'s deal.',
                        },
                    ].map(({ icon, title, body }) => (
                        <div key={title} className="flex flex-col items-center gap-3">
                            <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                                {icon}
                            </span>
                            <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}