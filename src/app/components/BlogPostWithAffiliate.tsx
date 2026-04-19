import { BlogPostContent } from "@/components/BlogPostContent";
import { ContentWithCustomComponents } from "@wisp-cms/react-custom-component";
import AffiliateBanner from "./AffiliateBanner";

interface BlogPostWithAffiliateProps {
  post: any; // Replace with proper type if available
}

export default function BlogPostWithAffiliate({ post }: BlogPostWithAffiliateProps) {
  // If the post has custom components, use ContentWithCustomComponents
  // Otherwise, use the regular BlogPostContent
  const hasCustomComponents = post.content?.includes('{{</* CustomComponent */>}}');
  
  if (hasCustomComponents) {
    return (
      <ContentWithCustomComponents
        content={post.content}
        customComponents={{ AffiliateBanner }}
      />
    );
  }
  
  return <BlogPostContent post={post} />;
}