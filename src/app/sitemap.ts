import { config } from "@/config";
import { wisp } from "@/lib/wisp";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result = await wisp.getPosts();

  return [
    {
      url: config.baseUrl,
      lastModified: new Date(),
    },
    {
      url: urlJoin(config.baseUrl, "blog"),
      lastModified: new Date(),
    },
    ...result.posts.map((post) => ({
      url: urlJoin(config.baseUrl, "blog", post.slug),
      lastModified: new Date(post.updatedAt),
    })),
  ];
}