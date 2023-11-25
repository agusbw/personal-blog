"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Sort as SortType } from "@/lib/types";

export default function Sort() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  return (
    <Select
      value={params.get("sort") === "oldest" ? "oldest" : "newest"}
      onValueChange={(value: SortType) => {
        if (value === "newest") {
          params.delete("sort");
        } else {
          params.set("sort", value);
        }
        router.push(`${pathname}?${params.toString()}`, {
          scroll: false,
        });
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Urutkan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Terbaru</SelectItem>
        <SelectItem value="oldest">Terlama</SelectItem>
      </SelectContent>
    </Select>
  );
}
