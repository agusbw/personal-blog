import Greetings from "@/components/greetings";
import PostsList from "@/components/posts-list";
import { Sort as SortType } from "@/lib/types";

export default function HomePage() {
  return (
    <div>
      <Greetings />
      <PostsList />
    </div>
  );
}
