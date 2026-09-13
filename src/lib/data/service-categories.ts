export interface CategoryServiceItem {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string; // Material Symbols icon name
}

export interface ServiceCategory {
  id: string;
  label: string;
  labelAr: string;
  items: CategoryServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "individuals",
    label: "Individuals",
    labelAr: "الأفراد",
    items: [
      {
        title: "New Residence Visa",
        titleAr: "تأشيرة إقامة جديدة",
        description:
          "Employment, investor or remote-work residence visas typed and submitted to ICP across all Emirates.",
        descriptionAr:
          "طباعة وتقديم تأشيرات الإقامة الوظيفية أو الاستثمارية أو العمل عن بُعد لدى الهيئة الاتحادية للهوية والجنسية في جميع الإمارات.",
        icon: "assignment",
      },
      {
        title: "Visa Renewal",
        titleAr: "تجديد التأشيرة",
        description:
          "Renew an existing residence visa before it lapses — documents prepared, fees handled, status tracked.",
        descriptionAr:
          "تجديد تأشيرة الإقامة الحالية قبل انتهائها — إعداد المستندات وسداد الرسوم ومتابعة الحالة.",
        icon: "autorenew",
      },
      {
        title: "Visa Cancellation",
        titleAr: "إلغاء التأشيرة",
        description:
          "Cancel a residence or work visa correctly to avoid fines and clear the file for the next step.",
        descriptionAr:
          "إلغاء تأشيرة الإقامة أو العمل بالشكل الصحيح لتجنب الغرامات وتصفية الملف للخطوة التالية.",
        icon: "cancel",
      },
      {
        title: "Entry Permit / Visit Visa",
        titleAr: "تصريح الدخول / تأشيرة الزيارة",
        description:
          "Tourist, visit and entry permits for relatives, business guests or status change inside the country.",
        descriptionAr:
          "تصاريح دخول وتأشيرات سياحية وزيارة للأقارب وضيوف الأعمال أو تغيير الحالة داخل الدولة.",
        icon: "description",
      },
      {
        title: "Emirates ID — New / Renew / Replace",
        titleAr: "الهوية الإماراتية — إصدار / تجديد / استبدال",
        description:
          "First-time issuance, renewals and lost-card replacements with biometric appointment booking included.",
        descriptionAr:
          "إصدار أول مرة وتجديد واستبدال البطاقة المفقودة مع حجز موعد البصمة الحيوية.",
        icon: "id_card",
      },
      {
        title: "Medical Typing & Fitness Test",
        titleAr: "طباعة الفحص الطبي واللياقة",
        description:
          "Medical fitness application typing and appointment booking required for visa stamping.",
        descriptionAr:
          "طباعة طلب الفحص الطبي وحجز الموعد اللازم لختم التأشيرة.",
        icon: "medical_information",
      },
      {
        title: "Overstay Fine Clearance",
        titleAr: "تسوية غرامات التجاوز",
        description:
          "Calculate and settle overstay or visa-violation fines and regularise your status.",
        descriptionAr:
          "احتساب وتسوية غرامات التجاوز أو مخالفات التأشيرة وتصحيح الوضع.",
        icon: "warning",
      },
      {
        title: "Golden Visa",
        titleAr: "التأشيرة الذهبية",
        description:
          "Long-term 5 or 10-year UAE residency for investors, professionals, talents and their families — eligibility check and full processing.",
        descriptionAr:
          "إقامة طويلة الأمد لمدة 5 أو 10 سنوات للمستثمرين والمهنيين وأصحاب المواهب وعائلاتهم — فحص الأهلية والمعالجة الكاملة.",
        icon: "workspace_premium",
      },
      {
        title: "Visit Visa Extension",
        titleAr: "تمديد تأشيرة الزيارة",
        description:
          "Extend your tourist or visit visa without leaving the country — fast, compliant and fully tracked.",
        descriptionAr:
          "تمديد تأشيرة السياحة أو الزيارة دون مغادرة الدولة — بسرعة ودقة ومتابعة كاملة.",
        icon: "credit_card",
      },
    ],
  },
  {
    id: "families",
    label: "Families",
    labelAr: "العائلات",
    items: [
      {
        title: "Sponsor Your Spouse",
        titleAr: "كفالة الزوج / الزوجة",
        description:
          "Full spouse sponsorship — eligibility check, document preparation, salary attestation and submission.",
        descriptionAr:
          "كفالة كاملة للزوج أو الزوجة — فحص الأهلية وإعداد المستندات وتصديق الراتب والتقديم.",
        icon: "group",
      },
      {
        title: "Sponsor Your Children",
        titleAr: "كفالة الأبناء",
        description:
          "Add sons and daughters to your residence file with all supporting paperwork handled for you.",
        descriptionAr:
          "إضافة الأبناء والبنات إلى ملف إقامتك مع إنجاز كافة المستندات المساندة.",
        icon: "family_restroom",
      },
      {
        title: "Sponsor Your Parents",
        titleAr: "كفالة الوالدين",
        description:
          "Parent sponsorship including deposit, insurance and salary-threshold guidance end-to-end.",
        descriptionAr:
          "كفالة الوالدين شاملة الوديعة والتأمين وإرشادك بشأن الحد الأدنى للراتب من الألف إلى الياء.",
        icon: "elderly",
      },
      {
        title: "New-Born Visa & Registration",
        titleAr: "تأشيرة وتسجيل المولود الجديد",
        description:
          "Birth certificate attestation, passport and first residence visa for your new-born — one bundle.",
        descriptionAr:
          "تصديق شهادة الميلاد وجواز السفر وأول تأشيرة إقامة لمولودك الجديد — في باقة واحدة.",
        icon: "child_care",
      },
      {
        title: "Maid / Domestic Worker Visa",
        titleAr: "تأشيرة عاملة المنزل",
        description:
          "Sponsor a housemaid, nanny or driver with Tadbeer-compliant contracts and medical typing.",
        descriptionAr:
          "كفالة عاملة منزلية أو مربية أو سائق بعقود متوافقة مع تدبير وطباعة الفحص الطبي.",
        icon: "home",
      },
      {
        title: "Dependent Visa Renewal",
        titleAr: "تجديد تأشيرة المعالين",
        description:
          "Renew visas for any sponsored family member with reminders before every expiry.",
        descriptionAr:
          "تجديد تأشيرات أي فرد من أفراد الأسرة المكفولين مع تذكير قبل كل انتهاء صلاحية.",
        icon: "restart_alt",
      },
    ],
  },
  {
    id: "business-pro",
    label: "Business & PRO",
    labelAr: "الأعمال والخدمات الحكومية",
    items: [
      {
        title: "New Trade License (Mainland)",
        titleAr: "رخصة تجارية جديدة (برية)",
        description:
          "DED mainland licence issuance — name reservation, initial approval, MOA and final licence.",
        descriptionAr:
          "إصدار رخصة برية من دائرة التنمية الاقتصادية — حجز الاسم والموافقة المبدئية وعقد التأسيس والرخصة النهائية.",
        icon: "storefront",
      },
      {
        title: "Free Zone Company Setup",
        titleAr: "تأسيس شركة في المنطقة الحرة",
        description:
          "Company formation across UAE free zones with package selection and immigration card setup.",
        descriptionAr:
          "تأسيس الشركات في المناطق الحرة الإماراتية مع اختيار الباقة وإصدار بطاقة المنشأة.",
        icon: "public",
      },
      {
        title: "Trade License Renewal",
        titleAr: "تجديد الرخصة التجارية",
        description:
          "Renew your DED or free-zone licence on time, including Ejari and required approvals.",
        descriptionAr:
          "تجديد رخصتك البرية أو رخصة المنطقة الحرة في الوقت المحدد، شاملاً إيجاري والموافقات المطلوبة.",
        icon: "badge",
      },
      {
        title: "License Amendment",
        titleAr: "تعديل الرخصة",
        description:
          "Add activities, change trade name, update partners or capital and amend your licence.",
        descriptionAr:
          "إضافة أنشطة أو تغيير الاسم التجاري أو تحديث الشركاء أو رأس المال وتعديل رخصتك.",
        icon: "edit_document",
      },
      {
        title: "Establishment Card — New / Renew",
        titleAr: "بطاقة المنشأة — إصدار / تجديد",
        description:
          "Issue or renew the immigration establishment card your company needs to sponsor staff.",
        descriptionAr:
          "إصدار أو تجديد بطاقة المنشأة لدى الإقامة والتي تحتاجها شركتك لكفالة موظفيها.",
        icon: "credit_card",
      },
      {
        title: "MOHRE Labour Card / Work Permit",
        titleAr: "بطاقة العمل / تصريح العمل",
        description:
          "Work permits, labour contracts and quota approvals processed directly with MOHRE.",
        descriptionAr:
          "تصاريح العمل وعقود العمل وموافقات الحصص معالجة مباشرة مع وزارة الموارد البشرية والتوطين.",
        icon: "work",
      },
      {
        title: "WPS Salary Setup",
        titleAr: "إعداد نظام حماية الأجور",
        description:
          "Wage Protection System registration and monthly salary-file processing for compliance.",
        descriptionAr:
          "التسجيل في نظام حماية الأجور ومعالجة ملف الرواتب الشهري للامتثال.",
        icon: "payments",
      },
      {
        title: "Immigration / e-Channel Registration",
        titleAr: "التسجيل في الإقامة / القناة الإلكترونية",
        description:
          "Register your establishment on the e-Channel / smart-services portal to sponsor visas.",
        descriptionAr:
          "تسجيل منشأتك في القناة الإلكترونية / بوابة الخدمات الذكية لكفالة التأشيرات.",
        icon: "computer",
      },
      {
        title: "Corporate PRO Outsourcing",
        titleAr: "الاستعانة بمصادر خارجية للخدمات الحكومية",
        description:
          "Hand your entire PRO department to us — every employee transaction managed from one portal.",
        descriptionAr:
          "أوكل لنا إدارة الخدمات الحكومية بالكامل — كل معاملة موظف تُدار من بوابة واحدة.",
        icon: "how_to_reg",
      },
    ],
  },
  {
    id: "documents-attestation",
    label: "Documents & Attestation",
    labelAr: "المستندات والتصديقات",
    items: [
      {
        title: "Certificate Attestation (MOFA)",
        titleAr: "تصديق الشهادات (الخارجية)",
        description:
          "Degree, marriage and birth certificate attestation through MOFA and relevant authorities.",
        descriptionAr:
          "تصديق شهادات التخرج والزواج والميلاد عبر وزارة الخارجية والجهات ذات الصلة.",
        icon: "fact_check",
      },
      {
        title: "Embassy Attestation",
        titleAr: "تصديق السفارة",
        description:
          "Home-country embassy and consulate attestation arranged alongside UAE legalisation.",
        descriptionAr:
          "تنسيق تصديق سفارة وقنصلية بلدك الأم إلى جانب التصديق الإماراتي.",
        icon: "account_balance",
      },
      {
        title: "Legal Translation",
        titleAr: "الترجمة القانونية",
        description:
          "Certified Arabic legal translation of contracts, certificates and official documents.",
        descriptionAr:
          "ترجمة قانونية معتمدة إلى العربية للعقود والشهادات والمستندات الرسمية.",
        icon: "translate",
      },
      {
        title: "NOC / Salary / Bank Letters",
        titleAr: "خطابات عدم ممانعة / راتب / بنكية",
        description:
          "No-objection certificates, salary certificates and bank-addressed letters typed and stamped.",
        descriptionAr:
          "طباعة وختم شهادات عدم الممانعة وشهادات الراتب والخطابات الموجهة للبنوك.",
        icon: "sticky_note_2",
      },
      {
        title: "Power of Attorney",
        titleAr: "الوكالة القانونية",
        description:
          "Draft and process POAs for property, business or personal matters with notary booking.",
        descriptionAr:
          "صياغة ومعالجة الوكالات القانونية للعقارات أو الأعمال أو الشؤون الشخصية مع حجز موعد الكاتب العدل.",
        icon: "gavel",
      },
      {
        title: "Notary Public Services",
        titleAr: "خدمات الكاتب العدل",
        description:
          "Notarisation of agreements, declarations and memoranda at the relevant notary office.",
        descriptionAr:
          "توثيق الاتفاقيات والإقرارات والمذكرات لدى مكتب الكاتب العدل المختص.",
        icon: "approval",
      },
      {
        title: "Tasheel / Amer Typing",
        titleAr: "طباعة تسهيل / أمر",
        description:
          "Any Tasheel (MOHRE) or Amer (immigration) typing transaction completed on your behalf.",
        descriptionAr:
          "إنجاز أي معاملة طباعة عبر تسهيل (الموارد البشرية) أو أمر (الإقامة) نيابةً عنك.",
        icon: "description",
      },
      {
        title: "Police Clearance Certificate (PCC)",
        titleAr: "شهادة عدم ممانعة (حسن سيرة وسلوك)",
        description:
          "Good-conduct certificate for employment, immigration or visa use — applied for and collected on your behalf.",
        descriptionAr:
          "شهادة حسن سيرة وسلوك لاستخدامها في التوظيف أو الهجرة أو التأشيرة — تقديم الطلب واستلامها نيابةً عنك.",
        icon: "verified_user",
      },
    ],
  },
  {
    id: "emiratization",
    label: "Emiratization",
    labelAr: "التوطين",
    items: [
      {
        title: "Emirati Talent Sourcing",
        titleAr: "استقطاب الكفاءات الإماراتية",
        description:
          "We supply qualified UAE National candidates matched to your roles — screened, ready and Nafis-eligible.",
        descriptionAr:
          "نوفر مرشحين إماراتيين مؤهلين يناسبون أدوارك الوظيفية — مفحوصين وجاهزين ومستوفين لشروط نافس.",
        icon: "person_search",
      },
      {
        title: "Nafis Programme Support",
        titleAr: "دعم برنامج نافس",
        description:
          "Register, claim salary support and meet your Nafis commitments with full guidance and paperwork.",
        descriptionAr:
          "التسجيل والمطالبة بدعم الراتب واستيفاء التزامات نافس مع إرشاد كامل وإنجاز المستندات.",
        icon: "task_alt",
      },
      {
        title: "Emiratisation Target Compliance",
        titleAr: "الامتثال لنسب التوطين",
        description:
          "Stay above your MOHRE Emiratisation quota and avoid fines with planning and monthly tracking.",
        descriptionAr:
          "الحفاظ على نسبة التوطين المطلوبة من وزارة الموارد البشرية وتجنب الغرامات بالتخطيط والمتابعة الشهرية.",
        icon: "target",
      },
      {
        title: "UAE National Onboarding",
        titleAr: "تهيئة الموظف الإماراتي",
        description:
          "End-to-end onboarding of Emirati hires — contracts, GPSSA pension registration and WPS setup.",
        descriptionAr:
          "تهيئة كاملة للموظفين الإماراتيين — العقود وتسجيل التقاعد ونظام حماية الأجور.",
        icon: "how_to_reg",
      },
      {
        title: "GPSSA Pension Registration",
        titleAr: "تسجيل التقاعد (الهيئة العامة للمعاشات)",
        description:
          "Register your Emirati employees with GPSSA and manage contributions correctly from day one.",
        descriptionAr:
          "تسجيل موظفيك الإماراتيين لدى الهيئة العامة للمعاشات وإدارة الاشتراكات بشكل صحيح من اليوم الأول.",
        icon: "savings",
      },
      {
        title: "Talent Development & Retention",
        titleAr: "تطوير الكفاءات واستبقاؤها",
        description:
          "Structured development and retention support to keep your UAE National team growing and engaged.",
        descriptionAr:
          "دعم منظم للتطوير والاستبقاء لإبقاء فريقك الإماراتي في نمو وتفاعل مستمرين.",
        icon: "school",
      },
    ],
  },
  {
    id: "vehicles",
    label: "Vehicles",
    labelAr: "المركبات",
    items: [
      {
        title: "Vehicle Registration Renewal",
        titleAr: "تجديد تسجيل المركبة",
        description:
          "Renew your mulkiya including insurance and inspection coordination — no RTA queue.",
        descriptionAr:
          "تجديد الملكية شاملاً التأمين وتنسيق الفحص — دون الحاجة لطابور هيئة الطرق والمواصلات.",
        icon: "directions_car",
      },
      {
        title: "New Vehicle Registration",
        titleAr: "تسجيل مركبة جديدة",
        description:
          "Register a newly purchased vehicle with plates, insurance and ownership paperwork.",
        descriptionAr:
          "تسجيل مركبة مشتراة حديثًا شاملاً اللوحات والتأمين ومستندات الملكية.",
        icon: "directions_car_filled",
      },
      {
        title: "Ownership Transfer",
        titleAr: "نقل ملكية المركبة",
        description:
          "Buy/sell ownership transfer handled end-to-end with all clearances completed.",
        descriptionAr:
          "معالجة نقل الملكية عند البيع أو الشراء من الألف إلى الياء مع إنجاز جميع التخليصات.",
        icon: "sync_alt",
      },
      {
        title: "Traffic Fine Clearance",
        titleAr: "تسوية المخالفات المرورية",
        description:
          "Check, dispute where possible and settle traffic fines to keep your file clear.",
        descriptionAr:
          "التحقق من المخالفات المرورية والاعتراض عليها عند الإمكان وتسويتها للحفاظ على ملف نظيف.",
        icon: "receipt_long",
      },
      {
        title: "Vehicle Export Certificate",
        titleAr: "شهادة تصدير المركبة",
        description:
          "Export certificate and de-registration for vehicles leaving the UAE.",
        descriptionAr:
          "شهادة تصدير وإلغاء تسجيل للمركبات المغادرة دولة الإمارات.",
        icon: "local_shipping",
      },
      {
        title: "Driving Licence Translation",
        titleAr: "ترجمة رخصة القيادة",
        description:
          "Translate and process foreign licences for UAE conversion or eligibility.",
        descriptionAr:
          "ترجمة ومعالجة رخص القيادة الأجنبية لتحويلها إلى رخصة إماراتية أو إثبات الأهلية.",
        icon: "translate",
      },
      {
        title: "Driving License Services",
        titleAr: "خدمات رخصة القيادة",
        description:
          "File opening, renewal and replacement of UAE driving licences, including foreign-licence handling.",
        descriptionAr:
          "فتح ملف وتجديد واستبدال رخص القيادة الإماراتية، بما في ذلك معالجة الرخص الأجنبية.",
        icon: "credit_card",
      },
    ],
  },
  {
    id: "insurance-travel",
    label: "Insurance & Travel",
    labelAr: "التأمين والسفر",
    items: [
      {
        title: "Health Insurance",
        titleAr: "التأمين الصحي",
        description:
          "Mandatory medical insurance plans for individuals, families and companies at competitive rates.",
        descriptionAr:
          "خطط تأمين صحي إلزامية للأفراد والعائلات والشركات بأسعار تنافسية.",
        icon: "favorite",
      },
      {
        title: "Vehicle Insurance",
        titleAr: "تأمين المركبات",
        description:
          "Comprehensive and third-party motor insurance arranged quickly with trusted providers.",
        descriptionAr:
          "ترتيب تأمين شامل أو ضد الغير للمركبات بسرعة مع شركات موثوقة.",
        icon: "shield",
      },
      {
        title: "Travel Insurance",
        titleAr: "تأمين السفر",
        description:
          "Schengen and worldwide travel insurance for visa applications and trips abroad.",
        descriptionAr:
          "تأمين سفر لشنغن وحول العالم لطلبات التأشيرات والرحلات الخارجية.",
        icon: "umbrella",
      },
      {
        title: "Air Ticket Booking",
        titleAr: "حجز تذاكر الطيران",
        description:
          "Best-value flight bookings worldwide for travel, visa runs and family visits.",
        descriptionAr:
          "حجز تذاكر طيران بأفضل قيمة حول العالم للسفر ورحلات التأشيرة وزيارات العائلة.",
        icon: "flight",
      },
    ],
  },
];
