"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  direction?: "top" | "bottom";
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  direction = "top",
  className,
}: InfiniteSliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "top" ? "forwards" : "reverse"
        );
        containerRef.current.style.setProperty(
          "--animation-duration",
          `${speed}s`
        );
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex flex-col w-full shrink-0 flex-nowrap",
          start && "animate-scroll-vertical",
          "hover:[animation-play-state:paused]"
        )}
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>
    </div>
  );
}
