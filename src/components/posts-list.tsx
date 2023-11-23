import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import { Post as PostType } from "@/lib/types";

const reader = createReader(process.cwd(), keystaticConfig);

export function Post({ post }: { post: PostType }) {
  return (
    <div className="mt-4 flex flex-col lg:flex-row gap-3 lg:gap-0 lg:justify-between border p-3 shadow-sm rounded-md lg:items-center">
      <div>
        <Link
          href={`/posts/${post.slug}`}
          className="line-clamp-1 underline underline-offset-4"
        >
          {post.entry.title}
        </Link>
      </div>
      <p className="italic text-sm">
        {new Date(post.entry.createdAt).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}

export default async function PostsList() {
  const posts = (await reader.collections.posts.all()).sort((a, b) => {
    return (
      new Date(b.entry.createdAt).getTime() -
      new Date(a.entry.createdAt).getTime()
    );
  });

  return (
    <div className="mt-10">
      <p className="text-2xl font-semibold">Tulisan randomku 🐥</p>
      <div className="space-y-3">
        {posts.map(
          (post) =>
            !post.entry.draft && (
              <Post
                post={post}
                key={post.slug}
              />
            )
        )}
      </div>
    </div>
  );
}
