import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, generalFaqs } from "@/lib/data/faqs";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions",
    description:
      locale === "ar"
        ? "إجابات على الأسئلة الشائعة حول الهوية الإماراتية، التأشيرات، طباعة المستندات الطبية، الرخص التجارية، وأكثر لدى Typing Center Near Me."
        : "Answers to common questions about Emirates ID, visas, medical typing, trade licenses, and more at Typing Center Near Me.",
    path: "/faqs",
    locale,
  });
}

export default async function FaqsPage() {
  const tNav = await getTranslations("nav");
  const locale = await getLocale();
  return (
    <>
      <JsonLd data={faqJsonLd(generalFaqs, locale)} />
      <Header />
      <Breadcrumbs items={[{ label: tNav("faqs"), href: "/faqs" }]} />
      <main id="main-content" className="pb-24">
        <FaqSection asH1 />
      </main>
      <Footer />
    </>
  );
}
