"use client";

import { useEffect, useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isAr] = useState(
    () => typeof window !== "undefined" && window.location.pathname.startsWith("/ar"),
  );

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang={isAr ? "ar" : "en"} dir={isAr ? "rtl" : "ltr"}>
      <body>
        <div className="min-h-screen flex items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <span className="material-symbols-outlined text-primary text-6xl mb-4 inline-block">
              error
            </span>
            <h1 className="font-display-lg text-[28px] text-primary mb-3">
              {isAr ? "حدث خطأ ما" : "Something went wrong"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              {isAr
                ? "تم تسجيل المشكلة لدينا. يرجى المحاولة مرة أخرى، أو التواصل معنا مباشرة إذا استمرت المشكلة."
                : "We've logged the issue. Please try again, or contact us directly if the problem persists."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-container transition-colors"
              >
                {isAr ? "حاول مرة أخرى" : "Try Again"}
              </button>
              <a
                href={isAr ? "/ar" : "/"}
                className="border-2 border-primary text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
              >
                {isAr ? "العودة للرئيسية" : "Back to Home"}
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
