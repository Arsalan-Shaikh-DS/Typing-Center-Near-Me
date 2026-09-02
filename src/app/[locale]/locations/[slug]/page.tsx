import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { MiniEnquiryForm } from "@/components/mini-enquiry-form";
import { locations, getLocationBySlug } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { reviews } from "@/lib/data/reviews";
import { buildMetadata, locationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { pick } from "@/lib/i18n-helpers";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    locations.map((l) => ({ locale, slug: l.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  const locale = await getLocale();
  const name = pick(locale, location.name, location.nameAr);
  const blurb = pick(locale, location.blurb, location.blurbAr);
  const cities = pick(locale, location.cities, location.citiesAr).slice(0, 3).join("، ");
  return buildMetadata({
    title:
      locale === "ar"
        ? `خدمات الطباعة والمعاملات الحكومية في ${name}`
        : `Typing Center & Government Services in ${name}`,
    description:
      locale === "ar"
        ? `${blurb} يغطي Typing Center Near Me كل مدينة رئيسية في ${name}، بما في ذلك ${cities}، وأكثر.`
        : `${blurb} Typing Center Near Me covers every major city in ${name}, including ${cities}, and more.`,
    path: `/locations/${location.slug}`,
    locale,
  });
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const t = await getTranslations("locationDetail");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();
  const name = pick(locale, location.name, location.nameAr);

  const availableServices = services.filter((s) =>
    location.servicesAvailable.includes(s.title),
  );
  const localReviews = reviews.slice(0, 3);

  return (
    <>
      <JsonLd data={locationJsonLd(location, locale)} />
      <Header />
      <Breadcrumbs
        items={[
          { label: tNav("locations"), href: "/locations" },
          { label: name, href: `/locations/${location.slug}` },
        ]}
      />

      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary">
              {t("titlePrefix")} {name}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {pick(locale, location.blurb, location.blurbAr)}
            </p>
          </div>

          {/* Cities grid — card style */}
          <section>
            <h2 className="font-headline-lg text-headline-md text-primary mb-6 text-center">
              {t("citiesWeCover", { location: name })}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {pick(locale, location.cities, location.citiesAr).map((city) => (
                <div
                  key={city}
                  className="p-5 rounded-xl bg-white border border-surface-variant hover:border-primary/30 hover:shadow-md transition-all text-center flex flex-col items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">
                    place
                  </span>
                  <span className="font-label-md text-sm text-on-surface">{city}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <MiniEnquiryForm source={`Location: ${name}`} />

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-surface-variant h-80 lg:h-full min-h-80">
              <iframe
                title={`Map of ${location.name}, UAE`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=10&output=embed`}
              />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-md text-primary">
              {t("whyChooseUs", { location: name })}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {pick(locale, location.whyChooseUs, location.whyChooseUsAr).map((reason) => (
                <li key={reason} className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                  {reason}
                </li>
              ))}
            </ul>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">directions</span>
              {t("getDirections")}
            </a>
          </div>

          {/* Services Available */}
          <section>
            <h2 className="font-headline-lg text-headline-md text-primary mb-6">
              {t("servicesAvailable", { location: name })}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {availableServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-5 rounded-xl border border-surface-variant hover:border-primary/30 hover:shadow-md transition-all bg-white"
                >
                  <span className="material-symbols-outlined text-primary mb-2 block">{s.icon}</span>
                  <span className="font-label-md text-sm text-primary">{pick(locale, s.title, s.titleAr)}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="font-headline-lg text-headline-md text-primary mb-6">
              {t("whatCustomersSay")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {localReviews.map((r) => (
                <div key={r.id} className="bg-white p-6 rounded-2xl border border-surface-variant">
                  <div className="flex text-[#FBBC04] mb-3">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined icon-fill text-sm">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant italic">
                    &ldquo;{pick(locale, r.text, r.textAr)}&rdquo;
                  </p>
                  <p className="font-label-md text-xs text-primary mt-3">{r.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="glass-panel bg-white border border-surface-variant rounded-2xl p-10 text-center">
            <h3 className="font-headline-lg text-headline-md text-primary mb-3">
              {t("visitUsToday", { location: name })}
            </h3>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              {t("call")} <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
