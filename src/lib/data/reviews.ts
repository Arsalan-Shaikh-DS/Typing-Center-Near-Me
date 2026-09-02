export interface Review {
  id: string;
  name: string;
  serviceTag: string;
  serviceTagAr?: string;
  rating: number;
  text: string;
  textAr?: string;
}

export const reviews: Review[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    serviceTag: "Golden Visa Services",
    serviceTagAr: "خدمات التأشيرة الذهبية",
    rating: 5,
    text: "Incredible service! They handled my Golden Visa application smoothly without any hassle. Highly professional team.",
    textAr:
      "خدمة رائعة! تعاملوا مع طلب التأشيرة الذهبية الخاص بي بسلاسة تامة ودون أي تعقيد. فريق عمل بمنتهى الاحترافية.",
  },
  {
    id: "ahmed-k",
    name: "Ahmed K.",
    serviceTag: "Emirates ID Renewal",
    serviceTagAr: "تجديد الهوية الإماراتية",
    rating: 5,
    text: "Fast, efficient, and transparent about fees. My Emirates ID renewal was done within a day.",
    textAr:
      "سريعون وفعّالون وشفافون بخصوص الرسوم. تم تجديد هويتي الإماراتية خلال يوم واحد فقط.",
  },
  {
    id: "priya-r",
    name: "Priya R.",
    serviceTag: "Family Visa",
    serviceTagAr: "التأشيرة العائلية",
    rating: 5,
    text: "They guided us through the entire family visa process step by step. Couldn't have asked for better support.",
    textAr:
      "رافقونا خطوة بخطوة خلال إجراءات التأشيرة العائلية بالكامل. لم أكن لأطلب دعمًا أفضل من هذا.",
  },
  {
    id: "mohammed-a",
    name: "Mohammed A.",
    serviceTag: "Trade License",
    serviceTagAr: "الرخصة التجارية",
    rating: 4,
    text: "Great experience setting up my Freezone trade license. Knowledgeable staff and quick turnaround.",
    textAr:
      "تجربة ممتازة في تأسيس رخصتي التجارية في المنطقة الحرة. طاقم عمل ملمّ وسرعة في الإنجاز.",
  },
  {
    id: "elena-v",
    name: "Elena V.",
    serviceTag: "Medical Typing",
    serviceTagAr: "طباعة الفحص الطبي",
    rating: 5,
    text: "Same-day medical typing appointment booked and processed with zero errors. Highly recommend.",
    textAr:
      "تم حجز ومعالجة موعد الفحص الطبي في نفس اليوم وبدون أي أخطاء. أنصح بهم بشدة.",
  },
  {
    id: "faisal-h",
    name: "Faisal H.",
    serviceTag: "Legal Translation",
    serviceTagAr: "الترجمة القانونية",
    rating: 5,
    text: "Certified translation delivered ahead of schedule. Everything was accepted by the Ministry without issue.",
    textAr:
      "تسليم الترجمة المعتمدة قبل الموعد المحدد. تم قبول جميع المستندات لدى الوزارة دون أي مشكلة.",
  },
];

export const reviewSummary = {
  average: 4.9,
  count: 500,
};
