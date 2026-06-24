import type { MetadataRoute } from "next";

const sitemapUrl = "https://polenlojistik.com.tr/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
  };
}
