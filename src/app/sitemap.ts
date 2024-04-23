import { getSortedPosts } from "../lib/server/keystatic";

const URL = process.env.URL || "https://bewe-blog.vercel.app";

export default async function sitemap() {
  const posts = await getSortedPosts();

  const pages = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${URL}/tags`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const postsSitemap = posts.map((post) => ({
    url: `${URL}/posts/${post.slug}`,
    lastModified: new Date(post.entry.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...postsSitemap];
}
