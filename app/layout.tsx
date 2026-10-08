import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
const display = Manrope({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: {
    default: "Tristarnex | Security response. Under your control.",
    template: "%s | Tristarnex",
  },
  description:
    "Meet ShieldMSP by Tristarnex. A security response platform in MVP development for MSPs, combining deterministic rules, AI assistance, and safety controls.",
  openGraph: {
    title: "Tristarnex — Security response. Under your control.",
    description: "ShieldMSP. Rules first. AI assisted. Human controlled.",
    url: "https://tristarnex.com",
    siteName: "Tristarnex",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tristarnex Private Limited",
  url: "https://tristarnex.com",
  logo: "https://tristarnex.com/tristarnex-logo.png",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Tritej Abbireddy" },
  description:
    "Building ShieldMSP, a controlled security response layer for managed service providers.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
