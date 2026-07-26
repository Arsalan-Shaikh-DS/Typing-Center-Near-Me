"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { createNewsletterSchema, type NewsletterValues } from "@/lib/validations/contact";
import { subscribeNewsletter } from "@/app/actions/contact";

export function NewsletterForm() {
  const t = useTranslations("newsletter");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(createNewsletterSchema(locale)) });

  const onSubmit = async (values: NewsletterValues) => {
    const result = await subscribeNewsletter(values, locale);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="font-body-md text-sm text-secondary-fixed flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">check_circle</span>
        {t("subscribed")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex gap-2">
      <div className="flex-1">
        <input
          {...register("email")}
          type="email"
          placeholder={t("placeholder")}
          aria-invalid={!!errors.email}
          aria-label={t("placeholder")}
          className="w-full h-11 px-4 bg-white/10 border border-white/20 focus:border-secondary-fixed rounded-full font-body-md text-sm text-white placeholder:text-white/50 outline-none transition-all"
        />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="shrink-0 h-11 px-5 bg-secondary-fixed text-primary font-label-md text-sm rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {isSubmitting ? t("subscribing") : t("subscribe")}
      </button>
    </form>
  );
}
