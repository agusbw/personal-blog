import type { Metadata } from "next";
import { Post } from "@/lib/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getSortedPosts } from "@/lib/server/keystatic";

export const metadata: Metadata = {
  title: "Tag",
  description: "Tagar yang tersedia atau pernah dibahas",
  openGraph: {
    type: "article",
    url: `https://bewe-blog.vercel.app/tags`,
    description: "Tagar yang tersedia atau pernah dibahas",
    title: "Tag",
    images: `https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app/tags`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@agusbw_",
    description: "Tagar yang tersedia atau pernah dibahas",
    title: "Tag",
    images: `https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app/tags`,
  },
};

export default async function TagsPage() {
  const posts: Post[] = await getSortedPosts();

  const tags = Array.from(new Set(posts.flatMap((post) => post.entry.tags)));

  return (
    <div>
      <h1 className="text-3xl font-medium font-schoolbell">
        Tag yang tersedia ⚓
      </h1>
      <div className="mt-7 flex gap-3 flex-wrap">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              key={tag}
            >
              <Badge> {tag}</Badge>
            </Link>
          ))
        ) : (
          <p className="mt-3">Belum ada tag yang tersedia 😿</p>
        )}
      </div>
    </div>
  );
}
