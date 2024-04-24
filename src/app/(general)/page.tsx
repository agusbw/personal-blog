import Greetings from "@/components/greetings";
import PostsList from "@/components/posts-list";
import { getSortedPosts } from "@/lib/server/keystatic";
import { cn } from "@/lib/utils";
import Link from "next/link";
import siteConfig from "@/lib/site-config";
import { MessageSquare } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default async function HomePage() {
  const posts = await getSortedPosts();
  return (
    <div>
      <Greetings />
      <div className="mt-4 space-x-3 flex items-center">
        <Link
          href={siteConfig.personalWebsite}
          className={buttonVariants({
            variant: "default",
            size: "sm",
          })}
          target="_blank"
        >
          Personal Site
        </Link>
        <Link
          href="/messages"
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
        >
          <MessageSquare className="w-4 h-4 mr-2" /> Kirim Pesan
        </Link>
      </div>
      <div className="mt-7">
        <p
          className={cn(
            "text-2xl font-semibold dark:text-background font-schoolbell",
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
