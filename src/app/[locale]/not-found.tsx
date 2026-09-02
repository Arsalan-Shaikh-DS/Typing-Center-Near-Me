import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[70vh] flex items-center justify-center px-margin-mobile text-center pt-20">
        <div className="max-w-md">
          <span className="material-symbols-outlined text-primary text-6xl mb-4 inline-block">
            search_off
          </span>
          <h1 className="font-display-lg text-[32px] text-primary mb-3">{t("title")}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            {t("body")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-container transition-colors"
            >
              {t("backHome")}
            </Link>
            <Link
              href="/services"
              className="border-2 border-primary text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
            >
              {t("browseServices")}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
