import Image from "next/image";
import Link from "next/link";

const packages = [
    {
        img: "package-1.png",
        title: "Patient-Specific Implant Package",
        link: "/complete-package-for-patient-specific-peek-implant-design-and-manufacturing",
        list: [
            "CT segmentation",
            "Implant design software",
            "High-performance 3D printing",
            "PEEK-ready workflow",
        ],
    },
    {
        img: "package-2.png",
        title: "Surgical Planning Package",
        link: "/complete-package-for-surgical-planning",
        list: [
            "CT segmentation",
            "Anatomical model generation",
            "Surgical planning software",
            "Medical 3D printing",
        ],
    },
    {
        img: "package-3.png",
        title: "Prosthetics Package",
        link: "/transform-medical-imaging-into-3d-anatomical-models",
        list: [
            "Upper limb prosthetics",
            "Lower limb prosthetics",
            "Custom sockets",
            "Rehabilitation",
        ],
    },
    {
        img: "package-4.png",
        title: "Orthotics Package",
        link: "/complete-package-for-patient-specific-orthotic-design-and-manufacturing",
        list: [
            "Foot orthotics",
            "Spinal braces",
            "Pediatric orthotics",
            "Rehabilitation devices",
        ],
    },
    {
        img: "package-5.png",
        title: "Facial Prosthesis Package",
        list: [
            "Ear prosthesis",
            "Nose prosthesis",
            "Orbital prosthesis",
            "Facial restoration",
        ],
    },
    {
        img: "package-6.png",
        title: "Anatomical Model Package",
        list: [
            "Anatomical model creation",
            "Surgical simulation",
            "Medical education models",
            "Student training",
        ],
    },
];

export default function OurMedical3DPrintingPackages() {
    return (
        <section className="w-full bg-white py-8">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12">
                <h2 className="mb-12 text-center text-[2.5rem] font-bold text-[#01101B]">
                    Our Medical 3D Printing Packages
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map((pkg, index) => {
                        const cardClassName = `flex flex-col h-full overflow-hidden transition-all duration-300 ${
                            pkg.link
                                ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                                : ""
                        }`;

                        const cardStyle = {
                            background: "#FDFEFF",
                            border: "1px solid #1B6DB180",
                            boxShadow:
                                "0px 2px 4px 0px #60617029, 0px 0px 1px 0px #28293D0A",
                            borderRadius: "12px",
                        };

                        const cardContent = (
                            <>
                                {/* Image Container */}
                                <div className="relative h-56 w-full shrink-0 sm:h-64">
                                    <Image
                                        src={`/images/complete-end-to-end-medical-3d-printing-solutions/${pkg.img}`}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="flex grow flex-col p-6 lg:p-8">
                                    <h3 className="mb-4 text-[1.25rem] font-semibold text-[#121212]">
                                        {pkg.title}
                                    </h3>
                                    <ul className="flex list-disc flex-col gap-2 pl-5 text-[1.0625rem] font-normal text-[#121212]">
                                        {pkg.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        );

                        return pkg.link ? (
                            <Link
                                key={index}
                                href={pkg.link}
                                className={cardClassName}
                                style={cardStyle}
                            >
                                {cardContent}
                            </Link>
                        ) : (
                            <div
                                key={index}
                                className={cardClassName}
                                style={cardStyle}
                            >
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
