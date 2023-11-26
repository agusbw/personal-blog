import { DocumentElement } from "@keystatic/core";
import { messageSchema } from "./schema/zod-schema";
import { z } from "zod";

export type PostEntry = {
  title: string;
  tags: readonly string[];
  content: () => Promise<DocumentElement[]>;
  draft: boolean;
  place: string;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  slug: string;
  entry: PostEntry;
};

export type Message = z.infer<typeof messageSchema> & {
  created_at: Date;
};
