import Image from "next/image";

const EnterpriseSecurity = () => {
    const features = [
        {
            title: "On-Premises or Cloud Deployment",
            icon: "/images/elucis-in-india/enterprise-1.svg",
        },
        {
            title: "Internal Data Custody",
            icon: "/images/elucis-in-india/enterprise-2.svg",
        },
        {
            title: "Zero Data Sharing or External Access",
            icon: "/images/elucis-in-india/enterprise-3.svg",
        },
        {
            title: "Role-Based Access Control",
            icon: "/images/elucis-in-india/enterprise-4.svg",
        },
        {
            title: "Encrypted Data in Transit & At Rest",
            icon: "/images/elucis-in-india/enterprise-5.svg",
        },
        {
            title: "Audit Logs & Compliance Ready",
            icon: "/images/elucis-in-india/enterprise-6.svg",
        },
    ];

    return (
        <section>
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row overflow-hidden shadow-2xl">
                    {/* Left side */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-linear-to-r from-[#0E324F] to-[#1F72B5] text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                            Enterprise-ready Security & Deployment.
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center gap-3"
                                >
                                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-white font-medium text-lg leading-snug">
                                        {feature.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="w-full lg:w-1/2 relative min-h-75 lg:min-h-auto">
                        <Image
                            src="/images/elucis-in-india/enterprise-ready-bg.png"
                            alt="Enterprise Security"
                            fill
                            className="object-cover"
                        />
                        {/* Gradient spread for seamless blending */}
                        <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#1F72B5] to-transparent h-24 lg:h-full lg:w-48"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSecurity;
