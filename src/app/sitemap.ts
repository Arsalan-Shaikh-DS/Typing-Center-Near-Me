import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { blogPosts } from "@/lib/data/blog";

const locales = ["en", "ar"] as const;

function localizedPath(path: string, locale: (typeof locales)[number]) {
  if (locale === "ar") return `/ar${path === "" ? "" : path}`;
  return path;
}

function alternates(path: string) {
  return {
    languages: {
      en: `${siteConfig.url}${path}`,
      ar: `${siteConfig.url}${localizedPath(path, "ar")}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/locations",
    "/blog",
    "/faqs",
    "/reviews",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const staticRoutes = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteConfig.url}${localizedPath(path, locale)}`,
      lastModified: new Date(),
      alternates: alternates(path),
    })),
  );

  const serviceRoutes = locales.flatMap((locale) =>
    services.map((s) => ({
      url: `${siteConfig.url}${localizedPath(`/services/${s.slug}`, locale)}`,
      lastModified: new Date(),
      alternates: alternates(`/services/${s.slug}`),
    })),
  );

  const locationRoutes = locales.flatMap((locale) =>
    locations.map((l) => ({
      url: `${siteConfig.url}${localizedPath(`/locations/${l.slug}`, locale)}`,
      lastModified: new Date(),
      alternates: alternates(`/locations/${l.slug}`),
    })),
  );

  const blogRoutes = locales.flatMap((locale) =>
    blogPosts.map((p) => ({
      url: `${siteConfig.url}${localizedPath(`/blog/${p.slug}`, locale)}`,
      lastModified: new Date(p.date),
      alternates: alternates(`/blog/${p.slug}`),
    })),
  );

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
