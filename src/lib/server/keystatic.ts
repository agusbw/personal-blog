import "server-only";

import keystaticConfig from "@/../keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";

export const getReader = cache(() =>
  createReader(process.cwd(), keystaticConfig)
);

export const getPost = cache(getReader().collections.posts.read);
export const getSortedPosts = cache(async () => {
  const reader = getReader();
  const posts = (await reader.collections.posts.all()).filter(
    (post) => !post.entry.draft
  );
  const sortedPosts = posts.sort((a, b) => {
    const aDate = new Date(a.entry.createdAt);
    const bDate = new Date(b.entry.createdAt);
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });
  return sortedPosts;
});

export const getHomePage = cache(getReader().singletons.home.read);
