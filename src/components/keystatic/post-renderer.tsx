import { DocumentRendererProps } from "@keystatic/core/renderer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Shikiji } from "../shikiji";
import { cn } from "@/lib/utils";
import { CustomLink } from "../custom-link";

export function getPostRenderer(): DocumentRendererProps["renderers"] {
  return {
    block: {
      code: ({ children: code, language = "plain" }) => {
        return (
          <ScrollArea
            className={cn(
              "not-prose relative rounded-md w-full text-sm",
              "border border-neutral-500/25 h-96"
            )}
          >
            <Shikiji
              code={code}
              language={language}
              className="[&>pre]:p-4"
            />
            <ScrollBar
              orientation="horizontal"
              className="bg-[#fcdfbe] dark:bg-[#191729]"
            />
            <ScrollBar
              orientation="vertical"
              className="bg-[#fcdfbe] dark:bg-[#191729]"
            />
          </ScrollArea>
        );
      },
      image: (props) => {
        return (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img {...props} />
            <figcaption>{props.title && props.title}</figcaption>
          </figure>
        );
      },
    },
    inline: {
      link: (props) => {
        return <CustomLink href={props.href}>{props.children}</CustomLink>;
      },
    },
  };
}
