module.exports = [
"[project]/src/lib/validations/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContactFormSchema",
    ()=>createContactFormSchema,
    "createNewsletterSchema",
    ()=>createNewsletterSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
function createContactFormSchema(locale) {
    const isAr = locale === "ar";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, isAr ? "يرجى إدخال اسمك الكامل" : "Please enter your full name"),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address"),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(7, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number").regex(/^[\d+\s-]+$/, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, isAr ? "يرجى إدخال 10 أحرف على الأقل" : "Please enter at least 10 characters"),
        // Honeypot spam-protection field — must stay empty
        company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(0).optional()
    });
}
function createNewsletterSchema(locale) {
    const isAr = locale === "ar";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address")
    });
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/lib/lead-notify.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logLeadToSheet",
    ()=>logLeadToSheet,
    "sendLeadEmail",
    ()=>sendLeadEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
;
async function sendLeadEmail(subject, payload) {
    const { GMAIL_USER, GMAIL_APP_PASSWORD, LEAD_EMAIL_TO } = process.env;
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !LEAD_EMAIL_TO) {
        console.warn("[lead-notify] Gmail env vars not set — skipping email send.", payload);
        return;
    }
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
        service: "gmail",
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD
        }
    });
    const rows = Object.entries(payload).filter(([, v])=>v !== undefined && v !== "").map(([k, v])=>`<tr><td style="padding:6px 12px;font-weight:600;color:#003526;border-bottom:1px solid #eee;">${escapeHtml(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${escapeHtml(String(v))}</td></tr>`).join("");
    await transporter.sendMail({
        from: `"Typing Center Near Me — Website" <${GMAIL_USER}>`,
        to: LEAD_EMAIL_TO,
        replyTo: payload.email,
        subject,
        html: `
      <div style="font-family:sans-serif;max-width:520px;">
        <h2 style="color:#003526;">${escapeHtml(subject)}</h2>
        <table style="border-collapse:collapse;width:100%;">${rows}</table>
      </div>
    `
    });
}
async function logLeadToSheet(sheetName, payload) {
    const { GOOGLE_SHEETS_WEBHOOK_URL } = process.env;
    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
        console.warn("[lead-notify] GOOGLE_SHEETS_WEBHOOK_URL not set — skipping sheet log.", payload);
        return;
    }
    const body = JSON.stringify({
        sheet: sheetName,
        timestamp: new Date().toISOString(),
        ...payload
    });
    try {
        await postFollowingRedirects(GOOGLE_SHEETS_WEBHOOK_URL, body);
    } catch (err) {
        console.error("[lead-notify] Failed to log lead to Google Sheet:", err);
    }
}
/**
 * Apps Script /exec URLs always respond with a 302 redirect, even for
 * POST requests. The default fetch redirect behavior downgrades POST to
 * GET when following a 301/302/303, which means the payload never
 * actually reaches doPost(). This manually follows the redirect chain
 * while keeping the request as POST with its original body.
 */ async function postFollowingRedirects(url, body, maxHops = 5) {
    let currentUrl = url;
    for(let i = 0; i < maxHops; i++){
        const res = await fetch(currentUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body,
            redirect: "manual"
        });
        if (res.status >= 300 && res.status < 400) {
            const location = res.headers.get("location");
            if (!location) {
                throw new Error(`Redirect response with no Location header (status ${res.status})`);
            }
            currentUrl = location;
            continue;
        }
        if (!res.ok) {
            const text = await res.text().catch(()=>"");
            throw new Error(`Sheets webhook returned ${res.status}: ${text.slice(0, 200)}`);
        }
        return res;
    }
    throw new Error("Too many redirects while posting to Google Sheets webhook");
}
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
}),
"[project]/src/app/actions/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"607a786ca16d69860386be779797d05ea01359ea8e":{"name":"subscribeNewsletter"},"60a5818da27bb57b2909d8a249b857927fb6a0cb98":{"name":"submitContactForm"}},"src/app/actions/contact.ts",""] */ __turbopack_context__.s([
    "submitContactForm",
    ()=>submitContactForm,
    "subscribeNewsletter",
    ()=>subscribeNewsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations/contact.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/lead-notify.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const MESSAGES = {
    invalid: {
        en: "Please check the form fields and try again.",
        ar: "يرجى التحقق من حقول النموذج والمحاولة مرة أخرى."
    },
    failed: {
        en: "Something went wrong. Please call us directly.",
        ar: "حدث خطأ ما. يرجى الاتصال بنا مباشرة."
    },
    invalidEmail: {
        en: "Please enter a valid email address.",
        ar: "يرجى إدخال بريد إلكتروني صحيح."
    },
    failedGeneric: {
        en: "Something went wrong. Please try again.",
        ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
    }
};
async function submitContactForm(values, locale = "en") {
    const isAr = locale === "ar";
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContactFormSchema"])(locale).safeParse(values);
    if (!parsed.success) {
        return {
            success: false,
            error: isAr ? MESSAGES.invalid.ar : MESSAGES.invalid.en
        };
    }
    // Honeypot check
    if (parsed.data.company) {
        return {
            success: true
        }; // silently succeed for bots, do nothing
    }
    try {
        const { name, email, phone, message } = parsed.data;
        await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendLeadEmail"])("New Contact Form Message", {
                name,
                email,
                phone,
                message
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logLeadToSheet"])("Contact", {
                name,
                email,
                phone,
                message
            })
        ]);
        return {
            success: true
        };
    } catch (err) {
        console.error("[submitContactForm] failed:", err);
        return {
            success: false,
            error: isAr ? MESSAGES.failed.ar : MESSAGES.failed.en
        };
    }
}
async function subscribeNewsletter(values, locale = "en") {
    const isAr = locale === "ar";
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNewsletterSchema"])(locale).safeParse(values);
    if (!parsed.success) {
        return {
            success: false,
            error: isAr ? MESSAGES.invalidEmail.ar : MESSAGES.invalidEmail.en
        };
    }
    try {
        const { email } = parsed.data;
        await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendLeadEmail"])("New Newsletter Subscriber", {
                email
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logLeadToSheet"])("Newsletter", {
                email
            })
        ]);
        return {
            success: true
        };
    } catch (err) {
        console.error("[subscribeNewsletter] failed:", err);
        return {
            success: false,
            error: isAr ? MESSAGES.failedGeneric.ar : MESSAGES.failedGeneric.en
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContactForm,
    subscribeNewsletter
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContactForm, "60a5818da27bb57b2909d8a249b857927fb6a0cb98", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(subscribeNewsletter, "607a786ca16d69860386be779797d05ea01359ea8e", null);
}),
"[project]/src/lib/validations/enquiry.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEnquiryFormSchema",
    ()=>createEnquiryFormSchema,
    "getServiceOptions",
    ()=>getServiceOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const SERVICE_VALUES = [
    "emirates-id",
    "medical-typing",
    "trade-licenses",
    "pro-services",
    "company-formation",
    "others"
];
function createEnquiryFormSchema(locale) {
    const isAr = locale === "ar";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, isAr ? "يرجى إدخال اسمك الكامل" : "Please enter your full name"),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number").regex(/^[\d+\s-]+$/, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number").refine((val)=>val.replace(/\D/g, "").length <= 10, isAr ? "يجب ألا يتجاوز رقم الهاتف 10 أرقام" : "Phone number must be 10 digits or fewer"),
        service: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(SERVICE_VALUES, {
            message: isAr ? "يرجى اختيار خدمة" : "Please select a service"
        })
    });
}
const SERVICE_LABELS = {
    "emirates-id": {
        en: "Emirates ID",
        ar: "الهوية الإماراتية"
    },
    "medical-typing": {
        en: "Medical Typing",
        ar: "الفحص الطبي"
    },
    "trade-licenses": {
        en: "Trade Licenses",
        ar: "الرخص التجارية"
    },
    "pro-services": {
        en: "PRO Services",
        ar: "الخدمات الحكومية"
    },
    "company-formation": {
        en: "Company Formation",
        ar: "تأسيس الشركات"
    },
    others: {
        en: "Others",
        ar: "أخرى"
    }
};
function getServiceOptions(locale) {
    const isAr = locale === "ar";
    return SERVICE_VALUES.map((value)=>({
            value,
            label: isAr ? SERVICE_LABELS[value].ar : SERVICE_LABELS[value].en
        }));
}
}),
"[project]/src/app/actions/enquiry.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"603bb14acf28750da1e788ddfde00c258107706600":{"name":"submitEnquiry"}},"src/app/actions/enquiry.ts",""] */ __turbopack_context__.s([
    "submitEnquiry",
    ()=>submitEnquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$enquiry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations/enquiry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/lead-notify.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const MESSAGES = {
    invalid: {
        en: "Please check the form fields and try again.",
        ar: "يرجى التحقق من حقول النموذج والمحاولة مرة أخرى."
    },
    failed: {
        en: "Something went wrong. Please call us directly.",
        ar: "حدث خطأ ما. يرجى الاتصال بنا مباشرة."
    }
};
async function submitEnquiry(values, locale = "en") {
    const isAr = locale === "ar";
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$enquiry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnquiryFormSchema"])(locale).safeParse(values);
    if (!parsed.success) {
        return {
            success: false,
            error: isAr ? MESSAGES.invalid.ar : MESSAGES.invalid.en
        };
    }
    try {
        const { name, phone, service } = parsed.data;
        await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendLeadEmail"])("New Callback Request", {
                name,
                phone,
                service
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$notify$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logLeadToSheet"])("Enquiry", {
                name,
                phone,
                service
            })
        ]);
        return {
            success: true
        };
    } catch (err) {
        console.error("[submitEnquiry] failed:", err);
        return {
            success: false,
            error: isAr ? MESSAGES.failed.ar : MESSAGES.failed.en
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitEnquiry
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitEnquiry, "603bb14acf28750da1e788ddfde00c258107706600", null);
}),
"[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/contact.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/enquiry.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/contact.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$enquiry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/enquiry.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/contact.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/enquiry.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "603bb14acf28750da1e788ddfde00c258107706600",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$enquiry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitEnquiry"],
    "607a786ca16d69860386be779797d05ea01359ea8e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subscribeNewsletter"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$enquiry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/contact.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/enquiry.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/contact.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$enquiry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/enquiry.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09htcc_._.js.map