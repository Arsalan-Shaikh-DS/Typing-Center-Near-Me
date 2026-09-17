import { getTranslations } from "next-intl/server";
import { HeroVideoBackground } from "@/components/hero-video-background";
import { siteConfig } from "@/lib/site-config";

export async function Hero() {
  const t = await getTranslations("hero");

  const trustBadges = [
    { icon: "bolt", label: t("trustSameDay") },
    { icon: "support_agent", label: t("trustSupport") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <HeroVideoBackground />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm shadow-sm">
          <span className="material-symbols-outlined icon-fill text-white text-sm">
            verified
          </span>
          <span className="font-label-md text-label-md text-white tracking-wider uppercase">
            {t("badge")}
          </span>
        </div>

        <h1 className="font-display-lg text-[40px] md:text-display-lg leading-tight text-white drop-shadow-lg">
          {t("titleLine1")} <br className="hidden md:block" />
          {t("titleLine2")}
        </h1>

        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4">
          <a
            className="accent-bg text-white font-label-md text-label-md px-8 py-4 rounded-full shadow-[0px_10px_30px_rgba(140,17,22,0.35)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-bold w-full sm:w-auto"
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

        <div className="flex items-center justify-center gap-6 pt-8 text-white/80 border-t border-white/20 mt-8 flex-wrap">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="material-symbols-outlined icon-fill text-white">
                {badge.icon}
              </span>
              <span className="font-label-md text-[12px]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
