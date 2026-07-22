import localFont from "next/font/local";
import Hero from "@/components/sections/elucis-in-india/Hero";
import Stats from "@/components/sections/elucis-in-india/Stats";
import Platforms from "@/components/sections/elucis-in-india/Platforms";
import Workflow from "@/components/sections/elucis-in-india/Workflow";
import Outcomes from "@/components/sections/elucis-in-india/Outcomes";
import Specialties from "@/components/sections/elucis-in-india/Specialties";
import WhyInvest from "@/components/sections/elucis-in-india/WhyInvest";
import EnterpriseSecurity from "@/components/sections/elucis-in-india/EnterpriseSecurity";
import TrustBadges from "@/components/sections/elucis-in-india/TrustBadges";
import Testimonials from "@/components/sections/elucis-in-india/Testimonials";
import LocalPartner from "@/components/sections/elucis-in-india/LocalPartner";
import ElucisInIndiaFaq from "@/components/sections/elucis-in-india/ElucisInIndiaFaq";

const inter = localFont({
    src: "../../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Elucis Family | Graft3D",
    description: "Advanced 3D VR Surgical Planning Platform for Hospitals in India.",
    alternates: {
        canonical: "https://graft3d.com/elucis-in-india",
    },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Elucis VR Surgical Planning Platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Elucis platform is an advanced 3D Virtual Reality solution that transforms medical imaging (CT/MRI) into immersive, patient-specific 3D models to assist surgeons and hospitals in India with preoperative planning."
      }
    },
    {
      "@type": "Question",
      "name": "How can Indian hospitals benefit from adopting Elucis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis helps hospitals enhance surgical precision, improve multidisciplinary collaboration, and elevate patient education. It integrates seamlessly with existing DICOM workflows to provide cost-effective and advanced medical visualization."
      }
    },
    {
      "@type": "Question",
      "name": "Are Elucis platforms compatible with existing hospital infrastructure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Elucis is designed to seamlessly integrate with standard medical imaging data (DICOM) and PACS systems commonly used across healthcare facilities in India, requiring minimal infrastructure overhead."
      }
    },
    {
      "@type": "Question",
      "name": "What medical specialties can use the Elucis platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis is highly beneficial across multiple specialties including craniomaxillofacial surgery, neurosurgery, orthopaedics, cardiovascular surgery, oncology, and trauma reconstruction."
      }
    },
    {
      "@type": "Question",
      "name": "How does Elucis improve patient education and consent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By visualizing patient-specific anatomy in an immersive 3D space, clinicians can easily explain complex conditions and surgical procedures to patients and their families, ensuring clearer understanding and informed consent."
      }
    },
    {
      "@type": "Question",
      "name": "Is local support and training available for hospitals in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Graft3D provides dedicated local support, guided onboarding, and clinical training for healthcare professionals in India to ensure a smooth transition to Virtual Reality surgical planning."
      }
    }
  ]
};

export default function ElucisFamilyPage() {
    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            <Stats />
            <Platforms />
            <Workflow />
            <Outcomes />
            <Specialties />
            <WhyInvest />
            <EnterpriseSecurity />
            <TrustBadges />
            <Testimonials />
            <LocalPartner />
            <ElucisInIndiaFaq />
        </main>
    );
}
