import React from 'react';
import DigiprunHero from '@/components/sections/regraft/DigiprunHero';
import DigiprunAbout from '@/components/sections/regraft/DigiprunAbout';
import DigiprunInfoCards from '@/components/sections/regraft/DigiprunInfoCards';

export const metadata = {
  alternates: {
    canonical: '/regraft-digiprun',
  },
    title: 'ReGraft Digiprun | Patient-Specific Bone Reconstruction | Graft3D',
    description: 'Digiprun represents the next generation of digitally planned, patient-specific bone regrafts designed to restore anatomy, function, and aesthetics.',
};

export default function RegraftDigiprunPage() {
    return (
        <main>
            <DigiprunHero />
            <DigiprunAbout />
            <DigiprunInfoCards />
        </main>
    );
}
