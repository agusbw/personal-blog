import Greetings from "@/components/greetings";
import PostsList from "@/components/posts-list";
import { Sort as SortType } from "@/lib/types";

export default function HomePage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    sort?: SortType;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const sort = searchParams?.sort || "newest";

  return (
    <div>
      <Greetings />
      <PostsList
        currentPage={currentPage}
        sort={sort}
      />
    </div>
  );
}
