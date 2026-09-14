import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/data/services";
import { pick } from "@/lib/i18n-helpers";
import { siteConfig } from "@/lib/site-config";
import { ServiceCategoryTabs } from "@/components/service-category-tabs";

export async function ServicesSection() {
  const t = await getTranslations("servicesSection");
  const locale = await getLocale();
  const waNumber = siteConfig.whatsapp.replace("+", "");

  const allContent = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 5).map((service) => {
            const title = pick(locale, service.title, service.titleAr);
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
              locale === "ar"
                ? `مرحبًا، أرغب في بدء طلب خدمة ${title}`
                : `Hi, I'd like to start my application for ${title}`,
            )}`;

            return (
              <div
                key={service.slug}
                className={`group flex flex-col overflow-hidden rounded-2xl bg-white border border-surface-variant hover:shadow-xl transition-shadow ${
                  service.featured ? "lg:col-span-2" : ""
                }`}
              >
                <Link href={`/services/${service.slug}`} className="relative block h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <span className="relative z-10 -mt-12 mb-4 inline-flex h-12 w-12 items-center justify-center self-start rounded-full bg-primary text-white shadow-md ring-4 ring-white">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </span>
                  <Link href={`/services/${service.slug}`}>
                    <h3 className="font-headline-md text-headline-md text-primary mb-2 hover:text-primary/80 transition-colors">
                      {title}
                    </h3>
                  </Link>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    {pick(locale, service.shortDescription, service.shortDescriptionAr)}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center text-primary font-label-md text-label-md hover:gap-2 transition-all"
                    >
                      {t("learnMore")}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white font-label-md text-label-md px-4 py-2.5 rounded-full shadow-sm hover:bg-primary-container hover:-translate-y-0.5 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-4 h-4 fill-white shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.476 2.027 7.774L0 32l8.476-2.004A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.795-1.867l-.487-.29-5.03 1.189 1.21-4.904-.318-.503A13.239 13.239 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.29-9.874c-.4-.2-2.364-1.166-2.73-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.689-.623-3.217-1.983-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.324-.78-.654-.674-.9-.687l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.033.955.412 1.7.658 2.281.843.958.305 1.831.262 2.52.159.769-.114 2.364-.967 2.698-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
                      </svg>
                      {t("startApplication")}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-block border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary/5 transition-colors"
        >
          {t("viewAll")}
        </Link>
      </div>
    </>
  );

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

        <ServiceCategoryTabs
          locale={locale}
          allLabel={t("allTab")}
          allContent={allContent}
          startApplicationLabel={t("startApplication")}
        />
      </div>
    </section>
  );
}
