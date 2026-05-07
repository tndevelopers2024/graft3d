"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/Button';
import { InlineWidget } from "react-calendly";
import { useLeadForm } from '@/lib/useLeadForm';

const BookDemoContent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        product: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const { status, feedback, handleSubmit } = useLeadForm({
        subject: 'Book Demo Request',
        successMessage: 'Thanks. Your demo request has been sent.',
        onSuccess: () => setFormData({
            firstName: '',
            email: '',
            phone: '',
            product: ''
        }),
        resetOnSuccess: false
    });

    return (
        <>
      {/* Top hero band with image, matching reference layout */}
      <section className="w-full bg-[#e6f3ff]">
        <div className="max-w-[1400px] mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#166AAF] tracking-wide">
              BOOK DEMO
            </h1>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[860px] aspect-[16/9]">
              <Image
                src="/images/book-demo/Group-107.png"
                alt="Scanner and facial prosthesis for demo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form + Calendly section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Form */}
            <div className="space-y-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-1">
                                <label className="text-sm text-gray-500">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm text-gray-500">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm text-gray-500">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm text-red-500">Select *</label>
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors bg-transparent appearance-none"
                                    required
                                >
                                    <option value="" disabled>Select Products</option>
                                    <option value="3d-printing">3D Printing</option>
                                    <option value="software">Software</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                            </div>

                            <Button
                              type="submit"
                              disabled={status === 'loading'}
                              className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white rounded-none px-8 py-2 h-auto text-sm font-normal"
                            >
                              {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </Button>
                            {feedback && (
                              <p className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}>
                                {feedback}
                              </p>
                            )}
                          </form>
                        </div>

            {/* Right Side: Calendly */}
            <div className="h-[600px] border border-gray-100 rounded-lg overflow-hidden shadow-sm">
              <InlineWidget
                url="https://calendly.com/graft3dh"
                styles={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default BookDemoContent;
