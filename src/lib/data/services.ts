import type { Faq } from "@/lib/data/faqs";

export interface ServiceFee {
  item: string;
  amount: string;
  itemAr?: string;
  amountAr?: string;
}

export interface Service {
  slug: string;
  title: string;
  titleAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  icon: string; // Material Symbols icon name
  accentIcon: string;
  image: string;
  featured?: boolean;
  overview: string;
  overviewAr?: string;
  benefits: string[];
  benefitsAr?: string[];
  requiredDocuments: string[];
  requiredDocumentsAr?: string[];
  process: string[];
  processAr?: string[];
  timeline: string;
  timelineAr?: string;
  governmentFees: ServiceFee[];
  faqs: Faq[];
}

export const services: Service[] = [
  {
    slug: "emirates-id",
    title: "Emirates ID",
    titleAr: "الهوية الإماراتية",
    shortDescription:
      "New issuance, renewal, and replacement services with fast-track processing.",
    shortDescriptionAr:
      "خدمات إصدار وتجديد واستبدال الهوية الإماراتية بمعالجة سريعة.",
    icon: "id_card",
    accentIcon: "badge",
    image: "/images/services/emirates-id.jpg",
    featured: true,
    overview:
      "Your Emirates ID is required for virtually every transaction in the UAE. We handle new issuance, renewals, and replacements with same-day typing and appointment booking.",
    overviewAr:
      "الهوية الإماراتية مطلوبة عمليًا في كل معاملة تجريها داخل الدولة. نتولى إصدارها الجديد وتجديدها واستبدالها مع طباعة الطلب وحجز الموعد في نفس اليوم.",
    benefits: [
      "Same-day application typing",
      "Appointment booking at your nearest ICP center",
      "Status tracking until card collection",
      "Support for lost or damaged card replacement",
    ],
    benefitsAr: [
      "طباعة الطلب في نفس اليوم",
      "حجز موعد في أقرب مركز تابع للهيئة الاتحادية للهوية والجنسية",
      "متابعة حالة الطلب حتى استلام البطاقة",
      "دعم في حال فقدان البطاقة أو تلفها",
    ],
    requiredDocuments: [
      "Original passport with valid residency visa",
      "Previous Emirates ID (for renewal or replacement)",
      "Passport-size photograph",
    ],
    requiredDocumentsAr: [
      "جواز السفر الأصلي مع تأشيرة إقامة سارية",
      "بطاقة الهوية السابقة (في حال التجديد أو الاستبدال)",
      "صورة شخصية بحجم جواز السفر",
    ],
    process: [
      "Submit your documents for verification",
      "Application typing and biometric appointment booking",
      "Biometric capture at the ICP center",
      "Card production and delivery to your address",
    ],
    processAr: [
      "تقديم مستنداتك للتحقق منها",
      "طباعة الطلب وحجز موعد أخذ البصمة",
      "أخذ البصمة الحيوية في المركز المعتمد",
      "إصدار البطاقة وتوصيلها إلى عنوانك",
    ],
    timeline: "Standard processing: 5–7 working days.",
    timelineAr: "المعالجة القياسية: 5–7 أيام عمل.",
    governmentFees: [
      { item: "Emirates ID (2-year)", amount: "AED 270", itemAr: "الهوية الإماراتية (سنتان)", amountAr: "270 د.إ" },
      { item: "Emirates ID (3-year)", amount: "AED 400", itemAr: "الهوية الإماراتية (3 سنوات)", amountAr: "400 د.إ" },
    ],
    faqs: [
      {
        question: "What if I lose my Emirates ID?",
        answer:
          "Report it immediately and we'll process a replacement application, which typically requires a police report reference number.",
        questionAr: "ماذا أفعل إذا فقدت بطاقة هويتي الإماراتية؟",
        answerAr:
          "أبلغ عن الفقدان فورًا، وسنتولى تقديم طلب استبدال، والذي يتطلب عادةً رقمًا مرجعيًا لبلاغ الشرطة.",
      },
    ],
  },
  {
    slug: "medical-typing",
    title: "Medical Typing",
    titleAr: "الفحص الطبي",
    shortDescription:
      "Application typing for mandatory DHA/MOHAP medical fitness examinations.",
    shortDescriptionAr:
      "طباعة طلبات الفحص الطبي الإلزامي لدى هيئة الصحة بدبي أو وزارة الصحة.",
    icon: "medical_services",
    accentIcon: "health_and_safety",
    image: "/images/services/medical-typing.jpg",
    overview:
      "Every residency visa application requires a mandatory medical fitness test. We handle your application typing and appointment booking with DHA or MOHAP-approved centers.",
    overviewAr:
      "يتطلب كل طلب تأشيرة إقامة إجراء فحص طبي إلزامي. نتولى طباعة طلبك وحجز موعدك في المراكز المعتمدة من هيئة الصحة بدبي أو وزارة الصحة.",
    benefits: [
      "Same-day appointment booking",
      "Application typing for both DHA and MOHAP",
      "Results tracking and status updates",
      "Support for retest scheduling if needed",
    ],
    benefitsAr: [
      "حجز موعد في نفس اليوم",
      "طباعة الطلبات لكل من هيئة الصحة بدبي ووزارة الصحة",
      "متابعة النتائج وتحديثات الحالة",
      "دعم في جدولة إعادة الفحص عند الحاجة",
    ],
    requiredDocuments: [
      "Passport copy with valid entry permit or residency visa",
      "Passport-size photograph",
    ],
    requiredDocumentsAr: [
      "نسخة من جواز السفر مع تصريح دخول أو تأشيرة إقامة سارية",
      "صورة شخصية بحجم جواز السفر",
    ],
    process: [
      "Application typing and center selection",
      "Appointment booking",
      "Blood test and chest X-ray at the medical center",
      "Result issuance (typically same day for standard tests)",
    ],
    processAr: [
      "طباعة الطلب واختيار المركز",
      "حجز الموعد",
      "إجراء تحليل الدم والأشعة على الصدر في المركز الطبي",
      "صدور النتيجة (عادةً في نفس اليوم للفحوصات الاعتيادية)",
    ],
    timeline: "Results usually available within 24 hours.",
    timelineAr: "تظهر النتائج عادةً خلال 24 ساعة.",
    governmentFees: [{ item: "Standard medical fitness test", amount: "AED 320–700", itemAr: "الفحص الطبي القياسي", amountAr: "320–700 د.إ" }],
    faqs: [
      {
        question: "What happens if I fail the medical test?",
        answer:
          "Certain communicable conditions can result in visa refusal; our consultants will explain next steps and appeal options where applicable.",
        questionAr: "ماذا يحدث إذا لم أجتز الفحص الطبي؟",
        answerAr:
          "قد تؤدي بعض الحالات المرضية المعدية إلى رفض طلب التأشيرة؛ وسيوضح لك مستشارونا الخطوات التالية وخيارات التظلم إن أمكن.",
      },
    ],
  },
  {
    slug: "trade-license",
    title: "Trade Licenses",
    titleAr: "الرخص التجارية",
    shortDescription:
      "Mainland and Freezone company setup, license renewals, and amendments.",
    shortDescriptionAr:
      "تأسيس الشركات البرية وشركات المناطق الحرة، وتجديد الرخص وتعديلها.",
    icon: "domain",
    accentIcon: "storefront",
    image: "/images/services/trade-license.jpg",
    overview:
      "From initial approval to final license issuance, we facilitate mainland and Freezone trade licenses, renewals, and activity amendments across all major UAE authorities.",
    overviewAr:
      "من الموافقة المبدئية وحتى إصدار الرخصة النهائية، نسهّل إجراءات الرخص التجارية البرية ورخص المناطق الحرة، بالإضافة إلى التجديد وتعديل الأنشطة لدى جميع الجهات الرئيسية في الإمارات.",
    benefits: [
      "Support across DED, Freezones, and DMCC",
      "Activity amendment and license renewal handling",
      "Document clearance with Ejari and tenancy registration",
      "Ongoing PRO support after issuance",
    ],
    benefitsAr: [
      "دعم لدى دائرة التنمية الاقتصادية والمناطق الحرة ومركز دبي للسلع المتعددة",
      "إدارة تعديل الأنشطة وتجديد الرخص",
      "إنجاز المستندات مع تسجيل إيجاري وعقد الإيجار",
      "دعم مستمر في الخدمات الحكومية بعد إصدار الرخصة",
    ],
    requiredDocuments: [
      "Passport copies of all shareholders",
      "Initial approval certificate",
      "Memorandum of Association (MOA)",
      "Tenancy contract / Ejari",
    ],
    requiredDocumentsAr: [
      "نسخ من جوازات سفر جميع الشركاء",
      "شهادة الموافقة المبدئية",
      "عقد التأسيس (MOA)",
      "عقد الإيجار / إيجاري",
    ],
    process: [
      "Business activity and jurisdiction consultation",
      "Initial approval application",
      "MOA drafting and notarization",
      "Tenancy registration",
      "Final license issuance",
    ],
    processAr: [
      "استشارة حول النشاط التجاري والولاية القانونية المناسبة",
      "تقديم طلب الموافقة المبدئية",
      "صياغة عقد التأسيس وتوثيقه",
      "تسجيل عقد الإيجار",
      "إصدار الرخصة النهائية",
    ],
    timeline: "5–10 working days depending on jurisdiction and activity.",
    timelineAr: "5–10 أيام عمل حسب الولاية القانونية والنشاط.",
    governmentFees: [
      { item: "Initial approval", amount: "AED 120", itemAr: "الموافقة المبدئية", amountAr: "120 د.إ" },
      { item: "Trade name reservation", amount: "AED 620", itemAr: "حجز الاسم التجاري", amountAr: "620 د.إ" },
      { item: "License issuance (from)", amount: "AED 8,000", itemAr: "إصدار الرخصة (ابتداءً من)", amountAr: "8,000 د.إ" },
    ],
    faqs: [
      {
        question: "Mainland or Freezone — which should I choose?",
        answer:
          "It depends on your target market and ownership goals. Mainland allows trading directly within the UAE market; Freezones offer 100% foreign ownership with certain trading restrictions. We'll walk you through both during your consultation.",
        questionAr: "الشركة البرية أم المنطقة الحرة — أيهما أختار؟",
        answerAr:
          "يعتمد ذلك على سوقك المستهدف وأهداف الملكية لديك. تتيح الشركة البرية التداول المباشر داخل السوق الإماراتي، بينما توفر المناطق الحرة تملكًا أجنبيًا كاملاً بنسبة 100% مع بعض القيود على التداول. سنوضح لك الفرق بالتفصيل خلال الاستشارة.",
      },
    ],
  },
  {
    slug: "pro-services",
    title: "PRO Services",
    titleAr: "الخدمات الحكومية (العلاقات العامة)",
    shortDescription:
      "Ongoing government liaison and document clearance for businesses of every size.",
    shortDescriptionAr:
      "خدمات تواصل حكومي مستمرة وإنجاز معاملات للشركات على اختلاف أحجامها.",
    icon: "support_agent",
    accentIcon: "corporate_fare",
    image: "/images/services/pro-services.jpg",
    overview:
      "Outsource your government liaison work to us. From labor card renewals to document clearance and visa quota amendments, our PRO team keeps your business compliant.",
    overviewAr:
      "فوّض أعمال التواصل الحكومي إلينا. من تجديد بطاقات العمل إلى إنجاز المستندات وتعديل حصص التأشيرات، يحرص فريق العلاقات الحكومية لدينا على التزام شركتك بالأنظمة.",
    benefits: [
      "Dedicated PRO liaison for your company",
      "Labor card and establishment card renewals",
      "Visa quota and MOHRE amendments",
      "Monthly compliance tracking",
    ],
    benefitsAr: [
      "مسؤول علاقات حكومية مخصص لشركتك",
      "تجديد بطاقة العمل وبطاقة المنشأة",
      "تعديل حصص التأشيرات ومعاملات وزارة الموارد البشرية والتوطين",
      "متابعة شهرية للامتثال",
    ],
    requiredDocuments: [
      "Trade license copy",
      "Establishment card",
      "Employee documents as required per transaction",
    ],
    requiredDocumentsAr: [
      "نسخة من الرخصة التجارية",
      "بطاقة المنشأة",
      "مستندات الموظفين حسب متطلبات كل معاملة",
    ],
    process: [
      "Compliance audit of your existing government records",
      "Ongoing transaction handling as needed",
      "Monthly status reporting",
    ],
    processAr: [
      "مراجعة شاملة لسجلاتك الحكومية الحالية",
      "إنجاز المعاملات بشكل مستمر عند الحاجة",
      "تقرير حالة شهري",
    ],
    timeline: "Ongoing retainer or per-transaction, depending on your plan.",
    timelineAr: "باشتراك مستمر أو حسب كل معاملة، وفق الباقة التي تختارها.",
    governmentFees: [{ item: "Varies per transaction", amount: "Quoted case by case", itemAr: "تختلف حسب المعاملة", amountAr: "يُحدَّد لكل حالة على حدة" }],
    faqs: [
      {
        question: "Do you offer a monthly PRO retainer?",
        answer:
          "Yes — we offer monthly retainer packages scaled to your company's transaction volume, in addition to one-off transactions.",
        questionAr: "هل تقدمون باقة اشتراك شهري للخدمات الحكومية؟",
        answerAr:
          "نعم — نوفر باقات اشتراك شهري تتناسب مع حجم معاملات شركتك، بالإضافة إلى إمكانية إنجاز المعاملات الفردية.",
      },
    ],
  },
  {
    slug: "company-formation",
    title: "Company Formation",
    titleAr: "تأسيس الشركات",
    shortDescription:
      "Mainland, Freezone, and offshore company incorporation with full documentation support.",
    shortDescriptionAr:
      "تأسيس الشركات البرية وشركات المناطق الحرة والشركات الخارجية مع دعم كامل للمستندات.",
    icon: "account_balance",
    accentIcon: "business_center",
    image: "/images/services/company-formation.jpg",
    overview:
      "We guide you through choosing the right jurisdiction and structure, then handle the full incorporation process — from name reservation to license issuance and bank account introduction.",
    overviewAr:
      "نرشدك لاختيار الولاية القانونية والهيكل المناسبين، ثم نتولى إجراءات التأسيس بالكامل — من حجز الاسم التجاري إلى إصدار الرخصة والتوصية لفتح الحساب البنكي.",
    benefits: [
      "Jurisdiction and structure consultation",
      "Full incorporation document handling",
      "Bank account opening introduction",
      "Post-incorporation PRO support",
    ],
    benefitsAr: [
      "استشارة حول الولاية القانونية والهيكل المناسب",
      "إنجاز جميع مستندات التأسيس",
      "التوصية لفتح حساب بنكي",
      "دعم حكومي مستمر بعد التأسيس",
    ],
    requiredDocuments: [
      "Passport copies of all shareholders",
      "Proposed trade name options",
      "Business activity details",
    ],
    requiredDocumentsAr: [
      "نسخ من جوازات سفر جميع الشركاء",
      "خيارات مقترحة للاسم التجاري",
      "تفاصيل النشاط التجاري",
    ],
    process: [
      "Jurisdiction and activity consultation",
      "Name reservation and initial approval",
      "MOA drafting",
      "License issuance",
      "Bank account introduction",
    ],
    processAr: [
      "استشارة حول الولاية القانونية والنشاط",
      "حجز الاسم والموافقة المبدئية",
      "صياغة عقد التأسيس",
      "إصدار الرخصة",
      "التوصية لفتح الحساب البنكي",
    ],
    timeline: "5–15 working days depending on jurisdiction.",
    timelineAr: "5–15 يوم عمل حسب الولاية القانونية.",
    governmentFees: [{ item: "Incorporation packages (from)", amount: "AED 9,000", itemAr: "باقات التأسيس (ابتداءً من)", amountAr: "9,000 د.إ" }],
    faqs: [
      {
        question: "Can I open a UAE company remotely?",
        answer:
          "Many Freezone jurisdictions allow remote incorporation; mainland setups typically require at least one in-person visit for biometrics.",
        questionAr: "هل يمكنني تأسيس شركة إماراتية عن بُعد؟",
        answerAr:
          "تسمح العديد من المناطق الحرة بالتأسيس عن بُعد؛ بينما تتطلب الشركات البرية عادةً زيارة حضورية واحدة على الأقل لأخذ البصمة.",
      },
    ],
  },
  {
    slug: "visit-visa",
    title: "Visit Visa",
    titleAr: "تأشيرة الزيارة",
    shortDescription:
      "Tourist and visit visa applications, extensions, and status change processing.",
    shortDescriptionAr:
      "طلبات تأشيرات السياحة والزيارة، وتمديدها، وتغيير الحالة.",
    icon: "flight_takeoff",
    accentIcon: "travel_explore",
    image: "/images/services/visit-visa.jpg",
    overview:
      "We process tourist and visit visa applications, extensions, and in-country status changes for travelers and sponsors alike.",
    overviewAr:
      "نتولى معالجة طلبات تأشيرات السياحة والزيارة، وتمديدها، وتغيير الحالة داخل الدولة للمسافرين والكفلاء على حد سواء.",
    benefits: [
      "Fast application typing and submission",
      "Extension processing before expiry",
      "Status change to residency where eligible",
    ],
    benefitsAr: [
      "طباعة الطلب وتقديمه بسرعة",
      "معالجة طلبات التمديد قبل الانتهاء",
      "تغيير الحالة إلى إقامة عند الاستحقاق",
    ],
    requiredDocuments: [
      "Passport copy (6+ months validity)",
      "Passport-size photograph",
      "Sponsor's documents (for family/friend sponsorship)",
    ],
    requiredDocumentsAr: [
      "نسخة من جواز السفر (صالح لمدة 6 أشهر على الأقل)",
      "صورة شخصية بحجم جواز السفر",
      "مستندات الكفيل (في حال الكفالة العائلية أو من صديق)",
    ],
    process: [
      "Application typing",
      "Submission to ICP",
      "Visa issuance and delivery",
    ],
    processAr: [
      "طباعة الطلب",
      "التقديم للهيئة الاتحادية للهوية والجنسية",
      "إصدار التأشيرة وتسليمها",
    ],
    timeline: "Typically 2–4 working days.",
    timelineAr: "عادةً من 2 إلى 4 أيام عمل.",
    governmentFees: [
      { item: "30-day visit visa", amount: "AED 350–650", itemAr: "تأشيرة زيارة لمدة 30 يومًا", amountAr: "350–650 د.إ" },
      { item: "Extension (30 days)", amount: "AED 650", itemAr: "التمديد (30 يومًا)", amountAr: "650 د.إ" },
    ],
    faqs: [
      {
        question: "Can a visit visa be extended?",
        answer:
          "Yes, most visit visas can be extended for an additional period before expiry — we handle the extension application for you.",
        questionAr: "هل يمكن تمديد تأشيرة الزيارة؟",
        answerAr:
          "نعم، يمكن تمديد معظم تأشيرات الزيارة لفترة إضافية قبل انتهائها — ونتولى تقديم طلب التمديد نيابةً عنك.",
      },
    ],
  },
  {
    slug: "legal-translation",
    title: "Legal Translation",
    titleAr: "الترجمة القانونية",
    shortDescription:
      "Ministry of Justice certified translation for all official documents.",
    shortDescriptionAr:
      "ترجمة معتمدة من وزارة العدل لجميع المستندات الرسمية.",
    icon: "history_edu",
    accentIcon: "gavel",
    image: "/images/services/legal-translation.jpg",
    overview:
      "We provide Ministry of Justice certified translation for contracts, certificates, court documents, and personal records — accepted by all UAE government entities.",
    overviewAr:
      "نقدّم ترجمة معتمدة من وزارة العدل للعقود والشهادات والمستندات القضائية والسجلات الشخصية — مقبولة لدى جميع الجهات الحكومية في الإمارات.",
    benefits: [
      "Certified translators licensed by the Ministry of Justice",
      "Same-day turnaround for standard documents",
      "Confidential handling of sensitive documents",
      "Attestation coordination available",
    ],
    benefitsAr: [
      "مترجمون معتمدون ومرخّصون من وزارة العدل",
      "إنجاز في نفس اليوم للمستندات الاعتيادية",
      "تعامل سري مع المستندات الحساسة",
      "إمكانية تنسيق التصديق على المستندات",
    ],
    requiredDocuments: [
      "Original document to be translated",
      "Passport copy (for personal documents)",
    ],
    requiredDocumentsAr: [
      "المستند الأصلي المراد ترجمته",
      "نسخة من جواز السفر (للمستندات الشخصية)",
    ],
    process: [
      "Document submission and scope confirmation",
      "Certified translation",
      "Quality review and certification stamping",
      "Collection or courier delivery",
    ],
    processAr: [
      "تقديم المستند وتحديد نطاق الترجمة",
      "الترجمة المعتمدة",
      "مراجعة الجودة وختم التصديق",
      "الاستلام من المركز أو التوصيل عبر مندوب",
    ],
    timeline: "Same day for most documents; 2–3 days for lengthy legal contracts.",
    timelineAr: "في نفس اليوم لمعظم المستندات؛ ومن 2 إلى 3 أيام للعقود القانونية الطويلة.",
    governmentFees: [{ item: "Per page (standard document)", amount: "AED 75–150", itemAr: "لكل صفحة (مستند قياسي)", amountAr: "75–150 د.إ" }],
    faqs: [
      {
        question: "Is your translation accepted by UAE courts?",
        answer:
          "Yes — our translations are certified by Ministry of Justice licensed legal translators and accepted by UAE courts and government entities.",
        questionAr: "هل تُقبل ترجمتكم لدى المحاكم الإماراتية؟",
        answerAr:
          "نعم — ترجماتنا معتمدة من مترجمين قانونيين مرخّصين من وزارة العدل، ومقبولة لدى المحاكم والجهات الحكومية في الإمارات.",
      },
    ],
  },
  {
    slug: "family-visa",
    title: "Family Visa",
    titleAr: "التأشيرة العائلية",
    shortDescription:
      "Sponsorship, typing, and processing for spouse, children, and parent residency visas.",
    shortDescriptionAr:
      "كفالة وطباعة ومعالجة تأشيرات إقامة الزوج أو الزوجة والأبناء والوالدين.",
    icon: "family_restroom",
    accentIcon: "diversity_3",
    image: "/images/services/family-visa.jpg",
    overview:
      "We manage the full family sponsorship process — from salary and tenancy eligibility checks through to visa stamping for your spouse, children, and parents.",
    overviewAr:
      "ندير عملية الكفالة العائلية بالكامل — من التحقق من أهلية الراتب وعقد الإيجار وحتى ختم التأشيرة لزوجك أو زوجتك وأبنائك ووالديك.",
    benefits: [
      "Eligibility check before you commit",
      "Typing and submission for all family members together",
      "Medical and Emirates ID appointment coordination",
      "Status tracking throughout",
    ],
    benefitsAr: [
      "التحقق من الأهلية قبل الالتزام",
      "طباعة وتقديم طلبات جميع أفراد الأسرة معًا",
      "تنسيق مواعيد الفحص الطبي والهوية الإماراتية",
      "متابعة حالة الطلب في كل مرحلة",
    ],
    requiredDocuments: [
      "Sponsor's passport and residency visa",
      "Sponsor's salary certificate or trade license",
      "Attested marriage/birth certificates",
      "Tenancy contract / Ejari",
    ],
    requiredDocumentsAr: [
      "جواز سفر الكفيل وتأشيرة إقامته",
      "شهادة راتب الكفيل أو رخصته التجارية",
      "شهادات الزواج/الميلاد المصدّقة",
      "عقد الإيجار / إيجاري",
    ],
    process: [
      "Eligibility assessment",
      "Entry permit application",
      "Status change and medical test",
      "Emirates ID biometrics",
      "Visa stamping",
    ],
    processAr: [
      "تقييم الأهلية",
      "تقديم طلب تصريح الدخول",
      "تغيير الحالة وإجراء الفحص الطبي",
      "أخذ بصمة الهوية الإماراتية",
      "ختم التأشيرة",
    ],
    timeline: "Typically 1–3 weeks per family member.",
    timelineAr: "عادةً من أسبوع إلى 3 أسابيع لكل فرد من أفراد الأسرة.",
    governmentFees: [
      { item: "Entry permit", amount: "AED 500–1,100", itemAr: "تصريح الدخول", amountAr: "500–1,100 د.إ" },
      { item: "Status change", amount: "AED 650", itemAr: "تغيير الحالة", amountAr: "650 د.إ" },
    ],
    faqs: [
      {
        question: "What is the minimum salary to sponsor family?",
        answer:
          "Generally AED 4,000 (or AED 3,000 with accommodation provided), though this can vary by emirate and case.",
        questionAr: "ما هو الحد الأدنى للراتب لكفالة أفراد الأسرة؟",
        answerAr:
          "بشكل عام 4,000 درهم (أو 3,000 درهم مع توفير السكن)، وقد يختلف ذلك حسب الإمارة والحالة.",
      },
    ],
  },
  {
    slug: "residence-visa",
    title: "Residence Visa",
    titleAr: "تأشيرة الإقامة",
    shortDescription:
      "New residence visa stamping, renewals, and cancellations handled end to end.",
    shortDescriptionAr:
      "ختم تأشيرة الإقامة الجديدة، والتجديد، والإلغاء — بشكل متكامل من الألف إلى الياء.",
    icon: "home_work",
    accentIcon: "apartment",
    image: "/images/services/residence-visa.jpg",
    overview:
      "Whether you need a new residence visa, a renewal, or a cancellation before leaving the country, we handle the full stamping process with the relevant authority.",
    overviewAr:
      "سواء كنت بحاجة إلى تأشيرة إقامة جديدة، أو تجديد، أو إلغاء قبل مغادرة الدولة، فإننا نتولى عملية الختم الكاملة لدى الجهة المختصة.",
    benefits: [
      "New issuance and renewal in one place",
      "Cancellation processing for smooth exit",
      "Coordination with your employer or sponsor",
    ],
    benefitsAr: [
      "الإصدار الجديد والتجديد في مكان واحد",
      "معالجة الإلغاء لمغادرة سلسة",
      "التنسيق مع صاحب العمل أو الكفيل",
    ],
    requiredDocuments: [
      "Entry permit or current residency visa",
      "Passport copy",
      "Medical fitness certificate",
      "Emirates ID application receipt",
    ],
    requiredDocumentsAr: [
      "تصريح الدخول أو تأشيرة الإقامة الحالية",
      "نسخة من جواز السفر",
      "شهادة اللياقة الطبية",
      "إيصال طلب الهوية الإماراتية",
    ],
    process: [
      "Entry permit or renewal application",
      "Medical fitness test",
      "Emirates ID biometrics",
      "Visa stamping in passport",
    ],
    processAr: [
      "تقديم طلب تصريح الدخول أو التجديد",
      "إجراء الفحص الطبي",
      "أخذ بصمة الهوية الإماراتية",
      "ختم التأشيرة في جواز السفر",
    ],
    timeline: "Typically 1–2 weeks.",
    timelineAr: "عادةً من أسبوع إلى أسبوعين.",
    governmentFees: [{ item: "Residence visa stamping", amount: "AED 500–800", itemAr: "ختم تأشيرة الإقامة", amountAr: "500–800 د.إ" }],
    faqs: [
      {
        question: "How early should I renew my residence visa?",
        answer:
          "We recommend starting the renewal process at least 30 days before expiry to avoid overstay fines.",
        questionAr: "متى يجب أن أبدأ بتجديد تأشيرة إقامتي؟",
        answerAr:
          "ننصح ببدء إجراءات التجديد قبل 30 يومًا على الأقل من انتهاء الصلاحية لتجنب غرامات التأخير.",
      },
    ],
  },
  {
    slug: "golden-visa",
    title: "UAE Golden Visa",
    titleAr: "التأشيرة الذهبية الإماراتية",
    shortDescription:
      "Complete facilitation for 10-year residency for investors, entrepreneurs, specialized talents, and researchers.",
    shortDescriptionAr:
      "تسهيل كامل للحصول على إقامة لمدة 10 سنوات للمستثمرين ورواد الأعمال وأصحاب المواهب المتخصصة والباحثين.",
    icon: "star",
    accentIcon: "workspace_premium",
    image: "/images/services/golden-visa.jpg",
    overview:
      "The UAE Golden Visa grants long-term residency of 5 or 10 years to investors, entrepreneurs, exceptional talents, and their families — without needing a national sponsor. We manage your eligibility assessment, documentation, and government submission end to end.",
    overviewAr:
      "تمنح التأشيرة الذهبية الإماراتية إقامة طويلة الأمد لمدة 5 أو 10 سنوات للمستثمرين ورواد الأعمال وأصحاب المواهب الاستثنائية وعائلاتهم — دون الحاجة لكفيل وطني. نتولى تقييم أهليتك وإعداد مستنداتك وتقديم طلبك للجهات الحكومية بشكل كامل.",
    benefits: [
      "10-year renewable residency, no local sponsor required",
      "Sponsor your spouse, children, and parents",
      "100% business ownership on the mainland",
      "No minimum stay requirement to keep the visa valid",
    ],
    benefitsAr: [
      "إقامة قابلة للتجديد لمدة 10 سنوات دون الحاجة لكفيل محلي",
      "كفالة الزوج أو الزوجة والأبناء والوالدين",
      "تملك كامل بنسبة 100% للشركات البرية",
      "لا يوجد حد أدنى للإقامة للحفاظ على سريان التأشيرة",
    ],
    requiredDocuments: [
      "Valid passport (6+ months validity)",
      "Passport-size photograph (white background)",
      "Proof of eligibility (investment, property, or talent certificate)",
      "Current UAE residency visa (if applicable)",
      "Emirates ID copy (if applicable)",
    ],
    requiredDocumentsAr: [
      "جواز سفر ساري المفعول (لمدة 6 أشهر على الأقل)",
      "صورة شخصية بحجم جواز السفر (بخلفية بيضاء)",
      "إثبات الأهلية (استثمار، عقار، أو شهادة موهبة متخصصة)",
      "تأشيرة الإقامة الإماراتية الحالية (إن وجدت)",
      "نسخة من الهوية الإماراتية (إن وجدت)",
    ],
    process: [
      "Free eligibility assessment with our consultants",
      "Document collection and verification",
      "Application typing and government portal submission",
      "Medical fitness test and Emirates ID biometrics",
      "Visa stamping and delivery",
    ],
    processAr: [
      "تقييم مجاني للأهلية مع مستشارينا",
      "جمع المستندات والتحقق منها",
      "طباعة الطلب وتقديمه عبر البوابة الحكومية",
      "الفحص الطبي وأخذ بصمة الهوية الإماراتية",
      "ختم التأشيرة وتسليمها",
    ],
    timeline: "Typically 2–4 weeks from submission, subject to government processing.",
    timelineAr: "عادةً من أسبوعين إلى 4 أسابيع من تاريخ التقديم، وفق مدة المعالجة الحكومية.",
    governmentFees: [
      { item: "Golden Visa issuance", amount: "AED 2,800", itemAr: "إصدار التأشيرة الذهبية", amountAr: "2,800 د.إ" },
      { item: "Emirates ID (10-year)", amount: "AED 1,070", itemAr: "الهوية الإماراتية (10 سنوات)", amountAr: "1,070 د.إ" },
      { item: "Medical fitness test", amount: "AED 700", itemAr: "الفحص الطبي", amountAr: "700 د.إ" },
    ],
    faqs: [
      {
        question: "Who is eligible for the UAE Golden Visa?",
        answer:
          "Investors, entrepreneurs, specialized professionals, outstanding students, and humanitarian pioneers, among other categories defined by UAE federal law.",
        questionAr: "من يستحق الحصول على التأشيرة الذهبية الإماراتية؟",
        answerAr:
          "المستثمرون، ورواد الأعمال، والمهنيون المتخصصون، والطلاب المتفوقون، ورواد العمل الإنساني، إلى جانب فئات أخرى حددها القانون الاتحادي الإماراتي.",
      },
      {
        question: "Can I sponsor my family on a Golden Visa?",
        answer:
          "Yes — Golden Visa holders can sponsor their spouse, children of any age, and parents.",
        questionAr: "هل يمكنني كفالة أسرتي بموجب التأشيرة الذهبية؟",
        answerAr:
          "نعم — يمكن لحاملي التأشيرة الذهبية كفالة الزوج أو الزوجة والأبناء بمختلف أعمارهم والوالدين.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3) {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
