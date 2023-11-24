"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const pathname = usePathname();
  function isActive(href: string): boolean {
    const pathArr = pathname.split("/");
    return pathArr[1] === href.split("/")[1];
  }

  return (
    <div className="flex justify-between items-center mb-7 ">
      <div className="flex gap-5">
        <Link
          href={"/"}
          className={isActive("/") ? "font-semibold" : ""}
        >
          Home
        </Link>
        <Link
          href={"/tags"}
          className={isActive("/tags") ? "font-semibold" : ""}
        >
          Tags
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
}
