import { Post as PostType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function Post({ post }: { post: PostType }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between border p-3 shadow-sm hover:shadow-md hover:scale-[1.015] transition-all duration-300 rounded-md lg:items-center"
    >
      {post.entry.title}
      <p className="italic text-sm">
        {formatDate(new Date(post.entry.createdAt))}
      </p>
    </Link>
  );
}
