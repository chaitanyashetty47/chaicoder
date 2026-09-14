"use client";

import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';

export interface VideoTestimonial {
  src: string;
  poster: string;
  name: string;
  title: string;
}

interface VideoTestimonialCardProps extends VideoTestimonial {
  isActive: boolean;
  onPlay: () => void;
}

const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  src,
  poster,
  name,
  title,
  isActive,
  onPlay,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause this card's video whenever another card becomes the active one.
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <Card className="h-full bg-white border border-border/70 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Media area — fixed 16:9 so both landscape videos display in correct proportion */}
      <div className="relative w-full aspect-video bg-text-dark">
        {isActive ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play video testimonial from ${name}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt={`${name} testimonial`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Center play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-primary-orange text-primary-orange" />
              </span>
            </span>

            {/* Name + title overlaid on the video, bottom-left over a gradient scrim */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-4 md:p-5 text-left">
              <span className="block text-base md:text-lg font-semibold text-white font-inter">
                {name}
              </span>
              <span className="block text-sm text-white/80 font-inter">{title}</span>
            </span>
          </button>
        )}
      </div>
    </Card>
  );
};

export default VideoTestimonialCard;
