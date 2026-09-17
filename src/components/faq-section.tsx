import { getTranslations, getLocale } from "next-intl/server";
import { generalFaqs } from "@/lib/data/faqs";
import { pick } from "@/lib/i18n-helpers";

export async function FaqSection({ asH1 = false }: { asH1?: boolean }) {
  const t = await getTranslations("faqSection");
  const locale = await getLocale();
  const Heading = asH1 ? "h1" : "h2";
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-surface-variant"
      id="faq"
    >
      <div className="max-w-container-max mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <Heading className="font-display-lg text-[32px] md:text-[40px] text-primary">
            {t("heading")}
          </Heading>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t("description")}
          </p>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-surface-variant rounded-xl overflow-hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-primary font-headline-md text-lg [&::-webkit-details-marker]:hidden">
                {pick(locale, faq.question, faq.questionAr)}
                <span className="shrink-0 rounded-full bg-surface-container p-1.5 text-primary group-open:-rotate-180 transition-transform duration-300">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant font-body-md">
                <p>{pick(locale, faq.answer, faq.answerAr)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
