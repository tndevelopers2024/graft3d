import BoneripHero from '@/components/sections/regraft/BoneripHero';
import BoneripAbout from '@/components/sections/regraft/BoneripAbout';
import BoneripFeatures from '@/components/sections/regraft/BoneripFeatures';
import BoneripHealthcareBranches from '@/components/sections/regraft/BoneripHealthcareBranches';
import BoneripBlogs from '@/components/sections/regraft/BoneripBlogs';
import BoneripFAQ from '@/components/sections/regraft/BoneripFAQ';

import { PAGE_METADATA } from '@/lib/metadata';
export const metadata = PAGE_METADATA.regraftBonerip;

export default function RegraftBoneripPage() {
    return (
        <main>
            <BoneripHero />
            <BoneripAbout />
            <BoneripFeatures />
            <BoneripBlogs />
            <BoneripHealthcareBranches />
            <BoneripFAQ />
            {/* Additional sections can be added here later */}
        </main>
    );
}
