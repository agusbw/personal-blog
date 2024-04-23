"use client";

import type { FootprintEntry } from "@/lib/types";
import { Fade } from "react-awesome-reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FootprintCard({
  footprint,
}: {
  footprint: FootprintEntry;
}) {
  return (
    <Fade
      delay={50}
      direction="up"
      triggerOnce
    >
      <div
        className={cn(
          "relative p-4 group break-inside-avoid",
          "before:block before:absolute before:w-[100%] before:inset-0 before:-z-10 before:h-[100%] before:rounded-lg before:transition-all before:duration-300 before:scale-95",
          "hover:before:bg-muted-foreground/10 hover:before:scale-100"
        )}
      >
        <Image
          src={footprint.thumbnail}
          alt="placeholder"
          className="rounded-lg object-cover w-full h-auto"
          sizes="100vw"
          width={500}
          height={500}
        />
        <p className="text-right font-semibold mt-1">{footprint.title}</p>
        <p className="text-xs">{footprint.description}</p>
        <p className="mt-2 text-purple-400 lg:text-muted-foreground group-hover:text-purple-400 text-sm hover:text-purple-600 transition-colors duration-300 font-semibold text-right">
          {new Date(footprint.createdAt).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Fade>
  );
}
