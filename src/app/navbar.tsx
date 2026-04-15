"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogpage" },
    { name: "About", href: "/about" },
];

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

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#09090b]">
                <div className="max-w-7xl mx-auto after:sm:px-6 lg:px-8">
                    <div className="hidden sm:block">
                        <div className="flex items-center justify-center sm:h-10">
                            {/* Logo - Left side on desktop */}

                            {/* Desktop Navigation - Perfectly Centered */}
                            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 mt-5">
                                <div className="flex items-center gap-8">
                                    <Link
                                        href="/"
                                        className="text-md font-light text-black dark:text-white flex items-center gap-1"
                                    ><Image src="/favicon.ico" alt="" className="h-4 w-4 rounded-full"/>
                                        Kyro.com
                                    </Link>
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={`text-light transition-colors hover:text-black dark:hover:text-white ${isActive
                                                    ? "text-black dark:text-white"
                                                    : "text-gray-600 dark:text-gray-400"
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Invisible spacer for balance on desktop */}
                        <div className="hidden md:block w-20"></div>
                    </div>
                    {/* Mobile: Bottom Center Menu Button */}
                    <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-6 px-5 py-3 rounded-full bg-black dark:bg-white shadow-lg hover:scale-105 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <span className="text-md font-medium text-white dark:text-black flex items-center gap-1">
                               <Image src="/favicon.ico" alt="" className="h-4 w-4 rounded-full"/> Kyro.com
                            </span>
                            {isOpen ? (
                                <X className="w-5 h-5 text-white dark:text-black" />
                            ) : (
                                <Menu className="w-5 h-5 text-white dark:text-black" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`fixed inset-0 z-40 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-start justify-start h-full space-y-3 p-16 font-bold">
                    {/* Logo at top of mobile menu */}


                    {/* Mobile Navigation Links */}
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl transition-colors hover:text-gray-600 dark:hover:text-gray-400 ${isActive
                                    ? "text-black dark:text-white"
                                    : "text-gray-600 dark:text-gray-400"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-5 sm:h-16"></div>
        </>
    );
}