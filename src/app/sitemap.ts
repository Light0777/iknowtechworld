import { config } from "@/config";
import { wisp } from "@/lib/wisp";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";

// Strip accidental surrounding quotes from env-provided base URL
// (.env currently has NEXT_PUBLIC_BASE_URL="https://..." with quotes)
const baseUrl = config.baseUrl.replace(/^"|"$/g, "");

// Static routes shipped with the new UI (matches src/app/**/page.tsx,
// navbar links and footer links). Only canonical URLs — no ?page=
// pagination variants, no API routes.
const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "about", changeFrequency: "monthly", priority: 0.9 },
  { path: "tag", changeFrequency: "weekly", priority: 0.7 },
  { path: "legal/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "legal/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/disclaimer", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // limit: "all" so paginated Wisp posts/tags beyond the first page
  // are still included in the sitemap.
  const [{ posts }, { tags }] = await Promise.all([
    wisp.getPosts({ limit: "all" }),
    wisp.getTags(1, "all"),
  ]);

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: path ? urlJoin(baseUrl, path) : baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...tags.map((tag) => ({
      url: urlJoin(baseUrl, "tag", tag.name),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: urlJoin(baseUrl, "blog", post.slug),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}