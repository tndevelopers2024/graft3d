import { PAGE_METADATA } from '@/lib/metadata';
import BannerCarousel from "../components/sections/home/BannerCarousel";
import AboutSection from "../components/sections/home/AboutSection";
import StatsSection from "../components/sections/home/StatsSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import PackagesSection from "../components/sections/home/PackagesSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import DemoSection from "../components/sections/home/DemoSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import CustomersSection from "../components/sections/home/CustomersSection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";
import BlogsSection from "../components/sections/home/BlogsSection";
import HomeFaqSection from "../components/sections/home/HomeFaqSection";

export const metadata = PAGE_METADATA.home;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Graft3D Health Care Solutions Pvt. Ltd.",
    "url": "https://graft3d.com/",
    "logo": "https://graft3d.com/wp-content/uploads/2024/01/graft3d-logo.png",
    "description": "Graft3D provides healthcare 3D printing solutions, medical image segmentation, patient-specific implants, surgical planning, and custom medical device design services for hospitals and surgeons.",
    "telephone": "+91-9840478347",
    "email": "sales@graft3d.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4/261, 1st Floor, Rajas Towers, Medavakkam Main Road, Kovilambakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600129",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "200"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Arun"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The medical image segmentation and 3D printing workflow provided by Graft3D significantly improved our surgical planning process with excellent precision and support.",
        "publisher": {
          "@type": "Organization",
          "name": "Graft3D"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Prasanna"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Graft3D delivers reliable patient-specific medical solutions with high-quality anatomical models and excellent turnaround time for clinical workflows.",
        "publisher": {
          "@type": "Organization",
          "name": "Graft3D"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Healthcare Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Their expertise in medical 3D printing, surgical guides, and implant design has been extremely valuable for complex surgical cases.",
        "publisher": {
          "@type": "Organization",
          "name": "Graft3D"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/graft3d/",
      "https://www.instagram.com/graft3d/",
      "https://www.youtube.com/"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BannerCarousel  />
      <AboutSection />
      <StatsSection />
      <DemoSection />
      <ProductsSection />
      <PackagesSection />
      <ServicesSection />
      <ProcessSection />
      <CustomersSection />

      <TestimonialsSection />
      <BlogsSection />
      <HomeFaqSection />
    </main>
  );
}
