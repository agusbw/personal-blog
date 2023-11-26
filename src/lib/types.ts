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

export type FootprintEntry = {
  title: string;
  draft: boolean;
  description: string;
  thumbnail: string;
  createdAt: string;
};

export type Post = {
  slug: string;
  entry: PostEntry;
};

export type Footprints = {
  slug: string;
  entry: FootprintEntry;
};

export type Message = z.infer<typeof messageSchema> & {
  created_at: Date;
};
