"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Logo {
  id: number;
  name: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
  /** Scale factor (e.g. 1.5) - enlarges visually without affecting layout/row height */
  scale?: number;
}

interface LogoCarouselProps {
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  columns?: number; // deprecated, kept for compatibility
}

export function LogoCarousel({
  logos,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: LogoCarouselProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-12 md:gap-20 items-center py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {logos.map((logo) => {
          const logoWidth = logo.width || 167;
          const logoHeight = logo.height || 32;
          const scale = logo.scale ?? 1;
          return (
            <li
              key={logo.id}
              className="relative shrink-0 flex items-center justify-center overflow-visible"
              style={{ width: logoWidth, height: logoHeight }}
            >
              <span
                className="inline-flex items-center justify-center"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center center",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logoWidth}
                  height={logoHeight}
                  className={logo.className || "h-8 w-auto object-contain"}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
