import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Style_Script } from "next/font/google";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';
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
  metadataBase: new URL("https://www.iknowtechworld.online"),
  title: {
    default: process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "I Know Tech World",
    template: "%s | I Know Tech World",
  },
  description: "Smart tech guides, gaming builds, and digital trends that actually help. Helping regular people make better tech decisions.",
  keywords: ["tech blog india", "budget gaming pc", "gta 6 setup", "buying guides", "gadget recommendations", "AI tools", "tech trends", "beginner tech guides", "smart purchases"],
  authors: [{ name: "I Know Tech World Team" }],
  creator: "I Know Tech World",
  publisher: "I Know Tech World Media",
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
    title: "I Know Tech World | Smart Tech Guides & Gaming Builds",
    description: "Practical buying guides, budget PC setups, gadget recommendations, AI tools, and tech insights — explained simply.",
    url: "https://www.iknowtechworld.online",
    siteName: "I Know Tech World",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "I Know Tech World - Smart Tech Guides That Actually Help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Know Tech World | Tech Guides & Gaming Builds",
    description: "Helping regular people make better tech decisions.",
    images: ["/og-image.jpg"],
    creator: "@iknowtechworld",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* CRITICAL: Regular script tag - NOT React Script component */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = saved || (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        
        {/* AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9635487371462309"
          crossOrigin="anonymous"
        />
        
        {/* Meta tag verification */}
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
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
      {/* Google Analytics - only loads in production */}
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      )}
    </html>
  );
}