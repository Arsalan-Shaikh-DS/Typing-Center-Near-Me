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
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const otherLocale = locale === "ar" ? "en" : "ar";

  // Transparent-over-hero only applies on the homepage; every other page
  // keeps the solid header since they don't have a dark hero behind it.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinkClass = transparent
    ? "font-label-md text-label-md text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
    : "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

  const langLinkClass = transparent
    ? "font-label-md text-label-md text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 border border-white/30"
    : "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 border border-outline-variant";

  const mobileIconClass = transparent && !mobileOpen ? "text-white" : "text-primary";
  const mobileLangClass = transparent && !mobileOpen
    ? "text-white text-xs font-label-md px-2.5 py-1.5 rounded-full border border-white/30"
    : "text-primary text-xs font-label-md px-2.5 py-1.5 rounded-full border border-outline-variant";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "backdrop-blur-xl border-b border-white/20 shadow-[0px_10px_30px_rgba(15,77,58,0.05)] bg-white/90"
      }`}
    >
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
            <span
              className={`font-display-lg text-[13px] md:text-headline-md tracking-tight block transition-colors ${
                transparent ? "text-white" : "text-primary"
              }`}
            >
              TYPING CENTER
            </span>
            <span
              className={`font-display-lg text-[7px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] -mt-1 block transition-colors ${
                transparent ? "text-white" : "text-primary"
              }`}
            >
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
            className={navLinkClass}
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
            className={navLinkClass}
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
            className={navLinkClass}
          >
            {t("blog")}
          </Link>
          <Link
            href="/faqs"
            onMouseEnter={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu(null)}
            className={navLinkClass}
          >
            {t("faqs")}
          </Link>

          {/* Language switcher */}
          <Link
            href={pathname}
            locale={otherLocale}
            onMouseEnter={() => setOpenMenu(null)}
            className={langLinkClass}
            aria-label={otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English"}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              language
            </span>
            {otherLocale === "ar" ? "ع" : "EN"}
          </Link>

          {/* Get a Quote CTA */}
          <Link
            href="/contact"
            onMouseEnter={() => setOpenMenu(null)}
            className="accent-bg text-white font-label-md text-label-md font-bold px-5 py-2.5 rounded-full shadow-[0px_6px_16px_rgba(140,17,22,0.35)] hover:-translate-y-0.5 hover:shadow-[0px_10px_24px_rgba(140,17,22,0.45)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t("getQuote")}
          </Link>

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
            href="/contact"
            className="accent-bg text-white text-xs font-label-md font-bold px-2.5 py-1.5 rounded-full"
          >
            {t("getQuoteShort")}
          </Link>
          <Link
            href={pathname}
            locale={otherLocale}
            className={mobileLangClass}
            aria-label={otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English"}
          >
            {otherLocale === "ar" ? "ع" : "EN"}
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`p-1.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${mobileIconClass} ${
              transparent && !mobileOpen ? "hover:bg-white/10" : "hover:bg-primary/5"
            }`}
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
        </nav>
      )}
    </header>
  );
}
