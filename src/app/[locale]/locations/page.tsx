import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { locations } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo";
import { pick } from "@/lib/i18n-helpers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ar" ? "المواقع التي نخدمها في جميع أنحاء الإمارات" : "Locations We Serve Across the UAE",
    description:
      locale === "ar"
        ? "يقدّم Typing Center Near Me خدمات الطباعة والمعاملات الحكومية في جميع إمارات الدولة السبع — دبي، أبوظبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، والفجيرة."
        : "Typing Center Near Me provides typing and government documentation services across all 7 emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.",
    path: "/locations",
    locale,
  });
}

export default async function LocationsPage() {
  const t = await getTranslations("locationsPage");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: tNav("locations"), href: "/locations" }]} />
      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary">
              {t("heading")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="p-6 rounded-2xl bg-white border border-surface-variant hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:text-secondary-fixed transition-colors">
                  location_city
                </span>
                <h2 className="font-headline-md text-lg text-primary mb-2">
                  {pick(locale, location.name, location.nameAr)}
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant mb-4">
                  {pick(locale, location.blurb, location.blurbAr)}
                </p>
                <span className="text-primary font-label-md text-sm group-hover:underline flex items-center gap-1">
                  {t("viewCities")}
                  <span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
