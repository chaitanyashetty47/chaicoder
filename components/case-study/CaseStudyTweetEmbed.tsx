"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface CaseStudyTweetEmbedProps {
  tweetUrl: string;
}

export function CaseStudyTweetEmbed({ tweetUrl }: CaseStudyTweetEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[200px] flex items-center justify-center text-text-dark/60 rounded-lg bg-gray-50">
        Loading tweet...
      </div>
    );
  }

  return (
    <>
      <blockquote
        className="twitter-tweet"
        data-theme="light"
        data-dnt="true"
      >
        <a href={tweetUrl}>View tweet</a>
      </blockquote>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </>
  );
}
