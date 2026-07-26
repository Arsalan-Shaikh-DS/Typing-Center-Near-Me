import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export interface Crumb {
  label: string;
  href: string;
}

export async function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = await getTranslations("breadcrumbs");
  const locale = await getLocale();
  const localePrefix = locale === "ar" ? "/ar" : "";
  const trail: Crumb[] = [{ label: t("home"), href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${localePrefix}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="px-margin-mobile md:px-margin-desktop pt-28 pb-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="max-w-container-max mx-auto flex flex-wrap items-center gap-1 font-body-md text-sm text-on-surface-variant">
        {trail.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <span className="material-symbols-outlined text-[16px] text-outline rtl:rotate-180">chevron_right</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="text-primary font-medium">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-primary hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
