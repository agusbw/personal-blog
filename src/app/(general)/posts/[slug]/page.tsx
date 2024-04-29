import { DocumentRenderer } from "@keystatic/core/renderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { PostEntry } from "@/lib/types";
import { Post as PostType } from "@/lib/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import siteConfig from "@/lib/site-config";
import { formatDate } from "@/lib/utils";
import { getPostRenderer } from "@/components/keystatic/post-renderer";
import { getPost, getSortedPosts } from "@/lib/server/keystatic";
import { ProsePost } from "@/components/prose-post";
import { CustomLink } from "@/components/custom-link";
import ScrollProgress from "@/components/scroll-progress";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: PostEntry | null = await getPost(params.slug);
  return {
    title: post?.title ? post.title : "Post",
  };
}

export async function generateStaticParams() {
  const posts: PostType[] = await getSortedPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);
  const renderer = getPostRenderer();
  if (!post) notFound();

  return (
    <div className="max-w-[650px] mx-auto">
      <ScrollProgress />
      <div className="text-center w-full space-y-2 mb-12">
        <h1 className="text-4xl font-medium font-schoolbell">{post.title}</h1>
        <div className="flex items-center gap-2 justify-center">
          <Avatar>
            <AvatarImage
              alt="Bewe's profile image"
              src="/images/profile.webp"
            />
          </Avatar>
          <Link
            className="hoverable-link"
            href={siteConfig.socials.twitter}
          >
            Bewe
          </Link>
        </div>
        <p className="text-sm">
          {post.place + ", " + formatDate(new Date(post.createdAt))}
        </p>
      </div>
      <div>
        <ProsePost>
          <DocumentRenderer
            document={await post.content()}
            renderers={renderer}
          />
        </ProsePost>
        <div className="space-y-5 mt-7">
          <p className="text-sm">
            Terakhir diupdate: {formatDate(new Date(post.updatedAt))}
          </p>
          <div>
            <p className="font-semibold">Tags</p>
            {post.tags.map((tag) => (
              <Link
                href={`/tags/${tag}`}
                key={tag}
              >
                <Badge className="mr-2"> {tag}</Badge>
              </Link>
            ))}
          </div>
          <CustomLink href={"/"}>Kembali ke home...</CustomLink>
        </div>
      </div>
    </div>
  );
}
