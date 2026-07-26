"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { pick } from "@/lib/i18n-helpers";

type MenuKey = "services" | "locations" | null;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const navRef = useRef<HTMLElement>(null);
  const otherLocale = locale === "ar" ? "en" : "ar";

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (key: MenuKey) => setOpenMenu((prev) => (prev === key ? null : key));

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/20 shadow-[0px_10px_30px_rgba(15,77,58,0.05)] transition-all duration-300 bg-white/90">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-14 md:h-20 w-full max-w-container-max mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-4 group cursor-pointer shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          <Image
            alt="Typing Center Near Me logo"
            width={48}
            height={48}
            className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
            src={siteConfig.logo}
          />
          <span className="text-center leading-tight">
            <span className="font-display-lg text-[13px] md:text-headline-md tracking-tight text-primary block">
              TYPING CENTER
            </span>
            <span className="font-display-lg text-[7px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] text-primary -mt-1 block">
              NEAR ME
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-2 relative" aria-label="Primary">
          <button
            type="button"
            onClick={() => toggleMenu("services")}
            onMouseEnter={() => setOpenMenu("services")}
            aria-haspopup="true"
            aria-expanded={openMenu === "services"}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            {t("services")}
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              expand_more
            </span>
          </button>
          <button
            type="button"
            onClick={() => toggleMenu("locations")}
            onMouseEnter={() => setOpenMenu("locations")}
            aria-haspopup="true"
            aria-expanded={openMenu === "locations"}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            {t("locations")}
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              expand_more
            </span>
          </button>
          <Link
            href="/blog"
            onMouseEnter={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu(null)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            {t("blog")}
          </Link>
          <Link
            href="/faqs"
            onMouseEnter={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu(null)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            {t("faqs")}
          </Link>

          {/* Language switcher */}
          <Link
            href={pathname}
            locale={otherLocale}
            onMouseEnter={() => setOpenMenu(null)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 border border-outline-variant"
            aria-label={otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English"}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              language
            </span>
            {otherLocale === "ar" ? "ع" : "EN"}
          </Link>

          <a
            className="ms-2 flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-container transition-colors shadow-lg active:scale-95 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed"
            href={`tel:${siteConfig.phone}`}
            onMouseEnter={() => setOpenMenu(null)}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              phone_in_talk
            </span>
            {t("callNow")}
          </a>

          {/* Services mega menu */}
          {openMenu === "services" && (
            <div
              role="menu"
              aria-label={t("services")}
              className="absolute top-full start-0 mt-3 w-[640px] bg-white rounded-2xl shadow-2xl border border-surface-variant p-6 grid grid-cols-2 gap-2"
            >
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  role="menuitem"
                  onClick={() => setOpenMenu(null)}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 focus-visible:bg-primary/5 outline-none transition-colors"
                >
                  <span className="material-symbols-outlined text-primary mt-0.5" aria-hidden="true">
                    {s.icon}
                  </span>
                  <span>
                    <span className="block font-label-md text-sm font-semibold text-on-surface">
                      {pick(locale, s.title, s.titleAr)}
                    </span>
                    <span className="block text-xs text-on-surface-variant line-clamp-1">
                      {pick(locale, s.shortDescription, s.shortDescriptionAr)}
                    </span>
                  </span>
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setOpenMenu(null)}
                className="col-span-2 text-center mt-2 pt-3 border-t border-surface-variant font-label-md text-sm text-primary hover:underline"
              >
                {t("viewAllServices")}
              </Link>
            </div>
          )}

          {/* Locations dropdown */}
          {openMenu === "locations" && (
            <div
              role="menu"
              aria-label={t("locations")}
              className="absolute top-full start-0 mt-3 w-[480px] bg-white rounded-2xl shadow-2xl border border-surface-variant p-6 grid grid-cols-2 gap-1 max-h-[420px] overflow-y-auto"
            >
              {locations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  role="menuitem"
                  onClick={() => setOpenMenu(null)}
                  className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-primary/5 focus-visible:bg-primary/5 outline-none transition-colors font-body-md text-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                    location_city
                  </span>
                  {pick(locale, l.name, l.nameAr)}
                </Link>
              ))}
              <Link
                href="/locations"
                onClick={() => setOpenMenu(null)}
                className="col-span-2 text-center mt-2 pt-3 border-t border-surface-variant font-label-md text-sm text-primary hover:underline"
              >
                {t("viewAllLocations")}
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-1">
          <Link
            href={pathname}
            locale={otherLocale}
            className="text-primary text-xs font-label-md px-2.5 py-1.5 rounded-full border border-outline-variant"
            aria-label={otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English"}
          >
            {otherLocale === "ar" ? "ع" : "EN"}
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="text-primary p-1.5 hover:bg-primary/5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden bg-white border-t border-outline-variant px-margin-mobile py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto"
        >
          {/* Services accordion */}
          <button
            type="button"
            onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
            aria-expanded={mobileSection === "services"}
            className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {t("services")}
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {mobileSection === "services" ? "expand_less" : "expand_more"}
            </span>
          </button>
          {mobileSection === "services" && (
            <div className="ps-4 flex flex-col gap-1 mb-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg"
                >
                  {pick(locale, s.title, s.titleAr)}
                </Link>
              ))}
            </div>
          )}

          {/* Locations accordion */}
          <button
            type="button"
            onClick={() => setMobileSection(mobileSection === "locations" ? null : "locations")}
            aria-expanded={mobileSection === "locations"}
            className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {t("locations")}
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {mobileSection === "locations" ? "expand_less" : "expand_more"}
            </span>
          </button>
          {mobileSection === "locations" && (
            <div className="ps-4 flex flex-col gap-1 mb-2 max-h-64 overflow-y-auto">
              {locations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-body-md text-sm text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg"
                >
                  {pick(locale, l.name, l.nameAr)}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors"
          >
            {t("blog")}
          </Link>
          <Link
            href="/faqs"
            onClick={() => setMobileOpen(false)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors"
          >
            {t("faqs")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors"
          >
            {t("contact")}
          </Link>

          <a
            className="flex items-center justify-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-6 py-3 mt-2 rounded-full shadow-lg"
            href={`tel:${siteConfig.phone}`}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              phone_in_talk
            </span>
            {t("callNow")}
          </a>
        </nav>
      )}
    </header>
  );
}
