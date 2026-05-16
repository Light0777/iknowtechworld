import Navbar from "@/app/navbar";
import { BlogPostContent } from "@/components/BlogPostContent";
import { CommentSection } from "@/components/CommentSection";
import { Footer } from "@/components/Footer";
import { RelatedPosts } from "@/components/RelatedPosts";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { BlogPosting, WithContext } from "schema-dts";
import AdUnit from "../../components/AdUnit";
import ViewCounter from "../../components/ViewCounter";
import PostMeta from "@/app/components/PostMeta";
import { ContentWithCustomComponents } from "@wisp-cms/react-custom-component";
import AffiliateBanner from "../../components/AffiliateBanner";
import { CustomBlogPostContent } from "@/app/components/CustomBlogPostContent";
import InternalLinkBox from "../../components/InternalLinkBox";
import Script from "next/script";
import ProductTable from "@/app/components/ProductTable";
import ComparisonTable from "@/app/home/components/ComparisonTable";

export async function generateMetadata(props: { params: Promise<Params> }) {
  const params = await props.params;
  const { slug } = params;
  const result = await wisp.getPost(slug);
  
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;
  
  // Use custom uploaded image if available, otherwise generate one
  const ogImageUrl = image || signOgImageUrl({ title, brand: config.blog.name });
  
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.iknowtechworld.online";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/blog/${slug}`,
      siteName: config.blog.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
      publishedTime: result.post.publishedAt?.toString(),
      authors: [result.post.author?.name || "iknowtechworld Team"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: "@iknowtechworld",
      site: "@iknowtechworld",
    },
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
  };
}

interface Params {
  slug: string;
}

const Page = async (props: { params: Promise<Params> }) => {
  const params = await props.params;
  const { slug } = params;

  const result = await wisp.getPost(slug);
  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 });

  if (!result || !result.post) {
    return notFound();
  }

  const { title, publishedAt, updatedAt, image, author } = result.post;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image ? image : undefined,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      "@type": "Person",
      name: author.name ?? "iknowtechworld Team",
      image: author.image ?? undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "iknowtechworld",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.iknowtechworld.online"}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.iknowtechworld.online"}/blog/${slug}`,
    },
  };

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-5">
        <Navbar />
        <div className="max-w-prose mx-auto text-xl mt-0">
          <div className="mb-8 sm:mb-2">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <PostMeta publishedAt={result.post.publishedAt!} slug={result.post.slug} />
              <span className="flex gap-2 items-center">
                <Image
                  src="/favicon.ico"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 rounded-full"
                />
                {author?.name || 'iknowtechworld Team'}
              </span>
            </div>
          </div>

          <CustomBlogPostContent
            post={result.post}
            customComponents={{ AffiliateBanner, InternalLinkBox, ProductTable, ComparisonTable }}
          />
          
          <div className="my-8">
            <AdUnit slot="YOUR_POST_CONTENT_AD_SLOT" format="horizontal" />
          </div>

          <RelatedPosts posts={posts} />

          <div className="my-8">
            <AdUnit slot="YOUR_POST_COMMENTS_AD_SLOT" format="horizontal" />
          </div>

          <CommentSection slug={params.slug} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;