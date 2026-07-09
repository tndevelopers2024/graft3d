import { PAGE_METADATA } from "@/lib/metadata";
import AboutSection from "../components/sections/home/AboutSection";
import BannerCarousel from "../components/sections/home/BannerCarousel";
import BlogsSection from "../components/sections/home/BlogsSection";
import CustomersSection from "../components/sections/home/CustomersSection";
import DemoSection from "../components/sections/home/DemoSection";
import HomeFaqSection from "../components/sections/home/HomeFaqSection";
import PackagesSection from "../components/sections/home/PackagesSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import StatsSection from "../components/sections/home/StatsSection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";

export const metadata = PAGE_METADATA.home;

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Graft3D Health Care Solutions Pvt. Ltd.",
        url: "https://graft3d.com/",
        logo: "https://graft3d.com/wp-content/uploads/2024/01/graft3d-logo.png",
        description:
            "Graft3D provides healthcare 3D printing solutions, medical image segmentation, patient-specific implants, surgical planning, and custom medical device design services for hospitals and surgeons.",
        telephone: "+91-9840478347",
        email: "sales@graft3d.com",
        address: {
            "@type": "PostalAddress",
            streetAddress:
                "4/261, 1st Floor, Rajas Towers, Medavakkam Main Road, Kovilambakkam",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600129",
            addressCountry: "IN",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "200",
        },
        sameAs: [
            "https://www.linkedin.com/company/graft3d/",
            "https://www.instagram.com/graft3d/",
            "https://www.youtube.com/",
        ],
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BannerCarousel />
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
