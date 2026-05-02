"use client";

import React from 'react';
import { Phone, Mail, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useLeadForm } from '@/lib/useLeadForm';

const ContactFormDetails = () => {
    const { status, feedback, handleSubmit } = useLeadForm({
        subject: 'Contact Us Enquiry',
        successMessage: 'Thanks. We received your enquiry and will get back to you shortly.'
    });

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold  mb-4">Contact us</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl font-600">
                        Graft3D is a healthcare solution provider helping hospitals with disruptive & unique technologies. We do this by collaborating with global technology firms to make technology products for hospitals, surgeons & end patients. We believe user friendly technology is the key to success in planning & executing complex surgeries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side: Form */}
                    <div className="lg:col-span-2 bg-gray-100/90 p-8  border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 font-medium">Please fill out the form below and we will get back to you shortly.</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166AAF]/20 focus:border-[#166AAF] transition-all bg-white shadow-sm"
                                />
                                <div className="flex gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-4 py-3  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166AAF]/20 focus:border-[#166AAF] transition-all bg-white shadow-sm"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        required
                                        className="w-full px-4 py-3  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166AAF]/20 focus:border-[#166AAF] transition-all bg-white shadow-sm"
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="company"
                                placeholder="Hospital / Company Name"
                                className="w-full px-4 py-3  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166AAF]/20 focus:border-[#166AAF] transition-all bg-white shadow-sm"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="w-full px-4 py-3  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166AAF]/20 focus:border-[#166AAF] transition-all bg-white shadow-sm"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                required
                                className="w-full px-4 py-3  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166AAF]/20 focus:border-[#166AAF] transition-all bg-white shadow-sm resize-none"
                            ></textarea>
                            <div className="flex justify-end mt-4">
                                <Button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-[#166AAF] hover:bg-primary-600 text-white px-10 py-3  font-bold shadow-lg shadow-[#166AAF]/20 transition-all hover:-translate-y-1 disabled:opacity-60"
                                >
                                    {status === 'loading' ? 'Submitting...' : 'Submit'}
                                </Button>
                            </div>
                            {feedback && (
                                <p className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}>
                                    {feedback}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right Side: Contact Details */}
                    <div className="bg-gray-100/90 p-8  border border-gray-200 border-dashed h-fit flex flex-col gap-8">
                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Phone className="w-5 h-5 text-[#166AAF]" /> Contact details
                            </h4>
                            <div className="space-y-4 font-medium text-gray-600">
                                <div>
                                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Phone Number</div>
                                    <a href="tel:+919840478347" className="text-gray-800 hover:underline hover:text-[#166AAF] transition-colors inline-block">+91 98404 78347</a>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Phone Number</div>
                                    <a href="tel:+916374410703" className="text-gray-800 hover:underline hover:text-[#166AAF] transition-colors inline-block">+91 63744 10703</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-[#166AAF]" /> Email Us
                            </h4>
                            <a href="mailto:sales@graft3d.com" className="font-medium text-[#166AAF] hover:underline cursor-pointer block">
                                sales@graft3d.com
                            </a>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Video className="w-5 h-5 text-[#166AAF]" /> Meet Us Live
                            </h4>
                            <Button asChild className="w-full bg-[#166AAF] hover:bg-primary-600 text-white shadow-md transition-all font-bold">
                                <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09#success">Contact us on zoom</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormDetails;
