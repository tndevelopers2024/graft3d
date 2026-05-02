import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';

const Footer = () => {
    return (
        <footer className="bg-[#D9EFFF] pt-16 pb-8 text-[#1f2937]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Company Info */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-48 h-16 mb-2">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Graft 3D Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-primary font-medium">
                            Graft3D is a healthcare solution provider helping hospitals with disruptive & unique technologies. We do this by collaborating with global technology firms to make technology products for hospitals, surgeons & end patients. We believe user friendly technology is the key to success in planning & executing complex surgeries.
                        </p>
                        <div className="flex gap-3 mt-2">
                            {/* Social Icons - Placeholders */}
                            <a href="https://www.facebook.com/graft3d" target="_blank" rel="noopener noreferrer" className="bg-[#3b5998] text-white p-2 rounded w-8 h-8 flex items-center justify-center">
                                <span className="sr-only">Facebook</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@graft3d" target="_blank" rel="noopener noreferrer" className="bg-[#ff0000] text-white p-2 rounded w-8 h-8 flex items-center justify-center">
                                <span className="sr-only">YouTube</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/graft3d/" target="_blank" rel="noopener noreferrer" className="bg-[#E1306C] text-white p-2 rounded w-8 h-8 flex items-center justify-center">
                                <span className="sr-only">Instagram</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/graft3d/" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white p-2 rounded w-8 h-8 flex items-center justify-center">
                                <span className="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                        <Link href="/about-us">
                            <Button className="w-fit mt-2 font-bold px-6">
                                More About Us &rarr;
                            </Button>
                        </Link>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-primary font-bold text-lg">Quick Links</h3>
                        <ul className="flex flex-col gap-3 font-medium text-gray-600 text-[15px]">
                            <li><Link href="/healthcare-3d-printed-products" className="hover:text-primary transition-colors">3D Printed Products</Link></li>
                            <li><Link href="/healthcare-3d-tech-products" className="hover:text-primary transition-colors">3D Tech Products</Link></li>
                            <li><Link href="/3d-packages" className="hover:text-primary transition-colors">3D Packages</Link></li>
                            <li><Link href="/medical-3d-printing-service" className="hover:text-primary transition-colors">3D Services</Link></li>
                            <li><Link href="/dicom-to-3d-model-conversion-software" className="hover:text-primary transition-colors">Explore DICOM to 3D</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Events</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Collaborate with Us</Link></li>
                            <li><Link href="/artificial-nasal-prosthesis-case-study" className="hover:text-primary transition-colors">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Important Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-primary font-bold text-lg">Important Links</h3>
                        <ul className="flex flex-col gap-3 font-medium text-gray-600 text-[15px]">
                            <li><Link href="/about-us" className="hover:text-primary transition-colors">About us</Link></li>
                            <li><Link href="/healthcare-3d-products" className="hover:text-primary transition-colors">Shop</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/shipping-policy" className="hover:text-primary transition-colors">Shipping policy</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/refund_returns" className="hover:text-primary transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-primary font-bold text-lg">Contact Us</h3>
                        <div className="flex flex-col gap-3 font-medium text-gray-600 text-[15px]">
                            <div className="flex items-start gap-2">
                                <span className="mt-1 text-primary"><svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></span>
                                <div>Sales: <a href="tel:+919840478347" className="hover:text-primary transition-colors hover:underline">+91 98404 78347</a></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="mt-1 text-primary"><svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></span>
                                <div>Sales: <a href="tel:+916374410703" className="hover:text-primary transition-colors hover:underline">+91 63744 10703</a></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="mt-1 text-primary"><svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg></span>
                                <div>Email : <a href="mailto:sales@graft3d.com" className="hover:text-primary transition-colors hover:underline">sales@graft3d.com</a></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="mt-1 text-primary"><svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg></span>
                                <a href="https://maps.google.com/?q=Graft3D+Health+Care+Solutions+Pvt.+Ltd.+Kovilambakkam+Chennai" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-primary transition-colors group">
                                    <span className="font-bold block text-gray-800 group-hover:text-primary transition-colors">Reach Us</span>
                                    <span className="text-primary font-semibold block group-hover:underline">Graft3D Health Care Solutions Pvt. Ltd.</span>
                                    <span className="group-hover:underline">4/261, 1st Floor, Rajas Towers Medavakkam Main Road, Kovilambakkam Chennai - 600129, Tamil Nadu, India.</span>
                                </a>
                            </div>
                        </div>

                        <Link className='pointer' href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09#success">
                            <Button className="w-fit mt-2 font-bold px-6 pointer">
                                Meet us live online
                            </Button>
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-200/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-gray-400 gap-4 text-center md:text-left">
                    <p>© {new Date().getFullYear()}. All Rights Reserved. Graft3D Health Care Solutions Pvt. Ltd.</p>
                    <div className="flex gap-1 text-primary">
                        <Link href="/terms-conditions" className="hover:underline">Disclaimer</Link> | <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
