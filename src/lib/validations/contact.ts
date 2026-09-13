import { z } from "zod";

/** Builds the contact form zod schema with locale-appropriate validation messages. */
export function createContactFormSchema(locale: string) {
  const isAr = locale === "ar";
  return z.object({
    name: z.string().min(2, isAr ? "يرجى إدخال اسمك الكامل" : "Please enter your full name"),
    email: z.string().email(isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address"),
    phone: z
      .string()
      .min(7, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number")
      .regex(/^[\d+\s-]+$/, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number"),
    message: z.string().min(10, isAr ? "يرجى إدخال 10 أحرف على الأقل" : "Please enter at least 10 characters"),
    // Honeypot spam-protection field — must stay empty
    company: z.string().max(0).optional(),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;

/** Builds the newsletter zod schema with locale-appropriate validation messages. */
export function createNewsletterSchema(locale: string) {
  const isAr = locale === "ar";
  return z.object({
    email: z.string().email(isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address"),
  });
}

export type NewsletterValues = z.infer<ReturnType<typeof createNewsletterSchema>>;
