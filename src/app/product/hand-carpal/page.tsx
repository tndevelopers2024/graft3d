import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.handCarpalImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Biocompatible PEEK replicating the articular geometry of carpal bones for joint kinematics.' },
    { title: 'Any Carpal Bone', desc: 'Individual or multi-carpal designs — scaphoid, lunate, capitate and all 8 carpal bones supported.' },
    { title: 'Wrist Mobility', desc: 'Articular surface designed to replicate native carpal geometry, maintaining wrist joint motion.' },
    { title: 'CT & MRI Compatible', desc: 'Radiolucent PEEK allows clear post-operative imaging without metal artefact.' },
];

const applications = [
    { title: 'Avascular Necrosis', desc: 'Replacement of necrotic carpal bones (e.g. Kienböck\'s disease affecting the lunate).' },
    { title: 'Tumour Resection', desc: 'Reconstruction after carpal bone tumour or metastatic lesion removal.' },
    { title: 'Post-Traumatic Bone Loss', desc: 'Carpal reconstruction following severe wrist trauma with bone loss not amenable to grafting.' },
];

const faqItems = [
    { question: 'Which carpal bones can be replaced?', answer: 'Any of the 8 carpal bones — scaphoid, lunate, triquetrum, pisiform, trapezium, trapezoid, capitate, or hamate — individually or in combination.' },
    { question: 'How is wrist mobility preserved?', answer: 'The implant geometry is designed to replicate the articular surfaces of the native carpal bone, maintaining joint kinematics.' },
    { question: 'What conditions lead to carpal replacement?', answer: 'Avascular necrosis, tumour resection, Kienböck\'s disease, or post-traumatic bone loss.' },
    { question: 'Is CT or MRI used for planning?', answer: 'CT is preferred for bony geometry. MRI can supplement for soft tissue and vascular assessment.' },
];

export default function HandCarpalImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Hand Carpal Implants"
                titleAccent="India"
                description="Custom PEEK carpal bone implants for wrist reconstruction — preserving mobility with precise articular geometry."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The wrist is formed by eight carpal bones arranged in two rows, enabling complex multi-directional motion. Patient-specific PEEK carpal implants allow reconstruction of individual or multiple carpal bones while preserving wrist joint kinematics. Implants are designed from CT data, with articular surfaces matched to the native geometry for optimal functional outcome.
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
                    <p className="text-gray-700 mb-8">Submit CT/MRI data or contact our team to plan your patient-specific carpal implant.</p>
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
