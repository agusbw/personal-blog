import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"article">;

export function ProsePost({ className, ...props }: Props) {
  return (
    <article
      className={cn(
        "prose dark:prose-invert",
        "[&>*]:gap-4",

        "[&_a]:no-underline",
        "prose-a:hoverable-link prose-a:inline-block prose-a:hyphens-auto prose-a:break-words",

        "prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-code:rounded prose-code:border prose-code:border-neutral-500/25",
        "prose-code:bg-neutral-100 prose-code:px-1 dark:prose-code:bg-neutral-800",
        "prose-code:inline prose-code:hyphens-auto prose-code:break-words",
        "prose-code:text-[#DD1144] prose-code:font-normal dark:prose-code:text-[#fc4673]",

        "[&_blockquote_p]:before:content-[''] [&_blockquote_p]:after:content-['']",
        "prose-blockquote:not-italic",
        "prose-blockquote:border-l-neutral-200 dark:prose-blockquote:border-l-neutral-800",

        "prose-figcaption:text-center prose-img:mx-auto prose-img:rounded",

        className
      )}
      {...props}
    />
  );
}
