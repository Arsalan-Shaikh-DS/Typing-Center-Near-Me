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

//# sourceMappingURL=src_1wbsg8u._.js.map