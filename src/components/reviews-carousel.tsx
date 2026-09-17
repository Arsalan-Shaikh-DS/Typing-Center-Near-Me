"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Review } from "@/lib/data/reviews";
import { pick } from "@/lib/i18n-helpers";

const AUTO_ADVANCE_MS = 5000;

interface ReviewsCarouselProps {
  reviews: Review[];
  locale: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-[#FBBC04]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="material-symbols-outlined icon-fill text-xl">
          {i < rating ? "star" : "star_outline"}
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  locale,
  active,
}: {
  review: Review;
  locale: string;
  active: boolean;
}) {
  return (
    <div
      className={`h-full flex flex-col rounded-3xl p-7 md:p-9 transition-all duration-500 ${
        active
          ? "bg-primary text-white shadow-2xl"
          : "bg-white border border-surface-variant text-on-surface-variant"
      }`}
    >
      <div className="flex flex-col items-center text-center mb-6">
        <div
          className={`relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden ring-4 ${
            active ? "ring-white/20" : "ring-primary/10"
          }`}
        >
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <h3 className={`font-headline-md text-base mt-4 ${active ? "text-white" : "text-primary"}`}>
          {review.name}
        </h3>
        <span className={`text-xs font-label-md ${active ? "text-white/70" : "text-outline"}`}>
          {pick(locale, review.serviceTag, review.serviceTagAr)}
        </span>
      </div>

      <span
        className={`material-symbols-outlined text-3xl mb-4 ${
          active ? "text-white/30" : "text-primary/20"
        }`}
        aria-hidden="true"
      >
        format_quote
      </span>

      <Stars rating={review.rating} />

      <p
        className={`font-body-md text-body-md mt-6 flex-1 ${
          active ? "text-white/90" : "text-on-surface-variant"
        }`}
      >
        {pick(locale, review.text, review.textAr)}
      </p>
    </div>
  );
}

export function ReviewsCarousel({ reviews, locale }: ReviewsCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    if (total <= 1) return;
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [index, total]);

  const goTo = (i: number) => {
    setIndex(((i % total) + total) % total);
  };

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  return (
    <div>
      {/* Desktop / tablet: three-card peek layout */}
      <div className="hidden md:grid grid-cols-[1fr_1.4fr_1fr] gap-6 items-stretch max-w-6xl mx-auto">
        <div className="scale-95 opacity-60 pointer-events-none">
          <ReviewCard review={reviews[prevIndex]} locale={locale} active={false} />
        </div>
        <div className="relative z-10">
          <ReviewCard review={reviews[index]} locale={locale} active />
        </div>
        <div className="scale-95 opacity-60 pointer-events-none">
          <ReviewCard review={reviews[nextIndex]} locale={locale} active={false} />
        </div>
      </div>

      {/* Mobile: single active card */}
      <div className="md:hidden max-w-md mx-auto">
        <ReviewCard review={reviews[index]} locale={locale} active />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="w-11 h-11 shrink-0 rounded-full border border-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          <span className="material-symbols-outlined rtl:rotate-180">arrow_back</span>
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((review, i) => (
            <button
              key={review.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-surface-variant hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="w-11 h-11 shrink-0 rounded-full border border-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
