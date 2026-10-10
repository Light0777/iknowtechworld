import { config } from "@/config";
import type { MetadataRoute } from "next";

// Same quote-stripping as sitemap.ts:
// .env currently has NEXT_PUBLIC_BASE_URL="https://..." with quotes
const baseUrl = config.baseUrl.replace(/^"|"$/g, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
