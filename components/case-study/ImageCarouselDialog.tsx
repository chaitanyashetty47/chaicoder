"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export interface CaseStudyImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageCarouselDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: CaseStudyImage | null;
}

export function ImageCarouselDialog({
  open,
  onOpenChange,
  image,
}: ImageCarouselDialogProps) {
  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden">
        <div className="relative bg-chai-foam">
          {/* Close button - outside zoom area so it stays fixed */}
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 z-30 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-text-dark/70 shadow-sm hover:bg-white hover:text-text-dark transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Zoomable image area */}
          <div className="relative w-full overflow-hidden min-h-[60vh] max-h-[85vh]">
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={4}
              doubleClick={{
                mode: "zoomIn",
                step: 1,
              }}
              wheel={{
                step: 0.2,
              }}
              panning={{
                disabled: false,
              }}
              centerOnInit={true}
              limitToBounds={true}
              centerZoomedOut={true}
            >
              {({ resetTransform, instance }) => {
                const scale = instance?.transformState?.scale ?? 1;
                return (
                <>
                  <TransformComponent
                    wrapperClass="!w-full !h-full"
                    contentClass="!w-full !h-full flex items-center justify-center"
                    wrapperStyle={{
                      width: '100%',
                      height: '100%',
                      cursor: scale > 1 ? 'grab' : 'zoom-in',
                    }}
                  >
                    <div className="p-4 sm:p-6 md:p-8">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1000}
                        className="max-h-[75vh] w-auto rounded-xl object-contain select-none"
                        draggable={false}
                        sizes="(min-width: 1024px) 900px, (min-width: 768px) 80vw, 90vw"
                      />
                    </div>
                  </TransformComponent>

                  {/* Reset button when zoomed */}
                  {scale > 1 && (
                    <button
                      type="button"
                      onClick={() => resetTransform()}
                      className="absolute bottom-20 right-4 z-30 bg-[#2A9D8F] text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md hover:bg-[#238B7A] transition-colors cursor-pointer"
                    >
                      Reset Zoom
                    </button>
                  )}
                </>
                );
              }}
            </TransformWrapper>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 sm:px-6 py-3 sm:py-4 pointer-events-none">
            <p className="text-sm sm:text-base font-medium text-white">
              {image.title}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

