import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.humerousImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'High-performance PEEK polymer with bone-like elasticity and radiolucency for clear post-op imaging.' },
    { title: 'Patient-Specific Fit', desc: 'Designed from the patient\'s own CT/DICOM data for sub-millimetre anatomical accuracy.' },
    { title: 'Biocompatible', desc: 'ISO-compliant biocompatible material proven safe for long-term implantation in orthopaedic applications.' },
    { title: 'High Strength', desc: 'Exceptional fatigue resistance and structural integrity suited for the mechanical demands of the upper limb.' },
];

const applications = [
    { title: 'Oncological Resection', desc: 'Limb-salvage reconstruction after bone tumour resection of the humerus.' },
    { title: 'Trauma & Fracture', desc: 'Severe comminuted fractures or bone loss where conventional fixation is insufficient.' },
    { title: 'Revision Surgery', desc: 'Reconstruction following failed implants or infections with significant bone deficit.' },
];

const faqItems = [
    { question: 'What is a custom humerus implant?', answer: 'A patient-specific 3D-printed implant designed from CT scans to replace or reconstruct the humerus bone, restoring upper limb function after resection or trauma.' },
    { question: 'Why use PEEK for humerus implants?', answer: 'PEEK offers bone-like elasticity, is radiolucent for post-op imaging, and is biocompatible — making it ideal for long-term upper limb implants.' },
    { question: 'How long does the custom implant process take?', answer: 'Typically 7–14 working days from CT scan submission to delivery of the sterilised implant.' },
    { question: 'Is this available in India?', answer: 'Yes. Graft3D Healthcare manufactures and supplies patient-specific PEEK humerus implants across India.' },
];

export default function HumerousImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Humerus Implants"
                titleAccent="India"
                description="Patient-specific PEEK humerus implants for upper limb reconstruction — designed from your CT data for a precise anatomical fit."
            />

            {/* Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The humerus is the long bone of the upper arm, connecting the shoulder to the elbow. Custom 3D-printed PEEK humerus implants are used in post-oncological resection, severe trauma, and revision surgeries where conventional fixation cannot restore bone continuity. Each implant is designed from the patient's DICOM data to match the native anatomy precisely.
                    </p>
                </div>
            </section>

            {/* Key Features */}
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

            {/* Clinical Applications */}
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

            {/* CTA */}
            <section className="py-16 bg-[#eaf6ff]">
                <div className="max-w-[1200px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started</h2>
                    <p className="text-gray-700 mb-8">Upload DICOM data or speak with our team to plan your patient-specific humerus implant.</p>
                    <a href="/get-quote" className="inline-block bg-[#1e73be] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#155d9e] transition-colors">Get Quote</a>
                    <a href="/book-demo" className="inline-block border-2 border-[#1e73be] text-[#1e73be] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors ml-4">Book Demo</a>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
                    <FaqAccordion items={faqItems} />
                </div>
            </section>
        </main>
    );
}
