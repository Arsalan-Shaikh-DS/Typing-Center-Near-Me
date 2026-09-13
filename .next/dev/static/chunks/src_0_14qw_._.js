(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/i18n/routing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        "en",
        "ar"
    ],
    defaultLocale: "en",
    // English stays at the root (no /en prefix) to preserve existing URLs/SEO;
    // Arabic is served under /ar.
    localePrefix: "as-needed"
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "getPathname",
    ()=>getPathname,
    "redirect",
    ()=>redirect,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/site-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "Typing Center Near Me",
    fullName: "Typing Center Near Me",
    description: "Get expert UAE typing services for Emirates ID, residence visa, family visa, Golden Visa, medical fitness, labor, immigration, and business setup. Secure, fast, and reliable.",
    descriptionAr: "خدمات طباعة إماراتية موثوقة للهوية الإماراتية، تأشيرات الإقامة، التأشيرات العائلية، التأشيرة الذهبية، الفحص الطبي، ومعاملات العمل وتأسيس الشركات — بأمان وسرعة ودقة.",
    url: "https://www.typingcenternearme.ae",
    phone: "+971561827629",
    phoneDisplay: "+971 56 182 7629",
    whatsapp: "+971561827629",
    email: "typingcenternearme.com@gmail.com",
    logo: "/images/logo-icon.png",
    nav: [
        {
            label: "Services",
            href: "#services"
        },
        {
            label: "About",
            href: "#about"
        },
        {
            label: "Contact",
            href: "#contact"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRelatedServices",
    ()=>getRelatedServices,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "services",
    ()=>services
]);
const services = [
    {
        slug: "emirates-id",
        title: "Emirates ID",
        titleAr: "الهوية الإماراتية",
        shortDescription: "New issuance, renewal, and replacement services with fast-track processing.",
        shortDescriptionAr: "خدمات إصدار وتجديد واستبدال الهوية الإماراتية بمعالجة سريعة.",
        icon: "id_card",
        accentIcon: "badge",
        image: "/images/services/emirates-id.jpg",
        featured: true,
        overview: "Your Emirates ID is required for virtually every transaction in the UAE. We handle new issuance, renewals, and replacements with same-day typing and appointment booking.",
        overviewAr: "الهوية الإماراتية مطلوبة عمليًا في كل معاملة تجريها داخل الدولة. نتولى إصدارها الجديد وتجديدها واستبدالها مع طباعة الطلب وحجز الموعد في نفس اليوم.",
        benefits: [
            "Same-day application typing",
            "Appointment booking at your nearest ICP center",
            "Status tracking until card collection",
            "Support for lost or damaged card replacement"
        ],
        benefitsAr: [
            "طباعة الطلب في نفس اليوم",
            "حجز موعد في أقرب مركز تابع للهيئة الاتحادية للهوية والجنسية",
            "متابعة حالة الطلب حتى استلام البطاقة",
            "دعم في حال فقدان البطاقة أو تلفها"
        ],
        requiredDocuments: [
            "Original passport with valid residency visa",
            "Previous Emirates ID (for renewal or replacement)",
            "Passport-size photograph"
        ],
        requiredDocumentsAr: [
            "جواز السفر الأصلي مع تأشيرة إقامة سارية",
            "بطاقة الهوية السابقة (في حال التجديد أو الاستبدال)",
            "صورة شخصية بحجم جواز السفر"
        ],
        process: [
            "Submit your documents for verification",
            "Application typing and biometric appointment booking",
            "Biometric capture at the ICP center",
            "Card production and delivery to your address"
        ],
        processAr: [
            "تقديم مستنداتك للتحقق منها",
            "طباعة الطلب وحجز موعد أخذ البصمة",
            "أخذ البصمة الحيوية في المركز المعتمد",
            "إصدار البطاقة وتوصيلها إلى عنوانك"
        ],
        timeline: "Standard processing: 5–7 working days.",
        timelineAr: "المعالجة القياسية: 5–7 أيام عمل.",
        governmentFees: [
            {
                item: "Emirates ID (2-year)",
                amount: "AED 270",
                itemAr: "الهوية الإماراتية (سنتان)",
                amountAr: "270 د.إ"
            },
            {
                item: "Emirates ID (3-year)",
                amount: "AED 400",
                itemAr: "الهوية الإماراتية (3 سنوات)",
                amountAr: "400 د.إ"
            }
        ],
        faqs: [
            {
                question: "What if I lose my Emirates ID?",
                answer: "Report it immediately and we'll process a replacement application, which typically requires a police report reference number.",
                questionAr: "ماذا أفعل إذا فقدت بطاقة هويتي الإماراتية؟",
                answerAr: "أبلغ عن الفقدان فورًا، وسنتولى تقديم طلب استبدال، والذي يتطلب عادةً رقمًا مرجعيًا لبلاغ الشرطة."
            }
        ]
    },
    {
        slug: "medical-typing",
        title: "Medical Typing",
        titleAr: "الفحص الطبي",
        shortDescription: "Application typing for mandatory DHA/MOHAP medical fitness examinations.",
        shortDescriptionAr: "طباعة طلبات الفحص الطبي الإلزامي لدى هيئة الصحة بدبي أو وزارة الصحة.",
        icon: "medical_services",
        accentIcon: "health_and_safety",
        image: "/images/services/medical-typing.jpg",
        overview: "Every residency visa application requires a mandatory medical fitness test. We handle your application typing and appointment booking with DHA or MOHAP-approved centers.",
        overviewAr: "يتطلب كل طلب تأشيرة إقامة إجراء فحص طبي إلزامي. نتولى طباعة طلبك وحجز موعدك في المراكز المعتمدة من هيئة الصحة بدبي أو وزارة الصحة.",
        benefits: [
            "Same-day appointment booking",
            "Application typing for both DHA and MOHAP",
            "Results tracking and status updates",
            "Support for retest scheduling if needed"
        ],
        benefitsAr: [
            "حجز موعد في نفس اليوم",
            "طباعة الطلبات لكل من هيئة الصحة بدبي ووزارة الصحة",
            "متابعة النتائج وتحديثات الحالة",
            "دعم في جدولة إعادة الفحص عند الحاجة"
        ],
        requiredDocuments: [
            "Passport copy with valid entry permit or residency visa",
            "Passport-size photograph"
        ],
        requiredDocumentsAr: [
            "نسخة من جواز السفر مع تصريح دخول أو تأشيرة إقامة سارية",
            "صورة شخصية بحجم جواز السفر"
        ],
        process: [
            "Application typing and center selection",
            "Appointment booking",
            "Blood test and chest X-ray at the medical center",
            "Result issuance (typically same day for standard tests)"
        ],
        processAr: [
            "طباعة الطلب واختيار المركز",
            "حجز الموعد",
            "إجراء تحليل الدم والأشعة على الصدر في المركز الطبي",
            "صدور النتيجة (عادةً في نفس اليوم للفحوصات الاعتيادية)"
        ],
        timeline: "Results usually available within 24 hours.",
        timelineAr: "تظهر النتائج عادةً خلال 24 ساعة.",
        governmentFees: [
            {
                item: "Standard medical fitness test",
                amount: "AED 320–700",
                itemAr: "الفحص الطبي القياسي",
                amountAr: "320–700 د.إ"
            }
        ],
        faqs: [
            {
                question: "What happens if I fail the medical test?",
                answer: "Certain communicable conditions can result in visa refusal; our consultants will explain next steps and appeal options where applicable.",
                questionAr: "ماذا يحدث إذا لم أجتز الفحص الطبي؟",
                answerAr: "قد تؤدي بعض الحالات المرضية المعدية إلى رفض طلب التأشيرة؛ وسيوضح لك مستشارونا الخطوات التالية وخيارات التظلم إن أمكن."
            }
        ]
    },
    {
        slug: "trade-license",
        title: "Trade Licenses",
        titleAr: "الرخص التجارية",
        shortDescription: "Mainland and Freezone company setup, license renewals, and amendments.",
        shortDescriptionAr: "تأسيس الشركات البرية وشركات المناطق الحرة، وتجديد الرخص وتعديلها.",
        icon: "domain",
        accentIcon: "storefront",
        image: "/images/services/trade-license.jpg",
        overview: "From initial approval to final license issuance, we facilitate mainland and Freezone trade licenses, renewals, and activity amendments across all major UAE authorities.",
        overviewAr: "من الموافقة المبدئية وحتى إصدار الرخصة النهائية، نسهّل إجراءات الرخص التجارية البرية ورخص المناطق الحرة، بالإضافة إلى التجديد وتعديل الأنشطة لدى جميع الجهات الرئيسية في الإمارات.",
        benefits: [
            "Support across DED, Freezones, and DMCC",
            "Activity amendment and license renewal handling",
            "Document clearance with Ejari and tenancy registration",
            "Ongoing PRO support after issuance"
        ],
        benefitsAr: [
            "دعم لدى دائرة التنمية الاقتصادية والمناطق الحرة ومركز دبي للسلع المتعددة",
            "إدارة تعديل الأنشطة وتجديد الرخص",
            "إنجاز المستندات مع تسجيل إيجاري وعقد الإيجار",
            "دعم مستمر في الخدمات الحكومية بعد إصدار الرخصة"
        ],
        requiredDocuments: [
            "Passport copies of all shareholders",
            "Initial approval certificate",
            "Memorandum of Association (MOA)",
            "Tenancy contract / Ejari"
        ],
        requiredDocumentsAr: [
            "نسخ من جوازات سفر جميع الشركاء",
            "شهادة الموافقة المبدئية",
            "عقد التأسيس (MOA)",
            "عقد الإيجار / إيجاري"
        ],
        process: [
            "Business activity and jurisdiction consultation",
            "Initial approval application",
            "MOA drafting and notarization",
            "Tenancy registration",
            "Final license issuance"
        ],
        processAr: [
            "استشارة حول النشاط التجاري والولاية القانونية المناسبة",
            "تقديم طلب الموافقة المبدئية",
            "صياغة عقد التأسيس وتوثيقه",
            "تسجيل عقد الإيجار",
            "إصدار الرخصة النهائية"
        ],
        timeline: "5–10 working days depending on jurisdiction and activity.",
        timelineAr: "5–10 أيام عمل حسب الولاية القانونية والنشاط.",
        governmentFees: [
            {
                item: "Initial approval",
                amount: "AED 120",
                itemAr: "الموافقة المبدئية",
                amountAr: "120 د.إ"
            },
            {
                item: "Trade name reservation",
                amount: "AED 620",
                itemAr: "حجز الاسم التجاري",
                amountAr: "620 د.إ"
            },
            {
                item: "License issuance (from)",
                amount: "AED 8,000",
                itemAr: "إصدار الرخصة (ابتداءً من)",
                amountAr: "8,000 د.إ"
            }
        ],
        faqs: [
            {
                question: "Mainland or Freezone — which should I choose?",
                answer: "It depends on your target market and ownership goals. Mainland allows trading directly within the UAE market; Freezones offer 100% foreign ownership with certain trading restrictions. We'll walk you through both during your consultation.",
                questionAr: "الشركة البرية أم المنطقة الحرة — أيهما أختار؟",
                answerAr: "يعتمد ذلك على سوقك المستهدف وأهداف الملكية لديك. تتيح الشركة البرية التداول المباشر داخل السوق الإماراتي، بينما توفر المناطق الحرة تملكًا أجنبيًا كاملاً بنسبة 100% مع بعض القيود على التداول. سنوضح لك الفرق بالتفصيل خلال الاستشارة."
            }
        ]
    },
    {
        slug: "pro-services",
        title: "PRO Services",
        titleAr: "الخدمات الحكومية (العلاقات العامة)",
        shortDescription: "Ongoing government liaison and document clearance for businesses of every size.",
        shortDescriptionAr: "خدمات تواصل حكومي مستمرة وإنجاز معاملات للشركات على اختلاف أحجامها.",
        icon: "support_agent",
        accentIcon: "corporate_fare",
        image: "/images/services/pro-services.jpg",
        overview: "Outsource your government liaison work to us. From labor card renewals to document clearance and visa quota amendments, our PRO team keeps your business compliant.",
        overviewAr: "فوّض أعمال التواصل الحكومي إلينا. من تجديد بطاقات العمل إلى إنجاز المستندات وتعديل حصص التأشيرات، يحرص فريق العلاقات الحكومية لدينا على التزام شركتك بالأنظمة.",
        benefits: [
            "Dedicated PRO liaison for your company",
            "Labor card and establishment card renewals",
            "Visa quota and MOHRE amendments",
            "Monthly compliance tracking"
        ],
        benefitsAr: [
            "مسؤول علاقات حكومية مخصص لشركتك",
            "تجديد بطاقة العمل وبطاقة المنشأة",
            "تعديل حصص التأشيرات ومعاملات وزارة الموارد البشرية والتوطين",
            "متابعة شهرية للامتثال"
        ],
        requiredDocuments: [
            "Trade license copy",
            "Establishment card",
            "Employee documents as required per transaction"
        ],
        requiredDocumentsAr: [
            "نسخة من الرخصة التجارية",
            "بطاقة المنشأة",
            "مستندات الموظفين حسب متطلبات كل معاملة"
        ],
        process: [
            "Compliance audit of your existing government records",
            "Ongoing transaction handling as needed",
            "Monthly status reporting"
        ],
        processAr: [
            "مراجعة شاملة لسجلاتك الحكومية الحالية",
            "إنجاز المعاملات بشكل مستمر عند الحاجة",
            "تقرير حالة شهري"
        ],
        timeline: "Ongoing retainer or per-transaction, depending on your plan.",
        timelineAr: "باشتراك مستمر أو حسب كل معاملة، وفق الباقة التي تختارها.",
        governmentFees: [
            {
                item: "Varies per transaction",
                amount: "Quoted case by case",
                itemAr: "تختلف حسب المعاملة",
                amountAr: "يُحدَّد لكل حالة على حدة"
            }
        ],
        faqs: [
            {
                question: "Do you offer a monthly PRO retainer?",
                answer: "Yes — we offer monthly retainer packages scaled to your company's transaction volume, in addition to one-off transactions.",
                questionAr: "هل تقدمون باقة اشتراك شهري للخدمات الحكومية؟",
                answerAr: "نعم — نوفر باقات اشتراك شهري تتناسب مع حجم معاملات شركتك، بالإضافة إلى إمكانية إنجاز المعاملات الفردية."
            }
        ]
    },
    {
        slug: "company-formation",
        title: "Company Formation",
        titleAr: "تأسيس الشركات",
        shortDescription: "Mainland, Freezone, and offshore company incorporation with full documentation support.",
        shortDescriptionAr: "تأسيس الشركات البرية وشركات المناطق الحرة والشركات الخارجية مع دعم كامل للمستندات.",
        icon: "account_balance",
        accentIcon: "business_center",
        image: "/images/services/company-formation.jpg",
        overview: "We guide you through choosing the right jurisdiction and structure, then handle the full incorporation process — from name reservation to license issuance and bank account introduction.",
        overviewAr: "نرشدك لاختيار الولاية القانونية والهيكل المناسبين، ثم نتولى إجراءات التأسيس بالكامل — من حجز الاسم التجاري إلى إصدار الرخصة والتوصية لفتح الحساب البنكي.",
        benefits: [
            "Jurisdiction and structure consultation",
            "Full incorporation document handling",
            "Bank account opening introduction",
            "Post-incorporation PRO support"
        ],
        benefitsAr: [
            "استشارة حول الولاية القانونية والهيكل المناسب",
            "إنجاز جميع مستندات التأسيس",
            "التوصية لفتح حساب بنكي",
            "دعم حكومي مستمر بعد التأسيس"
        ],
        requiredDocuments: [
            "Passport copies of all shareholders",
            "Proposed trade name options",
            "Business activity details"
        ],
        requiredDocumentsAr: [
            "نسخ من جوازات سفر جميع الشركاء",
            "خيارات مقترحة للاسم التجاري",
            "تفاصيل النشاط التجاري"
        ],
        process: [
            "Jurisdiction and activity consultation",
            "Name reservation and initial approval",
            "MOA drafting",
            "License issuance",
            "Bank account introduction"
        ],
        processAr: [
            "استشارة حول الولاية القانونية والنشاط",
            "حجز الاسم والموافقة المبدئية",
            "صياغة عقد التأسيس",
            "إصدار الرخصة",
            "التوصية لفتح الحساب البنكي"
        ],
        timeline: "5–15 working days depending on jurisdiction.",
        timelineAr: "5–15 يوم عمل حسب الولاية القانونية.",
        governmentFees: [
            {
                item: "Incorporation packages (from)",
                amount: "AED 9,000",
                itemAr: "باقات التأسيس (ابتداءً من)",
                amountAr: "9,000 د.إ"
            }
        ],
        faqs: [
            {
                question: "Can I open a UAE company remotely?",
                answer: "Many Freezone jurisdictions allow remote incorporation; mainland setups typically require at least one in-person visit for biometrics.",
                questionAr: "هل يمكنني تأسيس شركة إماراتية عن بُعد؟",
                answerAr: "تسمح العديد من المناطق الحرة بالتأسيس عن بُعد؛ بينما تتطلب الشركات البرية عادةً زيارة حضورية واحدة على الأقل لأخذ البصمة."
            }
        ]
    },
    {
        slug: "visit-visa",
        title: "Visit Visa",
        titleAr: "تأشيرة الزيارة",
        shortDescription: "Tourist and visit visa applications, extensions, and status change processing.",
        shortDescriptionAr: "طلبات تأشيرات السياحة والزيارة، وتمديدها، وتغيير الحالة.",
        icon: "flight_takeoff",
        accentIcon: "travel_explore",
        image: "/images/services/visit-visa.jpg",
        overview: "We process tourist and visit visa applications, extensions, and in-country status changes for travelers and sponsors alike.",
        overviewAr: "نتولى معالجة طلبات تأشيرات السياحة والزيارة، وتمديدها، وتغيير الحالة داخل الدولة للمسافرين والكفلاء على حد سواء.",
        benefits: [
            "Fast application typing and submission",
            "Extension processing before expiry",
            "Status change to residency where eligible"
        ],
        benefitsAr: [
            "طباعة الطلب وتقديمه بسرعة",
            "معالجة طلبات التمديد قبل الانتهاء",
            "تغيير الحالة إلى إقامة عند الاستحقاق"
        ],
        requiredDocuments: [
            "Passport copy (6+ months validity)",
            "Passport-size photograph",
            "Sponsor's documents (for family/friend sponsorship)"
        ],
        requiredDocumentsAr: [
            "نسخة من جواز السفر (صالح لمدة 6 أشهر على الأقل)",
            "صورة شخصية بحجم جواز السفر",
            "مستندات الكفيل (في حال الكفالة العائلية أو من صديق)"
        ],
        process: [
            "Application typing",
            "Submission to ICP",
            "Visa issuance and delivery"
        ],
        processAr: [
            "طباعة الطلب",
            "التقديم للهيئة الاتحادية للهوية والجنسية",
            "إصدار التأشيرة وتسليمها"
        ],
        timeline: "Typically 2–4 working days.",
        timelineAr: "عادةً من 2 إلى 4 أيام عمل.",
        governmentFees: [
            {
                item: "30-day visit visa",
                amount: "AED 350–650",
                itemAr: "تأشيرة زيارة لمدة 30 يومًا",
                amountAr: "350–650 د.إ"
            },
            {
                item: "Extension (30 days)",
                amount: "AED 650",
                itemAr: "التمديد (30 يومًا)",
                amountAr: "650 د.إ"
            }
        ],
        faqs: [
            {
                question: "Can a visit visa be extended?",
                answer: "Yes, most visit visas can be extended for an additional period before expiry — we handle the extension application for you.",
                questionAr: "هل يمكن تمديد تأشيرة الزيارة؟",
                answerAr: "نعم، يمكن تمديد معظم تأشيرات الزيارة لفترة إضافية قبل انتهائها — ونتولى تقديم طلب التمديد نيابةً عنك."
            }
        ]
    },
    {
        slug: "legal-translation",
        title: "Legal Translation",
        titleAr: "الترجمة القانونية",
        shortDescription: "Ministry of Justice certified translation for all official documents.",
        shortDescriptionAr: "ترجمة معتمدة من وزارة العدل لجميع المستندات الرسمية.",
        icon: "history_edu",
        accentIcon: "gavel",
        image: "/images/services/legal-translation.jpg",
        overview: "We provide Ministry of Justice certified translation for contracts, certificates, court documents, and personal records — accepted by all UAE government entities.",
        overviewAr: "نقدّم ترجمة معتمدة من وزارة العدل للعقود والشهادات والمستندات القضائية والسجلات الشخصية — مقبولة لدى جميع الجهات الحكومية في الإمارات.",
        benefits: [
            "Certified translators licensed by the Ministry of Justice",
            "Same-day turnaround for standard documents",
            "Confidential handling of sensitive documents",
            "Attestation coordination available"
        ],
        benefitsAr: [
            "مترجمون معتمدون ومرخّصون من وزارة العدل",
            "إنجاز في نفس اليوم للمستندات الاعتيادية",
            "تعامل سري مع المستندات الحساسة",
            "إمكانية تنسيق التصديق على المستندات"
        ],
        requiredDocuments: [
            "Original document to be translated",
            "Passport copy (for personal documents)"
        ],
        requiredDocumentsAr: [
            "المستند الأصلي المراد ترجمته",
            "نسخة من جواز السفر (للمستندات الشخصية)"
        ],
        process: [
            "Document submission and scope confirmation",
            "Certified translation",
            "Quality review and certification stamping",
            "Collection or courier delivery"
        ],
        processAr: [
            "تقديم المستند وتحديد نطاق الترجمة",
            "الترجمة المعتمدة",
            "مراجعة الجودة وختم التصديق",
            "الاستلام من المركز أو التوصيل عبر مندوب"
        ],
        timeline: "Same day for most documents; 2–3 days for lengthy legal contracts.",
        timelineAr: "في نفس اليوم لمعظم المستندات؛ ومن 2 إلى 3 أيام للعقود القانونية الطويلة.",
        governmentFees: [
            {
                item: "Per page (standard document)",
                amount: "AED 75–150",
                itemAr: "لكل صفحة (مستند قياسي)",
                amountAr: "75–150 د.إ"
            }
        ],
        faqs: [
            {
                question: "Is your translation accepted by UAE courts?",
                answer: "Yes — our translations are certified by Ministry of Justice licensed legal translators and accepted by UAE courts and government entities.",
                questionAr: "هل تُقبل ترجمتكم لدى المحاكم الإماراتية؟",
                answerAr: "نعم — ترجماتنا معتمدة من مترجمين قانونيين مرخّصين من وزارة العدل، ومقبولة لدى المحاكم والجهات الحكومية في الإمارات."
            }
        ]
    },
    {
        slug: "family-visa",
        title: "Family Visa",
        titleAr: "التأشيرة العائلية",
        shortDescription: "Sponsorship, typing, and processing for spouse, children, and parent residency visas.",
        shortDescriptionAr: "كفالة وطباعة ومعالجة تأشيرات إقامة الزوج أو الزوجة والأبناء والوالدين.",
        icon: "family_restroom",
        accentIcon: "diversity_3",
        image: "/images/services/family-visa.jpg",
        overview: "We manage the full family sponsorship process — from salary and tenancy eligibility checks through to visa stamping for your spouse, children, and parents.",
        overviewAr: "ندير عملية الكفالة العائلية بالكامل — من التحقق من أهلية الراتب وعقد الإيجار وحتى ختم التأشيرة لزوجك أو زوجتك وأبنائك ووالديك.",
        benefits: [
            "Eligibility check before you commit",
            "Typing and submission for all family members together",
            "Medical and Emirates ID appointment coordination",
            "Status tracking throughout"
        ],
        benefitsAr: [
            "التحقق من الأهلية قبل الالتزام",
            "طباعة وتقديم طلبات جميع أفراد الأسرة معًا",
            "تنسيق مواعيد الفحص الطبي والهوية الإماراتية",
            "متابعة حالة الطلب في كل مرحلة"
        ],
        requiredDocuments: [
            "Sponsor's passport and residency visa",
            "Sponsor's salary certificate or trade license",
            "Attested marriage/birth certificates",
            "Tenancy contract / Ejari"
        ],
        requiredDocumentsAr: [
            "جواز سفر الكفيل وتأشيرة إقامته",
            "شهادة راتب الكفيل أو رخصته التجارية",
            "شهادات الزواج/الميلاد المصدّقة",
            "عقد الإيجار / إيجاري"
        ],
        process: [
            "Eligibility assessment",
            "Entry permit application",
            "Status change and medical test",
            "Emirates ID biometrics",
            "Visa stamping"
        ],
        processAr: [
            "تقييم الأهلية",
            "تقديم طلب تصريح الدخول",
            "تغيير الحالة وإجراء الفحص الطبي",
            "أخذ بصمة الهوية الإماراتية",
            "ختم التأشيرة"
        ],
        timeline: "Typically 1–3 weeks per family member.",
        timelineAr: "عادةً من أسبوع إلى 3 أسابيع لكل فرد من أفراد الأسرة.",
        governmentFees: [
            {
                item: "Entry permit",
                amount: "AED 500–1,100",
                itemAr: "تصريح الدخول",
                amountAr: "500–1,100 د.إ"
            },
            {
                item: "Status change",
                amount: "AED 650",
                itemAr: "تغيير الحالة",
                amountAr: "650 د.إ"
            }
        ],
        faqs: [
            {
                question: "What is the minimum salary to sponsor family?",
                answer: "Generally AED 4,000 (or AED 3,000 with accommodation provided), though this can vary by emirate and case.",
                questionAr: "ما هو الحد الأدنى للراتب لكفالة أفراد الأسرة؟",
                answerAr: "بشكل عام 4,000 درهم (أو 3,000 درهم مع توفير السكن)، وقد يختلف ذلك حسب الإمارة والحالة."
            }
        ]
    },
    {
        slug: "residence-visa",
        title: "Residence Visa",
        titleAr: "تأشيرة الإقامة",
        shortDescription: "New residence visa stamping, renewals, and cancellations handled end to end.",
        shortDescriptionAr: "ختم تأشيرة الإقامة الجديدة، والتجديد، والإلغاء — بشكل متكامل من الألف إلى الياء.",
        icon: "home_work",
        accentIcon: "apartment",
        image: "/images/services/residence-visa.jpg",
        overview: "Whether you need a new residence visa, a renewal, or a cancellation before leaving the country, we handle the full stamping process with the relevant authority.",
        overviewAr: "سواء كنت بحاجة إلى تأشيرة إقامة جديدة، أو تجديد، أو إلغاء قبل مغادرة الدولة، فإننا نتولى عملية الختم الكاملة لدى الجهة المختصة.",
        benefits: [
            "New issuance and renewal in one place",
            "Cancellation processing for smooth exit",
            "Coordination with your employer or sponsor"
        ],
        benefitsAr: [
            "الإصدار الجديد والتجديد في مكان واحد",
            "معالجة الإلغاء لمغادرة سلسة",
            "التنسيق مع صاحب العمل أو الكفيل"
        ],
        requiredDocuments: [
            "Entry permit or current residency visa",
            "Passport copy",
            "Medical fitness certificate",
            "Emirates ID application receipt"
        ],
        requiredDocumentsAr: [
            "تصريح الدخول أو تأشيرة الإقامة الحالية",
            "نسخة من جواز السفر",
            "شهادة اللياقة الطبية",
            "إيصال طلب الهوية الإماراتية"
        ],
        process: [
            "Entry permit or renewal application",
            "Medical fitness test",
            "Emirates ID biometrics",
            "Visa stamping in passport"
        ],
        processAr: [
            "تقديم طلب تصريح الدخول أو التجديد",
            "إجراء الفحص الطبي",
            "أخذ بصمة الهوية الإماراتية",
            "ختم التأشيرة في جواز السفر"
        ],
        timeline: "Typically 1–2 weeks.",
        timelineAr: "عادةً من أسبوع إلى أسبوعين.",
        governmentFees: [
            {
                item: "Residence visa stamping",
                amount: "AED 500–800",
                itemAr: "ختم تأشيرة الإقامة",
                amountAr: "500–800 د.إ"
            }
        ],
        faqs: [
            {
                question: "How early should I renew my residence visa?",
                answer: "We recommend starting the renewal process at least 30 days before expiry to avoid overstay fines.",
                questionAr: "متى يجب أن أبدأ بتجديد تأشيرة إقامتي؟",
                answerAr: "ننصح ببدء إجراءات التجديد قبل 30 يومًا على الأقل من انتهاء الصلاحية لتجنب غرامات التأخير."
            }
        ]
    },
    {
        slug: "golden-visa",
        title: "UAE Golden Visa",
        titleAr: "التأشيرة الذهبية الإماراتية",
        shortDescription: "Complete facilitation for 10-year residency for investors, entrepreneurs, specialized talents, and researchers.",
        shortDescriptionAr: "تسهيل كامل للحصول على إقامة لمدة 10 سنوات للمستثمرين ورواد الأعمال وأصحاب المواهب المتخصصة والباحثين.",
        icon: "star",
        accentIcon: "workspace_premium",
        image: "/images/services/golden-visa.jpg",
        overview: "The UAE Golden Visa grants long-term residency of 5 or 10 years to investors, entrepreneurs, exceptional talents, and their families — without needing a national sponsor. We manage your eligibility assessment, documentation, and government submission end to end.",
        overviewAr: "تمنح التأشيرة الذهبية الإماراتية إقامة طويلة الأمد لمدة 5 أو 10 سنوات للمستثمرين ورواد الأعمال وأصحاب المواهب الاستثنائية وعائلاتهم — دون الحاجة لكفيل وطني. نتولى تقييم أهليتك وإعداد مستنداتك وتقديم طلبك للجهات الحكومية بشكل كامل.",
        benefits: [
            "10-year renewable residency, no local sponsor required",
            "Sponsor your spouse, children, and parents",
            "100% business ownership on the mainland",
            "No minimum stay requirement to keep the visa valid"
        ],
        benefitsAr: [
            "إقامة قابلة للتجديد لمدة 10 سنوات دون الحاجة لكفيل محلي",
            "كفالة الزوج أو الزوجة والأبناء والوالدين",
            "تملك كامل بنسبة 100% للشركات البرية",
            "لا يوجد حد أدنى للإقامة للحفاظ على سريان التأشيرة"
        ],
        requiredDocuments: [
            "Valid passport (6+ months validity)",
            "Passport-size photograph (white background)",
            "Proof of eligibility (investment, property, or talent certificate)",
            "Current UAE residency visa (if applicable)",
            "Emirates ID copy (if applicable)"
        ],
        requiredDocumentsAr: [
            "جواز سفر ساري المفعول (لمدة 6 أشهر على الأقل)",
            "صورة شخصية بحجم جواز السفر (بخلفية بيضاء)",
            "إثبات الأهلية (استثمار، عقار، أو شهادة موهبة متخصصة)",
            "تأشيرة الإقامة الإماراتية الحالية (إن وجدت)",
            "نسخة من الهوية الإماراتية (إن وجدت)"
        ],
        process: [
            "Free eligibility assessment with our consultants",
            "Document collection and verification",
            "Application typing and government portal submission",
            "Medical fitness test and Emirates ID biometrics",
            "Visa stamping and delivery"
        ],
        processAr: [
            "تقييم مجاني للأهلية مع مستشارينا",
            "جمع المستندات والتحقق منها",
            "طباعة الطلب وتقديمه عبر البوابة الحكومية",
            "الفحص الطبي وأخذ بصمة الهوية الإماراتية",
            "ختم التأشيرة وتسليمها"
        ],
        timeline: "Typically 2–4 weeks from submission, subject to government processing.",
        timelineAr: "عادةً من أسبوعين إلى 4 أسابيع من تاريخ التقديم، وفق مدة المعالجة الحكومية.",
        governmentFees: [
            {
                item: "Golden Visa issuance",
                amount: "AED 2,800",
                itemAr: "إصدار التأشيرة الذهبية",
                amountAr: "2,800 د.إ"
            },
            {
                item: "Emirates ID (10-year)",
                amount: "AED 1,070",
                itemAr: "الهوية الإماراتية (10 سنوات)",
                amountAr: "1,070 د.إ"
            },
            {
                item: "Medical fitness test",
                amount: "AED 700",
                itemAr: "الفحص الطبي",
                amountAr: "700 د.إ"
            }
        ],
        faqs: [
            {
                question: "Who is eligible for the UAE Golden Visa?",
                answer: "Investors, entrepreneurs, specialized professionals, outstanding students, and humanitarian pioneers, among other categories defined by UAE federal law.",
                questionAr: "من يستحق الحصول على التأشيرة الذهبية الإماراتية؟",
                answerAr: "المستثمرون، ورواد الأعمال، والمهنيون المتخصصون، والطلاب المتفوقون، ورواد العمل الإنساني، إلى جانب فئات أخرى حددها القانون الاتحادي الإماراتي."
            },
            {
                question: "Can I sponsor my family on a Golden Visa?",
                answer: "Yes — Golden Visa holders can sponsor their spouse, children of any age, and parents.",
                questionAr: "هل يمكنني كفالة أسرتي بموجب التأشيرة الذهبية؟",
                answerAr: "نعم — يمكن لحاملي التأشيرة الذهبية كفالة الزوج أو الزوجة والأبناء بمختلف أعمارهم والوالدين."
            }
        ]
    }
];
function getServiceBySlug(slug) {
    return services.find((s)=>s.slug === slug);
}
function getRelatedServices(slug, count = 3) {
    return services.filter((s)=>s.slug !== slug).slice(0, count);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/locations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocationBySlug",
    ()=>getLocationBySlug,
    "locations",
    ()=>locations
]);
const locations = [
    {
        slug: "abu-dhabi",
        name: "Abu Dhabi",
        nameAr: "أبوظبي",
        blurb: "The UAE capital — government, corporate, and residency services.",
        blurbAr: "عاصمة الإمارات — خدمات حكومية وشركات وإقامة.",
        lat: 24.4539,
        lng: 54.3773,
        cities: [
            "Abu Dhabi City",
            "Al Ain",
            "Madinat Zayed",
            "Ruwais",
            "Ghayathi",
            "Liwa Oasis",
            "Al Mirfa",
            "Al Shahama",
            "Khalifa City",
            "Bani Yas"
        ],
        citiesAr: [
            "مدينة أبوظبي",
            "العين",
            "مدينة زايد",
            "الرويس",
            "غياثي",
            "واحة ليوا",
            "المرفأ",
            "الشامخة",
            "مدينة خليفة",
            "بني ياس"
        ],
        servicesAvailable: [
            "Golden Visa",
            "Emirates ID",
            "Company Formation",
            "PRO Services"
        ],
        whyChooseUs: [
            "Capital-wide coverage",
            "Corporate account management",
            "Same-day typing"
        ],
        whyChooseUsAr: [
            "تغطية شاملة للعاصمة",
            "إدارة حسابات الشركات",
            "طباعة في نفس اليوم"
        ]
    },
    {
        slug: "dubai",
        name: "Dubai",
        nameAr: "دبي",
        blurb: "Our home emirate — full coverage across every district.",
        blurbAr: "إمارتنا الأم — تغطية كاملة لجميع المناطق.",
        lat: 25.2048,
        lng: 55.2708,
        cities: [
            "Dubai City",
            "Jebel Ali",
            "Hatta",
            "Dubai Marina",
            "Business Bay",
            "Downtown Dubai",
            "Deira",
            "Bur Dubai",
            "Al Barsha",
            "Al Qusais"
        ],
        citiesAr: [
            "مدينة دبي",
            "جبل علي",
            "حتّا",
            "دبي مارينا",
            "الخليج التجاري",
            "وسط مدينة دبي",
            "ديرة",
            "بر دبي",
            "البرشاء",
            "القصيص"
        ],
        servicesAvailable: [
            "Golden Visa",
            "Emirates ID",
            "Family Visa",
            "Trade License",
            "Medical Typing"
        ],
        whyChooseUs: [
            "Multiple walk-in centers",
            "Fastest turnaround in the UAE",
            "Multilingual consultants"
        ],
        whyChooseUsAr: [
            "عدة مراكز لخدمة الحضور المباشر",
            "أسرع إنجاز في الإمارات",
            "مستشارون متعددو اللغات"
        ]
    },
    {
        slug: "sharjah",
        name: "Sharjah",
        nameAr: "الشارقة",
        blurb: "Trusted typing and documentation services across Sharjah.",
        blurbAr: "خدمات طباعة ومعاملات موثوقة في جميع أنحاء الشارقة.",
        lat: 25.3463,
        lng: 55.4209,
        cities: [
            "Sharjah City",
            "Khor Fakkan",
            "Kalba",
            "Dibba Al Hisn",
            "Al Dhaid",
            "Al Madam",
            "Hamriyah",
            "Mleiha",
            "Al Bataeh",
            "Nahwa"
        ],
        citiesAr: [
            "مدينة الشارقة",
            "خورفكان",
            "كلباء",
            "دبا الحصن",
            "الذيد",
            "المدام",
            "الحمرية",
            "مليحة",
            "البطائح",
            "نهوة"
        ],
        servicesAvailable: [
            "Trade License",
            "Emirates ID",
            "Legal Translation",
            "PRO Services"
        ],
        whyChooseUs: [
            "Trusted by local traders",
            "Fast-track licensing support"
        ],
        whyChooseUsAr: [
            "موثوقون لدى التجار المحليين",
            "دعم سريع لإصدار التراخيص"
        ]
    },
    {
        slug: "ajman",
        name: "Ajman",
        nameAr: "عجمان",
        blurb: "Efficient government service facilitation across Ajman.",
        blurbAr: "تسهيل فعّال للخدمات الحكومية في جميع أنحاء عجمان.",
        lat: 25.4052,
        lng: 55.5136,
        cities: [
            "Ajman City",
            "Masfout",
            "Al Manama",
            "Al Jurf",
            "Al Nuaimiya",
            "Al Rashidiya",
            "Al Mowaihat",
            "Al Rawda",
            "Al Helio",
            "Emirates City"
        ],
        citiesAr: [
            "مدينة عجمان",
            "مصفوت",
            "المنامة",
            "الجرف",
            "النعيمية",
            "الراشدية",
            "المويهات",
            "الروضة",
            "الحليو",
            "مدينة الإمارات"
        ],
        servicesAvailable: [
            "Emirates ID",
            "Family Visa",
            "Residence Visa",
            "Company Formation"
        ],
        whyChooseUs: [
            "Affordable service packages",
            "Quick community turnaround"
        ],
        whyChooseUsAr: [
            "باقات خدمات بأسعار مناسبة",
            "إنجاز سريع لخدمة السكان المحليين"
        ]
    },
    {
        slug: "umm-al-quwain",
        name: "Umm Al Quwain",
        nameAr: "أم القيوين",
        blurb: "Reliable typing and documentation support across UAQ.",
        blurbAr: "دعم موثوق لخدمات الطباعة والمعاملات في أم القيوين.",
        lat: 25.5647,
        lng: 55.5534,
        cities: [
            "Umm Al Quwain City",
            "Falaj Al Mualla",
            "Al Salamah",
            "Al Raas",
            "Al Humrah",
            "Al Dar Al Baida",
            "Al Abraq",
            "Al Labsa",
            "Al Maidan",
            "Al Khor"
        ],
        citiesAr: [
            "مدينة أم القيوين",
            "فلج المعلا",
            "السلامة",
            "الراس",
            "الحمراء",
            "الدار البيضاء",
            "الأبرق",
            "اللبسة",
            "الميدان",
            "الخور"
        ],
        servicesAvailable: [
            "Emirates ID",
            "Residence Visa",
            "Medical Typing"
        ],
        whyChooseUs: [
            "Neighborhood-friendly service",
            "Flexible appointment scheduling"
        ],
        whyChooseUsAr: [
            "خدمة قريبة من الأحياء السكنية",
            "جدولة مواعيد مرنة"
        ]
    },
    {
        slug: "ras-al-khaimah",
        name: "Ras Al Khaimah",
        nameAr: "رأس الخيمة",
        blurb: "Complete government documentation services across RAK.",
        blurbAr: "خدمات معاملات حكومية متكاملة في جميع أنحاء رأس الخيمة.",
        lat: 25.7895,
        lng: 55.9432,
        cities: [
            "Ras Al Khaimah City",
            "Al Hamra",
            "Al Jazirah Al Hamra",
            "Khatt",
            "Rams",
            "Digdaga",
            "Al Dhait",
            "Sha'am",
            "Ghalilah",
            "Julphar"
        ],
        citiesAr: [
            "مدينة رأس الخيمة",
            "الحمراء",
            "الجزيرة الحمراء",
            "خت",
            "الرمس",
            "دقداقة",
            "الضيت",
            "شعم",
            "غليلة",
            "جلفار"
        ],
        servicesAvailable: [
            "Company Formation",
            "Trade License",
            "Golden Visa",
            "PRO Services"
        ],
        whyChooseUs: [
            "Freezone specialists",
            "Growing business-hub coverage"
        ],
        whyChooseUsAr: [
            "متخصصون في المناطق الحرة",
            "تغطية متنامية لمركز الأعمال المتوسع"
        ]
    },
    {
        slug: "fujairah",
        name: "Fujairah",
        nameAr: "الفجيرة",
        blurb: "Dedicated typing center support across the East Coast.",
        blurbAr: "دعم متخصص من مركز الطباعة على طول الساحل الشرقي.",
        lat: 25.1288,
        lng: 56.3265,
        cities: [
            "Fujairah City",
            "Dibba Al Fujairah",
            "Masafi",
            "Al Bidyah",
            "Mirbah",
            "Qidfa",
            "Sakamkam",
            "Madhab",
            "Wadi Siji",
            "Al Aqah"
        ],
        citiesAr: [
            "مدينة الفجيرة",
            "دبا الفجيرة",
            "مسافي",
            "البدية",
            "مربح",
            "قدفع",
            "سكامكم",
            "مدحاء",
            "وادي سيجي",
            "العقة"
        ],
        servicesAvailable: [
            "Emirates ID",
            "Visit Visa",
            "Legal Translation"
        ],
        whyChooseUs: [
            "East Coast coverage",
            "Personalized consultant support"
        ],
        whyChooseUsAr: [
            "تغطية الساحل الشرقي",
            "دعم شخصي من المستشارين"
        ]
    }
];
function getLocationBySlug(slug) {
    return locations.find((l)=>l.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n-helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Picks the Arabic value when locale is "ar" and it exists, otherwise
 * falls back to the English value. Used throughout data-driven components
 * to render bilingual content stored as sibling `xAr` fields.
 */ __turbopack_context__.s([
    "pick",
    ()=>pick
]);
function pick(locale, en, ar) {
    if (locale === "ar" && ar !== undefined && ar !== null) return ar;
    return en;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/locations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n-helpers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("nav");
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileSection, setMobileSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const otherLocale = locale === "ar" ? "en" : "ar";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleKeyDown(e) {
                if (e.key === "Escape") {
                    setOpenMenu(null);
                    setMobileOpen(false);
                }
            }
            function handleClickOutside(e) {
                if (navRef.current && !navRef.current.contains(e.target)) {
                    setOpenMenu(null);
                }
            }
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const toggleMenu = (key)=>setOpenMenu((prev)=>prev === key ? null : key);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/20 shadow-[0px_10px_30px_rgba(15,77,58,0.05)] transition-all duration-300 bg-white/90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-margin-mobile md:px-margin-desktop h-14 md:h-20 w-full max-w-container-max mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/",
                        className: "flex items-center gap-2 md:gap-4 group cursor-pointer shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Typing Center Near Me logo",
                                width: 48,
                                height: 48,
                                className: "w-8 h-8 md:w-12 md:h-12 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-300",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].logo
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display-lg text-[13px] md:text-headline-md tracking-tight text-primary block",
                                        children: "TYPING CENTER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display-lg text-[7px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] text-primary -mt-1 block",
                                        children: "NEAR ME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        ref: navRef,
                        className: "hidden md:flex items-center gap-2 relative",
                        "aria-label": "Primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleMenu("services"),
                                onMouseEnter: ()=>setOpenMenu("services"),
                                "aria-haspopup": "true",
                                "aria-expanded": openMenu === "services",
                                className: "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                                children: [
                                    t("services"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[18px]",
                                        "aria-hidden": "true",
                                        children: "expand_more"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleMenu("locations"),
                                onMouseEnter: ()=>setOpenMenu("locations"),
                                "aria-haspopup": "true",
                                "aria-expanded": openMenu === "locations",
                                className: "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                                children: [
                                    t("locations"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[18px]",
                                        "aria-hidden": "true",
                                        children: "expand_more"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/blog",
                                onMouseEnter: ()=>setOpenMenu(null),
                                onFocus: ()=>setOpenMenu(null),
                                className: "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                                children: t("blog")
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/faqs",
                                onMouseEnter: ()=>setOpenMenu(null),
                                onFocus: ()=>setOpenMenu(null),
                                className: "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                                children: t("faqs")
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: pathname,
                                locale: otherLocale,
                                onMouseEnter: ()=>setOpenMenu(null),
                                className: "font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 border border-outline-variant",
                                "aria-label": otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[18px]",
                                        "aria-hidden": "true",
                                        children: "language"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    otherLocale === "ar" ? "ع" : "EN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "ms-2 flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-container transition-colors shadow-lg active:scale-95 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed",
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phone}`,
                                onMouseEnter: ()=>setOpenMenu(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[20px]",
                                        "aria-hidden": "true",
                                        children: "phone_in_talk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    t("callNow")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            openMenu === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "menu",
                                "aria-label": t("services"),
                                className: "absolute top-full start-0 mt-3 w-[640px] bg-white rounded-2xl shadow-2xl border border-surface-variant p-6 grid grid-cols-2 gap-2",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            href: `/services/${s.slug}`,
                                            role: "menuitem",
                                            onClick: ()=>setOpenMenu(null),
                                            className: "flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 focus-visible:bg-primary/5 outline-none transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-primary mt-0.5",
                                                    "aria-hidden": "true",
                                                    children: s.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block font-label-md text-sm font-semibold text-on-surface",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, s.title, s.titleAr)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs text-on-surface-variant line-clamp-1",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, s.shortDescription, s.shortDescriptionAr)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.slug, true, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/services",
                                        onClick: ()=>setOpenMenu(null),
                                        className: "col-span-2 text-center mt-2 pt-3 border-t border-surface-variant font-label-md text-sm text-primary hover:underline",
                                        children: t("viewAllServices")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            openMenu === "locations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "menu",
                                "aria-label": t("locations"),
                                className: "absolute top-full start-0 mt-3 w-[480px] bg-white rounded-2xl shadow-2xl border border-surface-variant p-6 grid grid-cols-2 gap-1 max-h-[420px] overflow-y-auto",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            href: `/locations/${l.slug}`,
                                            role: "menuitem",
                                            onClick: ()=>setOpenMenu(null),
                                            className: "flex items-center gap-2 p-2.5 rounded-lg hover:bg-primary/5 focus-visible:bg-primary/5 outline-none transition-colors font-body-md text-sm text-on-surface",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-primary text-[18px]",
                                                    "aria-hidden": "true",
                                                    children: "location_city"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, l.name, l.nameAr)
                                            ]
                                        }, l.slug, true, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/locations",
                                        onClick: ()=>setOpenMenu(null),
                                        className: "col-span-2 text-center mt-2 pt-3 border-t border-surface-variant font-label-md text-sm text-primary hover:underline",
                                        children: t("viewAllLocations")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: pathname,
                                locale: otherLocale,
                                className: "text-primary text-xs font-label-md px-2.5 py-1.5 rounded-full border border-outline-variant",
                                "aria-label": otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English",
                                children: otherLocale === "ar" ? "ع" : "EN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": mobileOpen ? t("closeMenu") : t("openMenu"),
                                "aria-expanded": mobileOpen,
                                onClick: ()=>setMobileOpen((v)=>!v),
                                className: "text-primary p-1.5 hover:bg-primary/5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-2xl",
                                    "aria-hidden": "true",
                                    children: mobileOpen ? "close" : "menu"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Mobile",
                className: "md:hidden bg-white border-t border-outline-variant px-margin-mobile py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMobileSection(mobileSection === "services" ? null : "services"),
                        "aria-expanded": mobileSection === "services",
                        className: "flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
                        children: [
                            t("services"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[18px]",
                                "aria-hidden": "true",
                                children: mobileSection === "services" ? "expand_less" : "expand_more"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    mobileSection === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ps-4 flex flex-col gap-1 mb-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: `/services/${s.slug}`,
                                onClick: ()=>setMobileOpen(false),
                                className: "font-body-md text-sm text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, s.title, s.titleAr)
                            }, s.slug, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 255,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 253,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMobileSection(mobileSection === "locations" ? null : "locations"),
                        "aria-expanded": mobileSection === "locations",
                        className: "flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
                        children: [
                            t("locations"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[18px]",
                                "aria-hidden": "true",
                                children: mobileSection === "locations" ? "expand_less" : "expand_more"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    mobileSection === "locations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ps-4 flex flex-col gap-1 mb-2 max-h-64 overflow-y-auto",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: `/locations/${l.slug}`,
                                onClick: ()=>setMobileOpen(false),
                                className: "font-body-md text-sm text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, l.name, l.nameAr)
                            }, l.slug, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 282,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/blog",
                        onClick: ()=>setMobileOpen(false),
                        className: "font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors",
                        children: t("blog")
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/faqs",
                        onClick: ()=>setMobileOpen(false),
                        className: "font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors",
                        children: t("faqs")
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/contact",
                        onClick: ()=>setMobileOpen(false),
                        className: "font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg transition-colors",
                        children: t("contact")
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "flex items-center justify-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-6 py-3 mt-2 rounded-full shadow-lg",
                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phone}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[20px]",
                                "aria-hidden": "true",
                                children: "phone_in_talk"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            t("callNow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Header, "1Dzb10ChcRTlG0wWehxI8Diiz5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/validations/enquiry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEnquiryFormSchema",
    ()=>createEnquiryFormSchema,
    "getServiceOptions",
    ()=>getServiceOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, isAr ? "يرجى إدخال اسمك الكامل" : "Please enter your full name"),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number").regex(/^[\d+\s-]+$/, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number").refine((val)=>val.replace(/\D/g, "").length <= 10, isAr ? "يجب ألا يتجاوز رقم الهاتف 10 أرقام" : "Phone number must be 10 digits or fewer"),
        service: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(SERVICE_VALUES, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:1000da [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitEnquiry",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"603bb14acf28750da1e788ddfde00c258107706600":{"name":"submitEnquiry"}},"src/app/actions/enquiry.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("603bb14acf28750da1e788ddfde00c258107706600", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitEnquiry");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/enquiry-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnquiryForm",
    ()=>EnquiryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$enquiry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations/enquiry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1000da__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1000da [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function EnquiryForm() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("enquiryForm");
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const serviceOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$enquiry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceOptions"])(locale);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$enquiry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnquiryFormSchema"])(locale))
    });
    const onSubmit = async (values)=>{
        setStatus("idle");
        setServerError(null);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1000da__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitEnquiry"])(values, locale);
        if (result.success) {
            setStatus("success");
            reset();
        } else {
            setStatus("error");
            setServerError(result.error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "enquiry",
        className: "lg:col-span-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-8 rounded-2xl relative overflow-hidden group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors"
                }, void 0, false, {
                    fileName: "[project]/src/components/enquiry-form.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-headline-lg text-headline-lg-mobile md:text-headline-md text-primary mb-2",
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/enquiry-form.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body-md text-body-md text-on-surface-variant mb-6",
                            children: t("subtitle")
                        }, void 0, false, {
                            fileName: "[project]/src/components/enquiry-form.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 8
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "rounded-xl bg-primary/5 border border-primary/20 p-6 text-center",
                                role: "status",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined icon-fill text-primary text-4xl mb-2",
                                        children: "check_circle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-label-md text-label-md text-primary mb-1",
                                        children: t("successTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body-md text-body-md text-on-surface-variant",
                                        children: t("successBody")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStatus("idle"),
                                        className: "mt-4 font-label-md text-label-md text-primary underline underline-offset-4",
                                        children: t("submitAnother")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "success", true, {
                                fileName: "[project]/src/components/enquiry-form.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                onSubmit: handleSubmit(onSubmit),
                                noValidate: true,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-label-md text-label-md text-primary mb-1 ms-1 font-bold",
                                                htmlFor: "name",
                                                children: t("fullName")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline",
                                                        children: "person"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ...register("name"),
                                                        id: "name",
                                                        type: "text",
                                                        placeholder: t("fullNamePlaceholder"),
                                                        "aria-invalid": !!errors.name,
                                                        className: "w-full h-[56px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-error text-xs mt-1 ms-1",
                                                children: errors.name.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-label-md text-label-md text-primary mb-1 ms-1 font-bold",
                                                htmlFor: "phone",
                                                children: t("phone")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline",
                                                        children: "phone_iphone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ...register("phone"),
                                                        id: "phone",
                                                        type: "tel",
                                                        placeholder: "0123456789",
                                                        maxLength: 10,
                                                        "aria-invalid": !!errors.phone,
                                                        className: "w-full h-[56px] ps-12 pe-4 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-error text-xs mt-1 ms-1",
                                                children: errors.phone.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-label-md text-label-md text-primary mb-1 ms-1 font-bold",
                                                htmlFor: "service",
                                                children: t("serviceRequired")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined absolute start-4 top-1/2 -translate-y-1/2 text-outline",
                                                        children: "assignment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        ...register("service"),
                                                        id: "service",
                                                        defaultValue: "",
                                                        "aria-invalid": !!errors.service,
                                                        className: "w-full h-[56px] ps-12 pe-10 bg-[#F1F3F5] border border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-xl font-body-md transition-all outline-none text-on-surface appearance-none cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                disabled: true,
                                                                value: "",
                                                                children: t("selectService")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 23
                                                            }, this),
                                                            serviceOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: opt.value,
                                                                    children: opt.label
                                                                }, opt.value, false, {
                                                                    fileName: "[project]/src/components/enquiry-form.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined absolute end-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none",
                                                        children: "expand_more"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            errors.service && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-error text-xs mt-1 ms-1",
                                                children: errors.service.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/enquiry-form.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this),
                                    status === "error" && serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm text-center",
                                        children: serverError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "w-full h-[56px] bg-primary text-white font-label-md text-label-md rounded-xl hover:bg-primary-container shadow-md hover:shadow-lg transition-all active:scale-[0.98] mt-2 disabled:opacity-60 disabled:cursor-not-allowed",
                                        children: isSubmitting ? t("submitting") : t("submit")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/enquiry-form.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "form", true, {
                                fileName: "[project]/src/components/enquiry-form.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/enquiry-form.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-center mt-4 text-outline font-body-md flex items-center justify-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[14px]",
                                    children: "lock"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/enquiry-form.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                t("secureNote")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/enquiry-form.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/enquiry-form.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/enquiry-form.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/enquiry-form.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(EnquiryForm, "tOBiBd1YZzJOtg+czwruBUsgcP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = EnquiryForm;
var _c;
__turbopack_context__.k.register(_c, "EnquiryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hero-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroBackground",
    ()=>HeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const heroImages = [
    {
        src: "/images/hero-bg-new.jpg",
        alt: "UAE skyline hero background"
    },
    {
        src: "/images/hero-abu-dhabi-skyline.jpg",
        alt: "Abu Dhabi skyline at dusk reflected over the water"
    },
    {
        src: "/images/hero-sharjah-skyline.jpg",
        alt: "Sharjah city skyscrapers along the waterfront"
    }
];
const ROTATE_INTERVAL_MS = 3000;
function HeroBackground() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBackground.useEffect": ()=>{
            const timer = setInterval({
                "HeroBackground.useEffect.timer": ()=>{
                    setActiveIndex({
                        "HeroBackground.useEffect.timer": (prev)=>(prev + 1) % heroImages.length
                    }["HeroBackground.useEffect.timer"]);
                }
            }["HeroBackground.useEffect.timer"], ROTATE_INTERVAL_MS);
            return ({
                "HeroBackground.useEffect": ()=>clearInterval(timer)
            })["HeroBackground.useEffect"];
        }
    }["HeroBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-0",
        "aria-hidden": "true",
        children: [
            heroImages.map((image, i)=>// eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: i === 0 ? `${image.src}?v=2` : image.src,
                    alt: image.alt,
                    className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${i === activeIndex ? "opacity-100" : "opacity-0"}`
                }, image.src, false, {
                    fileName: "[project]/src/components/hero-background.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-primary/70 mix-blend-multiply"
            }, void 0, false, {
                fileName: "[project]/src/components/hero-background.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/60 to-background"
            }, void 0, false, {
                fileName: "[project]/src/components/hero-background.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hero-background.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(HeroBackground, "16En7kR7TbAJMjBrm+xutVNIc5Q=");
_c = HeroBackground;
var _c;
__turbopack_context__.k.register(_c, "HeroBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/service-categories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serviceCategories",
    ()=>serviceCategories
]);
const serviceCategories = [
    {
        id: "individuals",
        label: "Individuals",
        labelAr: "الأفراد",
        items: [
            {
                title: "New Residence Visa",
                titleAr: "تأشيرة إقامة جديدة",
                description: "Employment, investor or remote-work residence visas typed and submitted to ICP across all Emirates.",
                descriptionAr: "طباعة وتقديم تأشيرات الإقامة الوظيفية أو الاستثمارية أو العمل عن بُعد لدى الهيئة الاتحادية للهوية والجنسية في جميع الإمارات.",
                icon: "assignment"
            },
            {
                title: "Visa Renewal",
                titleAr: "تجديد التأشيرة",
                description: "Renew an existing residence visa before it lapses — documents prepared, fees handled, status tracked.",
                descriptionAr: "تجديد تأشيرة الإقامة الحالية قبل انتهائها — إعداد المستندات وسداد الرسوم ومتابعة الحالة.",
                icon: "autorenew"
            },
            {
                title: "Visa Cancellation",
                titleAr: "إلغاء التأشيرة",
                description: "Cancel a residence or work visa correctly to avoid fines and clear the file for the next step.",
                descriptionAr: "إلغاء تأشيرة الإقامة أو العمل بالشكل الصحيح لتجنب الغرامات وتصفية الملف للخطوة التالية.",
                icon: "cancel"
            },
            {
                title: "Entry Permit / Visit Visa",
                titleAr: "تصريح الدخول / تأشيرة الزيارة",
                description: "Tourist, visit and entry permits for relatives, business guests or status change inside the country.",
                descriptionAr: "تصاريح دخول وتأشيرات سياحية وزيارة للأقارب وضيوف الأعمال أو تغيير الحالة داخل الدولة.",
                icon: "description"
            },
            {
                title: "Emirates ID — New / Renew / Replace",
                titleAr: "الهوية الإماراتية — إصدار / تجديد / استبدال",
                description: "First-time issuance, renewals and lost-card replacements with biometric appointment booking included.",
                descriptionAr: "إصدار أول مرة وتجديد واستبدال البطاقة المفقودة مع حجز موعد البصمة الحيوية.",
                icon: "id_card"
            },
            {
                title: "Medical Typing & Fitness Test",
                titleAr: "طباعة الفحص الطبي واللياقة",
                description: "Medical fitness application typing and appointment booking required for visa stamping.",
                descriptionAr: "طباعة طلب الفحص الطبي وحجز الموعد اللازم لختم التأشيرة.",
                icon: "medical_information"
            },
            {
                title: "Overstay Fine Clearance",
                titleAr: "تسوية غرامات التجاوز",
                description: "Calculate and settle overstay or visa-violation fines and regularise your status.",
                descriptionAr: "احتساب وتسوية غرامات التجاوز أو مخالفات التأشيرة وتصحيح الوضع.",
                icon: "warning"
            },
            {
                title: "Golden Visa",
                titleAr: "التأشيرة الذهبية",
                description: "Long-term 5 or 10-year UAE residency for investors, professionals, talents and their families — eligibility check and full processing.",
                descriptionAr: "إقامة طويلة الأمد لمدة 5 أو 10 سنوات للمستثمرين والمهنيين وأصحاب المواهب وعائلاتهم — فحص الأهلية والمعالجة الكاملة.",
                icon: "workspace_premium"
            },
            {
                title: "Visit Visa Extension",
                titleAr: "تمديد تأشيرة الزيارة",
                description: "Extend your tourist or visit visa without leaving the country — fast, compliant and fully tracked.",
                descriptionAr: "تمديد تأشيرة السياحة أو الزيارة دون مغادرة الدولة — بسرعة ودقة ومتابعة كاملة.",
                icon: "credit_card"
            }
        ]
    },
    {
        id: "families",
        label: "Families",
        labelAr: "العائلات",
        items: [
            {
                title: "Sponsor Your Spouse",
                titleAr: "كفالة الزوج / الزوجة",
                description: "Full spouse sponsorship — eligibility check, document preparation, salary attestation and submission.",
                descriptionAr: "كفالة كاملة للزوج أو الزوجة — فحص الأهلية وإعداد المستندات وتصديق الراتب والتقديم.",
                icon: "group"
            },
            {
                title: "Sponsor Your Children",
                titleAr: "كفالة الأبناء",
                description: "Add sons and daughters to your residence file with all supporting paperwork handled for you.",
                descriptionAr: "إضافة الأبناء والبنات إلى ملف إقامتك مع إنجاز كافة المستندات المساندة.",
                icon: "family_restroom"
            },
            {
                title: "Sponsor Your Parents",
                titleAr: "كفالة الوالدين",
                description: "Parent sponsorship including deposit, insurance and salary-threshold guidance end-to-end.",
                descriptionAr: "كفالة الوالدين شاملة الوديعة والتأمين وإرشادك بشأن الحد الأدنى للراتب من الألف إلى الياء.",
                icon: "elderly"
            },
            {
                title: "New-Born Visa & Registration",
                titleAr: "تأشيرة وتسجيل المولود الجديد",
                description: "Birth certificate attestation, passport and first residence visa for your new-born — one bundle.",
                descriptionAr: "تصديق شهادة الميلاد وجواز السفر وأول تأشيرة إقامة لمولودك الجديد — في باقة واحدة.",
                icon: "child_care"
            },
            {
                title: "Maid / Domestic Worker Visa",
                titleAr: "تأشيرة عاملة المنزل",
                description: "Sponsor a housemaid, nanny or driver with Tadbeer-compliant contracts and medical typing.",
                descriptionAr: "كفالة عاملة منزلية أو مربية أو سائق بعقود متوافقة مع تدبير وطباعة الفحص الطبي.",
                icon: "home"
            },
            {
                title: "Dependent Visa Renewal",
                titleAr: "تجديد تأشيرة المعالين",
                description: "Renew visas for any sponsored family member with reminders before every expiry.",
                descriptionAr: "تجديد تأشيرات أي فرد من أفراد الأسرة المكفولين مع تذكير قبل كل انتهاء صلاحية.",
                icon: "restart_alt"
            }
        ]
    },
    {
        id: "business-pro",
        label: "Business & PRO",
        labelAr: "الأعمال والخدمات الحكومية",
        items: [
            {
                title: "New Trade License (Mainland)",
                titleAr: "رخصة تجارية جديدة (برية)",
                description: "DED mainland licence issuance — name reservation, initial approval, MOA and final licence.",
                descriptionAr: "إصدار رخصة برية من دائرة التنمية الاقتصادية — حجز الاسم والموافقة المبدئية وعقد التأسيس والرخصة النهائية.",
                icon: "storefront"
            },
            {
                title: "Free Zone Company Setup",
                titleAr: "تأسيس شركة في المنطقة الحرة",
                description: "Company formation across UAE free zones with package selection and immigration card setup.",
                descriptionAr: "تأسيس الشركات في المناطق الحرة الإماراتية مع اختيار الباقة وإصدار بطاقة المنشأة.",
                icon: "public"
            },
            {
                title: "Trade License Renewal",
                titleAr: "تجديد الرخصة التجارية",
                description: "Renew your DED or free-zone licence on time, including Ejari and required approvals.",
                descriptionAr: "تجديد رخصتك البرية أو رخصة المنطقة الحرة في الوقت المحدد، شاملاً إيجاري والموافقات المطلوبة.",
                icon: "badge"
            },
            {
                title: "License Amendment",
                titleAr: "تعديل الرخصة",
                description: "Add activities, change trade name, update partners or capital and amend your licence.",
                descriptionAr: "إضافة أنشطة أو تغيير الاسم التجاري أو تحديث الشركاء أو رأس المال وتعديل رخصتك.",
                icon: "edit_document"
            },
            {
                title: "Establishment Card — New / Renew",
                titleAr: "بطاقة المنشأة — إصدار / تجديد",
                description: "Issue or renew the immigration establishment card your company needs to sponsor staff.",
                descriptionAr: "إصدار أو تجديد بطاقة المنشأة لدى الإقامة والتي تحتاجها شركتك لكفالة موظفيها.",
                icon: "credit_card"
            },
            {
                title: "MOHRE Labour Card / Work Permit",
                titleAr: "بطاقة العمل / تصريح العمل",
                description: "Work permits, labour contracts and quota approvals processed directly with MOHRE.",
                descriptionAr: "تصاريح العمل وعقود العمل وموافقات الحصص معالجة مباشرة مع وزارة الموارد البشرية والتوطين.",
                icon: "work"
            },
            {
                title: "WPS Salary Setup",
                titleAr: "إعداد نظام حماية الأجور",
                description: "Wage Protection System registration and monthly salary-file processing for compliance.",
                descriptionAr: "التسجيل في نظام حماية الأجور ومعالجة ملف الرواتب الشهري للامتثال.",
                icon: "payments"
            },
            {
                title: "Immigration / e-Channel Registration",
                titleAr: "التسجيل في الإقامة / القناة الإلكترونية",
                description: "Register your establishment on the e-Channel / smart-services portal to sponsor visas.",
                descriptionAr: "تسجيل منشأتك في القناة الإلكترونية / بوابة الخدمات الذكية لكفالة التأشيرات.",
                icon: "computer"
            },
            {
                title: "Corporate PRO Outsourcing",
                titleAr: "الاستعانة بمصادر خارجية للخدمات الحكومية",
                description: "Hand your entire PRO department to us — every employee transaction managed from one portal.",
                descriptionAr: "أوكل لنا إدارة الخدمات الحكومية بالكامل — كل معاملة موظف تُدار من بوابة واحدة.",
                icon: "how_to_reg"
            }
        ]
    },
    {
        id: "documents-attestation",
        label: "Documents & Attestation",
        labelAr: "المستندات والتصديقات",
        items: [
            {
                title: "Certificate Attestation (MOFA)",
                titleAr: "تصديق الشهادات (الخارجية)",
                description: "Degree, marriage and birth certificate attestation through MOFA and relevant authorities.",
                descriptionAr: "تصديق شهادات التخرج والزواج والميلاد عبر وزارة الخارجية والجهات ذات الصلة.",
                icon: "fact_check"
            },
            {
                title: "Embassy Attestation",
                titleAr: "تصديق السفارة",
                description: "Home-country embassy and consulate attestation arranged alongside UAE legalisation.",
                descriptionAr: "تنسيق تصديق سفارة وقنصلية بلدك الأم إلى جانب التصديق الإماراتي.",
                icon: "account_balance"
            },
            {
                title: "Legal Translation",
                titleAr: "الترجمة القانونية",
                description: "Certified Arabic legal translation of contracts, certificates and official documents.",
                descriptionAr: "ترجمة قانونية معتمدة إلى العربية للعقود والشهادات والمستندات الرسمية.",
                icon: "translate"
            },
            {
                title: "NOC / Salary / Bank Letters",
                titleAr: "خطابات عدم ممانعة / راتب / بنكية",
                description: "No-objection certificates, salary certificates and bank-addressed letters typed and stamped.",
                descriptionAr: "طباعة وختم شهادات عدم الممانعة وشهادات الراتب والخطابات الموجهة للبنوك.",
                icon: "sticky_note_2"
            },
            {
                title: "Power of Attorney",
                titleAr: "الوكالة القانونية",
                description: "Draft and process POAs for property, business or personal matters with notary booking.",
                descriptionAr: "صياغة ومعالجة الوكالات القانونية للعقارات أو الأعمال أو الشؤون الشخصية مع حجز موعد الكاتب العدل.",
                icon: "gavel"
            },
            {
                title: "Notary Public Services",
                titleAr: "خدمات الكاتب العدل",
                description: "Notarisation of agreements, declarations and memoranda at the relevant notary office.",
                descriptionAr: "توثيق الاتفاقيات والإقرارات والمذكرات لدى مكتب الكاتب العدل المختص.",
                icon: "approval"
            },
            {
                title: "Tasheel / Amer Typing",
                titleAr: "طباعة تسهيل / أمر",
                description: "Any Tasheel (MOHRE) or Amer (immigration) typing transaction completed on your behalf.",
                descriptionAr: "إنجاز أي معاملة طباعة عبر تسهيل (الموارد البشرية) أو أمر (الإقامة) نيابةً عنك.",
                icon: "description"
            },
            {
                title: "Police Clearance Certificate (PCC)",
                titleAr: "شهادة عدم ممانعة (حسن سيرة وسلوك)",
                description: "Good-conduct certificate for employment, immigration or visa use — applied for and collected on your behalf.",
                descriptionAr: "شهادة حسن سيرة وسلوك لاستخدامها في التوظيف أو الهجرة أو التأشيرة — تقديم الطلب واستلامها نيابةً عنك.",
                icon: "verified_user"
            }
        ]
    },
    {
        id: "emiratization",
        label: "Emiratization",
        labelAr: "التوطين",
        items: [
            {
                title: "Emirati Talent Sourcing",
                titleAr: "استقطاب الكفاءات الإماراتية",
                description: "We supply qualified UAE National candidates matched to your roles — screened, ready and Nafis-eligible.",
                descriptionAr: "نوفر مرشحين إماراتيين مؤهلين يناسبون أدوارك الوظيفية — مفحوصين وجاهزين ومستوفين لشروط نافس.",
                icon: "person_search"
            },
            {
                title: "Nafis Programme Support",
                titleAr: "دعم برنامج نافس",
                description: "Register, claim salary support and meet your Nafis commitments with full guidance and paperwork.",
                descriptionAr: "التسجيل والمطالبة بدعم الراتب واستيفاء التزامات نافس مع إرشاد كامل وإنجاز المستندات.",
                icon: "task_alt"
            },
            {
                title: "Emiratisation Target Compliance",
                titleAr: "الامتثال لنسب التوطين",
                description: "Stay above your MOHRE Emiratisation quota and avoid fines with planning and monthly tracking.",
                descriptionAr: "الحفاظ على نسبة التوطين المطلوبة من وزارة الموارد البشرية وتجنب الغرامات بالتخطيط والمتابعة الشهرية.",
                icon: "target"
            },
            {
                title: "UAE National Onboarding",
                titleAr: "تهيئة الموظف الإماراتي",
                description: "End-to-end onboarding of Emirati hires — contracts, GPSSA pension registration and WPS setup.",
                descriptionAr: "تهيئة كاملة للموظفين الإماراتيين — العقود وتسجيل التقاعد ونظام حماية الأجور.",
                icon: "how_to_reg"
            },
            {
                title: "GPSSA Pension Registration",
                titleAr: "تسجيل التقاعد (الهيئة العامة للمعاشات)",
                description: "Register your Emirati employees with GPSSA and manage contributions correctly from day one.",
                descriptionAr: "تسجيل موظفيك الإماراتيين لدى الهيئة العامة للمعاشات وإدارة الاشتراكات بشكل صحيح من اليوم الأول.",
                icon: "savings"
            },
            {
                title: "Talent Development & Retention",
                titleAr: "تطوير الكفاءات واستبقاؤها",
                description: "Structured development and retention support to keep your UAE National team growing and engaged.",
                descriptionAr: "دعم منظم للتطوير والاستبقاء لإبقاء فريقك الإماراتي في نمو وتفاعل مستمرين.",
                icon: "school"
            }
        ]
    },
    {
        id: "vehicles",
        label: "Vehicles",
        labelAr: "المركبات",
        items: [
            {
                title: "Vehicle Registration Renewal",
                titleAr: "تجديد تسجيل المركبة",
                description: "Renew your mulkiya including insurance and inspection coordination — no RTA queue.",
                descriptionAr: "تجديد الملكية شاملاً التأمين وتنسيق الفحص — دون الحاجة لطابور هيئة الطرق والمواصلات.",
                icon: "directions_car"
            },
            {
                title: "New Vehicle Registration",
                titleAr: "تسجيل مركبة جديدة",
                description: "Register a newly purchased vehicle with plates, insurance and ownership paperwork.",
                descriptionAr: "تسجيل مركبة مشتراة حديثًا شاملاً اللوحات والتأمين ومستندات الملكية.",
                icon: "directions_car_filled"
            },
            {
                title: "Ownership Transfer",
                titleAr: "نقل ملكية المركبة",
                description: "Buy/sell ownership transfer handled end-to-end with all clearances completed.",
                descriptionAr: "معالجة نقل الملكية عند البيع أو الشراء من الألف إلى الياء مع إنجاز جميع التخليصات.",
                icon: "sync_alt"
            },
            {
                title: "Traffic Fine Clearance",
                titleAr: "تسوية المخالفات المرورية",
                description: "Check, dispute where possible and settle traffic fines to keep your file clear.",
                descriptionAr: "التحقق من المخالفات المرورية والاعتراض عليها عند الإمكان وتسويتها للحفاظ على ملف نظيف.",
                icon: "receipt_long"
            },
            {
                title: "Vehicle Export Certificate",
                titleAr: "شهادة تصدير المركبة",
                description: "Export certificate and de-registration for vehicles leaving the UAE.",
                descriptionAr: "شهادة تصدير وإلغاء تسجيل للمركبات المغادرة دولة الإمارات.",
                icon: "local_shipping"
            },
            {
                title: "Driving Licence Translation",
                titleAr: "ترجمة رخصة القيادة",
                description: "Translate and process foreign licences for UAE conversion or eligibility.",
                descriptionAr: "ترجمة ومعالجة رخص القيادة الأجنبية لتحويلها إلى رخصة إماراتية أو إثبات الأهلية.",
                icon: "translate"
            },
            {
                title: "Driving License Services",
                titleAr: "خدمات رخصة القيادة",
                description: "File opening, renewal and replacement of UAE driving licences, including foreign-licence handling.",
                descriptionAr: "فتح ملف وتجديد واستبدال رخص القيادة الإماراتية، بما في ذلك معالجة الرخص الأجنبية.",
                icon: "credit_card"
            }
        ]
    },
    {
        id: "insurance-travel",
        label: "Insurance & Travel",
        labelAr: "التأمين والسفر",
        items: [
            {
                title: "Health Insurance",
                titleAr: "التأمين الصحي",
                description: "Mandatory medical insurance plans for individuals, families and companies at competitive rates.",
                descriptionAr: "خطط تأمين صحي إلزامية للأفراد والعائلات والشركات بأسعار تنافسية.",
                icon: "favorite"
            },
            {
                title: "Vehicle Insurance",
                titleAr: "تأمين المركبات",
                description: "Comprehensive and third-party motor insurance arranged quickly with trusted providers.",
                descriptionAr: "ترتيب تأمين شامل أو ضد الغير للمركبات بسرعة مع شركات موثوقة.",
                icon: "shield"
            },
            {
                title: "Travel Insurance",
                titleAr: "تأمين السفر",
                description: "Schengen and worldwide travel insurance for visa applications and trips abroad.",
                descriptionAr: "تأمين سفر لشنغن وحول العالم لطلبات التأشيرات والرحلات الخارجية.",
                icon: "umbrella"
            },
            {
                title: "Air Ticket Booking",
                titleAr: "حجز تذاكر الطيران",
                description: "Best-value flight bookings worldwide for travel, visa runs and family visits.",
                descriptionAr: "حجز تذاكر طيران بأفضل قيمة حول العالم للسفر ورحلات التأشيرة وزيارات العائلة.",
                icon: "flight"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/service-category-tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceCategoryTabs",
    ()=>ServiceCategoryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$service$2d$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/service-categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n-helpers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WhatsAppIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.476 2.027 7.774L0 32l8.476-2.004A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.795-1.867l-.487-.29-5.03 1.189 1.21-4.904-.318-.503A13.239 13.239 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.29-9.874c-.4-.2-2.364-1.166-2.73-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.689-.623-3.217-1.983-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.324-.78-.654-.674-.9-.687l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.033.955.412 1.7.658 2.281.843.958.305 1.831.262 2.52.159.769-.114 2.364-.967 2.698-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z"
        }, void 0, false, {
            fileName: "[project]/src/components/service-category-tabs.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/service-category-tabs.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function ServiceCategoryTabs({ locale, allLabel, allContent, startApplicationLabel }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const waNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].whatsapp.replace("+", "");
    const activeCategory = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$service$2d$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceCategories"].find((c)=>c.id === activeTab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-3 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveTab("all"),
                        className: `px-6 py-3 rounded-full font-label-md text-label-md transition-colors ${activeTab === "all" ? "bg-primary text-white" : "bg-white text-primary border border-surface-variant hover:border-primary/40"}`,
                        children: allLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/service-category-tabs.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$service$2d$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceCategories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab(category.id),
                            className: `px-6 py-3 rounded-full font-label-md text-label-md transition-colors ${activeTab === category.id ? "bg-primary text-white" : "bg-white text-primary border border-surface-variant hover:border-primary/40"}`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, category.label, category.labelAr)
                        }, category.id, false, {
                            fileName: "[project]/src/components/service-category-tabs.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/service-category-tabs.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            activeTab === "all" || !activeCategory ? allContent : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: activeCategory.items.map((item)=>{
                    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, item.title, item.titleAr);
                    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, item.description, item.descriptionAr);
                    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(locale === "ar" ? `مرحبًا، أرغب في بدء طلب خدمة ${title}` : `Hi, I'd like to start my application for ${title}`)}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col rounded-2xl bg-white border border-surface-variant p-6 hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-4 inline-flex h-12 w-12 items-center justify-center self-start rounded-xl bg-primary-container/10 text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-2xl",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/service-category-tabs.tsx",
                                    lineNumber: 87,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/service-category-tabs.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-headline-md text-headline-md text-primary mb-2",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/service-category-tabs.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body-md text-body-md text-on-surface-variant mb-6",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/service-category-tabs.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: waUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-auto w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-label-md text-label-md px-4 py-3 rounded-full shadow-sm hover:bg-primary-container transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                        className: "w-4 h-4 fill-white shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/service-category-tabs.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    startApplicationLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/service-category-tabs.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this)
                        ]
                    }, title, true, {
                        fileName: "[project]/src/components/service-category-tabs.tsx",
                        lineNumber: 82,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/service-category-tabs.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/service-category-tabs.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(ServiceCategoryTabs, "2ogsbf32tc7fD36GbqpGSg6n/vA=");
_c1 = ServiceCategoryTabs;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "ServiceCategoryTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stats-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSection",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useCountUp(target, active, duration = 3000) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!active) return;
            let frame;
            let start = null;
            const step = {
                "useCountUp.useEffect.step": (timestamp)=>{
                    if (start === null) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setValue(Math.round(eased * target));
                    if (progress < 1) {
                        frame = requestAnimationFrame(step);
                    }
                }
            }["useCountUp.useEffect.step"];
            frame = requestAnimationFrame(step);
            return ({
                "useCountUp.useEffect": ()=>cancelAnimationFrame(frame)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        active,
        target,
        duration
    ]);
    return value;
}
_s(useCountUp, "QEMGEmq5Rfwf2KLuWFF3dZYTA2c=");
function StatCard({ stat, active }) {
    _s1();
    const value = useCountUp(stat.target, active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-6 rounded-2xl text-center flex flex-col items-center justify-center transform transition-transform shadow-lg ${stat.raised ? "bg-primary md:translate-y-8 hover:translate-y-6" : "bg-white border border-surface-variant hover:-translate-y-2"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full ${stat.raised ? "bg-white/10 text-secondary-fixed" : "bg-primary/5 text-secondary"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined text-[22px]",
                    children: stat.icon
                }, void 0, false, {
                    fileName: "[project]/src/components/stats-section.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stats-section.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-display-lg text-[32px] md:text-[36px] leading-none mb-2 ${stat.raised ? "text-secondary-fixed" : "text-primary"}`,
                children: [
                    stat.prefix,
                    value,
                    stat.suffix
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stats-section.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-label-md text-label-md ${stat.raised ? "text-white/80" : "text-outline"}`,
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/components/stats-section.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `mt-3 h-[3px] w-6 rounded-full ${stat.raised ? "bg-secondary-fixed-dim" : "bg-secondary"}`
            }, void 0, false, {
                fileName: "[project]/src/components/stats-section.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stats-section.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s1(StatCard, "fQQB/+/+sys770S3LXYSurHUOn8=", false, function() {
    return [
        useCountUp
    ];
});
_c = StatCard;
function StatsSection() {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("stats");
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        once: true,
        margin: "-80px"
    });
    const stats = [
        {
            target: 10,
            suffix: "K+",
            label: t("labels.clients"),
            icon: "groups",
            raised: false
        },
        {
            target: 15,
            suffix: "",
            label: t("labels.experience"),
            icon: "workspace_premium",
            raised: true
        },
        {
            target: 24,
            suffix: "h",
            label: t("labels.turnaround"),
            icon: "schedule",
            raised: true
        },
        {
            target: 100,
            suffix: "%",
            label: t("labels.compliance"),
            icon: "verified_user",
            raised: false
        }
    ];
    const features = t.raw("features");
    const featureIcons = [
        "verified_user",
        "bolt"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-variant overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-container-max mx-auto grid lg:grid-cols-[42%_58%] gap-10 lg:gap-16 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-md text-label-md text-secondary tracking-widest uppercase",
                                    children: t("eyebrow")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display-lg text-[32px] md:text-[40px] text-primary",
                                    children: t("heading")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block h-1 w-16 rounded-full bg-secondary-fixed-dim"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-md text-body-md text-on-surface-variant max-w-md",
                                    children: t("description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stats-section.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 p-4 lg:p-0 rounded-2xl bg-primary/5 lg:bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[20px]",
                                                children: featureIcons[i]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stats-section.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stats-section.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-headline-md text-[18px] font-semibold text-primary mb-1",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stats-section.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body-md text-body-md text-on-surface-variant",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stats-section.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stats-section.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, feature.title, true, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/stats-section.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stats-section.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative lg:h-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[300px] sm:h-[380px] lg:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/about/burj-khalifa.png",
                                    alt: "Burj Khalifa, United Arab Emirates",
                                    fill: true,
                                    sizes: "100vw",
                                    className: "object-contain object-bottom",
                                    priority: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-b from-transparent to-surface-container-low"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stats-section.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: gridRef,
                            className: "relative grid grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-0 lg:max-w-xl lg:mx-auto",
                            children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    stat: stat,
                                    active: inView
                                }, stat.label, false, {
                                    fileName: "[project]/src/components/stats-section.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/stats-section.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stats-section.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stats-section.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stats-section.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s2(StatsSection, "vY6uXpqegsPxyehAY7Jr5IXsZXg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = StatsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reviews-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsCarousel",
    ()=>ReviewsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n-helpers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AUTO_ADVANCE_MS = 5000;
function Stars({ rating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex text-[#FBBC04]",
        children: Array.from({
            length: 5
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "material-symbols-outlined icon-fill text-xl",
                children: i < rating ? "star" : "star_outline"
            }, i, false, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/reviews-carousel.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Stars;
function ReviewCard({ review, locale, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-full flex flex-col rounded-3xl p-7 md:p-9 transition-all duration-500 ${active ? "bg-primary text-white shadow-2xl" : "bg-white border border-surface-variant text-on-surface-variant"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `material-symbols-outlined text-3xl mb-4 ${active ? "text-white/30" : "text-primary/20"}`,
                "aria-hidden": "true",
                children: "format_quote"
            }, void 0, false, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {
                rating: review.rating
            }, void 0, false, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `font-body-md text-body-md mt-6 mb-8 flex-1 ${active ? "text-white/90" : "text-on-surface-variant"}`,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, review.text, review.textAr)
            }, void 0, false, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-4 pt-6 border-t ${active ? "border-white/20" : "border-surface-variant"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-headline-md ${active ? "bg-white/10 text-white" : "bg-primary/10 text-primary"}`,
                        children: review.name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `font-headline-md text-base ${active ? "text-white" : "text-primary"}`,
                                children: review.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/reviews-carousel.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs font-label-md ${active ? "text-white/70" : "text-outline"}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(locale, review.serviceTag, review.serviceTagAr)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reviews-carousel.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reviews-carousel.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c1 = ReviewCard;
function ReviewsCarousel({ reviews, locale }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const total = reviews.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsCarousel.useEffect": ()=>{
            if (total <= 1) return;
            const timer = setTimeout({
                "ReviewsCarousel.useEffect.timer": ()=>{
                    setIndex({
                        "ReviewsCarousel.useEffect.timer": (prev)=>(prev + 1) % total
                    }["ReviewsCarousel.useEffect.timer"]);
                }
            }["ReviewsCarousel.useEffect.timer"], AUTO_ADVANCE_MS);
            return ({
                "ReviewsCarousel.useEffect": ()=>clearTimeout(timer)
            })["ReviewsCarousel.useEffect"];
        }
    }["ReviewsCarousel.useEffect"], [
        index,
        total
    ]);
    const goTo = (i)=>{
        setIndex((i % total + total) % total);
    };
    const prevIndex = (index - 1 + total) % total;
    const nextIndex = (index + 1) % total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:grid grid-cols-[1fr_1.4fr_1fr] gap-6 items-stretch max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scale-95 opacity-60 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
                            review: reviews[prevIndex],
                            locale: locale,
                            active: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/reviews-carousel.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
                            review: reviews[index],
                            locale: locale,
                            active: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/reviews-carousel.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scale-95 opacity-60 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
                            review: reviews[nextIndex],
                            locale: locale,
                            active: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/reviews-carousel.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden max-w-md mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
                    review: reviews[index],
                    locale: locale,
                    active: true
                }, void 0, false, {
                    fileName: "[project]/src/components/reviews-carousel.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>goTo(index - 1),
                        "aria-label": "Previous testimonial",
                        className: "w-11 h-11 shrink-0 rounded-full border border-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined rtl:rotate-180",
                            children: "arrow_back"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reviews-carousel.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: reviews.map((review, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>goTo(i),
                                "aria-label": `Go to testimonial ${i + 1}`,
                                className: `h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-surface-variant hover:bg-primary/40"}`
                            }, review.id, false, {
                                fileName: "[project]/src/components/reviews-carousel.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>goTo(index + 1),
                        "aria-label": "Next testimonial",
                        className: "w-11 h-11 shrink-0 rounded-full border border-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined rtl:rotate-180",
                            children: "arrow_forward"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reviews-carousel.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reviews-carousel.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reviews-carousel.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reviews-carousel.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(ReviewsCarousel, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c2 = ReviewsCarousel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Stars");
__turbopack_context__.k.register(_c1, "ReviewCard");
__turbopack_context__.k.register(_c2, "ReviewsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/validations/contact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContactFormSchema",
    ()=>createContactFormSchema,
    "createNewsletterSchema",
    ()=>createNewsletterSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
function createContactFormSchema(locale) {
    const isAr = locale === "ar";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, isAr ? "يرجى إدخال اسمك الكامل" : "Please enter your full name"),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address"),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(7, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number").regex(/^[\d+\s-]+$/, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, isAr ? "يرجى إدخال 10 أحرف على الأقل" : "Please enter at least 10 characters"),
        // Honeypot spam-protection field — must stay empty
        company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(0).optional()
    });
}
function createNewsletterSchema(locale) {
    const isAr = locale === "ar";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address")
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:9bc593 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscribeNewsletter",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"607a786ca16d69860386be779797d05ea01359ea8e":{"name":"subscribeNewsletter"}},"src/app/actions/contact.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("607a786ca16d69860386be779797d05ea01359ea8e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "subscribeNewsletter");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/newsletter-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterForm",
    ()=>NewsletterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations/contact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9bc593__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9bc593 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NewsletterForm() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("newsletter");
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNewsletterSchema"])(locale))
    });
    const onSubmit = async (values)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9bc593__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["subscribeNewsletter"])(values, locale);
        if (result.success) {
            setStatus("success");
            reset();
        } else {
            setStatus("error");
        }
    };
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body-md text-sm text-secondary-fixed flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined text-[18px]",
                    children: "check_circle"
                }, void 0, false, {
                    fileName: "[project]/src/components/newsletter-form.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                t("subscribed")
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/newsletter-form.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmit),
        noValidate: true,
        className: "flex gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register("email"),
                        type: "email",
                        placeholder: t("placeholder"),
                        "aria-invalid": !!errors.email,
                        "aria-label": t("placeholder"),
                        className: "w-full h-11 px-4 bg-white/10 border border-white/20 focus:border-secondary-fixed rounded-full font-body-md text-sm text-white placeholder:text-white/50 outline-none transition-all"
                    }, void 0, false, {
                        fileName: "[project]/src/components/newsletter-form.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-error text-xs mt-1",
                        children: errors.email.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/newsletter-form.tsx",
                        lineNumber: 52,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/newsletter-form.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isSubmitting,
                className: "shrink-0 h-11 px-5 bg-secondary-fixed text-primary font-label-md text-sm rounded-full hover:opacity-90 transition-opacity disabled:opacity-60",
                children: isSubmitting ? t("subscribing") : t("subscribe")
            }, void 0, false, {
                fileName: "[project]/src/components/newsletter-form.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/newsletter-form.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(NewsletterForm, "hBpTmdQeo8DCs+qlcc55yC3YsYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = NewsletterForm;
var _c;
__turbopack_context__.k.register(_c, "NewsletterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0_14qw_._.js.map