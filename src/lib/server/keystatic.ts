import "server-only";

import keystaticConfig from "@/../keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";

export const getReader = cache(() =>
  createReader(process.cwd(), keystaticConfig)
);

//collections
export const getPost = cache(getReader().collections.posts.read);
export const getSortedPosts = cache(async () => {
  const reader = getReader();
  const posts = (await reader.collections.posts.all()).filter(
    (post) => !post.entry.draft
  );
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.entry.createdAt).getTime() -
      new Date(a.entry.createdAt).getTime()
  );

  return sortedPosts;
});

export const getFootprint = cache(getReader().collections.footprints.read);
export const getSortedFootprints = cache(async () => {
  const reader = getReader();
  const footprints = (await reader.collections.footprints.all()).filter(
    (footprint) => !footprint.entry.draft
  );
  const sortedFootprints = footprints.sort(
    (a, b) =>
      new Date(b.entry.createdAt).getTime() -
      new Date(a.entry.createdAt).getTime()
  );
  return sortedFootprints;
});

//singletons
export const getHomePage = cache(getReader().singletons.home.read);
