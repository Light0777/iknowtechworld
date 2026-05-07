"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

const FOOTER_LINKS = [
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogpage" },
  { name: "Contact", href: "/legal/contact" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
  { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
];

export const Footer: FunctionComponent = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#09090b] mt-16">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {FOOTER_LINKS.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-gray-100 dark:border-gray-800">
          <div className="text-sm text-gray-400 dark:text-gray-500 order-2 sm:order-1">
            © <span>iknowtechworld</span> {new Date().getFullYear()}
          </div>
          <div className="order-1 sm:order-2">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};