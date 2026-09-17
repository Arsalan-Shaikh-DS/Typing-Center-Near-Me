import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LegalLayout } from "@/components/legal-layout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const CONTACT_EMAIL = "typingcenternearme.com@gmail.com";
const CONTACT_PHONE_DISPLAY = "+971 56 182 7629";
const CONTACT_PHONE_TEL = "+971561827629";
const WEBSITES = [
  "https://www.typingcenternearme.com",
  "https://www.typingcenternearme.ae",
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    description:
      locale === "ar"
        ? `اطّلع على سياسة الخصوصية الخاصة بـ ${siteConfig.fullName} التي توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.`
        : `Read the ${siteConfig.fullName} privacy policy covering how we collect, use, and protect your personal information.`,
    path: "/privacy-policy",
    locale,
  });
}

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const isAr = locale === "ar";

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: isAr ? "سياسة الخصوصية" : "Privacy Policy", href: "/privacy-policy" }]} />
      <main id="main-content">
        <LegalLayout title={isAr ? "سياسة الخصوصية" : "Privacy Policy"} lastUpdated={isAr ? "22 يوليو 2026" : "July 22, 2026"}>
          <section>
            {isAr ? (
              <p>
                مرحبًا بك في <strong>Typing Center Near Me</strong> (&quot;نحن&quot; أو &quot;الشركة&quot;). نلتزم
                بحماية خصوصيتك وضمان التعامل مع معلوماتك الشخصية بأمان ومسؤولية. توضح سياسة الخصوصية
                هذه كيفية جمعنا واستخدامنا والإفصاح عن معلوماتك وحمايتها عند زيارتك لمواقعنا الإلكترونية
                أو استخدامك لخدمات الطباعة ومعالجة المستندات في الإمارات.
              </p>
            ) : (
              <p>
                Welcome to <strong>Typing Center Near Me</strong> (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your
                privacy and ensuring that your personal information is handled
                securely and responsibly. This Privacy Policy explains how we
                collect, use, disclose, and protect your information when you
                visit our websites or use our UAE typing and document
                processing services.
              </p>
            )}
            <p className="mt-3 font-semibold text-primary">{isAr ? "المواقع الإلكترونية" : "Websites"}</p>
            <ul className="list-disc ps-5 space-y-1">
              {WEBSITES.map((site) => (
                <li key={site}>
                  <a href={site} className="text-primary underline">
                    {site}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              {isAr
                ? "باستخدامك لمواقعنا الإلكترونية أو خدماتنا، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه."
                : "By using our websites or services, you agree to the practices described in this Privacy Policy."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "المعلومات التي نجمعها" : "Information We Collect"}
            </h2>
            <p className="font-semibold text-primary mb-1">{isAr ? "المعلومات الشخصية" : "Personal Information"}</p>
            <ul className="list-disc ps-5 space-y-1 mb-4">
              {isAr ? (
                <>
                  <li>الاسم الكامل</li>
                  <li>البريد الإلكتروني</li>
                  <li>رقم الهاتف أو الواتساب</li>
                  <li>أي معلومات تقدمها من خلال نماذج التواصل أو الاستفسارات لدينا</li>
                </>
              ) : (
                <>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone or WhatsApp number</li>
                  <li>Any information you provide through our contact forms or inquiries</li>
                </>
              )}
            </ul>

            <p className="font-semibold text-primary mb-1">{isAr ? "المستندات التي تقدمها" : "Documents You Submit"}</p>
            <p className="mb-1">
              {isAr ? "لمعالجة طلباتك، قد نجمع مستندات مثل:" : "To process your applications, we may collect documents such as:"}
            </p>
            <ul className="list-disc ps-5 space-y-1 mb-4">
              {isAr ? (
                <>
                  <li>نسخ جواز السفر</li>
                  <li>نسخ الهوية الإماراتية</li>
                  <li>مستندات التأشيرة</li>
                  <li>صور شخصية بحجم جواز السفر</li>
                  <li>مستندات الفحص الطبي</li>
                  <li>مستندات العمل والهجرة</li>
                  <li>مستندات الأعمال أو التراخيص</li>
                  <li>أي مستندات أخرى مطلوبة للخدمات الحكومية الإماراتية</li>
                </>
              ) : (
                <>
                  <li>Passport copies</li>
                  <li>Emirates ID copies</li>
                  <li>Visa documents</li>
                  <li>Passport-size photographs</li>
                  <li>Medical fitness documents</li>
                  <li>Labor and immigration documents</li>
                  <li>Business or licensing documents</li>
                  <li>Any other documents required for UAE government services</li>
                </>
              )}
            </ul>

            <p className="font-semibold text-primary mb-1">{isAr ? "معلومات استخدام الموقع" : "Website Usage Information"}</p>
            <p className="mb-1">
              {isAr
                ? "نجمع تلقائيًا بعض المعلومات عند زيارتك لمواقعنا، تشمل:"
                : "We automatically collect certain information when you visit our websites, including:"}
            </p>
            <ul className="list-disc ps-5 space-y-1 mb-2">
              {isAr ? (
                <>
                  <li>عنوان IP</li>
                  <li>معلومات المتصفح والجهاز</li>
                  <li>الصفحات التي تمت زيارتها</li>
                  <li>الوقت المستغرق في الموقع</li>
                  <li>ملفات تعريف الارتباط وبيانات التحليلات</li>
                </>
              ) : (
                <>
                  <li>IP address</li>
                  <li>Browser and device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on the website</li>
                  <li>Cookies and analytics data</li>
                </>
              )}
            </ul>
            <p>
              {isAr
                ? "تساعدنا هذه المعلومات على تحسين أداء الموقع وتجربة المستخدم وخدماتنا."
                : "This information helps us improve website performance, user experience, and our services."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "كيف نستخدم معلوماتك" : "How We Use Your Information"}
            </h2>
            <p className="mb-1">{isAr ? "نستخدم معلوماتك من أجل:" : "We use your information to:"}</p>
            <ul className="list-disc ps-5 space-y-1">
              {isAr ? (
                <>
                  <li>معالجة طلبات الهوية الإماراتية، التأشيرات، الإقامة، الفحص الطبي، التأشيرة العائلية، التأشيرة الذهبية، تأسيس الأعمال، وغيرها من المعاملات الحكومية الإماراتية.</li>
                  <li>الرد على استفساراتك وتقديم دعم العملاء.</li>
                  <li>إرسال تحديثات بخصوص طلبك أو الخدمات المطلوبة.</li>
                  <li>تحسين موقعنا ومحتوانا وتجربة المستخدم.</li>
                  <li>الامتثال للقوانين واللوائح الحكومية الإماراتية المعمول بها.</li>
                  <li>منع الاحتيال وحماية أمان خدماتنا.</li>
                </>
              ) : (
                <>
                  <li>
                    Process Emirates ID, visa, residency, medical fitness, family
                    visa, Golden Visa, business setup, and other UAE
                    government-related applications.
                  </li>
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Send updates regarding your application or requested services.</li>
                  <li>Improve our website, content, and user experience.</li>
                  <li>Comply with applicable UAE laws and government regulations.</li>
                  <li>Prevent fraud and protect the security of our services.</li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "أمان البيانات" : "Data Security"}</h2>
            <p>
              {isAr
                ? "نتخذ التدابير التقنية والتنظيمية المناسبة لحماية معلوماتك الشخصية ومستنداتك."
                : "We take appropriate technical and organizational measures to safeguard your personal information and documents."}
            </p>
            <p className="mt-3">
              {isAr
                ? "تتم حماية معلوماتك باستخدام أنظمة آمنة، وتشفير عند الاقتضاء، وضوابط وصول مقيّدة. نحتفظ بمعلوماتك فقط للمدة اللازمة لتقديم خدماتنا أو الامتثال للمتطلبات القانونية والتنظيمية المعمول بها."
                : "Your information is protected using secure systems, encryption where appropriate, and restricted access controls. We retain your information only for as long as necessary to provide our services or comply with applicable legal and regulatory requirements."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "مشاركة المعلومات" : "Sharing of Information"}
            </h2>
            {isAr ? (
              <p className="mb-1">
                نحترم خصوصيتك ولا نقوم أبدًا <strong>ببيع أو تأجير أو مقايضة معلوماتك الشخصية</strong>.
              </p>
            ) : (
              <p className="mb-1">
                We respect your privacy and{" "}
                <strong>never sell, rent, or trade your personal information</strong>.
              </p>
            )}
            <p className="mb-1">{isAr ? "لا تتم مشاركة معلوماتك إلا في الحالات التالية:" : "Your information may only be shared:"}</p>
            <ul className="list-disc ps-5 space-y-1">
              {isAr ? (
                <>
                  <li>مع الجهات الحكومية الإماراتية المعنية لمعالجة طلباتك.</li>
                  <li>مع شركاء أو مزودي خدمات موثوقين يساعدون في تقديم خدماتنا بموجب التزامات صارمة بالسرية.</li>
                  <li>عند الطلب بموجب القانون أو من الجهات القانونية.</li>
                  <li>لحماية حقوقنا القانونية أو مستخدمينا أو عملياتنا التجارية.</li>
                </>
              ) : (
                <>
                  <li>With relevant UAE government authorities to process your applications.</li>
                  <li>
                    With trusted partners or service providers who assist in
                    delivering our services under strict confidentiality
                    obligations.
                  </li>
                  <li>When required by law or legal authorities.</li>
                  <li>To protect our legal rights, users, or business operations.</li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "ملفات تعريف الارتباط" : "Cookies"}</h2>
            <p className="mb-1">
              {isAr ? "تستخدم مواقعنا ملفات تعريف الارتباط وتقنيات مشابهة من أجل:" : "Our websites use cookies and similar technologies to:"}
            </p>
            <ul className="list-disc ps-5 space-y-1 mb-2">
              {isAr ? (
                <>
                  <li>تحسين وظائف الموقع</li>
                  <li>تحليل حركة الزوار</li>
                  <li>تذكر تفضيلات المستخدم</li>
                  <li>تحسين تجربة التصفح لديك</li>
                </>
              ) : (
                <>
                  <li>Improve website functionality</li>
                  <li>Analyze visitor traffic</li>
                  <li>Remember user preferences</li>
                  <li>Enhance your browsing experience</li>
                </>
              )}
            </ul>
            <p>
              {isAr
                ? "يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات متصفحك؛ إلا أن بعض ميزات الموقع قد لا تعمل بشكل صحيح في هذه الحالة."
                : "You may disable cookies through your browser settings; however, some website features may not function properly."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "حقوقك" : "Your Rights"}</h2>
            <p className="mb-1">{isAr ? "وفقًا للقوانين المعمول بها، يمكنك طلب:" : "Subject to applicable laws, you may request to:"}</p>
            <ul className="list-disc ps-5 space-y-1 mb-2">
              {isAr ? (
                <>
                  <li>الاطلاع على معلوماتك الشخصية.</li>
                  <li>تصحيح المعلومات غير الدقيقة أو الناقصة.</li>
                  <li>طلب حذف بياناتك الشخصية حيثما يسمح القانون بذلك.</li>
                  <li>سحب الموافقة على بعض أنشطة معالجة البيانات.</li>
                </>
              ) : (
                <>
                  <li>Access your personal information.</li>
                  <li>Correct inaccurate or incomplete information.</li>
                  <li>Request deletion of your personal data where legally permitted.</li>
                  <li>Withdraw consent for certain processing activities.</li>
                </>
              )}
            </ul>
            <p>
              {isAr
                ? "يُرجى العلم أن بعض السجلات قد يتطلب الاحتفاظ بها للامتثال للالتزامات القانونية أو التنظيمية الإماراتية."
                : "Please note that some records may need to be retained to comply with UAE legal or regulatory obligations."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "مواقع الطرف الثالث" : "Third-Party Websites"}
            </h2>
            <p>
              {isAr
                ? "قد تحتوي مواقعنا على روابط لمواقع تابعة لجهات خارجية لراحتك. نحن لسنا مسؤولين عن ممارسات الخصوصية أو محتوى هذه المواقع الخارجية. نشجعك على مراجعة سياسات الخصوصية الخاصة بها قبل مشاركة أي معلومات شخصية."
                : "Our websites may contain links to third-party websites for your convenience. We are not responsible for the privacy practices or content of these external websites. We encourage you to review their privacy policies before sharing any personal information."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "التغييرات على سياسة الخصوصية هذه" : "Changes to This Privacy Policy"}
            </h2>
            <p>
              {isAr
                ? 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في خدماتنا أو المتطلبات القانونية أو ممارسات العمل. سيتم نشر أي تحديثات على هذه الصفحة مع تاريخ "آخر تحديث" المُعدَّل.'
                : 'We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices. Any updates will be posted on this page with the revised "Last Updated" date.'}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "تواصل معنا" : "Contact Us"}</h2>
            <p className="mb-3">
              {isAr
                ? "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى التواصل معنا:"
                : "If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:"}
            </p>
            <p className="font-semibold text-primary mb-1">Typing Center Near Me</p>
            <p className="font-semibold text-primary mb-1 mt-3">{isAr ? "المواقع الإلكترونية" : "Websites"}</p>
            <ul className="list-disc ps-5 space-y-1 mb-3">
              {WEBSITES.map((site) => (
                <li key={site}>
                  <a href={site} className="text-primary underline">
                    {site}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              {isAr ? "البريد الإلكتروني: " : "Email: "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              {isAr ? "الهاتف / واتساب: " : "Phone / WhatsApp: "}
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-primary underline">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
          </section>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
