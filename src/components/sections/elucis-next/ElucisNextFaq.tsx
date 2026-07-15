import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is Elucis NEXT, and how does it improve surgical planning?",
        answer: "Elucis NEXT is an advanced Virtual Reality surgical planning platform that transforms CT and MRI scans into immersive, patient-specific 3D models. Surgeons can visualize anatomy, perform VR-based segmentation, and plan complex procedures with greater precision before entering the operating room."
    },
    {
        question: "2. Can surgeons perform segmentation directly in Virtual Reality?",
        answer: "Yes. Elucis NEXT enables VR-based segmentation, allowing surgeons to isolate anatomical structures, measure pathology, cut, edit, and plan procedures within an immersive 3D environment. This improves spatial understanding and enhances preoperative planning for complex cases."
    },
    {
        question: "3. Which clinical specialties benefit from Elucis NEXT?",
        answer: "Elucis NEXT supports a wide range of specialties, including craniomaxillofacial surgery, neurosurgery, orthopaedics, ENT, oncology, vascular surgery, trauma, and plastic & reconstructive surgery, where detailed 3D visualization and surgical planning are essential."
    },
    {
        question: "4. How does Elucis NEXT process CT and MRI data?",
        answer: "The platform imports standard DICOM datasets and provides advanced image processing capabilities, including manual and automatic image registration, along with 2D, 3D, and 4D visualization. This allows clinicians to evaluate anatomy accurately before planning treatment."
    },
    {
        question: "5. Does Elucis NEXT support both Virtual Reality and desktop workflows?",
        answer: "Yes. Elucis NEXT combines an immersive Virtual Reality environment with powerful desktop interaction tools. Clinicians can seamlessly switch between desktop planning and VR visualization based on their workflow and clinical requirements."
    },
    {
        question: "6. What is the advantage of 4D modelling in Elucis NEXT?",
        answer: "Elucis NEXT includes advanced 4D modelling capabilities that allow clinicians to evaluate anatomical motion and time-dependent structures. This provides deeper clinical insight for cases involving dynamic anatomy and functional assessment."
    },
    {
        question: "7. Can multiple clinicians collaborate on the same surgical case?",
        answer: "Yes. Elucis NEXT supports multiuser collaboration, enabling surgeons, radiologists, and multidisciplinary teams to review, discuss, and plan patient cases together in a shared 3D environment, regardless of their location."
    },
    {
        question: "8. Why choose Elucis NEXT over conventional medical imaging software?",
        answer: "Unlike traditional imaging software, Elucis NEXT combines Virtual Reality visualization, VR-based segmentation, advanced image processing, 4D modelling, desktop interaction, and real-time collaboration within a single platform. This integrated workflow helps improve surgical confidence, communication, and clinical decision-making."
    },
];

const ElucisNextFaq = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-450 mx-auto px-4 md:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about Elucis GO and how
                        it can benefit your clinical workflow.
                    </p>
                </div>
                <div className="max-w-400 mx-auto">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default ElucisNextFaq;
