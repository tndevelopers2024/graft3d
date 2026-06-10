"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const RegraftHero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/regraft/regraft-bg.png"
          alt="ReGraft Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-8">
            {/* ReGraft Logo/Text Image */}
            <h1 className="sr-only">Regraft</h1>
            <div className="relative w-[300px] h-[80px] lg:w-[400px] lg:h-[100px]">
              <Image
                src="/images/regraft/regraft-text.png"
                alt="ReGraft"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button className="flex-1 sm:flex-initial rounded-md px-8 py-6 text-base font-semibold shadow-md bg-[#0066b2] hover:bg-[#005596]">
                <Link href="/get-quote">Enquire now</Link>
              </Button>
              <Button className="flex-1 sm:flex-initial rounded-md px-8 py-6 text-base font-semibold shadow-md bg-[#0066b2] hover:bg-[#005596]">
                <Link href="/get-quote">Book 3D Scanning Appointment</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#0066b2] text-white p-3 rounded-full shadow-lg">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#0066b2] font-bold text-lg">Call us now</p>
                  <div className="flex flex-wrap gap-x-2">
                    <a href="tel:+916374410703" className="text-gray-700 text-sm font-semibold hover:text-[#0066b2] transition-colors">+91 63744 10703</a>
                    <span className="text-gray-400">|</span>
                    <a href="tel:+919840478347" className="text-gray-700 text-sm font-semibold hover:text-[#0066b2] transition-colors">+91 98404 78347</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#0066b2] text-white p-3 rounded-full shadow-lg">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#0066b2] font-bold text-lg">Email Us at</p>
                  <a href="mailto:sales@graft3d.com" className="text-gray-700 text-sm font-semibold hover:text-[#0066b2] transition-colors">sales@graft3d.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side spacer for background image visibility */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default RegraftHero;
