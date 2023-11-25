// keystatic.config.ts
import { config } from "@keystatic/core";
import postSchema from "@/lib/schema/posts";
import homeSchema from "@/lib/schema/home";

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
  },
  singletons: {
    home: homeSchema,
  },
});
