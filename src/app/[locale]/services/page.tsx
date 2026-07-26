import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { pick } from "@/lib/i18n-helpers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title:
      locale === "ar"
        ? "الخدمات الحكومية وخدمات الطباعة في دبي"
        : "UAE Government & Typing Services in Dubai",
    description:
      locale === "ar"
        ? "استكشف جميع خدمات Typing Center Near Me — التأشيرة الذهبية، الهوية الإماراتية، الرخص التجارية، طباعة المستندات الطبية، الترجمة القانونية، وأكثر، بإدارة مستشارين مرخّصين من الألف إلى الياء."
        : "Explore all Typing Center Near Me services — Golden Visa, Emirates ID, trade licenses, medical typing, legal translation, and more, handled end to end by licensed consultants.",
    path: "/services",
    locale,
  });
}

export default async function ServicesPage() {
  const t = await getTranslations("servicesPage");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: tNav("services"), href: "/services" }]} />
      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
              {t("eyebrow")}
            </span>
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary">
              {t("heading")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-surface-variant hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={pick(locale, service.title, service.titleAr)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="relative z-10 -mt-12 mb-4 inline-flex h-12 w-12 items-center justify-center self-start rounded-full bg-primary text-white shadow-md ring-4 ring-white">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary mb-3">
                    {pick(locale, service.title, service.titleAr)}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    {pick(locale, service.shortDescription, service.shortDescriptionAr)}
                  </p>
                  <span className="mt-auto flex items-center text-primary font-label-md text-label-md group-hover:gap-2 transition-all">
                    {t("learnMore")}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
