import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ar" ? "تواصل معنا" : "Contact Us",
    description:
      locale === "ar"
        ? "تواصل مع Typing Center Near Me للحصول على خدمات الهوية الإماراتية، التأشيرات، التأشيرة الذهبية، والمعاملات الحكومية في دبي."
        : "Get in touch with Typing Center Near Me for Emirates ID, visa, Golden Visa, and government documentation services in Dubai.",
    path: "/contact",
    locale,
  });
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");
  const tNav = await getTranslations("nav");

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: tNav("contact"), href: "/contact" }]} />
      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-4">
              {t("heading")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              {t("description")}
            </p>

            <div className="space-y-4 mb-8">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-on-surface hover:text-primary">
                <span className="material-symbols-outlined text-primary">call</span>
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-on-surface hover:text-primary">
                <span className="material-symbols-outlined text-primary">mail</span>
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-surface hover:text-primary"
              >
                <span className="material-symbols-outlined text-primary">chat</span>
                {t("whatsappUs")}
              </a>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">schedule</span>
                {t("hours")}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-surface-variant h-72">
              <iframe
                title="Typing Center Near Me location map"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=25.2048,55.2708&z=12&output=embed"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
