import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppFloater } from "@/components/whatsapp-floater";
import { CallFloater } from "@/components/call-floater";
import { EnquiryPopup } from "@/components/enquiry-popup";
import "../globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["600", "700"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title =
    locale === "ar"
      ? "Typing Center Near Me | خدمات الهوية الإماراتية والتأشيرات والخدمات الحكومية"
      : "UAE Typing Center Near Me | Emirates ID, Visa, PRO & Business Services";
  const description = locale === "ar" ? siteConfig.descriptionAr : siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title: siteConfig.fullName,
      description,
      url: siteConfig.url,
      siteName: siteConfig.fullName,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.fullName,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${beVietnamPro.variable} ${inter.variable} ${notoKufiArabic.variable} ${ibmPlexArabic.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols icon font — referenced via .material-symbols-outlined in globals.css */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md bg-background text-on-background min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-label-md focus:text-sm"
          >
            {locale === "ar" ? "الانتقال إلى المحتوى الرئيسي" : "Skip to main content"}
          </a>
          {children}
          <CallFloater />
          <WhatsAppFloater />
          <EnquiryPopup />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
