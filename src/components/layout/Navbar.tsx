"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = React.useState<string | null>(null);
    const [activeSubSubDropdown, setActiveSubSubDropdown] = React.useState<string | null>(null);

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/contact-us?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
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
        if (path === '/') {
            return pathname === '/';
        }
        return pathname?.startsWith(path);
    };

    const isResourcesActive =
        isActive('/geomagic-freeform') ||
        isActive('/artificial-nasal-prosthesis-case-study') ||
        isActive('/virtual-surgical-planning-mandibular-reconstruction');

    return (
        <div className="w-full bg-gray-50 shadow-sm sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto px-4 py-1 flex flex-col lg:flex-row items-center justify-between gap-4 relative">

                <div className="w-full lg:w-auto flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-[180px] h-[50px]">
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
                    className="lg:hidden text-primary focus:outline-none p-2 w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:bg-transparent"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </Button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden w-full absolute top-full left-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4 z-40`}>
                {/* Mobile Search Bar */}
                <form 
                    onSubmit={handleSearch}
                    className="flex items-center w-full mb-2 animate-fade-in-up" 
                    style={{ animationDelay: '100ms' }}
                >
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-200 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-primary text-black placeholder-gray-400"
                        />
                        <Button 
                            type="submit"
                            className="absolute right-0 top-0 h-full bg-primary text-white px-3 rounded-r rounded-l-none hover:bg-primary/80 transition-colors flex items-center justify-center w-auto"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </Button>
                    </div>
                </form>

                    <Link href="/" className={`font-bold ${isActive('/') ? 'text-primary' : 'text-black'} animate-fade-in-up`} style={{ animationDelay: '150ms' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>


                    {/* Mobile Dropdown: 3D Products */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center justify-between w-full font-bold">
                            <Link
                                href="/healthcare-3d-products"
                                className={`flex-grow ${isActive('/healthcare-3d-products') ? 'text-primary' : 'text-black'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                3D Products
                            </Link>
                            <button
                                onClick={() => toggleDropdown('products')}
                                className={`p-2 ${isActive('/products') || isActive('/healthcare-3d-products') ? 'text-primary' : 'text-black'}`}
                            >
                                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {activeDropdown === 'products' && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-primary/20  p-4">
                                <div className="flex flex-col gap-4">
                                    {/* 3D Printed Products Section */}
                                    <div>
                                        <div className="flex items-center justify-between w-full border-b border-gray-800 pb-2">
                                            <Link href="/healthcare-3d-printed-products" className=" font-bold " onClick={() => setIsMobileMenuOpen(false)}>3D Printed Products</Link>
                                            <button onClick={() => toggleSubDropdown('printed')} className="p-2">
                                                <svg className={`w-3 h-3 transition-transform ${activeSubDropdown === 'printed' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === 'printed' && (
                                            <div className="pl-4 flex flex-col gap-2 pt-1">
                                                <div className="flex items-center justify-between w-full border-b border-gray-800 pb-1">
                                                    <Link href="/regraft" className="transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Regraft</Link>
                                                    <button onClick={() => toggleSubSubDropdown('regraft')} className="p-1">
                                                        <svg className={`w-3 h-3 transition-transform ${activeSubSubDropdown === 'regraft' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                {activeSubSubDropdown === 'regraft' && (
                                                    <div className="pl-4 flex flex-col gap-2 pt-1 border-l border-gray-200">
                                                        <Link href="/regraft-artibone" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Regraft Artibone</Link>
                                                        <Link href="/regraft-bonerip" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Regraft Bonerip</Link>
                                                        <Link href="/regraft-customised-plates" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Regraft Customised Plates</Link>
                                                        <Link href="/regraft-arti-nose-arti-ear" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Regraft Arti nose & Arti ear</Link>
                                                        <Link href="/regraft-digilumin" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Regraft Digilumin</Link>
                                                        <Link href="/regraft-digiprun" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Regraft Digiprun</Link>
                                                    </div>
                                                )}
                                                <Link href="/3d-printed-patient-specific-implant" className="transition-colors border-b border-gray-800 pb-1" onClick={() => setIsMobileMenuOpen(false)}>Patient Specific Implant</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* 3D Tech Products Section */}
                                    <div>
                                        <div className="flex items-center justify-between w-full border-b border-gray-800 pb-2">
                                            <Link href="/healthcare-3d-tech-products" className=" font-bold  transition-colors" onClick={() => setIsMobileMenuOpen(false)}>3D Tech Products</Link>
                                            <button onClick={() => toggleSubDropdown('tech')} className="p-2">
                                                <svg className={`w-3 h-3 transition-transform ${activeSubDropdown === 'tech' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === 'tech' && (
                                            <div className="pl-4 flex flex-col gap-2 pt-2 border-l border-gray-200">
                                                <Link href="/elucis" className="text-sm text-gray-500 hover:text-primary transition-colors italic" onClick={() => setIsMobileMenuOpen(false)}>Elucis</Link>
                                                <Link href="/einscan-medixa" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Einscan-medixa</Link>
                                                <Link href="/funmat-pro-410" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Funmat pro 410</Link>
                                                <Link href="/geomagic-freeform" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Geomagic Freeform</Link>
                                                <Link href="/dicom-to-3d-model-conversion-software" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>D2P</Link>
                                                <Link href="/geomagic-touch-x-haptic-device" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Geomagic Touch & Touch X</Link>
                                                <Link href="/einscan-h2-human-body-bodyparts-3d-scanner" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Einscan H2</Link>
                                                <Link href="/phantom-premium-haptic-device" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Phantom Premium</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Medical Filaments Section */}
                                    <div>
                                        <div className="flex items-center justify-between w-full border-b border-gray-800 pb-2">
                                            <Link href="/advanced-3d-printing-filaments-for-medical-3d-printing" className=" font-bold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Medical Filaments</Link>
                                            <button onClick={() => toggleSubDropdown('filaments')} className="p-2">
                                                <svg className={`w-3 h-3 transition-transform ${activeSubDropdown === 'filaments' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === 'filaments' && (
                                            <div className="pl-4 flex flex-col gap-2 pt-2 border-l border-gray-200">
                                                <Link href="/polyetheretherketone-peek" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Polyetheretherketone (PEEK)</Link>
                                                <Link href="/polymethyl-methacrylate-pmma" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Polymethyl Methacrylate (PMMA)</Link>
                                                <Link href="/polycarbonate-pc" className="text-sm text-gray-500 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Polycarbonate (PC)</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/3d-packages" className={`font-bold ${isActive('/3d-packages') ? 'text-primary' : 'text-black'} animate-fade-in-up`} style={{ animationDelay: '250ms' }} onClick={() => setIsMobileMenuOpen(false)}>3D Packages</Link>

                    {/* Mobile Dropdown: Resources */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <button onClick={() => toggleDropdown('resources')} className={`flex items-center justify-between w-full font-bold ${isResourcesActive ? 'text-primary' : 'text-black'}`}>
                            <Link href="/geomagic-freeform"><span>Resources</span></Link>
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {activeDropdown === 'resources' && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-primary/20">
                                <div className="flex items-center justify-between w-full">
                                    <Link
                                        href="/artificial-nasal-prosthesis-case-study"
                                        className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Blogs
                                    </Link>
                                    <button onClick={() => toggleSubDropdown('blogs')} className="p-2 text-black">
                                        <svg className={`w-3 h-3 transition-transform ${activeSubDropdown === 'blogs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                </div>
                                {activeSubDropdown === 'blogs' && (
                                    <div className="pl-6 flex flex-col gap-1">
                                        <Link
                                            href="/artificial-nasal-prosthesis-case-study"
                                            className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Nasal Prosthesis
                                        </Link>
                                        <Link
                                            href="/virtual-surgical-planning-mandibular-reconstruction"
                                            className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                           Virtual Surgical Planning for Mandibular Reconstruction
                                        </Link>
                                    </div>
                                )}
                                <Link
                                    href="/about-us"
                                    className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Dropdown: 3D Service */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                        <div className="flex items-center justify-between w-full font-bold">
                            <Link
                                href="/medical-3d-printing-service"
                                className={`flex-grow ${isActive('/medical-3d-printing-service') || isActive('/medical-image-segmentation-service') || isActive('/bio-cad-modeling-service') ? 'text-primary' : 'text-black'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                3D Service
                            </Link>
                            <button
                                onClick={() => toggleDropdown('services')}
                                className={`p-2 ${isActive('/medical-3d-printing-service') || isActive('/medical-image-segmentation-service') || isActive('/bio-cad-modeling-service') ? 'text-primary' : 'text-black'}`}
                            >
                                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {activeDropdown === 'services' && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-primary/20">
                                <Link href="/medical-image-segmentation-service" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Medical Image Segmentation </Link>
                                <Link href="/bio-cad-modeling-service" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Graft3D Bio CAD Modeling</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/contact-us" className={`font-bold ${isActive('/contact-us') ? 'text-primary' : 'text-black'} animate-fade-in-up`} style={{ animationDelay: '400ms' }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8 font-bold text-[15px]">
                    <Link
                        href="/"
                        className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : 'text-black'}`}
                    >
                        Home
                    </Link>

                    {/* 3D Products Dropdown */}
                    <div className={`group relative cursor-pointer h-full  flex items-center gap-1 hover:text-primary transition-colors py-4 ${isActive('/products') || isActive('/healthcare-3d-products') ? 'text-primary' : 'text-black'}`}>
                        <Link href="/healthcare-3d-products" className=" transition-colors">
                            3D Products
                        </Link>
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white font-bold shadow-xl border-t-2  border-primary min-w-[280px] z-50 animate-fade-in-up">
                            <div className="py-2 flex flex-col">
                                {/* 3D Printed Products */}
                                <div className="group/sub font-bold relative border-b border-gray-800 last:border-0">
                                    <Link href="/healthcare-3d-printed-products" className="flex  items-center justify-between px-6 py-4  text-[15px] font-medium transition-colors">
                                        <span className='font-bold'>3D Printed Products</span>
                                        <svg className="w-4 h-4 -rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </Link>
                                    <div className="hidden group-hover/sub:block absolute left-full top-0 bg-white shadow-xl border-l border-gray-800 min-w-[250px] animate-fade-in-right">
                                        <div className="py-2 flex flex-col">
                                            <div className="group/sub2 relative">
                                                <Link href="/regraft" className="flex items-center justify-between px-6 py-4  text-[14px]   transition-colors border-b border-gray-800">
                                                    <span>Regraft</span>
                                                    <svg className="w-3 h-3 -rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </Link>
                                                <div className="hidden group-hover/sub2:block absolute left-full bg-white top-0 shadow-xl  border-gray-800 min-w-[240px] animate-fade-in-right">
                                                    <div className="py-2 flex flex-col max-h-[400px] overflow-y-auto custom-scrollbar">
                                                        <Link href="/regraft-artibone" className="px-6 py-3  text-[13px]   transition-colors border-b border-gray-800">Regraft Artibone</Link>
                                                        <Link href="/regraft-bonerip" className="px-6 py-3  text-[13px]  transition-colors border-b border-gray-800">Regraft Bonerip</Link>
                                                        <Link href="/regraft-customised-plates" className="px-6 py-3  text-[13px]   transition-colors border-b border-gray-800">Regraft Customised Plates</Link>
                                                        <Link href="/regraft-arti-nose-arti-ear" className="px-6 py-3 text-[13px]  transition-colors border-b border-gray-800">Regraft Arti nose & Arti ear</Link>
                                                        <Link href="/regraft-digilumin" className="px-6 py-3  text-[13px]   transition-colors border-b border-gray-800">Regraft Digilumin</Link>
                                                        <Link href="/regraft-digiprun" className="px-6 py-3  text-[13px]   transition-colors border-b border-gray-800">Regraft Digiprun</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/3d-printed-patient-specific-implant" className="px-6 py-4 text-[14px]  transition-colors">
                                                Patient specific implant
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 3D Tech Products */}
                                <div className="group/sub relative border-b border-gray-800 last:border-0 bg-white">
                                    <Link href="/healthcare-3d-tech-products" className="flex items-center justify-between px-6 py-4 text-[15px] font-medium  transition-colors">
                                        <span className='font-bold'>3D Tech Products</span>
                                        <svg className="w-4 h-4 -rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </Link>
                                    <div className="hidden group-hover/sub:block absolute left-full top-0 bg-white shadow-xl border-l border-gray-800 min-w-[200px] animate-fade-in-right">
                                        <div className="py-2 flex flex-col">
                                            <Link href="/elucis" className="px-6 py-3  text-[14px] transition-colors border-b border-gray-800 last:border-0 italic font-bold">Elucis</Link>
                                            <Link href="/einscan-medixa" className="px-6 py-3  text-[14px] transition-colors border-b border-gray-800 last:border-0">Einscan-medixa</Link>
                                            <Link href="/funmat-pro-410" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Funmat pro 410</Link>
                                            <Link href="/geomagic-freeform" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Geomagic Freeform</Link>
                                            <Link href="/dicom-to-3d-model-conversion-software" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">D2P</Link>
                                            <Link href="/geomagic-touch-x-haptic-device" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Geomagic Touch & Touch X</Link>
                                            <Link href="/einscan-h2-human-body-bodyparts-3d-scanner" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Einscan H2</Link>
                                            <Link href="/phantom-premium-haptic-device" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Phantom Premium</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Medical Filaments */}
                                <div className="group/sub relative border-b border-gray-800 last:border-0 bg-white">
                                    <Link href="/advanced-3d-printing-filaments-for-medical-3d-printing" className="flex items-center justify-between px-6 py-4 text-[15px] font-medium  transition-colors">
                                        <span className='font-bold'>Medical Filaments</span>
                                        <svg className="w-4 h-4 -rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </Link>
                                    <div className="hidden group-hover/sub:block absolute left-full top-0 bg-white shadow-xl border-l border-gray-800 min-w-[200px] animate-fade-in-right">
                                        <div className="py-2 flex flex-col">
                                            <Link href="/polyetheretherketone-peek" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Polyetheretherketone (PEEK)</Link>
                                            <Link href="/polymethyl-methacrylate-pmma" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Polymethyl Methacrylate (PMMA)</Link>
                                            <Link href="/polycarbonate-pc" className="px-6 py-3 text-[14px] transition-colors border-b border-gray-800 last:border-0">Polycarbonate (PC)</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/3d-packages"
                        className={`hover:text-primary transition-colors ${isActive('/3d-packages') ? 'text-primary' : 'text-black'}`}
                    >
                        3D Packages
                    </Link>

                    {/* Resources Dropdown */}
                    <div className={`group relative cursor-pointer h-full flex items-center gap-1 hover:text-primary transition-colors py-4 ${isResourcesActive ? 'text-primary' : 'text-black'}`}>
                       <Link href="/geomagic-freeform"><span>Resources</span></Link>
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg border-t-2 border-primary min-w-[240px] z-50 animate-fade-in-up">
                            <div className="py-2 flex flex-col">
                                <div className="group/blogs relative">
                                    <Link href="/artificial-nasal-prosthesis-case-study" className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">
                                        <span>Blogs</span>
                                        <svg className="w-3 h-3 -rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </Link>
                                    <div className="hidden group-hover/blogs:block absolute left-full top-0 bg-white shadow-xl border-l border-gray-200 min-w-[320px] animate-fade-in-right">
                                        <div className="py-2 flex flex-col">
                                            <Link href="/artificial-nasal-prosthesis-case-study" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Nasal Prosthesis</Link>
                                            <Link href="/virtual-surgical-planning-mandibular-reconstruction" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Virtual Surgical Planning for Mandibular Reconstruction</Link>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/about-us" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">About Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* 3D Service Dropdown */}
                    <div className={`group relative cursor-pointer h-full flex items-center gap-1 hover:text-primary transition-colors py-4 ${isActive('/medical-3d-printing-service') || isActive('/medical-image-segmentation-service') || isActive('/bio-cad-modeling-service') ? 'text-primary' : 'text-black'}`}>
                        <Link href="/medical-3d-printing-service" className="hover:text-primary transition-colors">
                            3D Service
                        </Link>
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg border-t-2 border-primary min-w-[200px] z-50 animate-fade-in-up">
                            <div className="py-2 flex flex-col">
                                <Link href="/medical-image-segmentation-service" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Medical Image Segmentation </Link>
                                <Link href="/bio-cad-modeling-service" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Graft3D Bio CAD Modeling</Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact-us"
                        className={`hover:text-primary transition-colors ${isActive('/contact-us') ? 'text-primary' : 'text-black'}`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-200 rounded-l px-4 py-2 text-sm w-[200px] focus:outline-none focus:border-primary text-black placeholder-gray-400"
                        />
                        <Button 
                            type="submit"
                            className="absolute right-0 top-0 h-full bg-primary text-white px-3 rounded-r rounded-l-none hover:bg-primary/80 transition-colors flex items-center justify-center w-auto"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
