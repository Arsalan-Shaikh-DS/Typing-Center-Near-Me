import { getTranslations, getLocale } from "next-intl/server";
import { reviews, reviewSummary } from "@/lib/data/reviews";
import { pick } from "@/lib/i18n-helpers";

export async function ReviewsSection({ asH1 = false }: { asH1?: boolean }) {
  const t = await getTranslations("reviewsSection");
  const locale = await getLocale();
  const Heading = asH1 ? "h1" : "h2";
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="reviews">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Heading className="font-display-lg text-[32px] md:text-[40px] text-primary">
            {t("heading")}
          </Heading>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-surface-variant shadow-sm mt-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-headline-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-base text-primary">{review.name}</h3>
                    <span className="text-xs text-outline font-label-md">
                      {pick(locale, review.serviceTag, review.serviceTagAr)}
                    </span>
                  </div>
                </div>
                <div className="flex text-[#FBBC04]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined icon-fill text-sm">
                      star
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant italic">
                &ldquo;{pick(locale, review.text, review.textAr)}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
