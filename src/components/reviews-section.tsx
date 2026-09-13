import { getTranslations, getLocale } from "next-intl/server";
import { reviews, reviewSummary } from "@/lib/data/reviews";
import { ReviewsCarousel } from "@/components/reviews-carousel";

export async function ReviewsSection({ asH1 = false }: { asH1?: boolean }) {
  const t = await getTranslations("reviewsSection");
  const locale = await getLocale();
  const Heading = asH1 ? "h1" : "h2";

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden" id="reviews">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 border border-secondary-fixed-dim/40 text-secondary font-label-md text-label-md">
            <span className="material-symbols-outlined icon-fill text-base">star</span>
            {t("eyebrow")}
          </span>
          <Heading className="font-display-lg text-[32px] md:text-[40px] text-primary">
            {t("heading")}
          </Heading>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("subtitle")}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-surface-variant shadow-sm mt-2">
            <div className="flex text-[#FBBC04]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined icon-fill text-xl">
                  {i < Math.floor(reviewSummary.average) ? "star" : "star_half"}
                </span>
              ))}
            </div>
            <span className="font-label-md text-sm text-on-surface-variant">
              {t("rating", { average: reviewSummary.average, count: reviewSummary.count })}
            </span>
          </div>
        </div>

        <ReviewsCarousel reviews={reviews} locale={locale} />
      </div>
    </section>
  );
}
