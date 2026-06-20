import Hero from "@/components/sections/asthi-bone-like-3d-printed-training-models/Hero";
import OverviewBenefits from "@/components/sections/asthi-bone-like-3d-printed-training-models/OverviewBenefits";
import RangeSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/RangeSection";
import VideosSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/VideosSection";
import BlogsSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/BlogsSection";
import FaqSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/FaqSection";

export const metadata = {
  alternates: {
    canonical: '/asthi-bone-like-3d-printed-training-models',
  },
  title: "Asthi - Bone-Like 3D Printed Training Models - Graft 3D",
  description: "Asthi- 3D Printed Anatomical Models Plan .Train .Visualize.",
};

export default function AsthiTrainingModelsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <OverviewBenefits />
      <RangeSection />
      <VideosSection />
      <BlogsSection />
      <FaqSection />
    </main>
  );
}
