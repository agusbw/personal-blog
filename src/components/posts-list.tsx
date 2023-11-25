import Post from "./post";
import { Post as PostType } from "@/lib/types";

export default async function PostsList({ posts }: { posts: PostType[] }) {
  return (
    <div className="mt-7">
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
