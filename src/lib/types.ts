export interface Post {
  slug: string;
  entry: {
    title: string;
    tags: readonly string[];
    content: () => Promise<DocumentElement[]>;
    draft: boolean;
    createdAt: string | null;
    updatedAt: string | null;
  };
}
