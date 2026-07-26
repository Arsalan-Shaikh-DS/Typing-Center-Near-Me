import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/data/services";
import { pick } from "@/lib/i18n-helpers";

export async function ServicesSection() {
  const t = await getTranslations("servicesSection");
  const locale = await getLocale();

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="services">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
            {t("eyebrow")}
          </span>
          <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary">
            {t("heading")}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white border border-surface-variant hover:shadow-xl transition-shadow ${
                service.featured ? "lg:col-span-2" : ""
              }`}
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
              <div className="flex flex-1 flex-col p-6">
                <span className="relative z-10 -mt-12 mb-4 inline-flex h-12 w-12 items-center justify-center self-start rounded-full bg-primary text-white shadow-md ring-4 ring-white">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {pick(locale, service.title, service.titleAr)}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {pick(locale, service.shortDescription, service.shortDescriptionAr)}
                </p>
                <div className="mt-auto flex items-center text-primary font-label-md text-label-md group-hover:gap-2 transition-all">
                  {t("learnMore")}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary/5 transition-colors"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
