"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { createMiniEnquiryFormSchema, type MiniEnquiryFormValues } from "@/lib/validations/enquiry";
import { submitMiniEnquiry } from "@/app/actions/enquiry";

const POPUP_DELAY_MS = 10000;
const DISMISSED_KEY = "tcnm_enquiry_popup_dismissed";

/** Pages the popup is allowed to appear on: homepage, services, locations. */
function isEligiblePath(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname === "/locations" ||
    pathname.startsWith("/locations/")
  );
}

export function EnquiryPopup() {
  const t = useTranslations("enquiryPopup");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MiniEnquiryFormValues>({
    resolver: zodResolver(createMiniEnquiryFormSchema(locale)),
  });

  useEffect(() => {
    if (!isEligiblePath(pathname)) return;

    let alreadyDismissed = false;
    try {
      alreadyDismissed = sessionStorage.getItem(DISMISSED_KEY) === "1";
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — fall back to always showing once.
    }
    if (alreadyDismissed) return;

    const timer = setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
  };

  const onSubmit = async (values: MiniEnquiryFormValues) => {
    setStatus("idle");
    setServerError(null);
    const result = await submitMiniEnquiry(values, locale, `Popup: ${pathname}`);
    if (result.success) {
      setStatus("success");
      reset();
      try {
        sessionStorage.setItem(DISMISSED_KEY, "1");
      } catch {
        // ignore
      }
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={dismiss}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-popup-title"
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label={t("close")}
              className="absolute top-3 end-3 w-9 h-9 rounded-full flex items-center justify-center text-outline hover:bg-surface-container hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 id="enquiry-popup-title" className="font-headline-lg text-headline-lg-mobile text-primary mb-1 pe-8">
              {t("title")}
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-5">{t("subtitle")}</p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-primary/5 border border-primary/20 p-5 text-center"
                  role="status"
                >
                  <span className="material-symbols-outlined icon-fill text-primary text-3xl mb-1">
                    check_circle
                  </span>
                  <p className="font-label-md text-label-md text-primary mb-1">{t("successTitle")}</p>
                  <p className="font-body-md text-sm text-on-surface-variant">{t("successBody")}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-4"
                >
                  <div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                        person
                      </span>
                      <input
                        {...register("name")}
                        id="popup-name"
                        type="text"
                        placeholder={t("fullNamePlaceholder")}
                        aria-label={t("fullName")}
                        aria-invalid={!!errors.name}
                        className="w-full h-[52px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                      />
                    </div>
                    {errors.name && <p className="text-error text-xs mt-1 ms-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                        phone_iphone
                      </span>
                      <input
                        {...register("phone")}
                        id="popup-phone"
                        type="tel"
                        placeholder="0123456789"
                        maxLength={10}
                        aria-label={t("phone")}
                        aria-invalid={!!errors.phone}
                        className="w-full h-[52px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                      />
                    </div>
                    {errors.phone && <p className="text-error text-xs mt-1 ms-1">{errors.phone.message}</p>}
                  </div>

                  {status === "error" && serverError && (
                    <p className="text-error text-sm text-center">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[52px] bg-primary text-white font-label-md text-label-md rounded-xl hover:bg-primary-container shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("submitting") : t("submit")}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="text-xs text-center mt-3 text-outline font-body-md flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              {t("secureNote")}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
