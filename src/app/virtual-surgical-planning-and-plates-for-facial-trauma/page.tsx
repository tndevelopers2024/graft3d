import { PAGE_METADATA } from '@/lib/metadata';
import VirtualSurgicalPlanningClinical from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningClinical";
import VirtualSurgicalPlanningFaq from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningFaq";
import VirtualSurgicalPlanningContact from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningContact";
import VirtualSurgicalPlanningHero from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningHero";
import VirtualSurgicalPlanningOverview from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningOverview";
import VirtualSurgicalPlanningManagement from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningManagement";
import VirtualSurgicalPlanningAdvantages from "@/components/sections/virtual-surgical-planning/VirtualSurgicalPlanningAdvantages";

export const metadata = PAGE_METADATA.facialTraumaVsp;

export default function VirtualSurgicalPlanningPage() {
    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <VirtualSurgicalPlanningHero />
            <VirtualSurgicalPlanningOverview />
            <VirtualSurgicalPlanningManagement />
            <VirtualSurgicalPlanningAdvantages />
            <VirtualSurgicalPlanningClinical />
            <VirtualSurgicalPlanningFaq />
            <VirtualSurgicalPlanningContact />
        </main>
    );
}
