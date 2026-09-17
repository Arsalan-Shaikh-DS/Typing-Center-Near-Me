"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Background video for the "How It Works" section — an aerial shot of
 * Dubai's Sheikh Zayed Road at dusk.
 *
 * Drop your clip in at:
 *   public/videos/how-it-works-bg.mp4   (required)
 *
 * Until the video is added, or while it's still loading, the poster
 * image (/images/how-it-works-bg.jpg) is shown instead — the section
 * never breaks or shows a blank box. The video fades in only once it
 * has actually started playing, so there's no abrupt "flick" between
 * the poster and the video on load or reload.
 *
 * This section sits well below the fold, so the <video> (and its
 * network request) isn't added to the page at all until the section is
 * about to scroll into view. Without this, the browser would start
 * downloading this video at the same time as the Hero's video the
 * moment the page loads, even though nobody has scrolled down yet —
 * doubling the bytes competing for bandwidth on first paint.
 */
export function HowItWorksVideoBackground() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Start fetching a little before it's actually on screen so it's
      // ready by the time the visitor scrolls the rest of the way.
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0" aria-hidden="true">
      {/* Poster fallback — always present underneath the video */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/how-it-works-bg.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {shouldLoad && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/how-it-works-bg.jpg"
          onPlaying={() => setIsPlaying(true)}
        >
          <source src="/videos/how-it-works-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay so the white step cards and text stay readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
    </div>
  );
}
