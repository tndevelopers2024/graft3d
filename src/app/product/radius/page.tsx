import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.radiusImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Biocompatible, radiolucent material with bone-like elasticity for forearm reconstruction.' },
    { title: 'Patient-Specific Fit', desc: 'Designed from CT data to match the native radius at proximal, mid-shaft, or distal segments.' },
    { title: 'Wrist Articulation', desc: 'Distal radius articular surface reconstructed to maintain wrist alignment and range of motion.' },
    { title: 'Hardware Compatible', desc: 'Designed for use with titanium screws and plates for secure intraoperative fixation.' },
];

const applications = [
    { title: 'Tumour Resection', desc: 'Replacement after bone tumour or metastatic lesion requiring partial or total radius resection.' },
    { title: 'Bone Loss from Fracture', desc: 'Severe fractures with segmental loss where bone graft or conventional fixation is not viable.' },
    { title: 'Revision Surgery', desc: 'Reconstruction following failed hardware or infection with significant radial bone deficit.' },
];

const faqItems = [
    { question: 'What is a radius implant used for?', answer: 'Replacing the radius bone after tumour resection, severe fracture with bone loss, or failed hardware requiring bone replacement.' },
    { question: 'How is wrist function preserved?', answer: 'The implant is designed to reconstruct the distal radius articular surface, maintaining wrist alignment and range of motion.' },
    { question: 'Is PEEK compatible with metal fixation hardware?', answer: 'Yes, PEEK implants can be combined with titanium screws and plates for secure fixation.' },
    { question: 'What is the lead time?', answer: '7–14 working days from CT data submission to sterile implant delivery.' },
];

export default function RadiusImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Radius Implants"
                titleAccent="India"
                description="Patient-specific PEEK radius implants for forearm reconstruction — preserving wrist function with precise anatomical design."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The radius is the primary load-bearing bone of the forearm and forms a critical part of the wrist joint. Custom PEEK radius implants address distal, mid-shaft, and proximal resection scenarios, restoring forearm anatomy and wrist articulation. Each implant is designed from the patient's DICOM CT data in collaboration with the surgical team.
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
                    <p className="text-gray-700 mb-8">Upload DICOM data or contact our team to begin planning your patient-specific radius implant.</p>
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
