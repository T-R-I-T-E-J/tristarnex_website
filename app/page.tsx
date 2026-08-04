import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Intelligence } from "@/components/Intelligence";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Methodology } from "@/components/Methodology";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative font-body selection:bg-brand-cyan/30 selection:text-brand-cyan bg-brand-bg text-brand-text">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Approach />
      <Intelligence />
      <About />
      <HowItWorks />
      <Methodology />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
