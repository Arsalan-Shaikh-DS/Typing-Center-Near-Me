import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/data/blog";
import { pick } from "@/lib/i18n-helpers";

export async function GuidesSection() {
  const t = await getTranslations("guidesSection");
  const locale = await getLocale();
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="guides">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary">
            {t("heading")}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post) => (
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
                <h3 className="font-headline-md text-lg text-primary mt-2 mb-3 group-hover:underline">
                  {pick(locale, post.title, post.titleAr)}
                </h3>
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

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary/5 transition-colors"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
