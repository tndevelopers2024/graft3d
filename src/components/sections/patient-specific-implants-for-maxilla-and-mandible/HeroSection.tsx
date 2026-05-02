import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="full-bleed relative w-full overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Line-6.png')" }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 text-gray-900">
          {/* Left content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-[40px] leading-tight drop-shadow-md">
                Patient Specific Implants For Atrophic Maxilla and Mandible
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-700 max-w-xl">
                Custom-designed 3D printed solutions using CT-based virtual
                planning, CAD/CAM and advanced manufacturing for severely
                resorbed jaws.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#005696] px-8 py-3 text-base md:text-lg font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-lg"
              >
                Meet Us Live Online <Video className="size-5" />
              </Link>
              <Link
                href="/get-quote"
                className="rounded-full border border-white/70 bg-white/10 px-8 py-3 text-base md:text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#005696]"
              >
                Get a Quote Now
              </Link>
            </div>

            <div className="flex flex-col space-y-4 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#005696] text-white shadow-md">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold">
                    Call us now
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-700">
                    <a href="tel:+916374410703" className="hover:text-[#005696]">
                      +91 63744 10703
                    </a>{" "}
                    |{" "}
                    <a href="tel:+919840478347" className="hover:text-[#005696]">
                      +91 98404 78347
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#005696] text-white shadow-md">
                  <Mail className="size-6" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold">
                    Email Us at
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-700">
                    <a
                      href="mailto:sales@graft3d.com"
                      className="hover:text-[#005696]"
                    >
                      sales@graft3d.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[420px] md:max-w-[520px]">
              <Image
                src="/images/patient-specific-implants-for-maxilla-and-mandible/8-1-1.png"
                alt="Patient specific maxilla and mandible implant"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

