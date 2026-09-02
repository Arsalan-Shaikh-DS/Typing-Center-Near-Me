"use client";

import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/hero-bg-new.jpg",
    alt: "UAE skyline hero background",
  },
  {
    src: "/images/hero-abu-dhabi-skyline.jpg",
    alt: "Abu Dhabi skyline at dusk reflected over the water",
  },
  {
    src: "/images/hero-sharjah-skyline.jpg",
    alt: "Sharjah city skyscrapers along the waterfront",
  },
];

const ROTATE_INTERVAL_MS = 3000;

export function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {heroImages.map((image, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={image.src}
          src={i === 0 ? `${image.src}?v=2` : image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/60 to-background" />
    </div>
  );
}
