"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { createContactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(createContactFormSchema(locale)) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setServerError(null);
    const result = await submitContactForm(values, locale);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  };

  return (
    <div className="bg-white border border-surface-variant rounded-2xl p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-primary/5 border border-primary/20 p-8 text-center"
            role="status"
          >
            <span className="material-symbols-outlined icon-fill text-primary text-4xl mb-2">
              check_circle
            </span>
            <p className="font-label-md text-label-md text-primary mb-1">{t("successTitle")}</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t("successBody")}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 font-label-md text-label-md text-primary underline underline-offset-4"
            >
              {t("sendAnother")}
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
            {/* Honeypot field — hidden from real users, visible to bots */}
            <input
              {...register("company")}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-label-md text-label-md text-primary mb-1 font-bold">
                  {t("fullName")}
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  aria-invalid={!!errors.name}
                  className="w-full h-[56px] px-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                />
                {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-label-md text-label-md text-primary mb-1 font-bold">
                  {t("email")}
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  className="w-full h-[56px] px-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                />
                {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block font-label-md text-label-md text-primary mb-1 font-bold">
                {t("phone")}
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="tel"
                placeholder="+971 50 000 0000"
                aria-invalid={!!errors.phone}
                className="w-full h-[56px] px-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
              />
              {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-label-md text-label-md text-primary mb-1 font-bold">
                {t("message")}
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                className="w-full px-4 py-3 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface resize-none"
              />
              {errors.message && <p className="text-error text-xs mt-1">{errors.message.message}</p>}
            </div>

            {status === "error" && serverError && (
              <p className="text-error text-sm text-center">{serverError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[56px] bg-primary text-white font-label-md text-label-md rounded-xl hover:bg-primary-container shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("sending") : t("send")}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
