import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.metacarpalImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Fine-detail 3D printing in PEEK suited to the compact, precise geometry of metacarpal bones.' },
    { title: 'Patient-Specific Fit', desc: 'CT-based design matched to the patient\'s native metacarpal length and cross-section.' },
    { title: 'Grip Restoration', desc: 'Custom design combined with surgical planning to restore hand architecture and grip strength.' },
    { title: 'Revisable', desc: 'A revised implant can be manufactured from updated CT data if required.' },
];

const applications = [
    { title: 'Tumour Resection', desc: 'Replacement after metacarpal bone tumour or metastatic lesion resection.' },
    { title: 'Crush & Blast Injuries', desc: 'Severe hand trauma with metacarpal bone loss where reconstruction is required.' },
    { title: 'Osteomyelitis', desc: 'Reconstruction following debridement of infected metacarpal bone with significant deficit.' },
];

const faqItems = [
    { question: 'What are metacarpal implants used for?', answer: 'Replacing one or more metacarpal bones lost to tumour resection, severe crush injury, or osteomyelitis with bone loss.' },
    { question: 'Will hand function be restored?', answer: 'Custom design combined with surgical fixation aims to restore grip strength and finger alignment for functional recovery.' },
    { question: 'How small can the implant be manufactured?', answer: 'PEEK 3D printing achieves very fine detail — suitable for the precise, compact geometry of metacarpal bones.' },
    { question: 'Can the implant be revised if needed?', answer: 'Yes, a revised implant can be designed and manufactured if required based on updated CT data.' },
];

export default function MetacarpalImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Metacarpal Implants"
                titleAccent="India"
                description="Custom PEEK metacarpal implants for hand reconstruction — restoring grip strength and finger alignment with precise anatomy."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        Metacarpal bones form the structural framework of the palm, connecting the wrist to the fingers. Patient-specific PEEK metacarpal implants restore hand architecture and grip function after tumour resection, severe crush injuries, or osteomyelitis with bone loss. Each implant is manufactured to sub-millimetre accuracy from the patient's CT data.
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
                    <p className="text-gray-700 mb-8">Submit CT data or contact our team to plan your patient-specific metacarpal implant.</p>
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
