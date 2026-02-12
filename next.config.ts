import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // production'da fs ile okunan MDX içeriklerini deploy paketine dahil et
  outputFileTracingIncludes: {
    "/blog/[slug]": ["./content/blog/**/*"],
    "/blog": ["./content/blog/**/*"],
    "/rss.xml": ["./content/blog/**/*"],
    "/sitemap.xml": ["./content/blog/**/*"],
  },
};

export default nextConfig;
