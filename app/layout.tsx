import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Cybersecurity Services & Threat Detection | Tristarnex",
  description:
    "Enterprise-grade cybersecurity — threat detection, penetration testing, vulnerability management, and incident response for businesses of every size. AI-assisted. Human-led.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cybersecurity Services & Threat Detection | Tristarnex",
    description:
      "Enterprise-grade cybersecurity — threat detection, penetration testing, vulnerability management, and incident response for businesses of every size. AI-assisted. Human-led.",
    url: "https://tristarnex.com",
    siteName: "Tristarnex",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tristarnex — Global Threat Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Services & Threat Detection | Tristarnex",
    description:
      "We hunt threats before they hunt you. AI-assisted detection, penetration testing, incident response.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tristarnex.com/#website",
      url: "https://tristarnex.com",
      name: "Tristarnex",
      description: "Global Threat Intelligence & Cybersecurity Services",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://tristarnex.com/#organization",
      name: "Tristarnex",
      url: "https://tristarnex.com",
      email: "info@tristarnex.com",
      foundingDate: "2026",
      description:
        "Tristarnex delivers enterprise-grade threat detection, penetration testing, vulnerability management, incident response, and security awareness training to organisations of every size.",
      areaServed: "Global",
      serviceType: [
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Assessment",
        "Vulnerability Management",
        "Security Awareness Training",
        "Incident Response",
      ],
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data — React 18 RSC supports string children on <script> */}
        <script type="application/ld+json">{jsonLd}</script>
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased bg-brand-bg text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
