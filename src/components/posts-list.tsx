import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import Post from "./post";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function PostsList() {
  const posts = (await reader.collections.posts.all()).sort((a, b) => {
    return (
      new Date(b.entry.createdAt).getTime() -
      new Date(a.entry.createdAt).getTime()
    );
  });

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
