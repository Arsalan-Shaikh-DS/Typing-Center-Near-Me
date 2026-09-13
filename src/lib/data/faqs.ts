export interface Faq {
  question: string;
  answer: string;
  questionAr?: string;
  answerAr?: string;
}

export const generalFaqs: Faq[] = [
  {
    question: "What services does your typing center provide?",
    answer:
      "We provide a comprehensive range of services including Visa Typing, Emirates ID processing, Medical Fitness applications, Trade License renewals, Legal Translation, and PRO services.",
    questionAr: "ما هي الخدمات التي يقدّمها مركز الطباعة لديكم؟",
    answerAr:
      "نقدّم مجموعة شاملة من الخدمات تشمل طباعة التأشيرات، معاملات الهوية الإماراتية، طلبات الفحص الطبي، تجديد الرخص التجارية، الترجمة القانونية، والخدمات الحكومية (العلاقات العامة).",
  },
  {
    question: "How long does visa typing take?",
    answer:
      "Standard processing times vary by application type, but we strive for same-day typing and submission for most routine visa applications.",
    questionAr: "كم تستغرق عملية طباعة التأشيرة؟",
    answerAr:
      "تختلف مدة المعالجة القياسية حسب نوع الطلب، لكننا نحرص على إنجاز الطباعة والتقديم في نفس اليوم لمعظم طلبات التأشيرات الاعتيادية.",
  },
  {
    question: "What documents are required for Emirates ID?",
    answer:
      "Typically, you need your original passport, residency visa copy, and an old Emirates ID (if renewing). Our consultants will provide a specific checklist based on your situation.",
    questionAr: "ما هي المستندات المطلوبة لإصدار الهوية الإماراتية؟",
    answerAr:
      "عادةً ما تحتاج إلى جواز سفرك الأصلي، نسخة من تأشيرة الإقامة، وبطاقة الهوية القديمة (في حال التجديد). سيزوّدك مستشارونا بقائمة دقيقة بالمستندات المطلوبة حسب حالتك.",
  },
  {
    question: "Do you offer services outside Dubai?",
    answer:
      "Yes — while our centers are based across Dubai, we assist clients from across the UAE, including remote document collection where applicable.",
    questionAr: "هل تقدّمون خدماتكم خارج دبي؟",
    answerAr:
      "نعم — ورغم أن مراكزنا منتشرة في دبي، فإننا نخدم عملاءنا في جميع أنحاء الإمارات، بما في ذلك استلام المستندات عن بُعد عند الإمكان.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Fees depend on the government service required plus our facilitation charge. We provide a full, itemized breakdown before you commit to anything.",
    questionAr: "كم تبلغ تكلفة خدماتكم؟",
    answerAr:
      "تعتمد الرسوم على الخدمة الحكومية المطلوبة بالإضافة إلى رسوم التسهيل الخاصة بنا. نوفّر لك تفصيلاً كاملاً للتكاليف قبل أي التزام.",
  },
];

export function faqJsonLd(faqs: Faq[], locale: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: locale === "ar" && f.questionAr ? f.questionAr : f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "ar" && f.answerAr ? f.answerAr : f.answer,
      },
    })),
  };
}
