import Image from "next/image";

const cards = [
    {
        title: "Lower-Limb Prosthetics",
        image: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/application-1.png",
        items: [
            "Transtibial (below-knee) check & definitive sockets",
            "Transfemoral (above-knee) ischial-containment sockets",
            "Partial foot & Syme's prostheses",
            "Customized cosmetic covers",
        ],
    },
    {
        title: "Upper-Limb Prosthetics",
        image: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/application-2.png",
        items: [
            "Transradial (below-elbow) sockets & outer frames",
            "Transhumeral (above-elbow) socket systems",
            "Custom partial hand, thumb, and finger prostheses",
        ],
    },
];

export default function ClinicalApplications() {
    return (
        <section className="w-full bg-[#F8FAFC] py-16 lg:py-24">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                {/* Title Section */}
                <div className="mx-auto mb-4 flex w-full max-w-400 items-center justify-center gap-4 lg:gap-8">
                    <div className="h-0.5 flex-1 bg-[#166AAF]"></div>
                    <h2 className="px-2 text-[1.25rem] font-bold tracking-wide whitespace-nowrap text-[#1E1E1E] uppercase md:text-[1.5rem] lg:px-4 lg:text-[1.75rem]">
                        CLINICAL APPLICATIONS
                    </h2>
                    <div className="h-0.5 flex-1 bg-[#166AAF]"></div>
                </div>
                <p className="mx-auto mb-12 text-center text-[1.125rem] font-medium text-[#1E1E1E] lg:text-[1.375rem]">
                    The Prosthetics Package supports a wide range of
                    applications, including
                </p>

                {/* Cards Section: 2 Cards side-by-side, content left & image right */}
                <div className="mx-auto grid max-w-450 grid-cols-1 gap-8 lg:grid-cols-2">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col-reverse overflow-hidden rounded-xl border border-[#F1F5F9] bg-white shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#00000040] sm:flex-row sm:items-center sm:justify-between"
                        >
                            {/* Left Side Content */}
                            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                                <h3 className="mb-6 text-[1.5rem] font-bold text-[#166AAF] lg:text-[1.75rem]">
                                    {card.title}
                                </h3>

                                <ul className="flex list-disc flex-col gap-3 pl-6">
                                    {card.items.map((item, itemIdx) => (
                                        <li
                                            key={itemIdx}
                                            className="text-[1.125rem] leading-snug font-medium text-[#1E1E1E] lg:text-[1.25rem]"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Side Image */}
                            <div className="relative aspect-578/792 w-full shrink-0 sm:w-[42%] lg:w-[45%]">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
