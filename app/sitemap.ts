import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tristarnex.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://tristarnex.com/threat-detection", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://tristarnex.com/penetration-testing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://tristarnex.com/security-assessment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://tristarnex.com/vulnerability-management", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://tristarnex.com/security-awareness-training", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://tristarnex.com/incident-response", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://tristarnex.com/pricing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://tristarnex.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://tristarnex.com/blog/what-is-penetration-testing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://tristarnex.com/blog/what-is-threat-intelligence", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://tristarnex.com/blog/ransomware-response-guide", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://tristarnex.com/blog/cyber-essentials-guide", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://tristarnex.com/blog/incident-response-plan", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://tristarnex.com/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://tristarnex.com/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
