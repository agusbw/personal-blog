import Post from "./post";
import { getSortedPosts } from "@/lib/server/keystatic";

export default async function PostsList() {
  const posts = await getSortedPosts();

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
