"use client";

import * as React from "react";
import Image from "next/image";
import { getGalleryForSlug } from "@/lib/case-study-galleries";
import { ImageCarouselDialog, type CaseStudyImage } from "./ImageCarouselDialog";

interface VisualProofGalleryProps {
  /** Case study slug (e.g. "strentor") – used to look up gallery images */
  slug: string;
}

export function VisualProofGallery({ slug }: VisualProofGalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState<CaseStudyImage | null>(null);

  const images = React.useMemo(
    () => getGalleryForSlug(slug),
    [slug]
  );

  const handleOpen = (image: CaseStudyImage) => {
    setActiveImage(image);
    setOpen(true);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => handleOpen(image)}
            className="group mb-4 w-full break-inside-avoid text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A9D8F] focus-visible:ring-offset-2 rounded-xl cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1280}
                  height={800}
                  className="w-full h-auto max-h-[460px] object-cover object-top"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="px-3 py-2.5">
                <p className="text-sm font-medium text-text-dark/80">
                  {image.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <ImageCarouselDialog
        open={open}
        onOpenChange={setOpen}
        image={activeImage}
      />
    </>
  );
}
