"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type BlogPost, getBlogPosts } from "@/lib/blog-data"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const allPosts = getBlogPosts()
  const currentIndex = allPosts.findIndex((p) => p.id === post.id)
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const relatedPosts = allPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <Badge variant="secondary" className="text-sm">
            {post.category}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">{post.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <span>By {post.author}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2 bg-transparent"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-heading font-bold text-foreground mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-heading font-semibold text-foreground mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => <p className="text-foreground leading-relaxed mb-4">{children}</p>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">{children}</ul>
              ),
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Navigation */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {previousPost && (
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ArrowLeft className="h-4 w-4" />
                  Previous Article
                </div>
                <Link href={`/blog/${previousPost.slug}`} className="group-hover:text-primary transition-colors">
                  <h3 className="font-heading font-semibold leading-tight">{previousPost.title}</h3>
                </Link>
              </CardContent>
            </Card>
          )}

          {nextPost && (
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-right">
                <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                  Next Article
                  <ArrowRight className="h-4 w-4" />
                </div>
                <Link href={`/blog/${nextPost.slug}`} className="group-hover:text-primary transition-colors">
                  <h3 className="font-heading font-semibold leading-tight">{nextPost.title}</h3>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t pt-16">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="font-heading group-hover:text-primary transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{relatedPost.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-secondary/30 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-heading font-bold text-foreground">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground">
              Get personalized support throughout your pregnancy with our comprehensive midwifery care.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
