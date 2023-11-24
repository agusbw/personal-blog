import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import { Metadata } from "next";
import { Post } from "@/lib/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tags",
  description: "Tags on Bewe's personal blog",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function TagsPage() {
  const posts: Post[] = (await reader.collections.posts.all()).filter(
    (post) => !post.entry.draft
  );

  const tags = posts.flatMap((post) => post.entry.tags);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Tag yang tersedia ⚓</h1>
      <div className="mt-7">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              key={tag}
            >
              <Badge className="mr-2"> {tag}</Badge>
            </Link>
          ))
        ) : (
          <p className="mt-3">Belum ada tag yang tersedia 😿</p>
        )}
      </div>
    </div>
  );
}
