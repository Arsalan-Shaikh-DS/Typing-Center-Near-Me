import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { pick } from "@/lib/i18n-helpers";
import type { Service } from "@/lib/data/services";
import type { Location } from "@/lib/data/locations";

/** Builds the locale-prefixed path (English stays at root, Arabic gets /ar). */
function localizedPath(path: string, locale: string) {
  if (locale === "ar") return `/ar${path === "/" ? "" : path}`;
  return path;
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
}): Metadata {
  const url = `${siteConfig.url}${localizedPath(path, locale)}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}${path}`,
        ar: `${siteConfig.url}${localizedPath(path, "ar")}`,
        "x-default": `${siteConfig.url}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.fullName,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    telephone: siteConfig.phone,
    email: siteConfig.email,
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.fullName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: siteConfig.logo,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: "Dubai, United Arab Emirates",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.fullName,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd(service: Service, locale: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pick(locale, service.title, service.titleAr),
    description: pick(locale, service.overview, service.overviewAr),
    provider: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    areaServed: "Dubai, United Arab Emirates",
    url: `${siteConfig.url}${localizedPath(`/services/${service.slug}`, locale)}`,
  };
}

export function locationJsonLd(location: Location, locale: string = "en") {
  const name = pick(locale, location.name, location.nameAr);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.fullName} — ${name}`,
    url: `${siteConfig.url}${localizedPath(`/locations/${location.slug}`, locale)}`,
    telephone: siteConfig.phone,
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function reviewJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
    ratingValue: "4.9",
    reviewCount: "500",
  };
}

export function articleJsonLd({
  title,
  description,
  slug,
  date,
  author,
  locale = "en",
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  locale?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: { "@type": "ImageObject", url: siteConfig.logo },
    },
    mainEntityOfPage: `${siteConfig.url}${localizedPath(`/blog/${slug}`, locale)}`,
  };
}
