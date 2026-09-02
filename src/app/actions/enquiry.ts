"use server";

import {
  createEnquiryFormSchema,
  createMiniEnquiryFormSchema,
  type EnquiryFormValues,
  type MiniEnquiryFormValues,
} from "@/lib/validations/enquiry";
import { sendLeadEmail, logLeadToSheet } from "@/lib/lead-notify";

export type EnquiryActionResult =
  | { success: true }
  | { success: false; error: string };

const MESSAGES = {
  invalid: {
    en: "Please check the form fields and try again.",
    ar: "يرجى التحقق من حقول النموذج والمحاولة مرة أخرى.",
  },
  failed: {
    en: "Something went wrong. Please call us directly.",
    ar: "حدث خطأ ما. يرجى الاتصال بنا مباشرة.",
  },
};

/**
 * Handles the "Request Callback" enquiry form.
 * Sends an email notification via Gmail SMTP and logs the lead to a
 * Google Sheet via an Apps Script webhook. See README-LEADS.md for setup.
 */
export async function submitEnquiry(
  values: EnquiryFormValues,
  locale: string = "en",
): Promise<EnquiryActionResult> {
  const isAr = locale === "ar";
  const parsed = createEnquiryFormSchema(locale).safeParse(values);

  if (!parsed.success) {
    return { success: false, error: isAr ? MESSAGES.invalid.ar : MESSAGES.invalid.en };
  }

  try {
    const { name, phone, service } = parsed.data;
    await Promise.all([
      sendLeadEmail("New Callback Request", { name, phone, service }),
      logLeadToSheet("Enquiry", { name, phone, service }),
    ]);
    return { success: true };
  } catch (err) {
    console.error("[submitEnquiry] failed:", err);
    return { success: false, error: isAr ? MESSAGES.failed.ar : MESSAGES.failed.en };
  }
}

/**
 * Handles the mini (name + phone only) enquiry form used on service pages,
 * location pages, and the site-wide popup. `source` identifies where the
 * lead came from (e.g. "Service: Emirates ID", "Popup: Homepage") so leads
 * arriving in email/Sheets can be traced back to the page that generated them.
 */
export async function submitMiniEnquiry(
  values: MiniEnquiryFormValues,
  locale: string = "en",
  source: string = "Website",
): Promise<EnquiryActionResult> {
  const isAr = locale === "ar";
  const parsed = createMiniEnquiryFormSchema(locale).safeParse(values);

  if (!parsed.success) {
    return { success: false, error: isAr ? MESSAGES.invalid.ar : MESSAGES.invalid.en };
  }

  try {
    const { name, phone } = parsed.data;
    await Promise.all([
      sendLeadEmail("New Quick Enquiry", { name, phone, source }),
      logLeadToSheet("Enquiry", { name, phone, service: source }),
    ]);
    return { success: true };
  } catch (err) {
    console.error("[submitMiniEnquiry] failed:", err);
    return { success: false, error: isAr ? MESSAGES.failed.ar : MESSAGES.failed.en };
  }
}
