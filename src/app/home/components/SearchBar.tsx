"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose, IoSearchOutline } from "react-icons/io5";

export default function SearchBar({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();

  function goToListing(query: string) {
    const q = query.trim();
    router.push(q ? `/?query=${encodeURIComponent(q)}#latest` : "/#latest");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    goToListing(value);
  }

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="flex w-full max-w-md items-center gap-2"
    >
      <label htmlFor="site-search" className="sr-only">
        Search articles…
      </label>
      <span className="relative flex-1">
        <IoSearchOutline
          aria-hidden="true"
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          id="site-search"
          name="search"
          type="text"
          inputMode="search"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search articles…"
          className="w-full rounded-full border border-neutral-200 bg-neutral-100 py-2.5 pl-11 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus-visible:ring-white"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              goToListing("");
            }}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus-visible:ring-white"
          >
            <IoClose size={15} aria-hidden="true" />
          </button>
        )}
      </span>
      <button
        type="submit"
        className="shrink-0 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        Search
      </button>
    </form>
  );
}
