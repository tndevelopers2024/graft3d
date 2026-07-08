"use client";

const Testimonials = () => {
    const reviews = [
        {
            name: "Dr. Arvind Rao",
            initial: "A",
            role: "Consultant Cardiovascular Surgeon, Bengaluru",
            text: "Elucis NEXT has transformed our pre-operative planning workflow. The immersive 3D visualization and segmentation tools provide anatomical clarity that is difficult to achieve on conventional screens.",
        },
        {
            name: "Dr. Neha Gupta",
            initial: "N",
            role: "Consultant Cranio-Maxillofacial Surgeon, Mumbai",
            text: "The VR planning environment allows us to evaluate complex anatomy with confidence. Image registration and virtual device fitting have made our surgical planning more precise.",
        },
        {
            name: "Dr. Sandeep Iyer",
            initial: "S",
            role: "Neurosurgeon, Chennai",
            text: "The collaborative VR sessions in Elucis NEXT have improved communication across our multidisciplinary team. Reviewing surgical plans together in an immersive environment has been extremely valuable.",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-450 mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Clinicians Are <span className="text-[#166aaf]">Saying</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-[#f7f6fb] p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
                                    style={{ backgroundColor: ["#1fb5a6", "#1f42b5", "#b52b1f"][index] }}
                                >
                                    {review.initial}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                        {review.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {review.role}
                                    </p>
                                </div>
                            </div>

                            <p className="leading-relaxed relative z-10">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
