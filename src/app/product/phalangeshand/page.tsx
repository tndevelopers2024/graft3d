import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.phalangesImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'High-precision PEEK 3D printing achieving fine detail for compact finger bone geometry.' },
    { title: 'All Phalanges Supported', desc: 'Proximal, middle, and distal phalanges across any finger — single or multi-phalanx sets.' },
    { title: 'Length Accuracy', desc: 'Sub-millimetre length and diameter matching to the native bone from CT data.' },
    { title: 'Fixation Flexibility', desc: 'Designed for intramedullary or plate-screw fixation in coordination with the surgeon.' },
];

const applications = [
    { title: 'Tumour Resection', desc: 'Replacing phalanges after bone tumour or enchondroma resection in fingers.' },
    { title: 'Trauma Reconstruction', desc: 'Severe crush or blast injuries with phalangeal bone loss.' },
    { title: 'Infection Debridement', desc: 'Reconstruction after osteomyelitis debridement requiring phalangeal replacement.' },
];

const faqItems = [
    { question: 'What is a phalangeal implant?', answer: 'A custom 3D-printed PEEK implant that replaces a finger bone (proximal, middle, or distal phalanx) to restore finger anatomy and function.' },
    { question: 'Can multiple phalanges be replaced?', answer: 'Yes — single or multiple phalanges across one or several fingers can be designed and supplied as a set.' },
    { question: 'How accurate is the implant size?', answer: 'CT-based design achieves sub-millimetre accuracy, ensuring the implant matches the patient\'s native bone length and diameter.' },
    { question: 'What fixation is used for finger implants?', answer: 'Typically intramedullary fixation or plate-screw constructs, designed in coordination with the operating surgeon.' },
];

export default function PhalangesImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Phalanges Hand Implants"
                titleAccent="India"
                description="Precision PEEK finger bone implants for hand reconstruction — sub-millimetre accuracy for every phalangeal segment."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        Phalanges are the 14 bones forming the fingers of each hand — three per finger (proximal, middle, distal) and two for the thumb. Custom PEEK phalangeal implants restore finger length, alignment, and function after resection or trauma. The compact geometry of finger bones demands high-precision manufacturing, which PEEK 3D printing achieves at sub-millimetre accuracy from the patient's CT data.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-semibold text-[#1e73be] mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Clinical Applications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {applications.map((a) => (
                            <div key={a.title} className="border-l-4 border-[#1e73be] pl-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{a.title}</h3>
                                <p className="text-gray-600 text-sm">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#eaf6ff]">
                <div className="max-w-[1200px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started</h2>
                    <p className="text-gray-700 mb-8">Upload CT data or contact our team to plan your patient-specific phalangeal implant.</p>
                    <a href="/get-quote" className="inline-block bg-[#1e73be] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#155d9e] transition-colors">Get Quote</a>
                    <a href="/book-demo" className="inline-block border-2 border-[#1e73be] text-[#1e73be] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors ml-4">Book Demo</a>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
                    <FaqAccordion items={faqItems} />
                </div>
            </section>
        </main>
    );
}
