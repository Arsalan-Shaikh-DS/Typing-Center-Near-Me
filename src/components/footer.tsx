import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { NewsletterForm } from "@/components/newsletter-form";
import { pick } from "@/lib/i18n-helpers";

const socialLinks = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Instagram", icon: "photo_camera", href: "#" },
  { label: "LinkedIn", icon: "business_center", href: "#" },
];

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();

  return (
    <footer className="bg-primary text-white pt-20 pb-8 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="mb-4">
            <span className="font-display-lg text-headline-md text-white block mb-1">
              TYPING CENTER
            </span>
            <span className="font-display-lg text-xs tracking-[0.3em] text-white block">
              NEAR ME
            </span>
          </div>
          <p className="font-body-md text-sm text-white/70 max-w-xs mb-6">
            {pick(locale, siteConfig.description, siteConfig.descriptionAr)}
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-4">
            {t("servicesHeading")}
          </h4>
          <ul className="space-y-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="font-body-md text-sm text-white/70 hover:text-white transition-colors"
                >
                  {pick(locale, s.title, s.titleAr)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-4">
            {t("locationsHeading")}
          </h4>
          <ul className="space-y-2">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="font-body-md text-sm text-white/70 hover:text-white transition-colors"
                >
                  {pick(locale, l.name, l.nameAr)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-4">
            {t("companyHeading")}
          </h4>
          <ul className="space-y-2 mb-6">
            <li>
              <Link href="/blog" className="font-body-md text-sm text-white/70 hover:text-white transition-colors">
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="font-body-md text-sm text-white/70 hover:text-white transition-colors">
                {t("faqs")}
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="font-body-md text-sm text-white/70 hover:text-white transition-colors">
                {t("reviews")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-body-md text-sm text-white/70 hover:text-white transition-colors">
                {t("contact")}
              </Link>
            </li>
          </ul>

          <div className="space-y-2 text-sm text-white/70 font-body-md">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-white">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-14 pt-8 border-t border-white/20">
        <div className="max-w-md">
          <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-3">
            {t("stayUpdated")}
          </h4>
          <NewsletterForm />
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm font-body-sm">
        <span>{t("copyright", { year: new Date().getFullYear() })}</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white">
            {t("privacyPolicy")}
          </Link>
          <Link href="/terms" className="hover:text-white">
            {t("terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
