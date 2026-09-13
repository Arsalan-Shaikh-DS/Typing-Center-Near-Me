import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { faqJsonLd } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site-config";
import { pick } from "@/lib/i18n-helpers";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const locale = await getLocale();
  return buildMetadata({
    title: pick(locale, post.title, post.titleAr),
    description: pick(locale, post.excerpt, post.excerptAr),
    path: `/blog/${post.slug}`,
    locale,
  });
}

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale === "ar" ? "ar-AE" : "en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blogDetail");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();
  const title = pick(locale, post.title, post.titleAr);
  const author = pick(locale, post.author, post.authorAr);

  const related = getRelatedPosts(post.slug);
  const index = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = blogPosts[index - 1];
  const nextPost = blogPosts[index + 1];
  const postUrl = `${siteConfig.url}${locale === "ar" ? "/ar" : ""}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title,
          description: pick(locale, post.excerpt, post.excerptAr),
          slug: post.slug,
          date: post.date,
          author,
          locale,
        })}
      />
      {post.faqs && <JsonLd data={faqJsonLd(post.faqs, locale)} />}
      <Header />
      <Breadcrumbs
        items={[
          { label: tNav("blog"), href: "/blog" },
          { label: title, href: `/blog/${post.slug}` },
        ]}
      />

      <main id="main-content" className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3 space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <span className="font-label-md text-xs text-secondary uppercase tracking-wider">
                {pick(locale, post.category, post.categoryAr)}
              </span>
              <h1 className="font-display-lg text-[28px] md:text-[36px] text-primary">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant font-body-md">
                <span>{author}</span>
                <span aria-hidden>•</span>
                <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                <span aria-hidden>•</span>
                <span>{pick(locale, post.readingTime, post.readingTimeAr)}</span>
              </div>
            </div>

            {/* Table of Contents */}
            <nav aria-label="Table of contents" className="bg-surface-container-lowest border border-surface-variant rounded-2xl p-6">
              <h2 className="font-label-md text-sm text-primary uppercase tracking-wider mb-3">
                {t("inThisArticle")}
              </h2>
              <ol className="space-y-2">
                {post.sections.map((section, i) => (
                  <li key={section.heading}>
                    <a
                      href={`#section-${i}`}
                      className="font-body-md text-sm text-on-surface-variant hover:text-primary hover:underline"
                    >
                      {i + 1}. {pick(locale, section.heading, section.headingAr)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Body */}
            <div className="prose-content space-y-10">
              {post.sections.map((section, i) => (
                <section key={section.heading} id={`section-${i}`}>
                  <h2 className="font-headline-lg text-headline-md text-primary mb-4">
                    {pick(locale, section.heading, section.headingAr)}
                  </h2>
                  {pick(locale, section.paragraphs, section.paragraphsAr).map((p, pi) => (
                    <p key={pi} className="font-body-md text-body-md text-on-surface-variant mb-4">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-3 pt-6 border-t border-surface-variant">
              <span className="font-label-md text-sm text-on-surface-variant">{t("share")}</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${title} ${postUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="w-9 h-9 rounded-full bg-surface-container-lowest border border-surface-variant flex items-center justify-center hover:bg-primary/5"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">chat</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 rounded-full bg-surface-container-lowest border border-surface-variant flex items-center justify-center hover:bg-primary/5"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">business_center</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="w-9 h-9 rounded-full bg-surface-container-lowest border border-surface-variant flex items-center justify-center hover:bg-primary/5"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">tag</span>
              </a>
            </div>

            {/* Prev / Next */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-xl border border-surface-variant hover:border-primary/30 hover:shadow-md transition-all bg-white"
                >
                  <span className="text-xs text-outline font-label-md">{t("previous")}</span>
                  <p className="font-headline-md text-sm text-primary mt-1">{pick(locale, prevPost.title, prevPost.titleAr)}</p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-xl border border-surface-variant hover:border-primary/30 hover:shadow-md transition-all bg-white text-right"
                >
                  <span className="text-xs text-outline font-label-md">{t("next")}</span>
                  <p className="font-headline-md text-sm text-primary mt-1">{pick(locale, nextPost.title, nextPost.titleAr)}</p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>

          {/* Sidebar: related posts */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              <h3 className="font-label-md text-sm text-primary uppercase tracking-wider">
                {t("relatedGuides")}
              </h3>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block p-4 rounded-xl border border-surface-variant hover:border-primary/30 hover:shadow-md transition-all bg-white"
                >
                  <span className="font-label-md text-xs text-secondary uppercase">{pick(locale, r.category, r.categoryAr)}</span>
                  <p className="font-headline-md text-sm text-primary mt-1">{pick(locale, r.title, r.titleAr)}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
