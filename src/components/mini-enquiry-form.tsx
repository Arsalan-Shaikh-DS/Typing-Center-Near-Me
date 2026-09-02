"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { createMiniEnquiryFormSchema, type MiniEnquiryFormValues } from "@/lib/validations/enquiry";
import { submitMiniEnquiry } from "@/app/actions/enquiry";

/**
 * Compact 2-field (Name + Phone) enquiry form embedded on service and
 * location detail pages. `source` is passed through to the lead
 * notification so incoming leads can be traced to the page they came from,
 * e.g. "Service: Emirates ID" or "Location: Dubai".
 */
export function MiniEnquiryForm({ source, className = "" }: { source: string; className?: string }) {
  const t = useTranslations("miniEnquiryForm");
  const locale = useLocale();
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

  const onSubmit = async (values: MiniEnquiryFormValues) => {
    setStatus("idle");
    setServerError(null);
    const result = await submitMiniEnquiry(values, locale, source);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  };

  return (
    <div className={`glass-panel p-6 rounded-2xl bg-white border border-surface-variant ${className}`}>
      <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-primary mb-1">{t("title")}</h3>
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
            <span className="material-symbols-outlined icon-fill text-primary text-3xl mb-1">check_circle</span>
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
                  id={`mini-name-${source}`}
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
                  id={`mini-phone-${source}`}
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
    </div>
  );
}
