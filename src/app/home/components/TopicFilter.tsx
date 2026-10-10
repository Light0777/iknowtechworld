"use client";

import { useEffect, useState } from "react";
import { IoClose, IoFilterOutline } from "react-icons/io5";
import SidebarContent from "./SidebarContent";

// Mobile-only filter trigger + bottom-sheet drawer holding the sidebar
// topics. Rendered wherever mobile users need topic access (hero, listing).
export default function TopicFilter() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open ]);

  // Close with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-neutral-800 md:hidden"
      >
        <IoFilterOutline size={16} aria-hidden="true" />
        Browse topics
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          aria-hidden="true"
          onClick={close}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Browse by topic"
          className={`absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto overscroll-contain rounded-t-3xl bg-white px-6 pb-10 pt-3 transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:bg-neutral-950 ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="sticky top-0 flex flex-col bg-white pb-2 pt-1 dark:bg-neutral-950">
            <span
              aria-hidden="true"
              className="mx-auto mb-2 h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700"
            />
            <button
              type="button"
              onClick={close}
              aria-label="Close topics"
              className="absolute right-0 top-2 rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white dark:focus-visible:ring-white"
            >
              <IoClose size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="px-2">
            <SidebarContent onNavigate={close} />
          </div>
        </div>
      </div>
    </>
  );
}
