"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

type Props = {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "link"
    | "ghost"
    | "outline";

  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
};

export function SubmitButton({
  variant = "default",
  size = "default",
  ...props
}: Props & ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      variant={variant}
      size={size}
      {...props}
    >
      {pending ? "Loading..." : props.children}
    </Button>
  );
}
