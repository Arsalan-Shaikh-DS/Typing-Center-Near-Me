import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ReviewsSection } from "@/components/reviews-section";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, reviewJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ar" ? "آراء العملاء" : "Customer Reviews",
    description:
      locale === "ar"
        ? "اطّلع على آراء عملاء Typing Center Near Me حول خدمات التأشيرة الذهبية، الهوية الإماراتية، والمعاملات الحكومية في دبي."
        : "See what clients say about Typing Center Near Me's Golden Visa, Emirates ID, and government documentation services in Dubai.",
    path: "/reviews",
    locale,
  });
}

export default async function ReviewsPage() {
  const tNav = await getTranslations("nav");
  return (
    <>
      <JsonLd data={reviewJsonLd()} />
      <Header />
      <Breadcrumbs items={[{ label: tNav("reviews"), href: "/reviews" }]} />
      <main id="main-content" className="pb-24">
        <ReviewsSection asH1 />
      </main>
      <Footer />
    </>
  );
}
