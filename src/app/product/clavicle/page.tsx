import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.clavicleImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Lightweight, high-fatigue-resistance PEEK matching the dynamic demands of the shoulder region.' },
    { title: 'Patient-Specific Fit', desc: 'CT-based digital design for sub-millimetre anatomical accuracy to the native clavicle.' },
    { title: 'Biocompatible', desc: 'ISO-compliant material proven safe for long-term implantation with excellent tissue tolerance.' },
    { title: 'Sterile Delivery', desc: 'Supplied fully sterilised and ready for intraoperative use with full traceability documentation.' },
];

const applications = [
    { title: 'Tumour Resection', desc: 'Limb-salvage reconstruction after clavicle bone tumour or metastatic lesion removal.' },
    { title: 'Severe Fractures', desc: 'Comminuted or segmental fractures where bone graft or plate fixation is not viable.' },
    { title: 'Failed Fixation', desc: 'Revision cases with significant bone loss following prior hardware failure or infection.' },
];

const faqItems = [
    { question: 'When is a clavicle implant needed?', answer: 'After tumour resection, severe comminuted fractures, or failed fixation where bone preservation is not possible.' },
    { question: 'What makes PEEK suitable for clavicle implants?', answer: 'Its lightweight nature, high fatigue resistance, and biocompatibility make it ideal for the dynamic shoulder region.' },
    { question: 'Is the implant custom-made?', answer: 'Yes — designed from the patient\'s own CT data for a precise anatomical fit.' },
    { question: 'Can PEEK clavicle implants be sterilised?', answer: 'Yes, PEEK is fully autoclavable and supplied sterile ready for intraoperative use.' },
];

export default function ClavicleImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Clavicle Implants"
                titleAccent="India"
                description="Custom PEEK clavicle implants for precise orthopaedic reconstruction — lightweight, biocompatible and patient-specific."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The clavicle (collarbone) connects the shoulder blade to the sternum and plays a key role in shoulder girdle mechanics. Custom PEEK clavicle implants provide anatomically accurate reconstruction for post-resection or severe fracture cases where conventional fixation is insufficient. Each implant is designed from the patient's own CT dataset to ensure optimal fit and surgical outcome.
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
                    <p className="text-gray-700 mb-8">Submit DICOM data or contact our team to begin planning your patient-specific clavicle implant.</p>
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
