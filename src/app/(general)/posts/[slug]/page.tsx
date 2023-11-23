import { DocumentRenderer } from "@keystatic/core/renderer";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

const reader = createReader(process.cwd(), keystaticConfig);

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await reader.collections.posts.read(params.slug);
  return {
    title: post?.title ? post.title : "Post",
  };
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Props) {
  const post = await reader.collections.posts.read(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-7">
      <div className="text-center w-full">
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <p className="italic text-sm">
          {post.place +
            ", " +
            new Date(post.createdAt)?.toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>
      </div>
      <div className="max-w-[650px] mx-auto space-y-7">
        <article className="prose dark:prose-invert">
          <DocumentRenderer document={await post.content()} />
        </article>
        <div>
          <p className="font-semibold">Tags</p>
          <div className="mt-1">
            {post.tags.map((tag) => (
              <Link
                href={`/tags/${tag}`}
                key={tag}
              >
                <Badge className="mr-2"> {tag}</Badge>
              </Link>
            ))}
          </div>
        </div>
        <Link
          className="block underline underline-offset-4"
          href={"/"}
        >
          Kembali ke home...
        </Link>
      </div>
    </div>
  );
}
