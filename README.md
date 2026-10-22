# Graft3D Healthcare Solutions

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Status-Production-green.svg)](#)

Graft3D Healthcare Solutions is an advanced medical 3D printing and biomedical engineering platform. Headquartered in Chennai, India, with branch locations in Mumbai and Bengaluru, Graft3D provides hospitals, surgeons, and research institutions with patient-specific implants (PSI), virtual surgical planning (VSP), anatomical replicas for surgical training, industrial medical 3D printers, full-body 3D scanners, and haptic feedback simulation systems.

---

## 📖 Comprehensive Documentation

Exhaustive technical and domain documentation is organized in the [`docs/`](./docs/README.md) directory:

1. **[Project Context & Business Domain](./docs/PROJECT_CONTEXT_AND_BUSINESS_DOMAIN.md)**: Company identity, clinical specialties, partner network (Intamsys, Shining 3D, Hexagon/Geomagic, Haply, Elucis), and commercial footprint.
2. **[System Architecture & Design](./docs/SYSTEM_ARCHITECTURE_AND_DESIGN.md)**: Next.js 16 hybrid rendering, Tailwind v4 design system, Poppins typography, lead engine (`useLeadForm`), and search engine indexing.
3. **[Directory & File Analysis](./docs/DIRECTORY_AND_FILE_ANALYSIS.md)**: Detailed breakdown of all 78 page routes, 477 section components across 72 directories, library utilities, and public assets.
4. **[Clinical Solutions & Products Catalog](./docs/CLINICAL_SOLUTIONS_AND_PRODUCTS.md)**: Deep dive into the **ReGraft** family (ArtiBone, BoneRip, OrganRip, DigiLumin, ProFace, ArtiLeg), hardware (FUNMAT PRO 410, EinScan Medixa), and biomaterials (PEEK, PMMA, PC).
5. **[API Routes & Backend Services](./docs/API_ROUTES_AND_BACKEND_SERVICES.md)**: Route handlers for `/api/contact`, `/api/extended-contact`, and `/api/polymer-part-contact`, rate limiting, spam protection, and Nodemailer integration.
6. **[Developer & Operations Guide](./docs/DEVELOPER_AND_OPERATIONS_GUIDE.md)**: Setup instructions, npm scripts, Husky git hooks, implementation recipes, and deployment guidelines.

---

## ⚡ Quick Start

### 1. Prerequisites
- Node.js `18.18+` or `20.x` LTS
- npm `9+`

### 2. Installation
```bash
git clone <repository-url> graft3d
cd graft3d
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
EMAIL_USER="your-email@graft3d.com"
EMAIL_APP_PASSWORD="your-google-app-password"
NEXT_PUBLIC_SITE_URL="https://graft3d.com"
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Production Build & Linting
```bash
# Run ESLint & code style checks
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🏛️ Project Structure At A Glance

```
graft3d/
├── .husky/              # Git pre-commit hooks (lint-staged pipeline)
├── docs/                # In-depth architectural and domain documentation
│   ├── README.md
│   ├── PROJECT_CONTEXT_AND_BUSINESS_DOMAIN.md
│   ├── SYSTEM_ARCHITECTURE_AND_DESIGN.md
│   ├── DIRECTORY_AND_FILE_ANALYSIS.md
│   ├── CLINICAL_SOLUTIONS_AND_PRODUCTS.md
│   ├── API_ROUTES_AND_BACKEND_SERVICES.md
│   └── DEVELOPER_AND_OPERATIONS_GUIDE.md
├── public/              # Static assets (PDF brochures, fonts, product images)
│   ├── brochures/       # Official technical whitepapers & PDF brochures
│   ├── fonts/           # Local Poppins font files (weights 400-700)
│   └── images/          # Route-organized image assets
├── src/
│   ├── app/             # Next.js App Router (78 page routes, 6 layouts, 3 API routes)
│   │   ├── api/         # Nodemailer lead capture & CAD upload endpoints
│   │   ├── layout.tsx   # Root layout with GTM and global navigation
│   │   ├── sitemap.ts   # Dynamic build-time route and brochure crawler
│   │   └── robots.ts    # Search engine robot directives
│   ├── components/      # UI component tree
│   │   ├── common/      # PageHero, FaqAccordion, FloatingButtons
│   │   ├── layout/      # NavTopBar, Navbar, Footer
│   │   ├── sections/    # 72 modular folders containing 477 section components
│   │   └── ui/          # Atomic primitives (Button with Radix Slot & CVA)
│   └── lib/             # Shared utilities (clsx/twMerge, useLeadForm, metadata)
├── eslint.config.mjs    # ESLint 9 configuration with import sorting
├── next.config.ts       # Next.js config with canonical domain redirects
├── package.json         # Package dependencies and npm scripts
├── postcss.config.mjs   # PostCSS configuration with Tailwind v4
└── tsconfig.json        # TypeScript strict configuration with @/* path alias
```

---

## 🌐 Official Channels & Contact

- **Website**: [graft3d.com](https://graft3d.com)
- **Head Office**: 4/261, 1st Floor, Rajas Towers, Medavakkam Main Road, Kovilambakkam, Chennai - 600129, Tamil Nadu, India
- **Branch Offices**: Mumbai & Bengaluru
- **Direct Sales**: `+91 98404 78347` | `+91 63744 10703`
- **Email**: `sales@graft3d.com`
