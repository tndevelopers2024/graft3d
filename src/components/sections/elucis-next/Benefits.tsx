import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const Benefits = () => {
    const benefits = [
        "Support for cutting-edge medical research",
        "Realistic anatomy for deeper understanding",
        "Immersive tools that improve knowledge retention",
        "Safe environment for learning and innovation",
        "Collaborate globally, learn locally",
    ];

    return (
        <section className="py-12 bg-[#f6f6fa]">
            <div className="max-w-450 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                        <span className="text-black">Advanced</span>{" "}
                        <span className="text-[#166aaf]">Research and Learning</span>
                    </h2>
                    
                    <div className="flex flex-col gap-5">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#166aaf] shrink-0 mt-0.5" />
                                <span className="text-xl text-gray-700 leading-snug">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                    <div className="relative w-full aspect-4/2 rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/images/elucis-next/advanced.png"
                            alt="Advanced Research and Learning"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
