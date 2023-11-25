import Greetings from "@/components/greetings";
import PostsList from "@/components/posts-list";
import { getSortedPosts } from "@/lib/server/keystatic";

export default async function HomePage() {
  const posts = await getSortedPosts();
  return (
    <div>
      <Greetings />
      <div className="mt-7">
        <p className="text-2xl font-semibold mb-4">Tulisan randomku 🐥</p>
        <PostsList posts={posts} />
      </div>
    </div>
  );
}
