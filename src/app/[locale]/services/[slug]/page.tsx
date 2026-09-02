import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { MiniEnquiryForm } from "@/components/mini-enquiry-form";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/data/services";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { faqJsonLd } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site-config";
import { pick } from "@/lib/i18n-helpers";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const locale = await getLocale();
  const title = pick(locale, service.title, service.titleAr);
  return buildMetadata({
    title:
      locale === "ar"
        ? `${title} في دبي | Typing Center Near Me`
        : `${title} in Dubai | Typing Center Near Me`,
    description: pick(locale, service.shortDescription, service.shortDescriptionAr),
    path: `/services/${service.slug}`,
    locale,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const t = await getTranslations("serviceDetail");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();
  const related = getRelatedServices(service.slug);
  const title = pick(locale, service.title, service.titleAr);

  return (
    <>
      <JsonLd data={serviceJsonLd(service, locale)} />
      <JsonLd data={faqJsonLd(service.faqs, locale)} />
      <Header />
      <Breadcrumbs
        items={[
          { label: tNav("services"), href: "/services" },
          { label: title, href: `/services/${service.slug}` },
        ]}
      />

      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            {/* SEO Hero */}
            <div>
              <span className="inline-block p-3 rounded-xl bg-primary-container/10 text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </span>
              <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-4">
                {title} {t("titleSuffix")}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {pick(locale, service.overview, service.overviewAr)}
              </p>
            </div>

            {/* Benefits */}
            <section>
              <h2 className="font-headline-lg text-headline-md text-primary mb-6">{t("benefits")}</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {pick(locale, service.benefits, service.benefitsAr).map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Required Documents */}
            <section>
              <h2 className="font-headline-lg text-headline-md text-primary mb-6">{t("requiredDocuments")}</h2>
              <ul className="space-y-3">
                {pick(locale, service.requiredDocuments, service.requiredDocumentsAr).map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">description</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{doc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section>
              <h2 className="font-headline-lg text-headline-md text-primary mb-6">{t("process")}</h2>
              <ol className="space-y-4">
                {pick(locale, service.process, service.processAr).map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-label-md text-sm">
                      {i + 1}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="font-headline-lg text-headline-md text-primary mb-6">
                {t("faqsHeading")}
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-white border border-surface-variant rounded-xl overflow-hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-primary font-headline-md text-base">
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
            </section>

            {/* Related Services */}
            <section>
              <h2 className="font-headline-lg text-headline-md text-primary mb-6">{t("relatedServices")}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="p-5 rounded-xl border border-surface-variant hover:border-primary/30 hover:shadow-md transition-all bg-white"
                  >
                    <span className="material-symbols-outlined text-primary mb-2 block">{r.icon}</span>
                    <span className="font-label-md text-sm text-primary">{pick(locale, r.title, r.titleAr)}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* CTA sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="glass-panel p-8 rounded-2xl bg-white border border-surface-variant">
                <h3 className="font-headline-lg text-headline-md text-primary mb-2">
                  {t("readyToStart")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {t("talkToSpecialist", { service: title.toLowerCase() })}
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-label-md text-label-md px-6 py-4 rounded-xl hover:bg-primary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  {t("call")} <span dir="ltr">{siteConfig.phoneDisplay}</span>
                </a>
              </div>

              <MiniEnquiryForm source={`Service: ${title}`} />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
