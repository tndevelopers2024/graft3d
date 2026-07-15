import Image from "next/image";

const Stats = () => {
    return (
        <section className="py-12 md:py-16 bg-[#1b6db1] text-white">
            <div className="px-6 md:px-12 max-w-430 mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
                    {/* Stat 1 */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 shrink-0">
                            <Image
                                src="/images/elucis-in-india/stat-1.svg"
                                alt="Institutions"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white pb-2">
                                50+
                            </h3>
                            <p className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                                Institutions Globally
                            </p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 shrink-0">
                            <Image
                                src="/images/elucis-in-india/stat-2.svg"
                                alt="Procedures"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white pb-2">
                                2,000+
                            </h3>
                            <p className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                                Procedures Annually
                            </p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 shrink-0">
                            <Image
                                src="/images/elucis-in-india/stat-3.svg"
                                alt="Clinical Users"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white pb-2">
                                100+
                            </h3>
                            <p className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                                Clinical Users
                            </p>
                        </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex items-center gap-4 text-left max-w-100">
                        <div className="relative w-12 h-12 shrink-0">
                            <Image
                                src="/images/elucis-in-india/stat-4.svg"
                                alt="Empower"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-lg font-medium text-white leading-snug">
                            Empowering better decisions through immersive 3D
                            technology
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
