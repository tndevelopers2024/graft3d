import Hero from "@/components/sections/elucis/Hero";
import Overview from "@/components/sections/elucis/Overview";
import Features from "@/components/sections/elucis/Features";
import Workflow from "@/components/sections/elucis/Workflow";
import ProductVariations from "@/components/sections/elucis/ProductVariations";
import Applications from "@/components/sections/elucis/Applications";
import Benefits from "@/components/sections/elucis/Benefits";

/**
 * Metadata for Elucis XR Platform Page
 */
export const metadata = {
  alternates: {
    canonical: '/elucis',
  },
  title: "Elucis - Advanced Medical XR Platform | Graft 3D",
  description: "Elucis transforms how medical professionals interact with patient anatomy. Immersive 3D visualization, surgical planning, and clinical guidance.",
  openGraph: {
    title: "Elucis - Advanced Medical XR Platform",
    description: "Visualize, plan, and execute surgeries with precision using our advanced XR platform.",
    url: "https://graft3d.com/elucis",
    images: ["/images/elucis/hero-bg.png"],
  },
};

/**
 * Elucis Landing Page
 */
export default function ElucisPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <Features />
      <Workflow />
      <ProductVariations />
      <Applications />
      <Benefits />
    </main>
  );
}
