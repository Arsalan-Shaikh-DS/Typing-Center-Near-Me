"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { createEnquiryFormSchema, getServiceOptions, type EnquiryFormValues } from "@/lib/validations/enquiry";
import { submitEnquiry } from "@/app/actions/enquiry";

export function EnquiryForm() {
  const t = useTranslations("enquiryForm");
  const locale = useLocale();
  const serviceOptions = getServiceOptions(locale);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(createEnquiryFormSchema(locale)),
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setStatus("idle");
    setServerError(null);
    const result = await submitEnquiry(values, locale);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  };

  return (
    <div id="enquiry" className="lg:col-span-5">
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors" />
        <div className="relative z-10">
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-primary mb-2">
            {t("title")}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            {t("subtitle")}
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center"
                role="status"
              >
                <span className="material-symbols-outlined icon-fill text-primary text-4xl mb-2">
                  check_circle
                </span>
                <p className="font-label-md text-label-md text-primary mb-1">
                  {t("successTitle")}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {t("successBody")}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 font-label-md text-label-md text-primary underline underline-offset-4"
                >
                  {t("submitAnother")}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
              >
                <div>
                  <label className="block font-label-md text-label-md text-primary mb-1 ms-1 font-bold" htmlFor="name">
                    {t("fullName")}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                      person
                    </span>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder={t("fullNamePlaceholder")}
                      aria-invalid={!!errors.name}
                      className="w-full h-[56px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-error text-xs mt-1 ms-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-primary mb-1 ms-1 font-bold" htmlFor="phone">
                    {t("phone")}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                      phone_iphone
                    </span>
                    <input
                      {...register("phone")}
                      id="phone"
                      type="tel"
                      placeholder="0123456789"
                      maxLength={10}
                      aria-invalid={!!errors.phone}
                      className="w-full h-[56px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-error text-xs mt-1 ms-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-primary mb-1 ms-1 font-bold" htmlFor="service">
                    {t("serviceRequired")}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                      assignment
                    </span>
                    <select
                      {...register("service")}
                      id="service"
                      defaultValue=""
                      aria-invalid={!!errors.service}
                      className="w-full h-[56px] ps-12 pe-10 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface appearance-none cursor-pointer"
                    >
                      <option disabled value="">
                        {t("selectService")}
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute end-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                      expand_more
                    </span>
                  </div>
                  {errors.service && (
                    <p className="text-error text-xs mt-1 ms-1">{errors.service.message}</p>
                  )}
                </div>

                {status === "error" && serverError && (
                  <p className="text-error text-sm text-center">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[56px] bg-primary text-white font-label-md text-label-md rounded-xl hover:bg-primary-container shadow-md hover:shadow-lg transition-all active:scale-[0.98] mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("submitting") : t("submit")}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-xs text-center mt-4 text-outline font-body-md flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            {t("secureNote")}
          </p>
        </div>
      </div>
    </div>
  );
}
