import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/platform",
    "/safety",
    "/integrations",
    "/company",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `https://tristarnex.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
  }));
}
