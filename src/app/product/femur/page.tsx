import PageHero from '@/components/common/PageHero';
import FaqAccordion from '@/components/common/FaqAccordion';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.femurImplant;

const features = [
    { title: 'Medical-Grade PEEK', desc: 'Bone-like elastic modulus reducing stress shielding versus metal alternatives in long-bone reconstruction.' },
    { title: 'Full-Length or Segmental', desc: 'Intercalary spacer or total femur constructs designed to the surgical resection plan.' },
    { title: 'Radiolucent', desc: 'PEEK is CT and MRI compatible — clear post-operative imaging without metal artefact.' },
    { title: 'ISO Compliant', desc: 'Manufactured under controlled conditions to applicable ISO standards for medical implants.' },
];

const applications = [
    { title: 'Bone Tumour Resection', desc: 'Limb-salvage reconstruction after sarcoma or metastatic bone tumour resection of the femur.' },
    { title: 'Peri-Prosthetic Fractures', desc: 'Reconstruction in complex peri-prosthetic fractures with significant bone loss.' },
    { title: 'Failed Arthroplasty', desc: 'Femoral reconstruction in revision arthroplasty where bone stock is severely compromised.' },
];

const faqItems = [
    { question: 'When is a femur implant used?', answer: 'In limb-salvage surgery following bone tumour resection, avascular necrosis, failed arthroplasty with bone loss, or severe peri-prosthetic fractures.' },
    { question: 'How is the hip or knee joint handled?', answer: 'The implant can be designed as an intercalary spacer preserving native joints, or as a total femur construct combining with arthroplasty components.' },
    { question: 'Is PEEK strong enough for femur loads?', answer: 'PEEK\'s mechanical properties closely match cortical bone, and structural reinforcement strategies are used for high-load segments.' },
    { question: 'What is the process from scan to surgery?', answer: 'CT scan → DICOM upload → virtual surgical plan → implant design approval → manufacturing → sterile delivery, typically within 2–3 weeks.' },
];

export default function FemurImplantPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title="Femur Implants"
                titleAccent="India"
                description="Advanced patient-specific PEEK femur implants for lower limb reconstruction — from intercalary segments to total femur constructs."
            />

            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        The femur is the largest and strongest bone in the body, transmitting the full weight of the upper body to the knee and lower limb. Custom PEEK femur implants support limb-salvage surgery following proximal, mid-shaft, or distal resection — including intercalary spacers that preserve native hip and knee joints, and total femur constructs for extensive resections. All implants are designed from the patient's DICOM CT data.
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
                    <p className="text-gray-700 mb-8">Upload DICOM data or contact our team to begin planning your patient-specific femur implant.</p>
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
