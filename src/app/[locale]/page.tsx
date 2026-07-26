import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { LocationsSection } from "@/components/locations-section";
import { StatsSection } from "@/components/stats-section";
import { GuidesSection } from "@/components/guides-section";
import { FaqSection } from "@/components/faq-section";
import { ReviewsSection } from "@/components/reviews-section";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { faqJsonLd, generalFaqs } from "@/lib/data/faqs";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title:
      locale === "ar"
        ? "مركز الطباعة الحكومي ودبي | خدمات الإمارات الحكومية"
        : "Dubai Typing Center & UAE Government Services",
    description:
      locale === "ar"
        ? "Typing Center Near Me هو مركز الطباعة الأول في دبي — خدمات الهوية الإماراتية، التأشيرات، التأشيرة الذهبية، الخدمات الحكومية، الرخص التجارية، والترجمة القانونية، بشكل متكامل."
        : "Typing Center Near Me is Dubai's premier typing center — Emirates ID, visas, Golden Visa, PRO services, trade licenses, and legal translation, handled end to end.",
    path: "/",
    locale,
  });
}

export default async function HomePage() {
  const locale = await getLocale();
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(generalFaqs, locale)} />
      <Header />
      <main id="main-content">
        <Hero />
        <HowItWorksSection />
        <ServicesSection />
        <LocationsSection />
        <StatsSection />
        <GuidesSection />
        <FaqSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
