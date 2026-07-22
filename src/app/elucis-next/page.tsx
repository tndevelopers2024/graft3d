import Hero from "@/components/sections/elucis-next/Hero";
import Workflow from "@/components/sections/elucis-next/Workflow";
import Features from "@/components/sections/elucis-next/Features";
import UseCases from "@/components/sections/elucis-next/UseCases";
import Benefits from "@/components/sections/elucis-next/Benefits";
import TrustBadges from "@/components/sections/elucis-next/TrustBadges";
import Testimonials from "@/components/sections/elucis-next/Testimonials";
import AcademicLicensing from "@/components/sections/elucis-next/AcademicLicensing";
import localFont from "next/font/local";
import ElucisNextFaq from "@/components/sections/elucis-next/ElucisNextFaq";

export const metadata = {
    title: "Elucis Next - Research & Education Edition | Graft3D",
    description: "Convert DICOM imaging into immersive 3D anatomy for research, teaching, training and methodology development.",
    alternates: {
        canonical: "https://graft3d.com/elucis-next",
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
      "name": "What is Elucis NEXT, and how does it improve surgical planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis NEXT is an advanced Virtual Reality surgical planning platform that transforms CT and MRI scans into immersive, patient-specific 3D models. Surgeons can visualize anatomy, perform VR-based segmentation, and plan complex procedures with greater precision before entering the operating room."
      }
    },
    {
      "@type": "Question",
      "name": "Can surgeons perform segmentation directly in Virtual Reality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Elucis NEXT enables VR-based segmentation, allowing surgeons to isolate anatomical structures, measure pathology, cut, edit, and plan procedures within an immersive 3D environment. This improves spatial understanding and enhances preoperative planning for complex cases."
      }
    },
    {
      "@type": "Question",
      "name": "Which clinical specialties benefit from Elucis NEXT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis NEXT supports a wide range of specialties, including craniomaxillofacial surgery, neurosurgery, orthopaedics, ENT, oncology, vascular surgery, trauma, and plastic & reconstructive surgery, where detailed 3D visualization and surgical planning are essential."
      }
    },
    {
      "@type": "Question",
      "name": "How does Elucis NEXT process CT and MRI data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The platform imports standard DICOM datasets and provides advanced image processing capabilities, including manual and automatic image registration, along with 2D, 3D, and 4D visualization. This allows clinicians to evaluate anatomy accurately before planning treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Does Elucis NEXT support both Virtual Reality and desktop workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Elucis NEXT combines an immersive Virtual Reality environment with powerful desktop interaction tools. Clinicians can seamlessly switch between desktop planning and VR visualization based on their workflow and clinical requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What is the advantage of 4D modelling in Elucis NEXT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elucis NEXT includes advanced 4D modelling capabilities that allow clinicians to evaluate anatomical motion and time-dependent structures. This provides deeper clinical insight for cases involving dynamic anatomy and functional assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Can multiple clinicians collaborate on the same surgical case?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Elucis NEXT supports multiuser collaboration, enabling surgeons, radiologists, and multidisciplinary teams to review, discuss, and plan patient cases together in a shared 3D environment, regardless of their location."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Elucis NEXT over conventional medical imaging software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike traditional imaging software, Elucis NEXT combines Virtual Reality visualization, VR-based segmentation, advanced image processing, 4D modelling, desktop interaction, and real-time collaboration within a single platform. This integrated workflow helps improve surgical confidence, communication, and clinical decision-making."
      }
    }
  ]
};

export default function ElucisNextPage() {
    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            <Workflow />
            <Features />
            <UseCases />
            <TrustBadges />
            <Benefits />
            <Testimonials />
            <AcademicLicensing />
            <ElucisNextFaq />
        </main>
    );
}
