"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Pagination({ totalPage }: { totalPage: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  function handlePageDown() {
    if (currentPage > 1) {
      currentPage === 2
        ? params.delete("page")
        : params.set("page", String(currentPage - 1));
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  function handlePageUp() {
    if (currentPage < totalPage) {
      params.set("page", String(currentPage + 1));
      router.push(`${pathname}?${params.toString()}`);
    }
  }

  return (
    <div className="text-right space-x-2">
      <Button
        onClick={() => handlePageDown()}
        variant={"outline"}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => handlePageUp()}
        variant={"outline"}
        disabled={currentPage === totalPage}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
