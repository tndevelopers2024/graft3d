import type { Metadata } from 'next';

const BASE_URL = 'https://graft3d.com';

function meta(title: string, description: string, slug: string): Metadata {
    return {
        title,
        description,
        alternates: { canonical: `${BASE_URL}${slug}` },
    };
}

export const PAGE_METADATA = {
    // ── Homepage ──────────────────────────────────────────────────────────────
    home: meta(
        'Graft3D Healthcare | Medical 3D Printing solution Providers',
        'Graft3D Healthcare provides advanced medical 3D printing solutions for hospitals, surgeons, and labs with patient-specific and precision-driven care.',
        '/'
    ),

    // ── Product / Technology Pages ────────────────────────────────────────────
    healthcareTechProducts: meta(
        'Medical 3D Printers, Human Body 3D Scanners & Medical Design Software',
        'Get Quote, Demo and Free sample for Medical printer, Human body 3d scanner and Medical design software.',
        '/healthcare-3d-tech-products/'
    ),

    healthcarePrintedProducts: meta(
        'healthcare 3D Printed Products | Graft3D Healthcare',
        'Explore healthcare 3D printed products in India using medical-grade PEEK. Biocompatible, high-performance solutions for implants, R&D & manufacturing. Discover more.',
        '/healthcare-3d-printed-products/'
    ),

    facialProsthesisPackage: meta(
        '3D Printing Package for Facial Prosthesis | Medical 3D Solutions',
        'Advanced 3D printing package for facial prosthesis including design, scanning, and medical-grade production for hospitals and maxillofacial labs.',
        '/3d-printing-package-for-facial-prosthesis/'
    ),

    geomagicTouchX: meta(
        '3D SYSTEMS Touch Haptic Devices',
        'Professional Geomagic Touch X haptic device for advanced 3D design, modeling, and simulation with accurate force feedback technology.',
        '/geomagic-touch-x-haptic-device/'
    ),

    phantomPremium: meta(
        'Phantom Premium Haptic Device in India',
        'Phantom Premium haptic device for 3D simulation, virtual prototyping, research labs, advanced training and medical use. Get Quote',
        '/phantom-premium-haptic-device/'
    ),

    geomagicFreeform: meta(
        'Geomagic Freeform software in India',
        'Book a Demo & Get a Quote for Geomagic Freeform in India from an authorised Hexagon Platinum partner and distributor',
        '/geomagic-freeform/'
    ),

    dicomSoftware: meta(
        'DICOM to 3D | Medical Segmentation Software',
        'Graft3D Healthcare represents software for DICOM to 3D segmentation for medical 3D printing and virtual surgery applications.',
        '/dicom-to-3d-model-conversion-software/'
    ),

    funmatPro410: meta(
        'FUNMAT Pro 410 | Medical PEEK 3D Printer',
        'Explore the Graft3D Healthcare FUNMAT Pro 410, an advanced medical PEEK 3D printer engineered for high-strength, heat-resistant, and biocompatible applications. Ideal for healthcare and medical devices, with medical-grade certification',
        '/funmat-pro-410/'
    ),

    einscanMedixa: meta(
        'Einscan Medixa Medical 3D Scanner in India',
        'Get Demo and Get Quote for Einscan Medixa a medical 3D scanner for healthcare, prosthetics, and clinical applications.',
        '/einscan-medixa/'
    ),

    // ── Filaments / Materials ─────────────────────────────────────────────────
    peek: meta(
        'PEEK Medical Polymer | Graft3D Healthcare India',
        'Medical-grade PEEK polymer for implants & devices. High strength, heat-resistant, biocompatible material for healthcare 3D printing in India. Explore Graft3D.',
        '/polyetheretherketone-peek/'
    ),

    pmma: meta(
        'PMMA - Medical Grade Filament In India',
        'Medical grade PMMA for healthcare & industrial use in India—optical clarity, biocompatible, durable. Ideal for precision 3D printing. Explore now.',
        '/polymethyl-methacrylate-pmma/'
    ),

    polycarbonate: meta(
        'Polycarbonate (PC) Medical 3D Printing Filament',
        'Buy High-strength polycarbonate (PC) for medical 3D printing usage in India—Get Quote and Instant delivery',
        '/polycarbonate-pc/'
    ),

    // ── Regraft Product Line ──────────────────────────────────────────────────
    regraft: meta(
        'Regraft | Custom Medical 3D Printed Products',
        'Medical-grade PEEK for healthcare 3D printing in India. High strength, heat resistance & biocompatibility. Explore Regraft solutions today.',
        '/regraft/'
    ),

    regraftArtibone: meta(
        'Custom 3D Printed Implants that replace the actual bone inside the human body - Know more about our all kind of implants',
        'Advanced PEEK medical polymer for orthopaedic applications in India. Durable, biocompatible & stable. Discover Regraft Artibone.',
        '/regraft-artibone/'
    ),

    regraftBonerip: meta(
        'Regraft Bonerip | 3D-Printed Anatomical Models | Graft3D',
        'High-quality custom 3D-printed anatomical models designed for training, simulation, and mock-up surgeries.',
        '/regraft-bonerip/'
    ),

    regraftCustomisedPlates: meta(
        'Regraft Customised Plate | PEEK Implants India | Graft3D',
        'Custom PEEK medical plates with high strength, biocompatibility & heat resistance. Ideal for implants & healthcare 3D printing in India. Explore now.',
        '/regraft-customised-plates/'
    ),

    regraftDigilumin: meta(
        'Regraft Digilumin | Custom Surgical Drill Guides',
        'Regraft Digilumin 3D-printed custom surgical guides for accurate dental implant placement and oral restorations.',
        '/regraft-digilumin/'
    ),

    regraftProface: meta(
        'Regraft Proface | Custom Facial Prosthetics Nose, Ear & Eyes',
        'Proface is a Facial prosthesis made using 3D Printing technology that replaces your lost Facial feature with artificial eyes, nose, or Ears.',
        '/regraft-arti-nose-arti-ear/'
    ),

    // ── Surgical Planning & Reconstruction ───────────────────────────────────
    vspOrthognathic: meta(
        'Virtual Surgical Planning in Orthognathic Surgery | Graft3D',
        'Virtual surgical planning for orthognathic surgery in India.',
        '/virtual-surgical-planning-in-orthognathic-surgery/'
    ),

    maxillaMandibleReconstruction: meta(
        'Maxilla & Mandible Reconstruction | Graft3D',
        'Advanced maxilla & mandible reconstruction with healthcare 3D printing in India. Durable, biocompatible PEEK solutions. Learn more.',
        '/reconstruction-of-the-maxilla-and-mandible/'
    ),

    orbitalReconstruction: meta(
        'Orbital Reconstruction Implants | Graft3D Healthcare',
        'Precision orbital reconstruction using medical-grade PEEK implants. Strong, biocompatible 3D printing solutions in India. Discover more.',
        '/orbital-reconstruction/'
    ),

    resectedMandibleMaxilla: meta(
        'Reconstruction of Resected Mandible & Maxilla | Graft3D',
        'Reconstruct resected mandible & maxilla with medical-grade PEEK. Biocompatible, high-strength 3D printed solutions in India. Explore Graft3D.',
        '/reconstruction-of-resected-mandible-and-maxilla/'
    ),

    facialTraumaVsp: meta(
        'Facial Trauma VSP & Plates | Graft3D Healthcare',
        'Virtual surgical planning & custom plates for facial trauma in India. High-precision, biocompatible PEEK solutions for improved surgical accuracy. Discover more.',
        '/virtual-surgical-planning-and-plates-for-facial-trauma/'
    ),

    facialDeformityCorrection: meta(
        'Facial Deformity Correction | Graft3D Healthcare',
        'Advanced facial deformity correction using medical-grade PEEK & 3D printing in India. Precise, biocompatible solutions for better outcomes. Explore now.',
        '/correction-of-facial-deformity/'
    ),

    facialBoneAugmentation: meta(
        'Facial Bone Augmentation | 3D Printing India | Graft3D',
        'Advanced facial bone augmentation with healthcare 3D printing in India. Strong, biocompatible PEEK solutions for precise surgical outcomes. Discover more.',
        '/facial-bone-augmentation-using-3d-printing/'
    ),

    maxillaMandibleImplants: meta(
        'Maxilla & Mandible Implants | Graft3D Healthcare',
        'Patient-specific maxilla & mandible implants using medical-grade PEEK. Biocompatible, precise solutions for craniofacial reconstruction in India. Explore now.',
        '/patient-specific-implants-for-maxilla-and-mandible/'
    ),

    // ── Services ──────────────────────────────────────────────────────────────
    medicalImageSegmentation: meta(
        'Online Medical Image Segmentation Service | Graft3D Healthcare',
        'Accurate medical image segmentation for CT/MRI to 3D models. Enable patient-specific design for healthcare 3D printing India. Discover Graft3D expertise.',
        '/medical-image-segmentation-service/'
    ),

    bioCadModeling: meta(
        'Bio CAD Modeling Service India | Graft3D Healthcare',
        'Precision Bio CAD modeling for implants & devices using biocompatible design workflows. Ideal for healthcare 3D printing India. Explore Graft3D solutions.',
        '/bio-cad-modeling-service/'
    ),

    // ── Implant Products ──────────────────────────────────────────────────────
    humerousImplant: meta(
        'Humerous Implants India | Graft3D Healthcare',
        'Advanced humerus implants using medical grade PEEK. Strong, biocompatible & heat-resistant solutions for healthcare 3D printing India. Explore Graft3D.',
        '/product/humerous/'
    ),

    clavicleImplant: meta(
        'Clavicle Implants India | Graft3D Healthcare',
        'Custom clavicle implants with high-performance PEEK. Biocompatible, durable & precise for orthopaedic care in healthcare 3D printing India. Discover Graft3D.',
        '/product/clavicle/'
    ),

    scapulaImplant: meta(
        'Scapula Implants India | Graft3D Healthcare',
        'Patient-specific scapula implants using medical grade PEEK. Biocompatible, strong & heat-resistant for healthcare 3D printing India. Explore Graft3D.',
        '/product/scapula/'
    ),

    radiusUlnaImplant: meta(
        'Radius & Ulna Implants India | Graft3D Healthcare',
        'Patient-specific radius & ulna implants in high-performance PEEK. Biocompatible, durable & heat-resistant for healthcare 3D printing India. Discover Graft3D.',
        '/product/radius-and-ulna/'
    ),

    radiusImplant: meta(
        'Radius Implant Solutions India | Graft3D Healthcare',
        'Advanced radius implants with medical grade PEEK. Biocompatible, strong & precise for orthopaedic applications in healthcare 3D printing India. Explore Graft3D.',
        '/product/radius/'
    ),

    metacarpalImplant: meta(
        'Metacarpal Implants India | Graft3D Healthcare',
        'Custom metacarpal implants using medical grade PEEK. Biocompatible, strong & precise for hand reconstruction in healthcare 3D printing India. Explore Graft3D.',
        '/product/metacarpalhand/'
    ),

    handCarpalImplant: meta(
        'Hand Carpal Bone Implants India | Graft3D Healthcare',
        'Custom carpal implants with high-performance PEEK. Biocompatible, durable & precise for complex hand surgeries in healthcare 3D printing India. Discover Graft3D.',
        '/product/hand-carpal/'
    ),

    phalangesImplant: meta(
        'Phalanges Hand Implants India | Graft3D Healthcare',
        'Precision phalange implants using medical grade PEEK. Biocompatible, strong & lightweight for hand reconstruction via healthcare 3D printing India. Explore Graft3D.',
        '/product/phalangeshand/'
    ),

    femurImplant: meta(
        'Femur Implant Solutions India | Graft3D Healthcare',
        'Advanced femur implants with high-performance PEEK. Biocompatible, durable & precise for healthcare 3D printing India. Discover Graft3D expertise.',
        '/product/femur/'
    ),

    tibiaImplant: meta(
        'Tibia Implant Solutions India | Graft3D Healthcare',
        'Patient-specific tibia implants using medical grade PEEK. Strong, biocompatible & heat-resistant solutions for healthcare 3D printing India. Explore Graft3D.',
        '/product/tibia/'
    ),
} as const;
