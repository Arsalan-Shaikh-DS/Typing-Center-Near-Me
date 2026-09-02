export interface BlogSection {
  heading: string;
  paragraphs: string[];
  headingAr?: string;
  paragraphsAr?: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
  questionAr?: string;
  answerAr?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  titleAr?: string;
  excerpt: string;
  excerptAr?: string;
  image: string;
  category: string;
  categoryAr?: string;
  date: string;
  readingTime: string;
  readingTimeAr?: string;
  author: string;
  authorAr?: string;
  sections: BlogSection[];
  faqs?: BlogFaq[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-apply-emirates-id",
    title: "How to Apply for an Emirates ID: Step-by-Step Guide",
    titleAr: "كيفية التقديم على الهوية الإماراتية: دليل خطوة بخطوة",
    excerpt:
      "Everything you need to know about applying for a new Emirates ID, from required documents to biometric appointments.",
    excerptAr:
      "كل ما تحتاج معرفته عن التقديم للحصول على هوية إماراتية جديدة، بدءًا من المستندات المطلوبة وحتى مواعيد البصمة الحيوية.",
    image: "/images/blog/emirates-id.svg",
    category: "Emirates ID",
    categoryAr: "الهوية الإماراتية",
    date: "2026-05-12",
    readingTime: "6 min read",
    readingTimeAr: "6 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "Why the Emirates ID Matters",
        headingAr: "لماذا تُعد الهوية الإماراتية مهمة",
        paragraphs: [
          "The Emirates ID is the primary form of identification for every resident in the UAE. It's required to open a bank account, sign a tenancy contract, register a SIM card, and complete almost every government transaction.",
        ],
        paragraphsAr: [
          "تُعد الهوية الإماراتية وثيقة إثبات الهوية الأساسية لكل مقيم في دولة الإمارات. فهي مطلوبة لفتح حساب بنكي، وتوقيع عقد إيجار، وتسجيل شريحة اتصال، بل وإتمام معظم المعاملات الحكومية.",
        ],
      },
      {
        heading: "Documents You'll Need",
        headingAr: "المستندات التي تحتاجها",
        paragraphs: [
          "You'll need your original passport with a valid residency visa, a passport-size photograph, and — if you're renewing — your previous Emirates ID card.",
        ],
        paragraphsAr: [
          "ستحتاج إلى جواز سفرك الأصلي مع تأشيرة إقامة سارية، وصورة شخصية بحجم جواز السفر، وإذا كنت تجدد، بطاقة هويتك الإماراتية السابقة.",
        ],
      },
      {
        heading: "The Application Process",
        headingAr: "خطوات التقديم",
        paragraphs: [
          "Once your documents are typed and submitted, you'll be booked for a biometric appointment at an ICP-approved center. After biometric capture, the card is produced and delivered to your registered address, typically within 5–7 working days.",
        ],
        paragraphsAr: [
          "بمجرد طباعة مستنداتك وتقديمها، سيتم حجز موعد لك لأخذ بصمتك الحيوية في أحد المراكز المعتمدة من الهيئة الاتحادية للهوية والجنسية. وبعد أخذ البصمة، يتم إصدار البطاقة وتوصيلها إلى عنوانك المسجل، عادةً خلال 5 إلى 7 أيام عمل.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does an Emirates ID take to process?",
        answer: "Standard processing is 5–7 working days after your biometric appointment.",
        questionAr: "كم تستغرق معالجة طلب الهوية الإماراتية؟",
        answerAr: "تستغرق المعالجة القياسية من 5 إلى 7 أيام عمل بعد موعد أخذ البصمة.",
      },
    ],
  },
  {
    slug: "family-visa-process-uae",
    title: "The Complete Family Visa Process in the UAE",
    titleAr: "الدليل الشامل لإجراءات التأشيرة العائلية في الإمارات",
    excerpt:
      "A full breakdown of sponsoring your spouse, children, and parents on a UAE residency visa.",
    excerptAr:
      "شرح تفصيلي لكفالة زوجك أو زوجتك وأبنائك ووالديك على تأشيرة إقامة إماراتية.",
    image: "/images/blog/family-visa.svg",
    category: "Family Visa",
    categoryAr: "التأشيرة العائلية",
    date: "2026-04-28",
    readingTime: "8 min read",
    readingTimeAr: "8 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "Who Can You Sponsor?",
        headingAr: "من يمكنك كفالته؟",
        paragraphs: [
          "UAE residents meeting the minimum salary threshold can sponsor their spouse, children of any age, and — under certain conditions — their parents.",
        ],
        paragraphsAr: [
          "يمكن لمقيمي الإمارات الذين يستوفون الحد الأدنى للراتب كفالة الزوج أو الزوجة والأبناء بمختلف أعمارهم، وبشروط معينة، الوالدين أيضًا.",
        ],
      },
      {
        heading: "Salary and Eligibility Requirements",
        headingAr: "متطلبات الراتب والأهلية",
        paragraphs: [
          "Generally, a minimum salary of AED 4,000 (or AED 3,000 with employer-provided accommodation) is required to sponsor family members, though this can vary by emirate.",
        ],
        paragraphsAr: [
          "بشكل عام، يُشترط حد أدنى للراتب قدره 4,000 درهم (أو 3,000 درهم مع سكن يوفره صاحب العمل) لكفالة أفراد الأسرة، وقد تختلف هذه الشروط حسب الإمارة.",
        ],
      },
      {
        heading: "Step-by-Step Process",
        headingAr: "خطوات الإجراء",
        paragraphs: [
          "The process starts with an entry permit application, followed by a status change and medical fitness test in-country, Emirates ID biometrics, and finally residency visa stamping in the passport.",
        ],
        paragraphsAr: [
          "تبدأ العملية بتقديم طلب تصريح الدخول، يليه تغيير الحالة وإجراء الفحص الطبي داخل الدولة، ثم أخذ بصمة الهوية الإماراتية، وأخيرًا ختم تأشيرة الإقامة في جواز السفر.",
        ],
      },
    ],
  },
  {
    slug: "golden-visa-guide",
    title: "UAE Golden Visa: Eligibility & Application Guide 2026",
    titleAr: "التأشيرة الذهبية الإماراتية: دليل الأهلية والتقديم 2026",
    excerpt:
      "Who qualifies for the 10-year Golden Visa, what documents you need, and how long the process takes.",
    excerptAr:
      "من يستحق التأشيرة الذهبية لمدة 10 سنوات، وما هي المستندات المطلوبة، وكم تستغرق الإجراءات.",
    image: "/images/blog/golden-visa.svg",
    category: "Golden Visa",
    categoryAr: "التأشيرة الذهبية",
    date: "2026-03-15",
    readingTime: "10 min read",
    readingTimeAr: "10 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "Who Qualifies for the Golden Visa",
        headingAr: "من يستحق الحصول على التأشيرة الذهبية",
        paragraphs: [
          "Eligible categories include investors, entrepreneurs, specialized professionals in fields like medicine and science, outstanding students, and humanitarian pioneers.",
        ],
        paragraphsAr: [
          "تشمل الفئات المؤهلة المستثمرين، ورواد الأعمال، والمهنيين المتخصصين في مجالات مثل الطب والعلوم، والطلاب المتفوقين، ورواد العمل الإنساني.",
        ],
      },
      {
        heading: "Key Benefits",
        headingAr: "أبرز المزايا",
        paragraphs: [
          "Golden Visa holders enjoy 10-year renewable residency without a local sponsor, the ability to sponsor family members of any age, and no minimum stay requirement to keep the visa active.",
        ],
        paragraphsAr: [
          "يتمتع حاملو التأشيرة الذهبية بإقامة قابلة للتجديد لمدة 10 سنوات دون الحاجة لكفيل محلي، وإمكانية كفالة أفراد الأسرة بمختلف أعمارهم، دون اشتراط حد أدنى للإقامة للحفاظ على سريان التأشيرة.",
        ],
      },
      {
        heading: "Application Timeline",
        headingAr: "المدة الزمنية للتقديم",
        paragraphs: [
          "From document submission to visa stamping, the process typically takes 2–4 weeks, depending on government processing times and the completeness of your application.",
        ],
        paragraphsAr: [
          "من تقديم المستندات وحتى ختم التأشيرة، تستغرق العملية عادةً من أسبوعين إلى 4 أسابيع، وذلك حسب مدة المعالجة الحكومية ومدى اكتمال طلبك.",
        ],
      },
    ],
  },
  {
    slug: "how-to-renew-visa",
    title: "How to Renew Your UAE Residence Visa Before It Expires",
    titleAr: "كيفية تجديد تأشيرة إقامتك في الإمارات قبل انتهائها",
    excerpt: "Avoid overstay fines with this timeline for renewing your residence visa.",
    excerptAr: "تجنّب غرامات التأخير باتباع هذا الجدول الزمني لتجديد تأشيرة إقامتك.",
    image: "/images/blog/visa-renewal.svg",
    category: "Residence Visa",
    categoryAr: "تأشيرة الإقامة",
    date: "2026-02-20",
    readingTime: "5 min read",
    readingTimeAr: "5 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "When to Start the Renewal Process",
        headingAr: "متى تبدأ إجراءات التجديد",
        paragraphs: [
          "We recommend starting your residence visa renewal at least 30 days before expiry to leave enough buffer for medical testing and Emirates ID processing.",
        ],
        paragraphsAr: [
          "ننصح ببدء إجراءات تجديد تأشيرة الإقامة قبل 30 يومًا على الأقل من انتهائها، لإتاحة وقت كافٍ لإجراء الفحص الطبي ومعالجة الهوية الإماراتية.",
        ],
      },
      {
        heading: "Steps Involved",
        headingAr: "الخطوات المطلوبة",
        paragraphs: [
          "Renewal involves a fresh medical fitness test, Emirates ID renewal or reissuance, and final visa stamping in your passport.",
        ],
        paragraphsAr: [
          "يتضمن التجديد إجراء فحص طبي جديد، وتجديد أو إعادة إصدار الهوية الإماراتية، وختم التأشيرة النهائي في جواز السفر.",
        ],
      },
    ],
  },
  {
    slug: "uae-medical-test",
    title: "UAE Medical Fitness Test: What to Expect",
    titleAr: "الفحص الطبي في الإمارات: ما الذي يجب توقعه",
    excerpt:
      "A walkthrough of the mandatory medical test required for every residency visa application.",
    excerptAr: "شرح تفصيلي للفحص الطبي الإلزامي المطلوب لكل طلب تأشيرة إقامة.",
    image: "/images/blog/medical-test.svg",
    category: "Medical Typing",
    categoryAr: "الفحص الطبي",
    date: "2026-01-30",
    readingTime: "4 min read",
    readingTimeAr: "4 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "What the Test Involves",
        headingAr: "ما الذي يتضمنه الفحص",
        paragraphs: [
          "The mandatory medical fitness test includes a blood test and a chest X-ray, screening for a small number of communicable diseases as defined by UAE health authorities.",
        ],
        paragraphsAr: [
          "يشمل الفحص الطبي الإلزامي تحليل دم وأشعة على الصدر، للكشف عن عدد محدود من الأمراض المعدية وفق ما تحدده الجهات الصحية في الإمارات.",
        ],
      },
      {
        heading: "Getting Your Results",
        headingAr: "الحصول على النتائج",
        paragraphs: [
          "Results are typically available within 24 hours for standard applications, and can be tracked online once your application is typed and submitted.",
        ],
        paragraphsAr: [
          "تظهر النتائج عادةً خلال 24 ساعة للطلبات الاعتيادية، ويمكن متابعتها إلكترونيًا بعد طباعة طلبك وتقديمه.",
        ],
      },
    ],
  },
  {
    slug: "typing-center-guide",
    title: "What Does a Typing Center Actually Do?",
    titleAr: "ما الذي يقوم به مركز الطباعة فعليًا؟",
    excerpt:
      "Understanding the role of a typing center in UAE government transactions — and why it matters.",
    excerptAr:
      "فهم دور مركز الطباعة في المعاملات الحكومية الإماراتية — ولماذا يُعد ذلك مهمًا.",
    image: "/images/blog/typing-center.svg",
    category: "General",
    categoryAr: "عام",
    date: "2025-12-18",
    readingTime: "5 min read",
    readingTimeAr: "5 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "The Role of a Typing Center",
        headingAr: "دور مركز الطباعة",
        paragraphs: [
          "Typing centers are licensed intermediaries authorized to submit applications directly into UAE government systems on your behalf — from visa typing to trade license applications.",
        ],
        paragraphsAr: [
          "مراكز الطباعة هي جهات وساطة مرخّصة ومخوّلة بتقديم الطلبات مباشرة إلى الأنظمة الحكومية الإماراتية نيابةً عنك — بدءًا من طباعة التأشيرات وحتى طلبات الرخص التجارية.",
        ],
      },
      {
        heading: "Why It Matters",
        headingAr: "لماذا يُعد هذا مهمًا",
        paragraphs: [
          "A single typing error can delay an application by days or result in outright rejection. Working with an experienced, licensed center reduces that risk significantly.",
        ],
        paragraphsAr: [
          "قد يتسبب خطأ إملائي واحد في تأخير الطلب لأيام أو رفضه بالكامل. والتعامل مع مركز مرخّص وذي خبرة يقلّل من هذا الخطر بشكل كبير.",
        ],
      },
    ],
  },
  {
    slug: "company-formation-guide",
    title: "Mainland vs Freezone: Choosing Your UAE Company Structure",
    titleAr: "الشركات البرية مقابل المناطق الحرة: كيف تختار هيكل شركتك في الإمارات",
    excerpt:
      "A side-by-side comparison to help you choose the right jurisdiction for your new business.",
    excerptAr: "مقارنة شاملة تساعدك على اختيار الولاية القانونية المناسبة لعملك الجديد.",
    image: "/images/blog/company-formation.svg",
    category: "Company Formation",
    categoryAr: "تأسيس الشركات",
    date: "2025-11-22",
    readingTime: "9 min read",
    readingTimeAr: "9 دقائق للقراءة",
    author: "Typing Center Near Me Editorial Team",
    authorAr: "فريق تحرير Typing Center Near Me",
    sections: [
      {
        heading: "Mainland Companies",
        headingAr: "الشركات البرية",
        paragraphs: [
          "Mainland companies can trade directly within the UAE market and take on government contracts, with 100% foreign ownership now permitted for most business activities.",
        ],
        paragraphsAr: [
          "يمكن للشركات البرية العمل مباشرة داخل السوق الإماراتي والحصول على عقود حكومية، مع السماح الآن بالتملك الأجنبي الكامل 100% لمعظم الأنشطة التجارية.",
        ],
      },
      {
        heading: "Freezone Companies",
        headingAr: "شركات المناطق الحرة",
        paragraphs: [
          "Freezone companies offer streamlined incorporation and full ownership, but generally require a local distributor to sell directly into the UAE mainland market.",
        ],
        paragraphsAr: [
          "توفر شركات المناطق الحرة تأسيسًا مبسطًا وملكية كاملة، لكنها تتطلب عادةً موزّعًا محليًا للبيع مباشرة في السوق البرية الإماراتية.",
        ],
      },
      {
        heading: "Which Should You Choose?",
        headingAr: "أيهما تختار؟",
        paragraphs: [
          "The right choice depends on your target customers, the nature of your business activity, and your long-term expansion plans — a consultation can clarify this quickly.",
        ],
        paragraphsAr: [
          "يعتمد الاختيار الصحيح على عملائك المستهدفين، وطبيعة نشاطك التجاري، وخططك للتوسع على المدى الطويل — ويمكن لاستشارة سريعة أن توضح ذلك.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3) {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count);
}
