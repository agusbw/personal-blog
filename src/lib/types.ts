import { DocumentElement } from "@keystatic/core";

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
