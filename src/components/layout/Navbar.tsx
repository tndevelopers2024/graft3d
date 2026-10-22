"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { Button } from "../ui/Button";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = React.useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
        null
    );
    const [activeSubDropdown, setActiveSubDropdown] = React.useState<
        string | null
    >(null);
    const [activeSubSubDropdown, setActiveSubSubDropdown] = React.useState<
        string | null
    >(null);

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (searchTerm.trim()) {
            router.push(
                `/contact-us?search=${encodeURIComponent(searchTerm.trim())}`
            );
            setSearchTerm("");
            setIsMobileMenuOpen(false);
        }
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
            setActiveSubSubDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const toggleSubDropdown = (name: string) => {
        if (activeSubDropdown === name) {
            setActiveSubDropdown(null);
            setActiveSubSubDropdown(null);
        } else {
            setActiveSubDropdown(name);
        }
    };

    const toggleSubSubDropdown = (name: string) => {
        if (activeSubSubDropdown === name) {
            setActiveSubSubDropdown(null);
        } else {
            setActiveSubSubDropdown(name);
        }
    };

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname?.startsWith(path);
    };

    const isResourcesActive =
        isActive("/geomagic-freeform") ||
        isActive("/artificial-nasal-prosthesis-case-study") ||
        isActive("/virtual-surgical-planning-mandibular-reconstruction");

    return (
        <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="relative mx-auto flex max-w-350 flex-col items-center justify-between gap-4 px-4 py-1 lg:flex-row">
                <div className="flex w-full items-center justify-between lg:w-auto">
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-12.5 w-45">
                                <Image
                                    src="/images/logo/logo.png"
                                    alt="Graft Logo Horizontal"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-primary flex h-10 w-10 flex-col items-center justify-center gap-1.5 p-2 hover:bg-transparent focus:outline-none lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                        ></span>
                    </Button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`${isMobileMenuOpen ? "block" : "hidden"} absolute top-full left-0 z-40 flex w-full flex-col gap-4 border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden`}
                >
                    {/* Mobile Search Bar */}
                    <form
                        onSubmit={handleSearch}
                        className="animate-fade-in-up mb-2 flex w-full items-center"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="focus:border-primary w-full rounded-l border border-gray-200 px-4 py-2 text-sm text-black placeholder-gray-400 focus:outline-none"
                            />
                            <Button
                                type="submit"
                                className="bg-primary hover:bg-primary/80 absolute top-0 right-0 flex h-full w-auto items-center justify-center rounded-l-none rounded-r px-3 text-white transition-colors"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </Button>
                        </div>
                    </form>

                    <Link
                        href="/"
                        className={`font-bold ${isActive("/") ? "text-primary" : "text-black"} animate-fade-in-up`}
                        style={{ animationDelay: "150ms" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>

                    {/* Mobile Dropdown: 3D Products */}
                    <div
                        className="animate-fade-in-up"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="flex w-full items-center justify-between font-bold">
                            <Link
                                href="/healthcare-3d-products"
                                className={`grow ${isActive("/healthcare-3d-products") ? "text-primary" : "text-black"}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                3D Products
                            </Link>
                            <button
                                onClick={() => toggleDropdown("products")}
                                className={`p-2 ${isActive("/products") || isActive("/healthcare-3d-products") ? "text-primary" : "text-black"}`}
                            >
                                <svg
                                    className={`h-4 w-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {activeDropdown === "products" && (
                            <div className="border-primary/20 mt-2 flex flex-col gap-2 border-l-2 p-4 pl-4">
                                <div className="flex flex-col gap-4">
                                    {/* 3D Printed Products Section */}
                                    <div>
                                        <div className="flex w-full items-center justify-between border-b border-gray-800 pb-2">
                                            <Link
                                                href="/healthcare-3d-printed-products"
                                                className="font-bold"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                3D Printed Products
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    toggleSubDropdown("printed")
                                                }
                                                className="p-2"
                                            >
                                                <svg
                                                    className={`h-3 w-3 transition-transform ${activeSubDropdown === "printed" ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === "printed" && (
                                            <div className="flex flex-col gap-2 pt-1 pl-4">
                                                <div className="flex w-full items-center justify-between border-b border-gray-800 pb-1">
                                                    <Link
                                                        href="/regraft"
                                                        className="transition-colors"
                                                        onClick={() =>
                                                            setIsMobileMenuOpen(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Regraft
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            toggleSubSubDropdown(
                                                                "regraft"
                                                            )
                                                        }
                                                        className="p-1"
                                                    >
                                                        <svg
                                                            className={`h-3 w-3 transition-transform ${activeSubSubDropdown === "regraft" ? "rotate-180" : ""}`}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M19 9l-7 7-7-7"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                {activeSubSubDropdown ===
                                                    "regraft" && (
                                                    <div className="flex flex-col gap-2 border-l border-gray-200 pt-1 pl-4">
                                                        <Link
                                                            href="/regraft-artibone"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft Artibone
                                                        </Link>
                                                        <Link
                                                            href="/regraft-bonerip"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft Bonerip
                                                        </Link>
                                                        <Link
                                                            href="/regraft-customised-plates"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft Customised
                                                            Plates
                                                        </Link>
                                                        <Link
                                                            href="/regraft-artileg"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft ArtiLeg
                                                        </Link>
                                                        <Link
                                                            href="/regraft-arti-nose-arti-ear"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft Arti nose &
                                                            Arti ear
                                                        </Link>
                                                        <Link
                                                            href="/regraft-digilumin"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft Digilumin
                                                        </Link>
                                                        <Link
                                                            href="/regraft-digiprun"
                                                            className="hover:text-primary text-sm text-gray-500 italic transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Regraft Digiprun
                                                        </Link>
                                                    </div>
                                                )}
                                                <Link
                                                    href="/peek-implant"
                                                    className="border-b border-gray-800 pb-1 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    PEEK Implant
                                                </Link>
                                                <Link
                                                    href="/medical-image-segmentation"
                                                    className="border-b border-gray-800 pb-1 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Medical Image Segmentation
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* 3D Tech Products Section */}
                                    <div>
                                        <div className="flex w-full items-center justify-between border-b border-gray-800 pb-2">
                                            <Link
                                                href="/healthcare-3d-tech-products"
                                                className="font-bold transition-colors"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                3D Tech Products
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    toggleSubDropdown("tech")
                                                }
                                                className="p-2"
                                            >
                                                <svg
                                                    className={`h-3 w-3 transition-transform ${activeSubDropdown === "tech" ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === "tech" && (
                                            <div className="flex flex-col gap-2 border-l border-gray-200 pt-2 pl-4">
                                                <div className="flex w-full items-center justify-between border-b border-gray-800 pb-1">
                                                    <Link
                                                        href="/elucis-in-india"
                                                        className="hover:text-primary text-sm font-bold text-gray-500 italic transition-colors"
                                                        onClick={() =>
                                                            setIsMobileMenuOpen(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        Elucis
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            toggleSubSubDropdown(
                                                                "elucis"
                                                            )
                                                        }
                                                        className="p-1"
                                                    >
                                                        <svg
                                                            className={`h-3 w-3 transition-transform ${activeSubSubDropdown === "elucis" ? "rotate-180" : ""}`}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M19 9l-7 7-7-7"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                {activeSubSubDropdown ===
                                                    "elucis" && (
                                                    <div className="flex flex-col gap-2 border-l border-gray-200 pt-1 pl-4">
                                                        <Link
                                                            href="/elucis-go"
                                                            className="hover:text-primary text-sm font-medium text-gray-500 transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Elucis Go
                                                        </Link>
                                                        <Link
                                                            href="/elucis-next"
                                                            className="hover:text-primary text-sm font-medium text-gray-500 transition-colors"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Elucis Next
                                                        </Link>
                                                    </div>
                                                )}
                                                <Link
                                                    href="/einscan-medixa"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Einscan-medixa
                                                </Link>
                                                <Link
                                                    href="/funmat-pro-410"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Funmat pro 410
                                                </Link>
                                                <Link
                                                    href="/funmat-ht"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Funmat HT
                                                </Link>
                                                <Link
                                                    href="/310-for-medical-use"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    310 Medical use
                                                </Link>
                                                <Link
                                                    href="/geomagic-freeform"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Geomagic Freeform
                                                </Link>
                                                <Link
                                                    href="/dicom-to-3d-model-conversion-software"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    D2P
                                                </Link>
                                                <Link
                                                    href="/geomagic-touch-x-haptic-device"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Geomagic Touch & Touch X
                                                </Link>
                                                <Link
                                                    href="/inverse3"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Inverse3
                                                </Link>
                                                <Link
                                                    href="/minverse"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    MinVerse
                                                </Link>
                                                <Link
                                                    href="/einscan-h2-human-body-bodyparts-3d-scanner"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Einscan H2
                                                </Link>
                                                <Link
                                                    href="/phantom-premium-haptic-device"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Phantom Premium
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Medical Filaments Section */}
                                    <div>
                                        <div className="flex w-full items-center justify-between border-b border-gray-800 pb-2">
                                            <Link
                                                href="/advanced-3d-printing-filaments-for-medical-3d-printing"
                                                className="font-bold transition-colors"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                Medical Filaments
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    toggleSubDropdown(
                                                        "filaments"
                                                    )
                                                }
                                                className="p-2"
                                            >
                                                <svg
                                                    className={`h-3 w-3 transition-transform ${activeSubDropdown === "filaments" ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === "filaments" && (
                                            <div className="flex flex-col gap-2 border-l border-gray-200 pt-2 pl-4">
                                                <Link
                                                    href="/polyetheretherketone-peek"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Polyetheretherketone (PEEK)
                                                </Link>
                                                <Link
                                                    href="/polymethyl-methacrylate-pmma"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Polymethyl Methacrylate
                                                    (PMMA)
                                                </Link>
                                                <Link
                                                    href="/polycarbonate-pc"
                                                    className="hover:text-primary text-sm text-gray-500 transition-colors"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Polycarbonate (PC)
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/complete-end-to-end-medical-3d-printing-solutions"
                        className={`font-bold ${isActive("/3d-packages") ? "text-primary" : "text-black"} animate-fade-in-up`}
                        style={{ animationDelay: "250ms" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        3D Packages
                    </Link>

                    {/* Mobile Dropdown: Resources */}
                    <div
                        className="animate-fade-in-up"
                        style={{ animationDelay: "300ms" }}
                    >
                        <button
                            onClick={() => toggleDropdown("resources")}
                            className={`flex w-full items-center justify-between font-bold ${isResourcesActive ? "text-primary" : "text-black"}`}
                        >
                            <Link href="/geomagic-freeform">
                                <span>Resources</span>
                            </Link>
                            <svg
                                className={`h-4 w-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        {activeDropdown === "resources" && (
                            <div className="border-primary/20 mt-2 flex flex-col gap-2 border-l-2 pl-4">
                                <div className="flex w-full items-center justify-between">
                                    <Link
                                        href="/artificial-nasal-prosthesis-case-study"
                                        className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Blogs
                                    </Link>
                                    <button
                                        onClick={() =>
                                            toggleSubDropdown("blogs")
                                        }
                                        className="p-2 text-black"
                                    >
                                        <svg
                                            className={`h-3 w-3 transition-transform ${activeSubDropdown === "blogs" ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                {activeSubDropdown === "blogs" && (
                                    <div className="flex flex-col gap-1 pl-6">
                                        <Link
                                            href="/artificial-nasal-prosthesis-case-study"
                                            className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            Nasal Prosthesis
                                        </Link>
                                        <Link
                                            href="/virtual-surgical-planning-mandibular-reconstruction"
                                            className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            Virtual Surgical Planning for
                                            Mandibular Reconstruction
                                        </Link>
                                    </div>
                                )}
                                <Link
                                    href="/about-us"
                                    className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Dropdown: 3D Service */}
                    <div
                        className="animate-fade-in-up"
                        style={{ animationDelay: "350ms" }}
                    >
                        <div className="flex w-full items-center justify-between font-bold">
                            <Link
                                href="/medical-3d-printing-service"
                                className={`grow ${isActive("/medical-3d-printing-service") || isActive("/medical-image-segmentation") || isActive("/bio-cad-modeling-service") ? "text-primary" : "text-black"}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                3D Service
                            </Link>
                            <button
                                onClick={() => toggleDropdown("services")}
                                className={`p-2 ${isActive("/medical-3d-printing-service") || isActive("/medical-image-segmentation") || isActive("/bio-cad-modeling-service") ? "text-primary" : "text-black"}`}
                            >
                                <svg
                                    className={`h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {activeDropdown === "services" && (
                            <div className="border-primary/20 mt-2 flex flex-col gap-2 border-l-2 pl-4">
                                <Link
                                    href="/medical-image-segmentation"
                                    className="hover:text-primary text-sm text-gray-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Medical Image Segmentation
                                </Link>
                                <Link
                                    href="/bio-cad-modeling-service"
                                    className="hover:text-primary text-sm text-gray-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Graft3D Bio CAD Modeling
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/contact-us"
                        className={`font-bold ${isActive("/contact-us") ? "text-primary" : "text-black"} animate-fade-in-up`}
                        style={{ animationDelay: "400ms" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden items-center gap-8 text-[15px] font-bold lg:flex">
                    <Link
                        href="/"
                        className={`hover:text-primary transition-colors ${isActive("/") ? "text-primary" : "text-black"}`}
                    >
                        Home
                    </Link>

                    {/* 3D Products Dropdown */}
                    <div
                        className={`group hover:text-primary relative flex h-full cursor-pointer items-center gap-1 py-4 transition-colors ${isActive("/products") || isActive("/healthcare-3d-products") ? "text-primary" : "text-black"}`}
                    >
                        <Link
                            href="/healthcare-3d-products"
                            className="transition-colors"
                        >
                            3D Products
                        </Link>
                        <svg
                            className="h-4 w-4 transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>

                        {/* Dropdown Menu */}
                        <div className="border-primary absolute top-full left-0 z-50 hidden min-w-70 border-t-2 bg-white font-bold shadow-xl group-hover:block">
                            <div className="flex flex-col py-2">
                                {/* 3D Printed Products */}
                                <div className="group/sub relative border-b border-gray-800 font-bold last:border-0">
                                    <Link
                                        href="/healthcare-3d-printed-products"
                                        className="flex items-center justify-between px-6 py-4 text-[15px] font-medium transition-colors"
                                    >
                                        <span className="font-bold">
                                            3D Printed Products
                                        </span>
                                        <svg
                                            className="h-4 w-4 -rotate-90 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <div className="absolute top-0 left-full hidden min-w-62.5 border-l border-gray-800 bg-white shadow-xl group-hover/sub:block">
                                        <div className="flex flex-col py-2">
                                            <div className="group/sub2 relative">
                                                <Link
                                                    href="/regraft"
                                                    className="flex items-center justify-between border-b border-gray-800 px-6 py-4 text-[14px] transition-colors"
                                                >
                                                    <span>Regraft</span>
                                                    <svg
                                                        className="h-3 w-3 -rotate-90 text-gray-500"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 9l-7 7-7-7"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                                <div className="absolute top-0 left-full hidden min-w-60 border-gray-800 bg-white shadow-xl group-hover/sub2:block">
                                                    <div className="custom-scrollbar flex max-h-100 flex-col overflow-y-auto py-2">
                                                        <Link
                                                            href="/regraft-artibone"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft Artibone
                                                        </Link>
                                                        <Link
                                                            href="/regraft-bonerip"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft Bonerip
                                                        </Link>
                                                        <Link
                                                            href="/regraft-customised-plates"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft Customised
                                                            Plates
                                                        </Link>
                                                        <Link
                                                            href="/regraft-artileg"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft ArtiLeg
                                                        </Link>
                                                        <Link
                                                            href="/regraft-arti-nose-arti-ear"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft Arti nose &
                                                            Arti ear
                                                        </Link>
                                                        <Link
                                                            href="/regraft-digilumin"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft Digilumin
                                                        </Link>
                                                        <Link
                                                            href="/regraft-digiprun"
                                                            className="border-b border-gray-800 px-6 py-3 text-[13px] transition-colors"
                                                        >
                                                            Regraft Digiprun
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                href="/peek-implant"
                                                className="border-b border-gray-800 px-6 py-4 text-[14px] transition-colors"
                                            >
                                                PEEK Implant
                                            </Link>
                                            <Link
                                                href="/medical-image-segmentation"
                                                className="px-6 py-4 text-[14px] transition-colors"
                                            >
                                                Medical Image Segmentation
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 3D Tech Products */}
                                <div className="group/sub relative border-b border-gray-800 bg-white last:border-0">
                                    <Link
                                        href="/healthcare-3d-tech-products"
                                        className="flex items-center justify-between px-6 py-4 text-[15px] font-medium transition-colors"
                                    >
                                        <span className="font-bold">
                                            3D Tech Products
                                        </span>
                                        <svg
                                            className="h-4 w-4 -rotate-90 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <div className="absolute top-0 left-full hidden min-w-50 border-l border-gray-800 bg-white shadow-xl group-hover/sub:block">
                                        <div className="flex flex-col py-2">
                                            <div className="group/elucis relative">
                                                <Link
                                                    href="/elucis-in-india"
                                                    className="flex items-center justify-between border-b border-gray-800 px-6 py-3 text-[14px] font-bold transition-colors"
                                                >
                                                    <span>Elucis</span>
                                                    <svg
                                                        className="h-3 w-3 -rotate-90 text-gray-500"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 9l-7 7-7-7"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                                <div className="absolute top-0 left-full hidden min-w-50 border-l border-gray-800 bg-white shadow-xl group-hover/elucis:block">
                                                    <div className="flex flex-col py-2">
                                                        <Link
                                                            href="/elucis-go"
                                                            className="border-b border-gray-800 px-6 py-3 text-[14px] font-bold transition-colors last:border-0"
                                                        >
                                                            Elucis Go
                                                        </Link>
                                                        <Link
                                                            href="/elucis-next"
                                                            className="border-b border-gray-800 px-6 py-3 text-[14px] font-bold transition-colors last:border-0"
                                                        >
                                                            Elucis Next
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                href="/einscan-medixa"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Einscan-medixa
                                            </Link>
                                            <Link
                                                href="/funmat-pro-410"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Funmat pro 410
                                            </Link>
                                            <Link
                                                href="/funmat-ht"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Funmat HT
                                            </Link>
                                            <Link
                                                href="/310-for-medical-use"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                310 Medical use
                                            </Link>
                                            <Link
                                                href="/geomagic-freeform"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Geomagic Freeform
                                            </Link>
                                            <Link
                                                href="/dicom-to-3d-model-conversion-software"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                D2P
                                            </Link>
                                            <Link
                                                href="/geomagic-touch-x-haptic-device"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Geomagic Touch & Touch X
                                            </Link>
                                            <Link
                                                href="/inverse3"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Inverse3
                                            </Link>
                                            <Link
                                                href="/minverse"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                MinVerse
                                            </Link>
                                            <Link
                                                href="/einscan-h2-human-body-bodyparts-3d-scanner"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Einscan H2
                                            </Link>
                                            <Link
                                                href="/phantom-premium-haptic-device"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Phantom Premium
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Medical Filaments */}
                                <div className="group/sub relative border-b border-gray-800 bg-white last:border-0">
                                    <Link
                                        href="/advanced-3d-printing-filaments-for-medical-3d-printing"
                                        className="flex items-center justify-between px-6 py-4 text-[15px] font-medium transition-colors"
                                    >
                                        <span className="font-bold">
                                            Medical Filaments
                                        </span>
                                        <svg
                                            className="h-4 w-4 -rotate-90 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <div className="absolute top-0 left-full hidden min-w-50 border-l border-gray-800 bg-white shadow-xl group-hover/sub:block">
                                        <div className="flex flex-col py-2">
                                            <Link
                                                href="/polyetheretherketone-peek"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Polyetheretherketone (PEEK)
                                            </Link>
                                            <Link
                                                href="/polymethyl-methacrylate-pmma"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Polymethyl Methacrylate (PMMA)
                                            </Link>
                                            <Link
                                                href="/polycarbonate-pc"
                                                className="border-b border-gray-800 px-6 py-3 text-[14px] transition-colors last:border-0"
                                            >
                                                Polycarbonate (PC)
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/complete-end-to-end-medical-3d-printing-solutions"
                        className={`hover:text-primary transition-colors ${isActive("/3d-packages") ? "text-primary" : "text-black"}`}
                    >
                        3D Packages
                    </Link>

                    {/* Resources Dropdown */}
                    <div
                        className={`group hover:text-primary relative flex h-full cursor-pointer items-center gap-1 py-4 transition-colors ${isResourcesActive ? "text-primary" : "text-black"}`}
                    >
                        <Link href="/geomagic-freeform">
                            <span>Resources</span>
                        </Link>
                        <svg
                            className="h-4 w-4 transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                        {/* Dropdown Menu */}
                        <div className="border-primary absolute top-full left-0 z-50 hidden min-w-60 border-t-2 bg-white shadow-lg group-hover:block">
                            <div className="flex flex-col py-2">
                                <div className="group/blogs relative">
                                    <Link
                                        href="/artificial-nasal-prosthesis-case-study"
                                        className="hover:text-primary flex items-center justify-between px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                    >
                                        <span>Blogs</span>
                                        <svg
                                            className="h-3 w-3 -rotate-90 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <div className="absolute top-0 left-full hidden min-w-[320px] border-l border-gray-200 bg-white shadow-xl group-hover/blogs:block">
                                        <div className="flex flex-col py-2">
                                            <Link
                                                href="/artificial-nasal-prosthesis-case-study"
                                                className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                            >
                                                Nasal Prosthesis
                                            </Link>
                                            <Link
                                                href="/virtual-surgical-planning-mandibular-reconstruction"
                                                className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                            >
                                                Virtual Surgical Planning for
                                                Mandibular Reconstruction
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/about-us"
                                    className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                >
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 3D Service Dropdown */}
                    <div
                        className={`group hover:text-primary relative flex h-full cursor-pointer items-center gap-1 py-4 transition-colors ${isActive("/medical-3d-printing-service") || isActive("/medical-image-segmentation") || isActive("/bio-cad-modeling-service") ? "text-primary" : "text-black"}`}
                    >
                        <Link
                            href="/medical-3d-printing-service"
                            className="hover:text-primary transition-colors"
                        >
                            3D Service
                        </Link>
                        <svg
                            className="h-4 w-4 transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>

                        {/* Dropdown Menu */}
                        <div className="border-primary absolute top-full left-0 z-50 hidden min-w-50 border-t-2 bg-white shadow-lg group-hover:block">
                            <div className="flex flex-col py-2">
                                <Link
                                    href="/medical-image-segmentation"
                                    className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                >
                                    Medical Image Segmentation
                                </Link>
                                <Link
                                    href="/bio-cad-modeling-service"
                                    className="hover:text-primary px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
                                >
                                    Graft3D Bio CAD Modeling
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact-us"
                        className={`hover:text-primary transition-colors ${isActive("/contact-us") ? "text-primary" : "text-black"}`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="hidden items-center lg:flex">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="focus:border-primary w-50 rounded-l border border-gray-200 px-4 py-2 text-sm text-black placeholder-gray-400 focus:outline-none"
                        />
                        <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/80 absolute top-0 right-0 flex h-full w-auto items-center justify-center rounded-l-none rounded-r px-3 text-white transition-colors"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
