import { getLocale } from "next-intl/server";
import { siteConfig } from "@/lib/site-config";

export async function CallFloater() {
  const locale = await getLocale();
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      aria-label={
        locale === "ar"
          ? `اتصل بنا على ${siteConfig.phoneDisplay}`
          : `Call us at ${siteConfig.phoneDisplay}`
      }
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center gold-bg text-primary w-14 h-14 rounded-full shadow-[0_4px_24px_rgba(212,175,55,0.45)] hover:shadow-[0_6px_32px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-300 group"
    >
      <span className="material-symbols-outlined icon-fill text-[26px]" aria-hidden="true">
        call
      </span>
    </a>
  );
}
