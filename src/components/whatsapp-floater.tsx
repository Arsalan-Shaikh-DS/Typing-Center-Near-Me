import { getLocale } from "next-intl/server";
import { siteConfig } from "@/lib/site-config";

export async function WhatsAppFloater() {
  const locale = await getLocale();
  const waNumber = siteConfig.whatsapp.replace("+", "");
  const waUrl = `https://wa.me/${waNumber}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={locale === "ar" ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white shrink-0"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.476 2.027 7.774L0 32l8.476-2.004A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.795-1.867l-.487-.29-5.03 1.189 1.21-4.904-.318-.503A13.239 13.239 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.29-9.874c-.4-.2-2.364-1.166-2.73-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.689-.623-3.217-1.983-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.324-.78-.654-.674-.9-.687l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.033.955.412 1.7.658 2.281.843.958.305 1.831.262 2.52.159.769-.114 2.364-.967 2.698-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
      </svg>
    </a>
  );
}
