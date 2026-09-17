import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";
import { pick } from "@/lib/i18n-helpers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ar" ? "المدونة — مقالات وتحديثات" : "Blog — Guides & Updates",
    description:
      locale === "ar"
        ? "مقالات حول الهوية الإماراتية، التأشيرات، التأشيرة الذهبية، والإجراءات الحكومية في الإمارات من فريق Typing Center Near Me."
        : "Guides on Emirates ID, visas, Golden Visa, and UAE government procedures from the Typing Center Near Me team.",
    path: "/blog",
    locale,
  });
}

export default async function BlogIndexPage() {
  const t = await getTranslations("blogPage");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: tNav("blog"), href: "/blog" }]} />
      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary">
              {t("heading")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-surface-variant shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-primary/5 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={pick(locale, post.title, post.titleAr)}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label-md text-xs text-secondary uppercase tracking-wider">
                    {pick(locale, post.category, post.categoryAr)}
                  </span>
                  <h2 className="font-headline-md text-lg text-primary mt-2 mb-3 group-hover:underline">
                    {pick(locale, post.title, post.titleAr)}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant mb-4 line-clamp-2">
                    {pick(locale, post.excerpt, post.excerptAr)}
                  </p>
                  <span className="text-xs text-outline font-label-md">
                    {pick(locale, post.readingTime, post.readingTimeAr)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
