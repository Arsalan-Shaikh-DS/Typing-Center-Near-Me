export interface Review {
  id: string;
  name: string;
  avatar: string;
  serviceTag: string;
  serviceTagAr?: string;
  rating: number;
  text: string;
  textAr?: string;
}

export const reviews: Review[] = [
  {
    id: "ahmad-hussain-raza",
    name: "Ahmad Hussain Raza",
    avatar: "/images/reviews/ahmad-hussain-raza.jpg",
    serviceTag: "Visa Services",
    serviceTagAr: "خدمات التأشيرات",
    rating: 5,
    text: "I had a great experience with the visa service provided by Mr. Zishan. He was extremely professional, knowledgeable, and supportive throughout the entire process. He explained every step clearly and made the whole application smooth and stress-free.",
    textAr:
      "كانت تجربتي رائعة مع خدمة التأشيرات التي قدمها السيد زيشان. كان محترفًا للغاية ومطّلعًا وداعمًا خلال كل مراحل العملية. أوضح لي كل خطوة بوضوح وجعل تقديم الطلب سلسًا وخاليًا من التوتر.",
  },
  {
    id: "moheb-nabeel",
    name: "Moheb Nabeel",
    avatar: "/images/reviews/moheb-nabeel.jpg",
    serviceTag: "General Services",
    serviceTagAr: "خدمات عامة",
    rating: 4,
    text: "The staff are friendly and supportive. They complete the work on time without any problem. The charges are reasonable, and the service is smooth. I am happy with their service and will visit again if needed.",
    textAr:
      "الموظفون ودودون وداعمون. ينجزون العمل في الوقت المحدد دون أي مشكلة. الرسوم معقولة والخدمة سلسة. أنا سعيد بخدمتهم وسأزورهم مجددًا عند الحاجة.",
  },
  {
    id: "nikhil-naire",
    name: "Nikhil Naire",
    avatar: "/images/reviews/nikhil-naire.jpg",
    serviceTag: "Visa Typing",
    serviceTagAr: "طباعة التأشيرات",
    rating: 5,
    text: "Excellent service! Staff is very professional and helpful. My visa typing was done quickly without any issues. Highly recommended.",
    textAr:
      "خدمة ممتازة! الموظفون محترفون جدًا ومتعاونون. تم إنجاز طباعة تأشيرتي بسرعة ودون أي مشاكل. أنصح بهم بشدة.",
  },
  {
    id: "mary-claire",
    name: "Mary Claire",
    avatar: "/images/reviews/mary-claire.jpg",
    serviceTag: "Family Visa",
    serviceTagAr: "التأشيرة العائلية",
    rating: 5,
    text: "Their services are very quick and smooth. I just came to their office 2 days ago and today I already got my baby's residence visa issued. Will definitely seek their services again!",
    textAr:
      "خدماتهم سريعة وسلسة جدًا. زرت مكتبهم منذ يومين فقط، واليوم صدرت تأشيرة إقامة طفلي. سألجأ إلى خدماتهم مجددًا بالتأكيد!",
  },
  {
    id: "mohammed-irfan",
    name: "Mohammed Irfan",
    avatar: "/images/reviews/mohammed-irfan.jpg",
    serviceTag: "Consultation Services",
    serviceTagAr: "خدمات الاستشارة",
    rating: 5,
    text: "Their services are very good, above all they are patient, advising and ready to help in any way they can. I think this is a place to trust and rely on with your work.",
    textAr:
      "خدماتهم جيدة جدًا، والأهم من ذلك أنهم صبورون ومستشارون ومستعدون للمساعدة بأي شكل ممكن. أعتقد أن هذا مكان يمكن الوثوق به والاعتماد عليه في أعمالك.",
  },
  {
    id: "john-aaron",
    name: "John Aaron",
    avatar: "/images/reviews/john-aaron.jpg",
    serviceTag: "Document Typing",
    serviceTagAr: "طباعة المستندات",
    rating: 5,
    text: "I had a great experience at Palace Gate Typing Center. The staff member Ranjith and others were professional, helpful, and completed my documents accurately and promptly.",
    textAr:
      "كانت تجربتي رائعة في مركز بالاس جيت للطباعة. كان الموظف رانجيث وزملاؤه محترفين ومتعاونين وأنجزوا مستنداتي بدقة وسرعة.",
  },
];

export const reviewSummary = {
  average: 4.9,
  count: 500,
};
