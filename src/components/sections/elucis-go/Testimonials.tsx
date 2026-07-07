"use client";

const Testimonials = () => {
    const reviews = [
        {
            name: "Dr. Ankit Sharm",
            initial: "A",
            role: "Consultant Neurosurgeon, New Delhi",
            text: "Elucis GO has made discussing complex cases with my team much easier. The standalone VR experience is smooth, and the 3D models are incredibly easy to understand.",
            icon: "/images/elucis-go/testimonial-2.svg",
        },
        {
            name: "Dr. Priya Menon",
            initial: "P",
            role: "Consultant Oncosurgeon, Kochi",
            text: "Using Elucis GO during patient consultations has significantly improved patient understanding. Visualizing their anatomy in 3D helps build confidence before surgery.",
            icon: "/images/elucis-go/testimonial-3.svg",
        },
        {
            name: "Dr. Rohan Kulkarni",
            initial: "R",
            role: "Orthopaedic Surgeon, Pune",
            text: "The ability to join collaborative sessions without a high-end workstation is a huge advantage. Elucis GO is an excellent tool for case discussions and resident education.",
            icon: "/images/elucis-go/testimonial-4.svg",
        },
    ];

    return (
        <section className="py-12 md:py-10">
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
