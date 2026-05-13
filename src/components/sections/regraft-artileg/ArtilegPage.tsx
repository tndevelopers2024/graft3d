import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const workflowItems = [
    'Clinical assessment and detailed evaluation of the amputated lower limb',
    'Digital measurement using Einscan Medix',
    'Digital designing of the artificial leg and custom socket',
    'Fabrication using advanced manufacturing and 3D printing',
    'Trial fitting and functional alignment for comfort and performance',
    'Final adjustments and patient training for confident daily use',
];

const benefitItems = [
    'Customized fit for improved comfort',
    'Reduced pressure points due to bony interfaces',
    'Enhanced stability, balance, and gait efficiency',
    'Lightweight yet durable materials for long-term use',
    'Improved weight distribution through custom designed sockets',
    'Better control, mobility, and improved quality of life for the patient',
];

function ContactRow({
    icon,
    title,
    children,
}: {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1c78c3] text-white shadow-sm">
                {icon}
            </div>
            <div>
                <p className="text-xl font-bold text-[#166aaf]">{title}</p>
                <div className="text-base font-medium text-black">{children}</div>
            </div>
        </div>
    );
}

function InfoPanel({
    title,
    items,
    highlighted = false,
}: {
    title: string;
    items: string[];
    highlighted?: boolean;
}) {
    return (
        <section
            className={`rounded-2xl border border-[#4f8ee8] border-b-4 px-5 py-5 shadow-sm ${
                highlighted ? 'bg-[#cbe4f9]' : 'bg-[#f3f3f3]'
            }`}
        >
            <h2 className="border-b border-black/45 pb-3 font-sans text-2xl font-bold text-[#166aaf] md:text-[35px]">
                {title}
            </h2>
            <ul className="mt-5 space-y-4">
                {items.map((item) => (
                    <li key={item} className="flex gap-3 text-base font-medium leading-relaxed text-black md:text-[17px]">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#166aaf]" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function ArtilegPage() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#eaf5fc]">
                <Image
                    src="/images/regraft-artileg/hero-bg.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="container relative z-10 mx-auto grid min-h-[620px] max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2">
                    <div>
                        <div className="relative mb-4 h-[60px] w-[280px] md:h-[85px] md:w-[397px]">
                            <Image
                                src="/images/regraft-artileg/regraft-logo.png"
                                alt="ReGraft"
                                fill
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                        <h1 className="max-w-2xl text-[32px] font-bold leading-tight text-black md:text-[40px]">
                            ArtiLeg : Custom Artificial Leg & Socket Prosthetics
                        </h1>

                        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                            <Link href="/contact-us">
                                <Button className="h-12 rounded px-7 text-base font-semibold md:text-lg">
                                    Enquire now
                                </Button>
                            </Link>
                            <Link href="/contact-us">
                                <Button className="h-12 rounded px-7 text-base font-semibold md:text-lg">
                                    Book 3D Scanning Appointment
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-9 space-y-7">
                            <ContactRow icon={<Phone size={26} />} title="Call us now">
                                <a href="tel:+916374410703" className="hover:text-[#166aaf]">
                                    +91 6374410703
                                </a>
                                <span className="px-1">|</span>
                                <a href="tel:+919840478347" className="hover:text-[#166aaf]">
                                    +91 98404 78347
                                </a>
                            </ContactRow>
                            <ContactRow icon={<Mail size={26} />} title="Email Us at">
                                <a href="mailto:sales@graft3d.com" className="hover:text-[#166aaf]">
                                    sales@graft3d.com
                                </a>
                            </ContactRow>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative h-[300px] w-[300px] md:h-[430px] md:w-[430px]">
                            <Image
                                src="/images/regraft-artileg/artileg-prosthetics.png"
                                alt="Regraft ArtiLeg artificial leg socket prosthetics"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#06235c] px-4 py-12 text-center text-white md:py-14">
                <div className="mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold leading-tight md:text-[50px]">
                        Advanced Prosthetic Solutions for Enhanced Mobility
                    </h2>
                    <p className="mx-auto mt-7 max-w-[970px] text-lg font-medium leading-9 md:text-xl">
                        Regraft ArtiLeg offers high-quality artificial legs and sockets designed to restore mobility,
                        independence, and confidence for individuals with amputated lower limbs. Each prosthetic leg is
                        custom engineered to fit the unique anatomy and functional goals of the user, providing comfort,
                        stability, and long-term performance.
                    </p>
                </div>
            </section>

            <section className="bg-white px-4 py-12 md:py-14">
                <div className="mx-auto flex max-w-[1000px] flex-col gap-6">
                    <InfoPanel title="The Workflow Process" items={workflowItems} highlighted />
                    <InfoPanel title="Benefits for the Patient" items={benefitItems} />
                </div>
            </section>
        </>
    );
}
