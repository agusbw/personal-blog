import "server-only";

import keystaticConfig from "@/../keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";

export const getReader = cache(() =>
  createReader(process.cwd(), keystaticConfig)
);

const reader = getReader();

//collections
export const getPost = cache(getReader().collections.posts.read);

export const getSortedPosts = cache(async () =>
  (await reader.collections.posts.all())
    .filter((post) => !post.entry.draft)
    .sort(
      (a, b) =>
        new Date(b.entry.createdAt).getTime() -
        new Date(a.entry.createdAt).getTime()
    )
);

export const getFootprint = cache(getReader().collections.footprints.read);

export const getSortedFootprints = cache(async () =>
  (await reader.collections.footprints.all())
    .filter((footprint) => !footprint.entry.draft)
    .sort(
      (a, b) =>
        new Date(b.entry.createdAt).getTime() -
        new Date(a.entry.createdAt).getTime()
    )
);

//singletons
export const getHomePage = cache(getReader().singletons.home.read);
