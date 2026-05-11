import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.tibiaImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Elastic modulus closer to bone than titanium, reducing stress shielding in tibial reconstruction.' },
    { title: 'Radiolucent', desc: 'Full CT and MRI compatibility post-surgery — no metal artefact obscuring healing assessment.' },
    { title: 'Segmental or Total', desc: 'Proximal, mid-shaft, or distal segment designs — and total tibia constructs for extensive resections.' },
    { title: 'ISO Compliant', desc: 'Manufactured under controlled conditions to applicable ISO standards for orthopaedic implants.' },
];

const applications = [
    { title: 'Bone Tumour Resection', desc: 'Limb-salvage reconstruction after tibial sarcoma or metastatic bone tumour removal.' },
    { title: 'Severe Bone Loss', desc: 'Tibial reconstruction in complex open fractures or infections with significant diaphyseal deficit.' },
    { title: 'Revision Arthroplasty', desc: 'Tibial reconstruction where bone stock is severely compromised in revision knee cases.' },
];

const faqItems = [
    { question: 'What is a custom tibia implant?', answer: 'A patient-specific 3D-printed PEEK implant designed from the patient\'s CT to replace a segment or all of the tibia after resection or severe bone loss.' },
    { question: 'How does PEEK compare to titanium for tibial implants?', answer: 'PEEK has an elastic modulus closer to bone, reducing stress shielding. It is also radiolucent, enabling clearer post-operative imaging.' },
    { question: 'Can the ankle joint be preserved?', answer: 'For distal tibia cases, the implant can be designed to preserve the tibiotalar joint or integrate with ankle replacement components.' },
    { question: 'What regulatory standards do the implants meet?', answer: 'Graft3D PEEK implants are manufactured using medical-grade PEEK under controlled conditions compliant with applicable ISO standards.' },
];

export default function TibiaImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Tibia Implants"
                titleAccent="India"
                description="Patient-specific PEEK tibia implants for lower limb reconstruction — bone-like modulus, radiolucent, ISO compliant."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The tibia (shin bone) is the primary weight-bearing bone of the lower leg, forming the knee joint above and the ankle joint below. Custom PEEK tibia implants address proximal, mid-shaft, and distal reconstruction scenarios following tumour resection or severe bone loss. PEEK's elastic modulus — closer to bone than titanium — reduces stress shielding, promoting better long-term outcomes. Each implant is designed from the patient's DICOM CT data.
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
                    <p className="text-gray-700 mb-8">Upload DICOM data or contact our team to begin planning your patient-specific tibia implant.</p>
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
