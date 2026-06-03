import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

// Canonical site origin. Override per-environment with NEXT_PUBLIC_SITE_URL if needed.
const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://graft3d.com").replace(/\/$/, "");

/**
 * Lower-priority (0.64) pages: deeper case-studies, clinical sub-pages, materials,
 * and utility flows. Everything else defaults to 0.80; the homepage is 1.00.
 * (Mirrors the priority tiers from the previous sitemap.)
 */
const LOW_PRIORITY = new Set<string>([
    "/human-body-parts-3d-scanner",
    "/regraft-organrip",
    "/temporomandibular-joint",
    "/reconstruction-of-the-maxilla-and-mandible",
    "/orbital-reconstruction",
    "/cranial-vault-reconstruction",
    "/reconstruction-of-resected-mandible-and-maxilla",
    "/facial-bone-augmentation-using-3d-printing",
    "/regraft-bonerip-patient-specific-3d-printed-models",
    "/regraft-bonerip-transparent-3d-printed-models",
    "/regraft-bonerip-coloured-3d-printed-material",
    "/virtual-surgical-planning-in-orthognathic-surgery",
    "/book-demo",
    "/upload-dicom-data",
    // Pages added since the last external generation:
    "/3d-printed-models-in-the-medical-field",
    "/asthi-bone-like-3d-printed-training-models",
    "/correction-of-facial-deformity",
    "/patient-specific-implants-for-maxilla-and-mandible",
    "/upload-bio-data",
    "/virtual-surgical-planning-and-plates-for-facial-trauma",
]);

const PAGE_FILES = ["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx"];

/** Discover every public, statically-routable page under src/app at build time. */
function getRoutes(): string[] {
    const appDir = path.join(process.cwd(), "src", "app");
    const routes: string[] = [];

    const walk = (dir: string, segments: string[]) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (!entry.isDirectory()) continue;
            const name = entry.name;
            // Skip private folders (_), route groups ((...)), parallel/intercept (@, .),
            // dynamic segments ([...]) and API route handlers — none are public pages.
            if (/^[_([@.]/.test(name) || name === "api") continue;

            const childDir = path.join(dir, name);
            const childSegments = [...segments, name];

            if (PAGE_FILES.some((f) => fs.existsSync(path.join(childDir, f)))) {
                routes.push("/" + childSegments.join("/"));
            }
            walk(childDir, childSegments);
        }
    };

    walk(appDir, []);
    return routes.sort();
}

/** Brochure PDFs served from /public/brochures. */
function getBrochures(): string[] {
    const dir = path.join(process.cwd(), "public", "brochures");
    try {
        return fs
            .readdirSync(dir)
            .filter((f) => f.toLowerCase().endsWith(".pdf"))
            .map((f) => `/brochures/${f}`)
            .sort();
    } catch {
        return [];
    }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const pages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, lastModified, priority: 1.0 },
        ...getRoutes()
            .filter((route) => route !== "/")
            .map((route) => ({
                url: `${BASE_URL}${route}`,
                lastModified,
                priority: LOW_PRIORITY.has(route) ? 0.64 : 0.8,
            })),
    ];

    const brochures: MetadataRoute.Sitemap = getBrochures().map((pdf) => ({
        url: `${BASE_URL}${pdf}`,
        lastModified,
        priority: 0.64,
    }));

    return [...pages, ...brochures];
}
