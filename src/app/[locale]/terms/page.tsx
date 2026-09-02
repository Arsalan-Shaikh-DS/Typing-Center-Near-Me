import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
    title: locale === "ar" ? "الشروط والأحكام" : "Terms of Service",
    description:
      locale === "ar"
        ? `شروط استخدام موقع وخدمات الطباعة والمعاملات الخاصة بـ ${siteConfig.fullName}.`
        : `Terms of service for using ${siteConfig.fullName}'s website and typing/documentation services.`,
    path: "/terms",
    locale,
  });
}

export default async function TermsPage() {
  const locale = await getLocale();
  const isAr = locale === "ar";

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: isAr ? "الشروط والأحكام" : "Terms", href: "/terms" }]} />
      <main id="main-content">
        <LegalLayout title={isAr ? "الشروط والأحكام" : "Terms of Service"} lastUpdated={isAr ? "22 يوليو 2026" : "July 22, 2026"}>
          <section>
            {isAr ? (
              <p>
                مرحبًا بك في <strong>Typing Center Near Me</strong>. تحكم شروط الخدمة هذه (&quot;الشروط&quot;)
                استخدامك لمواقعنا الإلكترونية وخدماتنا.
              </p>
            ) : (
              <p>
                Welcome to <strong>Typing Center Near Me</strong>. These Terms
                of Service (&quot;Terms&quot;) govern your use of our websites
                and services.
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
                ? "من خلال الوصول إلى مواقعنا أو خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى الامتناع عن استخدام خدماتنا."
                : "By accessing or using our websites or services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our services."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "خدماتنا" : "Our Services"}</h2>
            <p className="mb-1">
              {isAr
                ? `يقدّم ${siteConfig.fullName} خدمات طباعة احترافية، وإعداد المستندات، والمساعدة في تقديم الطلبات، والخدمات الحكومية (العلاقات العامة)، ودعمًا إداريًا آخر لمختلف الخدمات الحكومية الإماراتية، بما في ذلك على سبيل المثال لا الحصر:`
                : `${siteConfig.fullName} provides professional typing, document preparation, application submission assistance, PRO services, and other administrative support for various UAE government-related services, including but not limited to:`}
            </p>
            <ul className="list-disc ps-5 space-y-1 mb-3">
              {isAr ? (
                <>
                  <li>خدمات الهوية الإماراتية</li>
                  <li>خدمات تأشيرة الإقامة الإماراتية</li>
                  <li>طلبات التأشيرة العائلية</li>
                  <li>خدمات التأشيرة الذهبية الإماراتية</li>
                  <li>طلبات الفحص الطبي</li>
                  <li>خدمات العمل والهجرة</li>
                  <li>المساعدة في تأسيس الأعمال</li>
                  <li>دعم طباعة المستندات وترجمتها</li>
                </>
              ) : (
                <>
                  <li>Emirates ID Services</li>
                  <li>UAE Residence Visa Services</li>
                  <li>Family Visa Applications</li>
                  <li>UAE Golden Visa Services</li>
                  <li>Medical Fitness Applications</li>
                  <li>Labor and Immigration Services</li>
                  <li>Business Setup Assistance</li>
                  <li>Document Typing and Translation Support</li>
                </>
              )}
            </ul>
            {isAr ? (
              <p>
                نعمل فقط كجهة <strong>تسهيل</strong> لإعداد الطلبات وتقديمها. تبقى الموافقة النهائية أو
                الرفض أو مدة المعالجة وأي قرارات أخرى بالكامل ضمن صلاحية الجهات الحكومية الإماراتية المختصة.
              </p>
            ) : (
              <p>
                We act solely as a <strong>facilitator</strong> for preparing
                and submitting applications. Final approval, rejection,
                processing times, and any decisions remain entirely at the
                discretion of the relevant UAE government authorities.
              </p>
            )}
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "مسؤولياتك" : "Your Responsibilities"}
            </h2>
            <p className="mb-1">{isAr ? "باستخدامك لخدماتنا، فإنك توافق على:" : "By using our services, you agree to:"}</p>
            <ul className="list-disc ps-5 space-y-1 mb-3">
              {isAr ? (
                <>
                  <li>تقديم معلومات ومستندات دقيقة وكاملة وصحيحة.</li>
                  <li>التأكد من أن جميع المستندات المقدمة سارية ومُستخرجة بشكل قانوني.</li>
                  <li>دفع جميع الرسوم الحكومية المعمول بها، ورسوم الخدمة، وأي تكاليف إضافية يتم إبلاغك بها قبل بدء المعالجة.</li>
                  <li>الامتثال لجميع القوانين واللوائح والمتطلبات الحكومية الإماراتية المعمول بها.</li>
                  <li>الاستجابة الفورية لطلبات الحصول على معلومات أو مستندات إضافية.</li>
                </>
              ) : (
                <>
                  <li>Provide accurate, complete, and genuine information and documents.</li>
                  <li>Ensure that all submitted documents are valid and legally obtained.</li>
                  <li>
                    Pay all applicable government fees, service charges, and any
                    additional costs communicated before processing begins.
                  </li>
                  <li>Comply with all applicable UAE laws, regulations, and government requirements.</li>
                  <li>Respond promptly to requests for additional information or documentation.</li>
                </>
              )}
            </ul>
            <p>
              {isAr
                ? "أنت مسؤول عن أي تأخير أو مشاكل ناتجة عن معلومات غير صحيحة أو ناقصة أو مضللة تقدمها."
                : "You are responsible for any delays or issues resulting from incorrect, incomplete, or misleading information provided by you."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "الرسوم والمدفوعات" : "Fees and Payments"}
            </h2>
            <p className="mb-1">
              {isAr
                ? "سيتم إبلاغك برسوم خدمتنا والرسوم الحكومية المعمول بها قبل بدء العمل."
                : "Our service charges and applicable government fees will be communicated before work begins."}
            </p>
            <ul className="list-disc ps-5 space-y-1">
              {isAr ? (
                <>
                  <li>تُحدَّد الرسوم الحكومية حصريًا من قبل الجهات الإماراتية المختصة، وقد تتغير دون إشعار مسبق.</li>
                  <li>رسوم خدمتنا منفصلة عن الرسوم الحكومية ما لم يُذكر خلاف ذلك.</li>
                  <li>بمجرد بدء العمل أو تقديم الطلب، قد تكون الرسوم المدفوعة غير قابلة للاسترداد إلا في الحالات التي يقتضيها القانون المعمول به.</li>
                </>
              ) : (
                <>
                  <li>
                    Government fees are determined solely by the relevant UAE
                    authorities and may change without prior notice.
                  </li>
                  <li>
                    Our service charges are separate from government fees unless
                    otherwise stated.
                  </li>
                  <li>
                    Once work has commenced or an application has been submitted,
                    fees paid may be non-refundable except where required by
                    applicable law.
                  </li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "مدد المعالجة" : "Processing Times"}</h2>
            <p>{isAr ? "مدد المعالجة المذكورة هي تقديرية فقط." : "Processing times provided are estimates only."}</p>
            <p className="mt-3">
              {isAr
                ? "تعتمد مدة المعالجة الفعلية على الجهات الحكومية المعنية، وقد تختلف بسبب العطلات الرسمية، أو تغييرات السياسات، أو التحقق من المستندات، أو عوامل إدارية أخرى خارجة عن إرادتنا."
                : "Actual processing depends on the relevant government authorities and may vary due to public holidays, policy changes, document verification, or other administrative factors beyond our control."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "حدود المسؤولية" : "Limitation of Liability"}
            </h2>
            <p className="mb-1">
              {isAr ? `لا يتحمل ${siteConfig.fullName} المسؤولية عن:` : `${siteConfig.fullName} shall not be liable for:`}
            </p>
            <ul className="list-disc ps-5 space-y-1 mb-3">
              {isAr ? (
                <>
                  <li>تأخير الطلبات أو تغيّر مدد المعالجة.</li>
                  <li>رفض الطلب من قبل أي جهة حكومية.</li>
                  <li>التغييرات في اللوائح أو الرسوم أو الإجراءات الحكومية.</li>
                  <li>الخسائر الناتجة عن معلومات غير صحيحة أو ناقصة يقدمها العميل.</li>
                  <li>الأعطال التقنية أو الظروف الخارجة عن إرادتنا المعقولة.</li>
                </>
              ) : (
                <>
                  <li>Application delays or processing time changes.</li>
                  <li>Application rejection by any government authority.</li>
                  <li>Changes in government regulations, fees, or procedures.</li>
                  <li>
                    Losses arising from incorrect or incomplete information
                    provided by the client.
                  </li>
                  <li>Technical interruptions or circumstances beyond our reasonable control.</li>
                </>
              )}
            </ul>
            <p>
              {isAr
                ? "تقتصر مسؤوليتنا، حيثما يسمح القانون بذلك، على المبلغ المدفوع مقابل رسوم خدمتنا، ولا تشمل أي أضرار غير مباشرة أو عرضية أو تبعية."
                : "Our liability, where permitted by law, is limited to the amount paid for our service fees and excludes any indirect, incidental, or consequential damages."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "الملكية الفكرية" : "Intellectual Property"}
            </h2>
            {isAr ? (
              <p>
                جميع المحتويات الموجودة على مواقعنا، بما في ذلك النصوص والرسومات والشعارات والصور وعناصر
                التصميم، هي ملك لـ {siteConfig.fullName} ما لم يُذكر خلاف ذلك. يُحظر إعادة الإنتاج أو النسخ
                أو التوزيع غير المصرح به دون إذن كتابي مسبق.
              </p>
            ) : (
              <p>
                All content on our websites, including text, graphics, logos,
                images, and design elements, is the property of{" "}
                {siteConfig.fullName} unless otherwise stated. Unauthorized
                reproduction, copying, or distribution is prohibited without
                prior written permission.
              </p>
            )}
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "الخصوصية" : "Privacy"}</h2>
            {isAr ? (
              <p>
                يخضع استخدامك لخدماتنا أيضًا لـ{" "}
                <Link href="/privacy-policy" className="text-primary underline">
                  سياسة الخصوصية
                </Link>{" "}
                الخاصة بنا، والتي توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.
              </p>
            ) : (
              <p>
                Your use of our services is also governed by our{" "}
                <Link href="/privacy-policy" className="text-primary underline">
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your personal
                information.
              </p>
            )}
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">
              {isAr ? "التغييرات على هذه الشروط" : "Changes to These Terms"}
            </h2>
            <p>
              {isAr
                ? 'يجوز لنا تحديث شروط الخدمة هذه في أي وقت. سيتم نشر النسخ المحدَّثة على هذه الصفحة مع تاريخ "آخر تحديث" المُعدَّل. يُعد استمرار استخدامك لمواقعنا أو خدماتنا بمثابة قبول للشروط المحدَّثة.'
                : 'We may update these Terms of Service at any time. Updated versions will be published on this page with the revised "Last Updated" date. Continued use of our websites or services constitutes acceptance of the updated Terms.'}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "القانون الحاكم" : "Governing Law"}</h2>
            <p>
              {isAr
                ? "تخضع هذه الشروط وتُفسَّر وفقًا لقوانين دولة الإمارات العربية المتحدة. تخضع أي نزاعات ناشئة عن استخدام خدماتنا لاختصاص المحاكم المختصة في الإمارات."
                : "These Terms shall be governed by and interpreted in accordance with the laws of the United Arab Emirates. Any disputes arising from the use of our services shall be subject to the jurisdiction of the competent courts of the UAE."}
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-lg text-primary mb-2">{isAr ? "تواصل معنا" : "Contact Us"}</h2>
            <p className="mb-3">
              {isAr
                ? "إذا كانت لديك أي أسئلة بخصوص شروط الخدمة هذه، يرجى التواصل معنا:"
                : "If you have any questions regarding these Terms of Service, please contact us:"}
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
