import React from "react";

import HeroSection from "@/components/sections/temporomandibular-joint/HeroSection";
import Overview from "@/components/sections/temporomandibular-joint/Overview";
import ThemodernTMJProthesis from "@/components/sections/temporomandibular-joint/ThemodernTMJProthesis";
import MaterialAdvantagesSection from "@/components/sections/temporomandibular-joint/MaterialAdvantagesSection";
import AdvantagesOf3DPrintedTMJ from "@/components/sections/temporomandibular-joint/AdvantagesOf3DPrintedTMJ";
import FaqSection from "@/components/sections/temporomandibular-joint/FaqSection";
import BottomCta from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/BottomCta";

export const metadata = {
  alternates: {
    canonical: '/temporomandibular-joint',
  },
    title: "TMJ Reconstruction with 3D Printed Prosthesis | Graft3D",
    description:
        "Advanced TMJ reconstruction using custom 3D-printed prosthesis for precision, durability, and improved patient outcomes.",
};

export default function TMJPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full font-poppins">

            <HeroSection />

            <Overview />

            <ThemodernTMJProthesis />

            <MaterialAdvantagesSection />

            <AdvantagesOf3DPrintedTMJ />

            <FaqSection />

            <BottomCta />
              
        </main>
    );
}