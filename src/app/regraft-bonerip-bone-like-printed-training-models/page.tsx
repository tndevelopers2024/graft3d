import Hero from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/Hero";
import OverviewBenefits from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/OverviewBenefits";
import RangeSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/RangeSection";
import VideosSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/VideosSection";
import BlogsSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/BlogsSection";
import FaqSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/FaqSection";

export const metadata = {
  alternates: {
    canonical: '/regraft-bonerip-bone-like-printed-training-models',
  },
  title: "ReGraft Bonerip - Bone-Like 3D Printed Training Models - Graft 3D",
  description: "ReGraft Bonerip- 3D Printed Anatomical Models Plan .Train .Visualize.",
};

export default function RegraftBoneripTrainingModelsPage() {
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
