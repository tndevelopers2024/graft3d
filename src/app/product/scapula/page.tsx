import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.scapulaImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Radiolucent, biocompatible PEEK enabling post-op CT/MRI imaging without artefact.' },
    { title: 'Patient-Specific Fit', desc: 'Designed from DICOM CT data with attachment points matched to the remaining bone and musculature.' },
    { title: 'Shoulder Stability', desc: 'Engineered to restore shoulder girdle stability and support muscle reattachment for functional recovery.' },
    { title: 'High Strength', desc: 'Fatigue-resistant construction suited for the dynamic mechanical environment of the shoulder.' },
];

const applications = [
    { title: 'Sarcoma Resection', desc: 'Limb-salvage reconstruction after scapular sarcoma or bone tumour removal.' },
    { title: 'Severe Trauma', desc: 'Reconstruction of scapular fractures with significant bone loss not amenable to conventional fixation.' },
    { title: 'Shoulder Girdle Reconstruction', desc: 'Restoring scapulothoracic anatomy and shoulder mechanics following complex resections.' },
];

const faqItems = [
    { question: 'What conditions require a scapula implant?', answer: 'Primarily used in limb-salvage surgery after sarcoma resection of the scapula, or in cases of severe fracture with bone loss.' },
    { question: 'How is the scapula implant designed?', answer: 'From DICOM CT data, a virtual surgical plan is created and the implant is digitally designed for exact anatomical match.' },
    { question: 'What is the fixation method?', answer: 'The implant is designed with fixation holes matched to the remaining bone and surrounding musculature attachment points.' },
    { question: 'What post-op imaging is possible with PEEK?', answer: 'PEEK is radiolucent — CT and MRI imaging is fully compatible without artefact, enabling clear post-surgical monitoring.' },
];

export default function ScapulaImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Scapula Implants"
                titleAccent="India"
                description="Patient-specific PEEK scapula implants for shoulder reconstruction — restoring anatomy, stability and function."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The scapula (shoulder blade) is central to shoulder girdle mechanics and muscle attachment. Custom PEEK scapula implants support complex oncological resections and severe trauma cases, enabling shoulder stability and functional recovery. Implants are digitally designed from the patient's CT data with attachment points planned in collaboration with the surgical team.
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
                    <p className="text-gray-700 mb-8">Contact our team or upload DICOM data to begin planning your patient-specific scapula implant.</p>
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
