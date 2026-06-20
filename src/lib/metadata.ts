import type { Metadata } from 'next';

const BASE_URL = 'https://graft3d.com';

function meta(title: string, description: string, slug: string, keywords?: string | Array<string>): Metadata {
    return {
        title,
        description,
        keywords,
        alternates: { canonical: `${BASE_URL}${slug}` },
    };
}

export const PAGE_METADATA = {
    // ── Homepage ──────────────────────────────────────────────────────────────
    home: meta(
        'Graft3D Healthcare | Medical 3D Printing solution Providers',
        'Graft3D Healthcare provides advanced medical 3D printing solutions for hospitals, surgeons, and labs with patient-specific and precision-driven care.',
        '/',
        [
            'medical 3D printing',
            'healthcare 3D printing India',
            '3D printing for hospitals',
            'patient-specific implants India',
            'medical 3D printing company',
            'anatomical 3D model printing',
            '3D prosthetics India',
            'custom medical 3D printed solutions',
            'CT/MRI to 3D model service',
            '3D printing for surgeons',
            'anatomical model maker India',
            'bio-CAD modeling services',
            'DICOM to STL conversion service',
            'hospital 3D printing partner India'
        ]
    ),

    // ── Product / Technology Pages ────────────────────────────────────────────
    healthcareTechProducts: meta(
        'Medical 3D Printers, Human Body 3D Scanners & Medical Design Software',
        'Get Quote,Demo and Free sample for Medical printer, Human body 3d scanner and Medical design software.',
        '/healthcare-3d-tech-products',
        [
            'healthcare 3d tech product',
            '3D printing materials for medical',
            '3d printing healthcare',
            'human body scanner',
            '3d full body scanner',
            '3d full body scanner and printer',
            '3d body scanner machine'
        ]
    ),

    healthcarePrintedProducts: meta(
        'healthcare 3D Printed Products | Graft3D Healthcare',
        'Explore healthcare 3D printed products in India using medical-grade PEEK. Biocompatible, high-performance solutions for implants, R&D & manufacturing. Discover more.',
        '/healthcare-3d-printed-products',
        [
            'healthcare 3d tech product',
            '3D printing materials for medical',
            '3d printing healthcare',
            'human body scanner',
            '3d full body scanner',
            '3d full body scanner and printer',
            '3d body scanner machine'
        ]
    ),

    facialProsthesisPackage: meta(
        '3D Printing Package for Facial Prosthesis | Medical 3D Solutions',
        'Advanced 3D printing package for facial prosthesis including design, scanning, and medical-grade production for hospitals and maxillofacial labs.',
        '/3d-printing-package-for-facial-prosthesis',
        [
            '3D printing package facial prosthesis',
            '3D printed facial prosthetics India',
            'artificial nose prosthesis',
            'ear prosthesis 3D printing',
            'ocular prosthesis 3D print',
            'silicone facial prostheses',
            'maxillofacial prosthetic solutions',
            'nasal prosthesis for cancer patients',
            'orbital prosthesis India',
            'custom prosthetic ear 3D printed',
            '3D scanning facial prosthetics',
            'post-trauma facial reconstruction India',
            'prosthetic rehabilitation 3D printing',
            'silicone prosthesis makers India'
        ]
    ),

    geomagicTouchX: meta(
        '3D SYSTEMS Touch Haptic Devices',
        'Professional Geomagic Touch X haptic device for advanced 3D design, modeling, and simulation with accurate force feedback technology.',
        '/geomagic-touch-x-haptic-device',
        [
            'geomagic touch x haptic device',
            'touch x haptic device',
            'touch haptic device online',
            'buy Geomagic touch and Touch x',
            'Geomagic Touch & Touch X'
        ]
    ),

    phantomPremium: meta(
        'Phantom Premium Haptic Device in India',
        'Phantom Premium haptic device for 3D simulation, virtual prototyping, research labs, advanced training and medical use. Get Quote',
        '/phantom-premium-haptic-device'
    ),

    geomagicFreeform: meta(
        'Geomagic Freeform software in India',
        'Book a Demo & Get a Quote for Geomagic Freeform in India from an authorised Hexagon Platinum partner and distributor',
        '/geomagic-freeform',
        [
            'geomagic freeform',
            'organic 3D modeling software',
            '3D modeling software',
            'Geomagic Freeform software'
        ]
    ),

    dicomSoftware: meta(
        'DICOM to 3D | Medical Segmentation Software',
        'Graft3D Healthcare represents software for  DICOM to 3D segmentation for medical 3D printing and virtual surgery applications.',
        '/dicom-to-3d-model-conversion-software',
        [
            'dicom to 3d model conversion software',
            'medical scan to 3 D Print',
            'convert CT scans into 3D Printable Models',
            'DICOM to 3D conversion service',
            'MRI to 3D model creation'
        ]
    ),

    funmatPro410: meta(
        'FUNMAT Pro 410 | Medical PEEK 3D Printer',
        'Explore the Graft3D Healthcare FUNMAT Pro 410, an advanced medical PEEK 3D printer engineered for high-strength, heat-resistant, and biocompatible applications. Ideal for healthcare and medical devices, with medical-grade certification',
        '/funmat-pro-410',
        [
            'Funmat Pro 410 3D printer',
            'industrial 3D printer',
            'high-temperature 3D printer',
            'PEEK 3D Printer',
            'FFF 3D printer high temp',
            '3D printer for PEEK, PC, ABS, engineering plastics',
            'dual nozzle industrial 3D printer',
            '3D printer for medical-grade parts',
            '500°C nozzle 3D printer for high-performance filaments',
            '3D printing solution for custom implants & prosthetics',
            'large build volume industrial 3D printer 305×305×406 mm',
            'FDM 3D printer for medical & industrial use'
        ]
    ),

    einscanMedixa: meta(
        'Einscan Medixa Medical 3D Scanner in India',
        'Get Demo and Get Quote for Einscan Medixa a medical 3D scanner for healthcare, prosthetics, and clinical applications.',
        '/einscan-medixa',
        [
            'einscan medixa 3d scanner',
            '3D medical scanner',
            '3D scanner for medical 3D printing',
            '3D scan device for anatomical modelling',
            'medical 3D scan India',
            'high-accuracy 3D scanner for medical models',
            '3D scanning for hospitals and clinics',
            'convert CT/MRI scan to 3D model',
            'patient scan to STL 3D printing workflow',
            '3D scan solution for prosthetics & implants',
            'best 3D scanner for medical 3D printing',
            '3D scanner for anatomical replicas',
            '3D scanner'
        ]
    ),

    // ── Filaments / Materials ─────────────────────────────────────────────────
    peek: meta(
        'PEEK Medical Polymer | Graft3D Healthcare India',
        'Medical-grade PEEK polymer for implants & devices. High strength, heat-resistant, biocompatible material for healthcare 3D printing in India. Explore Graft3D.',
        '/polyetheretherketone-peek',
        [
            'Polyetheretherketone PEEK',
            'PEEK filament',
            '3D printing PEEK material',
            'Polyetheretherketone 3D print India',
            'medical grade PEEK 3D printing',
            'high-temperature filament for medical implants',
            '3D printed PEEK implant parts',
            'PEEK 3D printing for bone implants & prosthetics',
            'industrial filament for biomedical additive manufacturing',
            '3D printing with PEEK for orthopaedic / cranial implants',
            'biocompatible PEEK 3D printing material'
        ]
    ),

    pmma: meta(
        'PMMA -medical grade filament In India',
        'Medical grade PMMA for healthcare & industrial use in India—optical clarity, biocompatible, durable. Ideal for precision 3D printing. Explore now.',
        '/polymethyl-methacrylate-pmma',
        [
            'PMMA filament / PMMA 3D printing',
            'Polymethyl methacrylate 3D print material',
            'medical-grade PMMA 3D printing India',
            'transparent / biocompatible PMMA 3D prints',
            'PMMA for surgical models & implants',
            '3D printing with PMMA for medical devices',
            'acrylic-based 3D printing filament PMMA',
            'PMMA 3D printing for anatomical models / prosthetics'
        ]
    ),

    polycarbonate: meta(
        'Polycarbonate (PC) Medical 3D Printing Filament',
        'Buy High-strength polycarbonate (PC) for medical 3D printing usage in India—Get Quote and Instant delivery',
        '/polycarbonate-pc',
        [
            'PC filament 3D printing',
            'Polycarbonate 3D print material',
            'engineering PC filament India',
            'durable PC 3D printing filament for medical use',
            'high-impact PC 3D printing for functional parts',
            'PC filament for industrial and medical 3D prints',
            'high-heat resistant PC 3D printing material'
        ]
    ),

    // ── Regraft Product Line ──────────────────────────────────────────────────
    regraft: meta(
        'Regraft | Custom Medical 3D Printed Products',
        'Medical-grade PEEK for healthcare 3D printing in India. High strength, heat resistance & biocompatibility. Explore Regraft solutions today.',
        '/regraft',
        [
            'digital reconstruction solution',
            'digital surgical reconstruction solution',
            '3D printed surgical models',
            'patient-specific surgical planning',
            'Artibone personalized bone grafts',
            '3D printed anatomical bone replicas',
            'Medical 3D Printed Products'
        ]
    ),

    regraftArtibone: meta(
        'Custom 3D Printed Implants that replace the actual bone inside the human body -Know more about our all kind of implants',
        'Advanced PEEK medical polymer for orthopaedic applications in India. Durable, biocompatible & stable. Discover Regraft Artibone.',
        '/regraft-artibone',
        [
            'Artibone patient-specific bone regrafts',
            'custom 3D printed bone implants',
            'digitally planned bone reconstruction',
            'virtual surgical planning (VSP) for bone',
            'virtual surgical planning bone grafts'
        ]
    ),

    regraftBonerip: meta(
        'Regraft- Bonerip',
        'High-quality custom 3D-printed anatomical models designed for training, simulation, and mock-up surgeries.',
        '/regraft-bonerip',
        [
            'Bonerip 3D printed bone replica',
            'custom anatomical bone models',
            '3D printed bone replica for surgery',
            'medical 3D printed bone replica',
            '3D printed anatomical models'
        ]
    ),

    regraftCustomisedPlates: meta(
        'Regraft Customised Plate | PEEK Implants India | Graft3D',
        'Custom PEEK medical plates with high strength, biocompatibility & heat resistance. Ideal for implants & healthcare 3D printing in India. Explore now.',
        '/regraft-customised-plates',
        [
            'regraft customised plate',
            'custom surgical plates',
            'patient-specific fixation plates',
            '3D printed customised plates for surgery',
            'personalised surgical hardware',
            'custom bone fixation plates'
        ]
    ),

    regraftArtileg: meta(
        'Regraft ArtiLeg | Custom Artificial Leg & Socket Prosthetics',
        'Custom artificial legs and socket prosthetics designed to restore mobility, independence, comfort, and long-term confidence for lower-limb amputees.',
        '/regraft-artileg',
        [
            'Regraft ArtiLeg',
            'custom artificial leg',
            'socket prosthetics',
            'lower limb prosthetics',
            '3D printed prosthetic socket',
            'custom prosthetic leg'
        ]
    ),

    regraftDigilumin: meta(
        'Regraft Digilumin | Custom Surgical Drill Guides',
        'Regraft Digilumin 3D-printed custom surgical guides for accurate dental implant placement and oral restorations.',
        '/regraft-digilumin',
        [
            'digital drill guides',
            'Digilumin surgical drill guide',
            'custom surgical drill guides',
            '3D printed drill guides',
            'patient-specific implant drill guides',
            'virtual surgical planning drill guide'
        ]
    ),

    regraftProface: meta(
        'Regraft Proface | Custom Facial Prosthetics Nose, Ear & Eyes',
        'Proface is a Facial prosthesis made using 3D Printing technology that replaces your lost Facial feature with artificial eyes, nose, or Ears.',
        '/regraft-arti-nose-arti-ear',
        [
            'custom facial prosthetics',
            'ArtiNose artificial nose',
            'ArtiEar prosthetic ear',
            '3D printed facial prosthesis',
            'patient-specific facial prosthetics'
        ]
    ),

    // ── Surgical Planning & Reconstruction ───────────────────────────────────
    vspOrthognathic: meta(
        'Virtual Surgical Planning in Orthognathic Surgery | Graft3D',
        'Virtual surgical planning for orthognathic surgery in India.',
        '/virtual-surgical-planning-in-orthognathic-surgery',
        [
            'Virtual Surgical Planning (VSP) plates',
            'vsp plates orthognathic surgery',
            'virtual surgical planning India',
            'virtual surgical planning in orthognathic surgery'
        ]
    ),

    maxillaMandibleReconstruction: meta(
        'Maxilla & Mandible Reconstruction | Graft3D',
        'Advanced maxilla & mandible reconstruction with healthcare 3D printing in India. Durable, biocompatible PEEK solutions. Learn more.',
        '/reconstruction-of-the-maxilla-and-mandible',
        [
            'maxilla and mandibular reconstruction',
            'mandible reconstruction implant 3D print',
            'fibula free flap mandibular reconstruction recovery',
            'mandibular reconstruction with bone graft',
            'mandibular reconstruction with free fibula flap',
            'mandible reconstruction'
        ]
    ),

    orbitalReconstruction: meta(
        'Orbital Reconstruction Implants | Graft3D Healthcare',
        'Precision orbital reconstruction using medical-grade PEEK implants. Strong, biocompatible 3D printing solutions in India. Discover more.',
        '/orbital-reconstruction',
        [
            'Orbital reconstruction services',
            '3D printed orbital implants',
            'Patient-specific orbital implants',
            'Custom orbital reconstruction solutions',
            'Orbital reconstruction solutions hospitals',
            '3D printed orbital implants surgeons'
        ]
    ),

    resectedMandibleMaxilla: meta(
        'reconstruction of Resected Mandible & Maxilla | Graft3D',
        'Reconstruct resected mandible & maxilla with medical-grade PEEK. Biocompatible, high-strength 3D printed solutions in India. Explore Graft3D.',
        '/reconstruction-of-resected-mandible-and-maxilla',
        [
            'Reconstruction of resected mandible and maxilla',
            'Mandible and maxilla reconstruction services',
            '3D printed jaw reconstruction implants',
            'Custom 3D printed mandibular implants',
            'Custom 3D printed maxillary implants',
            'Mandible resection reconstruction'
        ]
    ),

    facialTraumaVsp: meta(
        'Facial Trauma VSP & Plates | Graft3D Healthcare',
        'Virtual surgical planning & custom plates for facial trauma in India. High-precision, biocompatible PEEK solutions for improved surgical accuracy. Discover more.',
        '/virtual-surgical-planning-and-plates-for-facial-trauma',
        [
            'Virtual Surgical Planning and Plates for Facial Trauma',
            'Virtual Surgical Planning 3D Printed Implants',
            'High-resolution CT based virtual surgical planning',
            'virtual surgical planning for facial trauma',
            'VSP and 3D-Printed Implants'
        ]
    ),

    facialDeformityCorrection: meta(
        'Facial Deformity Correction | Graft3D Healthcare',
        'Advanced facial deformity correction using medical-grade PEEK & 3D printing in India. Precise, biocompatible solutions for better outcomes. Explore now.',
        '/correction-of-facial-deformity',
        [
            'correction of facial deformity',
            '3D Printing Facial Deformities',
            'facial deformity correction',
            'advanced facial deformity correction',
            'facial deformity treatments'
        ]
    ),

    facialBoneAugmentation: meta(
        'Facial Bone Augmentation | 3D Printing India | Graft3D',
        'Advanced facial bone augmentation with healthcare 3D printing in India. Strong, biocompatible PEEK solutions for precise surgical outcomes. Discover more.',
        '/facial-bone-augmentation-using-3d-printing',
        [
            'Facial Bone Augmentation 3D Printing',
            '3D Printing  Facial Bone Reconstruction',
            '3D printed facial implants',
            '3D Printed Facial Bone Augmentation',
            'advanced facial bone augmentation'
        ]
    ),

    maxillaMandibleImplants: meta(
        'Maxilla & Mandible Implants | Graft3D Healthcare',
        'Patient-specific maxilla & mandible implants using medical-grade PEEK. Biocompatible, precise solutions for craniofacial reconstruction in India. Explore now.',
        '/patient-specific-implants-for-maxilla-and-mandible'
    ),

    // ── Services ──────────────────────────────────────────────────────────────
    medicalImageSegmentation: meta(
        'Online Medical Image Segmentation Service | Graft3D Healthcare',
        'Accurate medical image segmentation for CT/MRI to 3D models. Enable patient-specific design for healthcare 3D printing India. Discover Graft3D expertise.',
        '/medical-image-segmentation-service'
    ),

    bioCadModeling: meta(
        'Bio CAD Modeling Service India | Graft3D Healthcare',
        'Precision Bio CAD modeling for implants & devices using biocompatible design workflows. Ideal for healthcare 3D printing India. Explore Graft3D solutions.',
        '/bio-cad-modeling-service'
    ),

    // ── Implant Products ──────────────────────────────────────────────────────
    humerousImplant: meta(
        'Humerous Implants India | Graft3D Healthcare',
        'Advanced humerus implants using medical grade PEEK. Strong, biocompatible & heat-resistant solutions for healthcare 3D printing India. Explore Graft3D.',
        '/product/humerous'
    ),

    clavicleImplant: meta(
        'Clavicle Implants India | Graft3D Healthcare',
        'Custom clavicle implants with high-performance PEEK. Biocompatible, durable & precise for orthopaedic care in healthcare 3D printing India. Discover Graft3D.',
        '/product/clavicle'
    ),

    scapulaImplant: meta(
        'Scapula Implants India | Graft3D Healthcare',
        'Patient-specific scapula implants using medical grade PEEK. Biocompatible, strong & heat-resistant for healthcare 3D printing India. Explore Graft3D.',
        '/product/scapula'
    ),

    radiusUlnaImplant: meta(
        'Radius & Ulna Implants India | Graft3D Healthcare',
        'Patient-specific radius & ulna implants in high-performance PEEK. Biocompatible, durable & heat-resistant for healthcare 3D printing India. Discover Graft3D.',
        '/product/radius-and-ulna'
    ),

    radiusImplant: meta(
        'Radius Implant Solutions India | Graft3D Healthcare',
        'Advanced radius implants with medical grade PEEK. Biocompatible, strong & precise for orthopaedic applications in healthcare 3D printing India. Explore Graft3D.',
        '/product/radius'
    ),

    metacarpalImplant: meta(
        'Metacarpal Implants India | Graft3D Healthcare',
        'Custom metacarpal implants using medical grade PEEK. Biocompatible, strong & precise for hand reconstruction in healthcare 3D printing India. Explore Graft3D.',
        '/product/metacarpalhand'
    ),

    handCarpalImplant: meta(
        'Hand Carpal Bone Implants India | Graft3D Healthcare',
        'Custom carpal implants with high-performance PEEK. Biocompatible, durable & precise for complex hand surgeries in healthcare 3D printing India. Discover Graft3D.',
        '/product/hand-carpal'
    ),

    phalangesImplant: meta(
        'Phalanges Hand Implants India | Graft3D Healthcare',
        'Precision phalange implants using medical grade PEEK. Biocompatible, strong & lightweight for hand reconstruction via healthcare 3D printing India. Explore Graft3D.',
        '/product/phalangeshand'
    ),

    femurImplant: meta(
        'Femur Implant Solutions India | Graft3D Healthcare',
        'Advanced femur implants with high-performance PEEK. Biocompatible, durable & precise for healthcare 3D printing India. Discover Graft3D expertise.',
        '/product/femur'
    ),

    tibiaImplant: meta(
        'Tibia Implant Solutions India | Graft3D Healthcare',
        'Patient-specific tibia implants using medical grade PEEK. Strong, biocompatible & heat-resistant solutions for healthcare 3D printing India. Explore Graft3D.',
        '/product/tibia'
    ),
} as const;
