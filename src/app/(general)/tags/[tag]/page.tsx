import { getSortedPosts } from "@/lib/server/keystatic";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Post as PostType } from "@/lib/types";
import PostsList from "@/components/posts-list";

type Props = {
  params: { tag: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.tag,
  };
}

const getUniqueTags = (posts: PostType[]) =>
  Array.from(new Set(posts.flatMap((post) => post.entry.tags)));

export async function generateStaticParams() {
  const posts: PostType[] = (await getSortedPosts()).filter(
    (post) => !post.entry.draft
  );

  return getUniqueTags(posts).map((tag) => ({
    tag,
  }));
}

export default async function TagsPage({ params }: Props) {
  const posts: PostType[] = (await getSortedPosts()).filter((post) =>
    post.entry.tags.includes(params.tag)
  );

  if (posts.length <= 0) notFound();

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">
        Post pada tag {params.tag} 🔎
      </h1>
      <PostsList posts={posts} />
    </div>
  );
}
