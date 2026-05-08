import { BottomCTA } from "@/components/sections/BottomCTA";
import { CRMShowcase } from "@/components/sections/CRMShowcase";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { PainVsSolution } from "@/components/sections/PainVsSolution";
import { Pricing } from "@/components/sections/Pricing";
import { Workflow } from "@/components/sections/Workflow";
import { StickyWhatsAppCTA } from "@/components/StickyWhatsAppCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pb-24 sm:pb-0">
        <Hero />
        <PainVsSolution />
        <Workflow />
        <CRMShowcase />
        <Pricing />
        <BottomCTA />
      </main>
      <StickyWhatsAppCTA href="https://wa.me/515055787905" />
      <Footer />
    </>
  );
}
