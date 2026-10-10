"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const primaryLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/legal/contact" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "Terms", href: "/legal/terms" },
];

const SUBSCRIBE_URL = "https://news.iknowtechworld.online";

function linkTone(isActive: boolean) {
    return isActive
        ? "text-neutral-900 dark:text-white"
        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white";
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close mobile menu with Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    return (
        <>
            {/* Desktop floating pill */}
            <nav
                aria-label="Primary"
                className="fixed inset-x-0 top-4 z-50 hidden justify-center px-4 md:flex"
            >
                <div className="flex items-center gap-7 rounded-full bg-neutral-100 py-2.5 pl-6 pr-2.5 dark:bg-neutral-900">
                    <Link
                        href="/"
                        translate="no"
                        aria-label="I Know Tech World, home page"
                        className="font-serif text-[22px] leading-none tracking-tight text-neutral-900 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:text-white dark:focus-visible:ring-white"
                    >
                        I Know Tech World
                    </Link>
                    <div className="flex items-center gap-6">
                        {primaryLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`text-sm font-medium transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white ${linkTone(isActive)}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    <a
                        href={SUBSCRIBE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                        Subscribe
                        <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                </div>
            </nav>

            {/* Mobile: bottom floating menu button */}
            <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 md:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    className="flex items-center gap-2.5 rounded-full bg-neutral-900 py-2.5 pl-3 pr-3.5 text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                    <Image
                        src="/favicon.ico"
                        alt="I Know Tech World"
                        width={26}
                        height={26}
                        unoptimized
                        className="rounded-[8px]"
                    />
                    {isOpen ? (
                        <X size={20} aria-hidden="true" />
                    ) : (
                        <Menu size={20} aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile full-screen menu */}
            <div
                aria-hidden={!isOpen}
                className={`fixed inset-0 z-40 bg-white transition-[transform,visibility] duration-300 ease-in-out dark:bg-neutral-950 ${
                    isOpen ? "translate-x-0 visible" : "invisible translate-x-full"
                }`}
            >
                <nav
                    aria-label="Mobile"
                    className="flex h-full flex-col justify-center gap-1 overflow-y-auto px-10 pb-28 pt-16"
                >
                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500 dark:text-neutral-400">
                        Menu
                    </p>
                    {primaryLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                tabIndex={isOpen ? 0 : -1}
                                onClick={() => setIsOpen(false)}
                                aria-current={isActive ? "page" : undefined}
                                className={`border-b border-neutral-200 py-4 font-serif text-4xl tracking-tight transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:border-neutral-800 dark:focus-visible:ring-white ${linkTone(isActive)}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <a
                        href={SUBSCRIBE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isOpen ? 0 : -1}
                        className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                        Subscribe
                        <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                        {legalLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                tabIndex={isOpen ? 0 : -1}
                                onClick={() => setIsOpen(false)}
                                className="text-xs text-neutral-500 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-400 dark:focus-visible:ring-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Spacer to prevent content from hiding under the fixed pill */}
            <div className="h-4 md:h-24" aria-hidden="true"></div>
        </>
    );
}
