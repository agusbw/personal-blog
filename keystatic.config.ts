// keystatic.config.ts
import { config } from "@keystatic/core";
import postSchema from "@/lib/schema/keystatic/posts";
import homeSchema from "@/lib/schema/keystatic/home";
import footprintSchema from "@/lib/schema/keystatic/footprints";

export default config({
  storage: {
    kind: "github",
    repo: {
      name: "blog.agusbw.live",
      owner: "agusbw",
    },
  },
  collections: {
    posts: postSchema,
    footprints: footprintSchema,
  },
  singletons: {
    home: homeSchema,
  },
});
