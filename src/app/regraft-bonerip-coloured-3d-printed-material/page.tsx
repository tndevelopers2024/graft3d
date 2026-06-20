import Hero from "@/components/sections/regraft-bonerip-coloured-3d-printed-material/Hero";
import OverviewBenefits from "@/components/sections/regraft-bonerip-coloured-3d-printed-material/OverviewBenefits";
import RangeSection from "@/components/sections/regraft-bonerip-coloured-3d-printed-material/RangeSection";
import VideosSection from "@/components/sections/regraft-bonerip-coloured-3d-printed-material/VideosSection";
import BlogsSection from "@/components/sections/regraft-bonerip-coloured-3d-printed-material/BlogsSection";
import FaqSection from "@/components/sections/regraft-bonerip-coloured-3d-printed-material/FaqSection";

export const metadata = {
  alternates: {
    canonical: '/regraft-bonerip-coloured-3d-printed-material',
  },
  title: "ReGraft Bonerip - Coloured 3D Printed Material - Graft 3D",
  description: "ReGraft Bonerip- Coloured 3D Printed Anatomical Models Plan .Train .Visualize.",
};

export default function RegraftBoneripColouredPage() {
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
