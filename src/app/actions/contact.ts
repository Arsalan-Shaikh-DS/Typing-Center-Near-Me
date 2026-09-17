"use server";

import {
  createContactFormSchema,
  createNewsletterSchema,
  type ContactFormValues,
  type NewsletterValues,
} from "@/lib/validations/contact";
import { sendLeadEmail, logLeadToSheet } from "@/lib/lead-notify";

export type ActionResult = { success: true } | { success: false; error: string };

const MESSAGES = {
  invalid: {
    en: "Please check the form fields and try again.",
    ar: "يرجى التحقق من حقول النموذج والمحاولة مرة أخرى.",
  },
  failed: {
    en: "Something went wrong. Please call us directly.",
    ar: "حدث خطأ ما. يرجى الاتصال بنا مباشرة.",
  },
  invalidEmail: {
    en: "Please enter a valid email address.",
    ar: "يرجى إدخال بريد إلكتروني صحيح.",
  },
  failedGeneric: {
    en: "Something went wrong. Please try again.",
    ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  },
};

export async function submitContactForm(
  values: ContactFormValues,
  locale: string = "en",
): Promise<ActionResult> {
  const isAr = locale === "ar";
  const parsed = createContactFormSchema(locale).safeParse(values);
  if (!parsed.success) {
    return { success: false, error: isAr ? MESSAGES.invalid.ar : MESSAGES.invalid.en };
  }
  // Honeypot check
  if (parsed.data.company) {
    return { success: true }; // silently succeed for bots, do nothing
  }

  try {
    const { name, email, phone, message } = parsed.data;
    await Promise.all([
      sendLeadEmail("New Contact Form Message", { name, email, phone, message }),
      logLeadToSheet("Contact", { name, email, phone, message }),
    ]);
    return { success: true };
  } catch (err) {
    console.error("[submitContactForm] failed:", err);
    return { success: false, error: isAr ? MESSAGES.failed.ar : MESSAGES.failed.en };
  }
}

export async function subscribeNewsletter(
  values: NewsletterValues,
  locale: string = "en",
): Promise<ActionResult> {
  const isAr = locale === "ar";
  const parsed = createNewsletterSchema(locale).safeParse(values);
  if (!parsed.success) {
    return { success: false, error: isAr ? MESSAGES.invalidEmail.ar : MESSAGES.invalidEmail.en };
  }

  try {
    const { email } = parsed.data;
    await Promise.all([
      sendLeadEmail("New Newsletter Subscriber", { email }),
      logLeadToSheet("Newsletter", { email }),
    ]);
    return { success: true };
  } catch (err) {
    console.error("[subscribeNewsletter] failed:", err);
    return { success: false, error: isAr ? MESSAGES.failedGeneric.ar : MESSAGES.failedGeneric.en };
  }
}
