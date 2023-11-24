import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Post as PostType } from "@/lib/types";
import { Post } from "@/components/posts-list";

type Props = {
  params: { tag: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.tag,
  };
}

function getUniqueTags(posts: PostType[]) {
  const tags = posts.flatMap((post) => post.entry.tags);
  return Array.from(new Set(tags));
}

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const posts: PostType[] = (await reader.collections.posts.all()).filter(
    (post) => !post.entry.draft
  );

  return getUniqueTags(posts).map((tag) => ({
    tag,
  }));
}

export default async function TagsPage({ params }: Props) {
  const posts: PostType[] = (await reader.collections.posts.all()).filter(
    (post) => !post.entry.draft && post.entry.tags.includes(params.tag)
  );

  if (posts.length <= 0) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Post pada tag {params.tag} 🔎</h1>
      <div className="mt-7">
        {posts.map((post) => (
          <Post
            post={post}
            key={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
