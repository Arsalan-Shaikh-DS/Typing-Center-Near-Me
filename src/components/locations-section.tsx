import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { locations } from "@/lib/data/locations";
import { pick } from "@/lib/i18n-helpers";

export async function LocationsSection() {
  const t = await getTranslations("locationsSection");
  const locale = await getLocale();

  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
      id="locations"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary">
            {t("heading")}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.slug}
              className="p-6 rounded-2xl bg-white border border-surface-variant hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:text-secondary-fixed transition-colors">
                location_city
              </span>
              <h4 className="font-headline-md text-lg text-primary mb-2">
                {pick(locale, location.name, location.nameAr)}
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">
                {pick(locale, location.blurb, location.blurbAr)}
              </p>
              <Link
                href={`/locations/${location.slug}`}
                className="text-primary font-label-md text-sm group-hover:underline flex items-center gap-1"
              >
                {t("viewCities")}
                <span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
