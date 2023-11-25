import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, useMemo } from "react";
import { cn } from "@/lib/utils";

type Props = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "className">;

export function CustomLink({ href, ...props }: Props) {
  const isExternal = useMemo(() => {
    if (href === undefined) return false;

    if (typeof href === "object") {
      return href.href?.startsWith("http");
    }

    return href.startsWith("http");
  }, [href]);

  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link
      href={href}
      className={cn(
        "inline-block relative after:block after:absolute",
        "after:bg-purple-600/100 hover:after:bg-purple-600/40",
        "after:transition-all after:duration-300 after:-z-50",
        "after:w-full after:h-[2px] after:hover:h-full after:bottom-[0]",
        "leading-none"
      )}
      {...externalProps}
      {...props}
    />
  );
}
