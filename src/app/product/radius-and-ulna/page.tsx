import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.radiusUlnaImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Biocompatible, radiolucent PEEK for forearm reconstruction with bone-like mechanical properties.' },
    { title: 'Combined Design', desc: 'Radius and ulna implants designed together to maintain correct inter-osseous spacing and forearm rotation.' },
    { title: 'Sub-mm Accuracy', desc: 'CT-based digital design achieves sub-millimetre precision for both bones simultaneously.' },
    { title: 'Sterile Delivery', desc: 'Both implants supplied as a sterilised set with surgical guides and documentation.' },
];

const applications = [
    { title: 'En-bloc Resection', desc: 'Combined reconstruction after tumour or infection requiring removal of both forearm bones.' },
    { title: 'Severe Forearm Trauma', desc: 'Segmental bone loss from high-energy injuries where both radius and ulna are affected.' },
    { title: 'Congenital Cases', desc: 'Forearm reconstruction in select congenital conditions with significant bony abnormality.' },
];

const faqItems = [
    { question: 'When are combined radius and ulna implants used?', answer: 'In cases where both forearm bones are affected by tumour, severe trauma, or infection requiring en-bloc resection.' },
    { question: 'Can forearm rotation be preserved?', answer: 'The implant is designed with the surgical team to maximise preservation of the radio-ulnar articulation where possible.' },
    { question: 'How precise is the fit?', answer: 'Sub-millimetre accuracy is achieved via CT-based digital design and high-precision 3D printing.' },
    { question: 'How do I get started?', answer: 'Submit DICOM scans via our upload portal and our team will prepare a virtual surgical plan within 5 working days.' },
];

export default function RadiusUlnaImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Radius & Ulna Implants"
                titleAccent="India"
                description="Custom PEEK forearm implants for combined radius and ulna reconstruction — designed together for correct anatomy and forearm function."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The radius and ulna form the forearm and work together to enable rotation and load transfer from the wrist to the elbow. When both bones require replacement — following tumour resection, severe trauma, or infection — a combined patient-specific PEEK implant set preserves inter-osseous anatomy and supports recovery of forearm function. Each set is co-designed from the patient's CT data.
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
                    <p className="text-gray-700 mb-8">Upload DICOM scans or speak with our team to plan your patient-specific radius and ulna implants.</p>
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
