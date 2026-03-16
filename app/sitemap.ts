import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cloudaithai.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },

    // Solutions
    { url: `${baseUrl}/solutions/ecommerce`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions/creator`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions/legal`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions/healthcare`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions/realestate`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions/restaurant`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/home-ai`, lastModified, changeFrequency: "weekly", priority: 0.8 },

    // How it works
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/prototype`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tech-stack`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/integrations`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/methodology`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/compare`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Pricing & Sales
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Resources
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/ecosystem`, lastModified, changeFrequency: "monthly", priority: 0.6 },

    // Company
    { url: `${baseUrl}/support`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
