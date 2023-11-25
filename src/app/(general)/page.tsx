import Greetings from "@/components/greetings";
import PostsList from "@/components/posts-list";
import { getSortedPosts } from "@/lib/server/keystatic";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  const posts = await getSortedPosts();
  return (
    <div>
      <Greetings />
      <div className="mt-7">
        <p
          className={cn(
            "text-2xl font-semibold dark:text-background",
            "inline-block relative mb-5",
            "before:block before:rotate-1 before:w-[108%] before:-left-2 before:-top-1 before:-z-10 before:h-[115%] before:bg-yellow-200  before:absolute before:rounded-sm"
          )}
        >
          Daftar tulisan <span className="animate-wiggle inline-block">🐥</span>
        </p>
        <PostsList posts={posts} />
      </div>
    </div>
  );
}
