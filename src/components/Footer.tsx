"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { IoLogoPinterest, IoLogoTwitter } from "react-icons/io5";
import { DarkModeToggle } from "./DarkModeToggle";

const EXPLORE_LINKS = [
  { name: "Home", href: "/" },
  { name: "Latest", href: "/#latest" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/legal/contact" },
];

const TOPIC_LINKS = [
  { name: "Reviews", href: "/tag/reviews" },
  { name: "Guides", href: "/tag/guides" },
  { name: "Gaming News", href: "/tag/news" },
  { name: "Indie Games", href: "/tag/indie" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
  { name: "Terms & Conditions", href: "/legal/terms" },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { name: string; href: string }[];
}) {
  return (
    <nav aria-label={heading}>
      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400">
        {heading}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className="text-sm text-neutral-300 transition-opacity hover:text-white hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function scrollToTop() {
  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export const Footer: FunctionComponent = () => {
  return (
    <footer className="mt-24 overflow-hidden rounded-t-3xl bg-neutral-900 text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="min-w-0">
            <Link
              href="/"
              translate="no"
              aria-label="I Know Tech World — home"
              className="font-serif text-4xl tracking-tight transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:text-5xl"
            >
              I Know Tech World
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">
              Game reviews that inspire, inform, and entertain.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://news.iknowtechworld.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                Subscribe
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/iknowtechworld"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="I Know Tech World on X (Twitter)"
                className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <IoLogoTwitter size={17} aria-hidden="true" />
              </a>
              <a
                href="https://pinterest.com/iknowtechworld"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="I Know Tech World on Pinterest"
                className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <IoLogoPinterest size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <LinkColumn heading="Explore" links={EXPLORE_LINKS} />
          <LinkColumn heading="Topics" links={TOPIC_LINKS} />
          <LinkColumn heading="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-400">
            © <span translate="no">I Know Tech World</span>{" "}
            {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ArrowUp size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
