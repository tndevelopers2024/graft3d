import localFont from "next/font/local";
import Hero from "@/components/sections/elucis-go/Hero";
import WhyElucisGo from "@/components/sections/elucis-go/WhyElucisGo";
import HowItWorks from "@/components/sections/elucis-go/HowItWorks";
import ClinicalUse from "@/components/sections/elucis-go/ClinicalUse";
import Specialties from "@/components/sections/elucis-go/Specialties";
import About from "@/components/sections/elucis-go/About";
import Testimonials from "@/components/sections/elucis-go/Testimonials";
import PilotProgram from "@/components/sections/elucis-go/PilotProgram";
import ElucisGoFaq from "@/components/sections/elucis-go/ElucisGoFaq";

export const metadata = {
    title: "Elucis Go - VR Surgical Planning Without Complex Infrastructure",
    description:
        "Experience patient-specific anatomy anywhere using an untethered VR headset. Review, discuss and plan complex cases with unmatched clarity and ease.",
    alternates: {
        canonical: "https://graft3d.com/elucis-go",
    },
};

const inter = localFont({
    src: "../../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
    display: "swap",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Elucis GO and who is it designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis GO is an immersive Virtual Reality medical visualization platform that allows clinicians to interact with patient-specific 3D anatomical models directly within a VR headset. It is ideal for surgeons, hospitals, educators, and multidisciplinary teams looking to improve anatomical understanding and clinical communication without requiring a desktop workstation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Elucis GO improve surgical planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis GO enables surgeons to review patient-specific anatomy in a fully immersive 3D environment before surgery. By enhancing depth perception and spatial understanding, clinicians can better evaluate complex anatomical relationships and discuss procedural strategies with greater confidence."
      }
    },
    {
      "@type": "Question",
      "name": "Can Elucis GO be used for patient education and informed consent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The immersive VR experience helps patients visualize their own anatomy and better understand their diagnosis, planned procedure, and expected outcomes. This improves communication between clinicians and patients while supporting informed decision-making."
      }
    },
    {
      "@type": "Question",
      "name": "Does Elucis GO support collaboration between surgeons and hospitals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Elucis GO supports multi-user virtual collaboration, allowing surgeons, radiologists, and healthcare teams to review patient-specific 3D models together, even when working from different locations. This improves multidisciplinary planning and clinical discussions."
      }
    },
    {
      "@type": "Question",
      "name": "Which medical specialties benefit from Elucis GO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis GO is suitable for specialties including craniomaxillofacial surgery, neurosurgery, orthopaedics, ENT, oncology, cardiovascular surgery, vascular surgery, plastic surgery, and trauma, where understanding complex 3D anatomy is essential for treatment planning."
      }
    },
    {
      "@type": "Question",
      "name": "Can clinicians perform measurements and interact with anatomical models in VR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Elucis GO provides interactive VR tools that allow clinicians to rotate, isolate, explore, and measure patient-specific anatomical structures. These capabilities help refine surgical understanding while maintaining a simple and intuitive workflow."
      }
    },
    {
      "@type": "Question",
      "name": "How is Elucis GO different from conventional 3D imaging software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike conventional medical imaging software displayed on a flat monitor, Elucis GO offers immersive 3D medical visualization within a VR headset. This allows clinicians to naturally interact with anatomical models, improving spatial awareness and enhancing clinical collaboration."
      }
    },
    {
      "@type": "Question",
      "name": "Why should hospitals choose Elucis GO for immersive medical visualization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis GO provides an accessible entry into Virtual Reality surgical planning and collaboration by enabling clinicians to visualize patient-specific anatomy, improve multidisciplinary communication, enhance medical education, and support better clinical decision-making—all without the need for a full desktop planning workflow."
      }
    }
  ]
};

export default function ElucisGoPage() {
    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            <WhyElucisGo />
            <HowItWorks />
            <ClinicalUse />
            <Specialties />
            <About />
            <Testimonials />
            <PilotProgram />
            <ElucisGoFaq />
        </main>
    );
}
