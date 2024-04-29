"use client";

import { useScrollProgress } from "@/lib/hooks/use-scroll-progress";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className={"fixed left-0 top-0 py-0.5 bg-purple-500"}
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
export default ScrollProgress;
