import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import ViewCounter from "../components/ViewCounter";
import { wisp } from "@/lib/wisp";
import Navbar from "../navbar";
import AdUnit from "../components/AdUnit";
import { formatDate } from "date-fns";
import PostMeta from "../components/PostMeta";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });

  return (
    <div className="container mx-auto px-5 mb-10">
      <Navbar />

      {/* Blog posts grid with view counts integrated */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {result.posts.map((post) => (
          <div key={post.id} className="overflow-hidden">
            {post.image && (
              <div className="relative h-auto w-full">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full rounded-xl object-cover cursor-pointer"
                />
              </div>
            )}
            <div className="py-3">
              <h2 className="text-3xl font-bold">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {post.description || 'Read more...'}
              </p>
              <PostMeta publishedAt={post.publishedAt!} slug={post.slug} />
            </div>
          </div>
        ))}
      </div>

      {/* Ad between posts and pagination */}
      <div className="my-8">
        <AdUnit slot="YOUR_BLOGPAGE_AD_SLOT" format="horizontal" />
      </div>

      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
};

export default Page;