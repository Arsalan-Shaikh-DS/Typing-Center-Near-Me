import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

export async function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  const t = await getTranslations("legal");
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary mb-2">{title}</h1>
        <p className="text-sm text-outline font-body-md mb-10">
          {t("lastUpdated")} {lastUpdated}
        </p>
        <div className="prose-content space-y-6 font-body-md text-body-md text-on-surface-variant">
          {children}
        </div>
      </div>
    </div>
  );
}
