import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="font-label-md text-sm text-on-surface-variant">{t("loading")}</p>
      </div>
    </div>
  );
}
