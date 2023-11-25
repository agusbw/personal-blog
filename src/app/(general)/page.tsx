import Greetings from "@/components/greetings";
import PostsList from "@/components/posts-list";

export default function HomePage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <Greetings />
      <PostsList currentPage={currentPage} />
    </div>
  );
}
