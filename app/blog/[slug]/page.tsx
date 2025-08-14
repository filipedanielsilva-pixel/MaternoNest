import { Navigation } from "@/components/navigation"
import { BlogPostContent } from "@/components/blog-post-content"
import { getBlogPost, getBlogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPostContent post={post} />
    </main>
  )
}
