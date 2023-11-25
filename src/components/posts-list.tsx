import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";
import Pagination from "./pagination";
import Sort from "./sort";
import Post from "./post";
import { Sort as SortType } from "@/lib/types";

const reader = createReader(process.cwd(), keystaticConfig);
const itemsPerPage = 6;

export default async function PostsList({
  currentPage,
  sort,
}: {
  currentPage?: number;
  sort?: SortType;
}) {
  let posts = (await reader.collections.posts.all()).filter(
    (p) => !p.entry.draft
  );

  if (sort === "oldest") {
    posts = posts.sort((a, b) => {
      return (
        new Date(a.entry.createdAt).getTime() -
        new Date(b.entry.createdAt).getTime()
      );
    });
  } else {
    posts = posts.sort((a, b) => {
      return (
        new Date(b.entry.createdAt).getTime() -
        new Date(a.entry.createdAt).getTime()
      );
    });
  }

  const totalPage = Math.ceil(posts.length / itemsPerPage);

  if (currentPage) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    posts = posts.slice(start, end);
  }

  return (
    <div className="mt-10 space-y-4">
      <p className="text-2xl font-semibold">Tulisan randomku 🐥</p>
      <Sort />
      <div className="space-y-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              post={post}
              key={post.slug}
            />
          ))
        ) : (
          <p className="mt-3">Belum ada tulisan yang dibuat 😿</p>
        )}
      </div>
      <Pagination totalPage={totalPage} />
    </div>
  );
}
