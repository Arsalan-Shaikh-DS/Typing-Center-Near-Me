import { z } from "zod";

const SERVICE_VALUES = [
  "emirates-id",
  "medical-typing",
  "trade-licenses",
  "pro-services",
  "company-formation",
  "others",
] as const;

export type ServiceValue = (typeof SERVICE_VALUES)[number];

/** Builds the enquiry form zod schema with locale-appropriate validation messages. */
export function createEnquiryFormSchema(locale: string) {
  const isAr = locale === "ar";
  return z.object({
    name: z.string().min(2, isAr ? "يرجى إدخال اسمك الكامل" : "Please enter your full name"),
    phone: z
      .string()
      .min(1, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number")
      .regex(/^[\d+\s-]+$/, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number")
      .refine(
        (val) => val.replace(/\D/g, "").length <= 10,
        isAr ? "يجب ألا يتجاوز رقم الهاتف 10 أرقام" : "Phone number must be 10 digits or fewer",
      ),
    service: z.enum(SERVICE_VALUES, {
      message: isAr ? "يرجى اختيار خدمة" : "Please select a service",
    }),
  });
}

export type EnquiryFormValues = z.infer<ReturnType<typeof createEnquiryFormSchema>>;

const SERVICE_LABELS: Record<ServiceValue, { en: string; ar: string }> = {
  "emirates-id": { en: "Emirates ID", ar: "الهوية الإماراتية" },
  "medical-typing": { en: "Medical Typing", ar: "الفحص الطبي" },
  "trade-licenses": { en: "Trade Licenses", ar: "الرخص التجارية" },
  "pro-services": { en: "PRO Services", ar: "الخدمات الحكومية" },
  "company-formation": { en: "Company Formation", ar: "تأسيس الشركات" },
  others: { en: "Others", ar: "أخرى" },
};

export function getServiceOptions(locale: string) {
  const isAr = locale === "ar";
  return SERVICE_VALUES.map((value) => ({
    value,
    label: isAr ? SERVICE_LABELS[value].ar : SERVICE_LABELS[value].en,
  }));
}
