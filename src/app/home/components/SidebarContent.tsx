import Link from "next/link";
import {
  IoGameControllerOutline,
  IoBulbOutline,
  IoNewspaperOutline,
  IoFlashOutline,
  IoArrowForward,
  IoHardwareChipOutline,
  IoStarOutline,
  IoBookOutline,
  IoPersonOutline,
} from "react-icons/io5";

const EYEBROW = "text-[11px] font-medium uppercase tracking-[0.08em]";

const SIDEBAR_GROUPS = [
  {
    label: "Reviews",
    href: "/tag/reviews",
    dot: "bg-sky-400 text-white",
    icon: <IoGameControllerOutline size={14} aria-hidden="true" />,
    links: [
      { label: "Game Reviews", href: "/tag/reviews", icon: <IoStarOutline size={16} aria-hidden="true" /> },
      { label: "Indie Spotlights", href: "/tag/indie", icon: <IoFlashOutline size={16} aria-hidden="true" /> },
    ],
  },
  {
    label: "Guides",
    href: "/tag/guides",
    dot: "bg-lime-300 text-neutral-900",
    icon: <IoBulbOutline size={14} aria-hidden="true" />,
    links: [
      { label: "Walkthroughs", href: "/tag/guides", icon: <IoBookOutline size={16} aria-hidden="true" /> },
      { label: "Boss Strategies", href: "/tag/guides", icon: <IoPersonOutline size={16} aria-hidden="true" /> },
    ],
  },
  {
    label: "News & Gear",
    href: "/tag/news",
    dot: "bg-orange-500 text-white",
    icon: <IoNewspaperOutline size={14} aria-hidden="true" />,
    links: [
      { label: "Gaming News", href: "/tag/news", icon: <IoNewspaperOutline size={16} aria-hidden="true" /> },
      { label: "Hardware Guides", href: "/#latest", icon: <IoHardwareChipOutline size={16} aria-hidden="true" /> },
    ],
  },
];

// Shared sidebar body: rendered in the desktop <aside> and inside the mobile
// filter drawer. `onNavigate` closes the drawer after a link is tapped.
export default function SidebarContent({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <>
      <p className={`${EYEBROW} mb-1 text-neutral-600 dark:text-neutral-400`}>
        Get started
      </p>
      <h2 className="font-serif text-[28px] leading-tight tracking-tight text-balance">
        Dive in by topic,
        <br />
        series, or tag
      </h2>
      <hr className="my-10 border-neutral-200 dark:border-neutral-800" />

      <div className="space-y-9">
        {SIDEBAR_GROUPS.map((group) => (
          <nav key={group.label} aria-label={group.label}>
            <Link
              href={group.href}
              onClick={onNavigate}
              className="flex items-center gap-3 font-serif text-xl transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white"
            >
              <span
                aria-hidden="true"
                className={`grid h-6 w-6 place-items-center rounded-full ${group.dot}`}
              >
                {group.icon}
              </span>
              {group.label}
            </Link>
            <ul className="mt-5 space-y-5 pl-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className={`${EYEBROW} flex items-center gap-3 text-neutral-700 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:text-neutral-300 dark:focus-visible:ring-white`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <hr className="my-10 border-neutral-200 dark:border-neutral-800" />
      <div className="rounded-2xl bg-neutral-100 p-5 dark:bg-neutral-900">
        <p className={`${EYEBROW} text-neutral-600 dark:text-neutral-400`}>
          Free weekly newsletter
        </p>
        <p className="mt-2 font-serif text-xl leading-snug">
          Reviews & tips, every week
        </p>
        <Link
          href="https://news.iknowtechworld.online"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Join free <IoArrowForward size={14} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
