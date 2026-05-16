"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function NewsletterPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem("newsletter-popup-dismissed");

        if (dismissed) return;

        const timer = setTimeout(() => {
            setOpen(true);
        }, 25000); // 25 seconds

        return () => clearTimeout(timer);
    }, []);

    function closePopup() {
        localStorage.setItem("newsletter-popup-dismissed", "true");
        setOpen(false);
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl p-6 animate-in fade-in zoom-in duration-300">

                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                    <IoClose size={22} />
                </button>

                <div className="space-y-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                        Free Weekly Newsletter
                    </span>

                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Get Budget Tech & Setup Ideas Weekly
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Gaming setups, creator gear, student gadgets, and budget tech picks — no spam.
                    </p>

                    <Link
                        href="https://news.iknowtechworld.online"
                        className="block w-full text-center rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition"
                    >
                        Join Free
                    </Link>

                    <p className="text-xs text-center text-gray-400">
                        Join early readers of IKnowTechWorld
                    </p>
                </div>
            </div>
        </div>
    );
}