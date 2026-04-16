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
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [generatedOgImage, image] : [generatedOgImage],
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
      name: author.name ?? undefined,
      image: author.image ?? undefined,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-5">
        <Navbar />
        <div className="max-w-prose mx-auto text-xl mt-0">
          {/* Post metadata only - title will come from BlogPostContent */}
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
                {author?.name || 'Kyro Team'}
              </span>
            </div>
          </div>

          <BlogPostContent post={result.post} />

          {/* Ad after blog content */}
          <div className="my-8">
            <AdUnit slot="YOUR_POST_CONTENT_AD_SLOT" format="horizontal" />
          </div>

          <RelatedPosts posts={posts} />

          {/* Ad before comments */}
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