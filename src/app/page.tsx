import { Footer } from "@/components/Footer";
import Home from "./home/home";
import Navbar from "./navbar";
import AdUnit from "./components/AdUnit";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "I Know Tech World | Smart Tech Guides, Gaming Builds & Digital Trends That Actually Help",
  description: "Tech blog featuring honest buying guides, budget gaming PC builds, gadget recommendations, AI tools, and practical technology advice for everyday users, students, and gamers in India.",
  keywords: [
    "tech blog india",
    "budget gaming pc",
    "gta 6 setup",
    "buying guides",
    "gadget recommendations",
    "AI tools",
    "tech trends",
    "beginner tech guides",
    "smart purchases",
    "pc build india",
    "gaming accessories",
    "digital marketing tips"
  ],
  authors: [{ name: "I Know Tech World Team" }],
  creator: "I Know Tech World",
  publisher: "I Know Tech World",
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
    title: "I Know Tech World | Smart Tech Guides That Actually Help",
    description: "Practical buying guides, budget PC setups, gadget recommendations, AI tools, and tech insights — explained simply. Helping regular people make better tech decisions.",
    url: "https://www.iknowtechworld.online",
    siteName: "I Know Tech World",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "I Know Tech World - Smart Tech Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Know Tech World | Tech Guides & Gaming Builds",
    description: "Helping regular people make better tech decisions.",
    images: ["/og-image.jpg"],
    creator: "@iknowtechworld",
    site: "@iknowtechworld",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.iknowtechworld.online",
  },
  category: "technology",
};

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "I Know Tech World",
            "url": "https://www.iknowtechworld.online",
            "description": "Smart tech guides, gaming builds, and digital trends that actually help. Helping regular people make better tech decisions.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.iknowtechworld.online/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "I Know Tech World",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.iknowtechworld.online/favicon.ico"
              }
            },
            "sameAs": [
              "https://twitter.com/iknowtechworld",
              "https://pinterest.com/iknowtechworld"
            ]
          })
        }}
      />
      <div className="w-full mx-auto mb-10 overflow-hidden">
        <Navbar />
        
        {/* Main Homepage Content */}
        <Home />
        
        {/* Ad between homepage sections */}
        <div className="my-8 px-4">
          <AdUnit slot="YOUR_HOMEPAGE_AD_SLOT" format="horizontal" />
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Page;