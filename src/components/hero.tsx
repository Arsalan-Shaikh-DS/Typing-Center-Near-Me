import { getTranslations } from "next-intl/server";
import { EnquiryForm } from "@/components/enquiry-form";
import { HeroBackground } from "@/components/hero-background";
import { siteConfig } from "@/lib/site-config";

export async function Hero() {
  const t = await getTranslations("hero");

  const trustBadges = [
    { icon: "bolt", label: t("trustSameDay") },
    { icon: "support_agent", label: t("trustSupport") },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:gap-8">
        {/* Hero copy */}
        <div className="lg:col-span-7 text-white space-y-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary-fixed/30 bg-white/10 backdrop-blur-sm shadow-sm">
            <span className="material-symbols-outlined icon-fill text-secondary-fixed text-sm">
              verified
            </span>
            <span className="font-label-md text-label-md text-secondary-fixed tracking-wider uppercase">
              {t("badge")}
            </span>
          </div>

          <h1 className="font-display-lg text-[40px] md:text-display-lg leading-tight text-white drop-shadow-lg">
            {t("titleLine1")} <br className="hidden md:block" />
            {t("titleLine2")}
          </h1>

          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl drop-shadow-md border-s-4 border-secondary-fixed ps-4">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a
              className="gold-bg text-primary font-label-md text-label-md px-8 py-4 rounded-full shadow-[0px_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-bold w-full sm:w-auto"
              href={`tel:${siteConfig.phone}`}
            >
              <span className="material-symbols-outlined">call</span>
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              className="border border-white/40 bg-white/10 backdrop-blur-sm text-white font-label-md text-label-md px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              href="#services"
            >
              {t("ctaExplore")}
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-white/80 border-t border-white/20 mt-8 flex-wrap">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined icon-fill text-secondary-fixed">
                  {badge.icon}
                </span>
                <span className="font-label-md text-[12px]">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
