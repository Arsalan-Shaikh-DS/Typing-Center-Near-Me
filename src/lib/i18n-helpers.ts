/**
 * Picks the Arabic value when locale is "ar" and it exists, otherwise
 * falls back to the English value. Used throughout data-driven components
 * to render bilingual content stored as sibling `xAr` fields.
 */
export function pick<T>(locale: string, en: T, ar: T | undefined | null): T {
  if (locale === "ar" && ar !== undefined && ar !== null) return ar;
  return en;
}
