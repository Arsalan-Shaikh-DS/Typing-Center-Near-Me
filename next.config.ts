import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      // Send all traffic on the .com domain (apex + www) to the canonical
      // .ae domain, preserving the path and query string. This keeps
      // typingcenternearme.com working for anyone who visits/links to it,
      // while consolidating SEO signals onto a single canonical domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "typingcenternearme.com" }],
        destination: "https://www.typingcenternearme.ae/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.typingcenternearme.com" }],
        destination: "https://www.typingcenternearme.ae/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
