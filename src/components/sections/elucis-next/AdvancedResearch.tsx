import Image from "next/image";

const AdvancedResearch = () => {
    return (
        <section className="py-20 md:py-28 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0e3350] mb-12">
                    Advanced Research and Learning
                </h2>
                <div className="relative w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <Image
                        src="/images/elucis-next/advanced-research-and-learning.png"
                        alt="Advanced Research and Learning"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvancedResearch;
