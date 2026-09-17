"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { createEnquiryFormSchema, getServiceOptions, type EnquiryFormValues } from "@/lib/validations/enquiry";
import { submitEnquiry } from "@/app/actions/enquiry";

// Taqwa Typing Center — coordinates and place reference taken from the
// Google Maps link supplied for this section.
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Taqwa+Typing+Center&ll=25.0320582,55.317707&z=15&output=embed";
const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/place/Taqwa+Typing+Center/@25.0320582,55.317707,15z/data=!4m5!3m4!1s0x48ce36291ac5d94f:0x1baf261fd3e0f737!8m2!3d25.0320582!4d55.317707";

/**
 * Combined "Request Callback + Map" section shown right below the
 * "Serving All 7 Emirates" locations block on the homepage. Reuses the
 * same enquiry schema/server action as the full EnquiryForm — only the
 * top 5 homepage services are offered in the dropdown (the "others"
 * option is intentionally left out here to keep the choice focused).
 */
export function MapEnquirySection() {
  const t = useTranslations("mapEnquirySection");
  const tForm = useTranslations("enquiryForm");
  const locale = useLocale();
  const serviceOptions = getServiceOptions(locale).slice(0, 5);
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
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="get-in-touch">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 border border-secondary-fixed-dim/40 text-secondary font-label-md text-label-md">
            <span className="material-symbols-outlined icon-fill text-base">mail</span>
            {t("eyebrow")}
          </span>
          <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary">{t("heading")}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Enquiry form */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group bg-white border border-surface-variant">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors" />
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center h-full flex flex-col items-center justify-center"
                    role="status"
                  >
                    <span className="material-symbols-outlined icon-fill text-primary text-4xl mb-2">
                      check_circle
                    </span>
                    <p className="font-label-md text-label-md text-primary mb-1">
                      {tForm("successTitle")}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {tForm("successBody")}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 font-label-md text-label-md text-primary underline underline-offset-4"
                    >
                      {tForm("submitAnother")}
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
                      <label
                        className="block font-label-md text-label-md text-primary mb-1 ms-1 font-bold"
                        htmlFor="map-enquiry-name"
                      >
                        {tForm("fullName")}
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                          person
                        </span>
                        <input
                          {...register("name")}
                          id="map-enquiry-name"
                          type="text"
                          placeholder={tForm("fullNamePlaceholder")}
                          aria-invalid={!!errors.name}
                          className="w-full h-[56px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-error text-xs mt-1 ms-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block font-label-md text-label-md text-primary mb-1 ms-1 font-bold"
                        htmlFor="map-enquiry-phone"
                      >
                        {tForm("phone")}
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                          phone_iphone
                        </span>
                        <input
                          {...register("phone")}
                          id="map-enquiry-phone"
                          type="tel"
                          placeholder="Enter Contact number"
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
                      <label
                        className="block font-label-md text-label-md text-primary mb-1 ms-1 font-bold"
                        htmlFor="map-enquiry-service"
                      >
                        {tForm("serviceRequired")}
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline">
                          assignment
                        </span>
                        <select
                          {...register("service")}
                          id="map-enquiry-service"
                          defaultValue=""
                          aria-invalid={!!errors.service}
                          className="w-full h-[56px] ps-12 pe-10 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface appearance-none cursor-pointer"
                        >
                          <option disabled value="">
                            {tForm("selectService")}
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
                      {isSubmitting ? tForm("submitting") : tForm("submit")}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <p className="text-xs text-center mt-4 text-outline font-body-md flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                {tForm("secureNote")}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-surface-variant bg-white flex flex-col">
            <div className="p-6 pb-4">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-primary mb-1">
                {t("mapTitle")}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant">{t("mapSubtitle")}</p>
            </div>
            <div className="relative flex-1 min-h-[320px]">
              <iframe
                title={t("mapTitle")}
                src={MAP_EMBED_SRC}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-label-md text-label-md hover:bg-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-lg">directions</span>
              {t("getDirections")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
