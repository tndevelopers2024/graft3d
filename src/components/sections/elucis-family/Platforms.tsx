import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Platforms = () => {
    const platforms = [
        {
            title: "ELUCIS GO",
            subtitle: "Headset-First Experience",
            description:
                "Untethered immersive visualization and planning designed for rapid clinical adoption and consultation.",
            image: "/images/elucis-family/platform-1-bg.png",
            link: "/elucis-go",
            cta: "Explore Elucis Go",
        },
        {
            title: "ELUCIS NEXT",
            subtitle: "Research & Education Edition",
            description:
                "Advanced immersive DICOM workflow for research, training, education and methodology development.",
            image: "/images/elucis-family/platform-2-bg.png",
            link: "/elucis-next",
            cta: "Explore Elucis Next",
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-430 mx-auto px-6 md:px-12">
                <div className="text-center max-w-450 mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold  mb-4">
                        <span className="text-[#166aaf]">One Platform.</span>{" "}
                        Three Ways to Deploy Value.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="relative border border-[#bcbbbb] rounded-3xl overflow-hidden group"
                        >
                            <div className="relative w-full flex flex-col min-h-100 md:min-h-0 md:aspect-4/2">
                                <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-white/90 md:from-white to-white/40 md:to-[#166aaf]/50 z-10 pointer-events-none"></div>
                                <Image
                                    src={platform.image}
                                    alt={platform.title}
                                    fill
                                    className="object-cover z-0"
                                />

                                {/* Content */}
                                <div className="relative z-20 p-8 flex flex-col justify-between items-start grow">
                                    <div>
                                        <h3 className="text-[#166aaf] font-bold text-3xl md:text-4xl mb-2">
                                            {platform.title}
                                        </h3>
                                        <p className="font-bold text-gray-800 text-xl mb-4">
                                            {platform.subtitle}
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed max-w-sm relative z-30">
                                            {platform.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={platform.link}
                                        className="inline-flex items-center gap-2 text-white font-bold bg-linear-to-r from-[#166AAF] to-[#46ACFF] px-6 py-2.5 rounded-lg hover:shadow-lg hover:opacity-95 transition-all group/btn mt-8 relative z-30"
                                    >
                                        {platform.cta}
                                        <MoveRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Platforms;
