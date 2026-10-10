// Home, the blog listing page. Lens-style editorial layout.
// Server Component. Accepts page + query, fetched per request via the Wisp SDK.

import Image from "next/image";
import Link from "next/link";
import {
  IoGameControllerOutline,
  IoBulbOutline,
  IoNewspaperOutline,
  IoArrowForward,
  IoRocketOutline,
} from "react-icons/io5";
import { wisp } from "@/lib/wisp";
import NewsletterPopup from "./components/NewsletterPopup";
import SearchBar from "./components/SearchBar";
import SidebarContent from "./components/SidebarContent";
import TopicFilter from "./components/TopicFilter";

// ─── Types ───────────────────────────────────────────────────────────────────
interface WispPost {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  image: string | null;
  createdAt: string;
  tags: { name: string }[];
}

interface PaginationInfo {
  page: number;
  totalPages: number;
  totalPosts: number;
  nextPage: number | null;
  prevPage: number | null;
}

const PAGE_SIZE = 9;

// ─── Fetch posts + pagination from Wisp ──────────────────────────────────────
async function getListing(
  page: number,
  query: string
): Promise<{ posts: WispPost[]; pagination: PaginationInfo }> {
  const fallback: PaginationInfo = {
    page,
    totalPages: 1,
    totalPosts: 0,
    nextPage: null,
    prevPage: null,
  };

  try {
    const result = await wisp.getPosts({
      limit: PAGE_SIZE,
      page,
      query: query || undefined,
    });
    return {
      posts: (result.posts ?? []).map((post) => ({
        id: post.id,
        title: post.title,
        description: post.description ?? null,
        slug: post.slug,
        image: post.image ?? null,
        createdAt:
          post.createdAt instanceof Date
            ? post.createdAt.toISOString()
            : String(post.createdAt),
        tags: (post.tags ?? []).map((tag) => ({ name: tag.name })),
      })),
      pagination: {
        page: result.pagination.page,
        totalPages: result.pagination.totalPages,
        totalPosts: result.pagination.totalPosts,
        nextPage: result.pagination.nextPage,
        prevPage: result.pagination.prevPage,
      },
    };
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return { posts: [], pagination: fallback };
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Pastel tag pills in the Lens spirit (tinted fills, ink text)
function tagPill(tag?: string) {
  const key = (tag ?? "").toLowerCase();
  if (key.includes("review"))
    return "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200";
  if (key.includes("guide"))
    return "bg-lime-200 text-neutral-900 dark:bg-lime-900/40 dark:text-lime-200";
  if (key.includes("news"))
    return "bg-sky-200 text-sky-950 dark:bg-sky-900/40 dark:text-sky-200";
  if (key.includes("indie"))
    return "bg-teal-100 text-teal-900 dark:bg-teal-900/40 dark:text-teal-200";
  if (key.includes("hardware") || key.includes("gear"))
    return "bg-orange-200 text-orange-950 dark:bg-orange-900/40 dark:text-orange-200";
  return "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200";
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

// CMS copy can contain em dashes, normalize them out of rendered text
function cleanCopy(value: string | null): string {
  if (!value) return "";
  return value.replace(/—/g, ",").replace(/, ,/g, ",");
}

// ─── Lens article card ───────────────────────────────────────────────────────
// Left/right columns use 4:3, middle uses square, a gentle stagger without
// extreme tall cards. Must stay full literal class strings for Tailwind JIT.
const CARD_RATIOS = ["aspect-[4/3]", "aspect-square"] as const;

function LensCard({
  post,
  ratioClass = CARD_RATIOS[0],
}: {
  post: WispPost;
  ratioClass?: (typeof CARD_RATIOS)[number];
}) {
  const tag = post.tags?.[0]?.name;
  const title = cleanCopy(post.title);
  const description = cleanCopy(post.description);
  const fallbackImage =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60";

  return (
    <article className="min-w-0">
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-3 transition-colors hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/80 dark:focus-visible:ring-white"
        aria-label={`Read article: ${title}`}
      >
        <span className="block overflow-hidden rounded-xl">
          <Image
            src={post.image ?? fallbackImage}
            alt={title}
            width={1000}
            height={750}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
            loading="lazy"
            unoptimized
            className={`${ratioClass} w-full object-cover`}
          />
        </span>
        <span className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em]">
          {tag && (
            <span className={`rounded px-2 py-1 normal-case ${tagPill(tag)}`}>
              {tag}
            </span>
          )}
          <span className="text-neutral-500 dark:text-neutral-400">
            · {formatDate(post.createdAt)}
          </span>
        </span>
        <span className="mt-3 block font-serif text-[22px] leading-[1.2] tracking-tight text-neutral-900 text-balance group-hover:opacity-70 dark:text-white">
          {title}
        </span>
        {description && (
          <span className="mt-2 block text-sm leading-snug text-neutral-700 line-clamp-2 dark:text-neutral-300">
            {description}
          </span>
        )}
        <span className="mb-0.5 mt-2 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 group-hover:opacity-70 dark:text-white">
          Read article
          <IoArrowForward size={14} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}

// ─── Empty state ─────────────────────────────────────────────────────────────
function EmptyState({ query }: { query: string }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <IoNewspaperOutline
        size={48}
        aria-hidden="true"
        className="mb-4 text-neutral-300 dark:text-neutral-700"
      />
      {query ? (
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          No results for “{query}”. Try a different search.
        </p>
      ) : (
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          No posts yet. Check back soon!
        </p>
      )}
      {query && (
        <Link
          href="/#latest"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Clear search
        </Link>
      )}
    </div>
  );
}

// ─── Pill pagination ─────────────────────────────────────────────────────────
function pageHref(page: number, query: string) {
  const params = new URLSearchParams();
  if (query) params.set("query", query);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/?${qs}#latest` : "/#latest";
}

function pageNumbers(page: number, totalPages: number): (number | "gap")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const keep = new Set(
    [1, totalPages, page - 1, page, page + 1].filter(
      (n) => n >= 1 && n <= totalPages
    )
  );
  const sorted = [...keep].sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

function ListingPagination({
  page,
  totalPages,
  query,
}: {
  page: number;
  totalPages: number;
  query: string;
}) {
  if (totalPages <= 1) return null;

  const pill =
    "inline-flex min-h-10 min-w-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white";
  const rest =
    "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-white";
  const active =
    "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900";

  return (
    <nav aria-label="Blog pages" className="mt-14 flex items-center justify-center gap-2">
      {page > 1 ? (
        <Link
          href={pageHref(page - 1, query)}
          aria-label="Previous page"
          className={`${pill} ${rest}`}
        >
          ← Prev
        </Link>
      ) : (
        <span aria-hidden="true" className={`${pill} cursor-not-allowed opacity-40 ${rest}`}>
          ← Prev
        </span>
      )}
      {pageNumbers(page, totalPages).map((n, i) =>
        n === "gap" ? (
          <span key={`gap-${i}`} aria-hidden="true" className="px-1 text-neutral-400">
            …
          </span>
        ) : (
          <Link
            key={n}
            href={pageHref(n, query)}
            aria-label={`Page ${n}`}
            aria-current={n === page ? "page" : undefined}
            className={`${pill} ${n === page ? active : rest}`}
          >
            {n}
          </Link>
        )
      )}
      {page < totalPages ? (
        <Link
          href={pageHref(page + 1, query)}
          aria-label="Next page"
          className={`${pill} ${rest}`}
        >
          Next →
        </Link>
      ) : (
        <span aria-hidden="true" className={`${pill} cursor-not-allowed opacity-40 ${rest}`}>
          Next →
        </span>
      )}
    </nav>
  );
}

const EYEBROW = "text-[11px] font-medium uppercase tracking-[0.08em]";

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function Home({
  page = 1,
  query = "",
}: {
  page?: number;
  query?: string;
}) {
  const { posts, pagination } = await getListing(page, query);

  // Distribute into three stacks so visual order matches reading order:
  // row 1 = posts 1-3, row 2 = posts 4-6.
  const cols: WispPost[][] = [[], [], []];
  posts.forEach((post, i) => {
    cols[i % 3].push(post);
  });

  const countLabel = query
    ? `${pagination.totalPosts} result${pagination.totalPosts === 1 ? "" : "s"} for “${query}”`
    : `${pagination.totalPosts} article${pagination.totalPosts === 1 ? "" : "s"}`;

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <a
        href="#latest"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to latest articles
      </a>

      <div className="mx-auto max-w-[1400px] px-4 md:px-[5.5rem]">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="home-hero-heading"
          className="flex flex-col items-center justify-center px-4 pb-6 pt-8 text-center sm:px-6 md:pb-20 md:pt-20"
        >
          <p className={`${EYEBROW} mb-3 text-neutral-700 md:mb-5 dark:text-neutral-300`}>
            Welcome to I Know Tech World
          </p>
          <h1
            id="home-hero-heading"
            className="max-w-4xl font-serif text-[30px] leading-[1.2] tracking-tight text-balance sm:text-5xl md:text-[68px] md:leading-[1.12]"
          >
            Game reviews that{" "}
            <IoRocketOutline
              aria-hidden="true"
              className="inline-block h-[0.85em] w-[0.85em] align-[-0.1em] text-red-500"
            />{" "}
            <span className="underline decoration-red-500 decoration-dashed decoration-2 underline-offset-4 md:underline-offset-8">
              inspire,
            </span>
            <br className="hidden sm:block" />{" "}
            <IoBulbOutline
              aria-hidden="true"
              className="inline-block h-[0.85em] w-[0.85em] align-[-0.1em] text-sky-500"
            />{" "}
            <span className="underline decoration-sky-500 decoration-dashed decoration-2 underline-offset-4 md:underline-offset-8">
              inform,
            </span>{" "}
            and{" "}
            <IoGameControllerOutline
              aria-hidden="true"
              className="inline-block h-[0.85em] w-[0.85em] align-[-0.1em] text-violet-400"
            />{" "}
            <span className="underline decoration-violet-300 decoration-dashed decoration-2 underline-offset-4 md:underline-offset-8">
              entertain
            </span>
          </h1>
          <p className="mt-6 hidden max-w-xl text-[15px] leading-relaxed text-neutral-600 md:block dark:text-neutral-400">
            Honest game reviews, walkthroughs, tips, and news. Everything worth
            knowing about the games you play.
          </p>
          <div className="mt-8 hidden flex-wrap items-center justify-center gap-3 md:flex">
            <Link
              href="/#latest"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Browse all articles <IoArrowForward size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800"
            >
              About us
            </Link>
          </div>
        </section>

        {/* ── CONTENT GRID (full width) ──────────────────────────── */}
        </div>
      <div className="grid gap-10 px-4 sm:px-6 md:grid-cols-[300px_minmax(0,1fr)] lg:px-12">
          {/* Sidebar (desktop only, mobile uses the filter drawer) */}
          <aside
            aria-label="Browse by topic"
            className="hidden px-2 md:block md:border-r md:border-neutral-200 md:pr-8 dark:md:border-neutral-800"
          >
            <SidebarContent />
          </aside>

          {/* Latest */}
          <div id="latest" className="min-w-0 scroll-mt-24">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-[28px] leading-tight tracking-tight">
                  Latest
                </h2>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {countLabel}
                </p>
              </div>
              <SearchBar key={query} initialQuery={query} />
            </div>
            <div className="mb-8 md:hidden">
              <TopicFilter />
            </div>

            {posts.length === 0 ? (
              <EmptyState query={query} />
            ) : (
              <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 lg:border-l lg:border-neutral-200 lg:pl-8 dark:lg:border-neutral-800">
                <div className="flex min-w-0 flex-col gap-8">
                  {cols[0].map((post) => (
                    <LensCard
                      key={post.id}
                      post={post}
                      ratioClass={CARD_RATIOS[0]}
                    />
                  ))}
                </div>
                <div className="flex min-w-0 flex-col gap-8">
                  {cols[1].map((post) => (
                    <LensCard
                      key={post.id}
                      post={post}
                      ratioClass={CARD_RATIOS[1]}
                    />
                  ))}
                </div>
                <div className="flex min-w-0 flex-col gap-8">
                  {cols[2].map((post) => (
                    <LensCard
                      key={post.id}
                      post={post}
                      ratioClass={CARD_RATIOS[0]}
                    />
                  ))}
                </div>
              </div>
            )}

            <ListingPagination
              page={pagination.page}
              totalPages={pagination.totalPages}
              query={query}
            />
          </div>
      </div>

      <NewsletterPopup />
    </div>
  );
}
