import Hero from "@/components/sections/polymethyl-methacrylate-pmma/Hero";
import Overview from "@/components/sections/polymethyl-methacrylate-pmma/Overview";
import MechanicalProperties from "@/components/sections/polymethyl-methacrylate-pmma/MechanicalProperties";
import ClinicalApplications from "@/components/sections/polymethyl-methacrylate-pmma/ClinicalApplications";
import Sterilization from "@/components/sections/polymethyl-methacrylate-pmma/Sterilization";
import PrintingWithPmma from "@/components/sections/polymethyl-methacrylate-pmma/PrintingWithPmma";
import Certifications from "@/components/sections/polymethyl-methacrylate-pmma/Certifications";
import CtaSection from "@/components/sections/polymethyl-methacrylate-pmma/CtaSection";
import FaqSection from "@/components/sections/polymethyl-methacrylate-pmma/FaqSection";

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.pmma;

export default function PolymethylMethacrylatePmmaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <MechanicalProperties />
      <ClinicalApplications />
      <Sterilization />
      <PrintingWithPmma />
      <Certifications />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
