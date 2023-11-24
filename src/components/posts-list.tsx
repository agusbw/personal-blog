import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import { Post as PostType } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const reader = createReader(process.cwd(), keystaticConfig);

export function Post({ post }: { post: PostType }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between border p-3 shadow-sm rounded-md lg:items-center">
      <div>
        <Link
          href={`/posts/${post.slug}`}
          className="hoverable-link line-clamp-1"
        >
          {post.entry.title}
        </Link>
      </div>
      <p className="italic text-sm">
        {formatDate(new Date(post.entry.createdAt))}
      </p>
    </div>
  );
}

export default async function PostsList() {
  const posts = (await reader.collections.posts.all())
    .sort((a, b) => {
      return (
        new Date(b.entry.createdAt).getTime() -
        new Date(a.entry.createdAt).getTime()
      );
    })
    .filter((p) => !p.entry.draft);

  return (
    <div className="mt-10">
      <p className="text-2xl font-semibold mb-4">Tulisan randomku 🐥</p>
      <div className="space-y-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              post={post}
              key={post.slug}
            />
          ))
        ) : (
          <p className="mt-3">Belum ada tulisan yang dibuat 😿</p>
        )}
      </div>
    </div>
  );
}
