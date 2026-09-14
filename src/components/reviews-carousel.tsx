"use client";

import { useEffect, useState } from "react";
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
        className={`font-body-md text-body-md mt-6 mb-8 flex-1 ${
          active ? "text-white/90" : "text-on-surface-variant"
        }`}
      >
        {pick(locale, review.text, review.textAr)}
      </p>

      <div
        className={`flex items-center gap-4 pt-6 border-t ${
          active ? "border-white/20" : "border-surface-variant"
        }`}
      >
        <div
          className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-headline-md ${
            active ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <h3 className={`font-headline-md text-base ${active ? "text-white" : "text-primary"}`}>
            {review.name}
          </h3>
          <span className={`text-xs font-label-md ${active ? "text-white/70" : "text-outline"}`}>
            {pick(locale, review.serviceTag, review.serviceTagAr)}
          </span>
        </div>
      </div>
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
