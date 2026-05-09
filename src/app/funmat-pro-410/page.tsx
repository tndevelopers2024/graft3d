import Hero from "@/components/sections/funmat-pro-410/Hero";
import Overview from "@/components/sections/funmat-pro-410/Overview";
import Applications from "@/components/sections/funmat-pro-410/Applications";
import TechnologyAdvantage from "@/components/sections/funmat-pro-410/TechnologyAdvantage";
import ImpactOutcomes from "@/components/sections/funmat-pro-410/ImpactOutcomes";
import CaseApplication from "@/components/sections/funmat-pro-410/CaseApplication";
import TechnicalParameters from "@/components/sections/funmat-pro-410/TechnicalParameters";
import CoreFunctions from "@/components/sections/funmat-pro-410/CoreFunctions";
import WhyChoose from "@/components/sections/funmat-pro-410/WhyChoose";
import CtaSection from "@/components/sections/funmat-pro-410/CtaSection";
import FunmatFaq from "@/components/sections/funmat-pro-410/FunmatFaq";

import { PAGE_METADATA } from '@/lib/metadata';
export const metadata = PAGE_METADATA.funmatPro410;

export default function FunmatPro410Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <Applications />
      <TechnologyAdvantage />
      <ImpactOutcomes />
      <CaseApplication />
      <TechnicalParameters />
      <CoreFunctions />
      <WhyChoose />
      <FunmatFaq />
      <CtaSection />
    </main>
  );
}
