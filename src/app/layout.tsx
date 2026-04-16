import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Style_Script } from "next/font/google";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar";
import "./globals.css";

// Primary font for body text and UI
const fontSans = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Decorative script font for special elements
const fontScript = Style_Script({ 
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Kyro | Stories, Ideas & Curiosity in One Place",
    template: "%s | Kyro",
  },
  description: "Kyro is where thoughts turn into stories and ideas find a voice. Explore blogs on technology, creativity, and life's random wonders.",
  keywords: ["blog", "stories", "ideas", "curiosity", "technology", "creativity", "writing", "Kyro"],
  authors: [{ name: "Kyro Team" }],
  creator: "Kyro",
  publisher: "Kyro Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kyro | Stories, Ideas & Curiosity in One Place",
    description: "Kyro is where thoughts turn into stories and ideas find a voice. Explore blogs on technology, creativity, and life's random wonders.",
    url: "https://kyro.com",
    siteName: "Kyro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kyro - Stories, Ideas & Curiosity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyro | Stories, Ideas & Curiosity in One Place",
    description: "Kyro is where thoughts turn into stories and ideas find a voice.",
    images: ["/og-image.jpg"],
    creator: "@kyro",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code here
  },
  category: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense script - placed directly in head for verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9635487371462309"
          crossOrigin="anonymous"
        />
        {/* Meta tag verification (alternative method) */}
        <meta name="google-adsense-account" content="ca-pub-9635487371462309" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontScript.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className="w-full mx-auto p-4">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}