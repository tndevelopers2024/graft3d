import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
    {
        city: "Chennai",
        type: "Head Office",
        address: "4/261, 1st Floor, Rajas Towers Medavakkam Main Road, Kovilambakkam, Chennai - 600129, Tamil Nadu, India.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.663529340024!2d80.18731117589334!3d12.92931161580214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f00223ed729%3A0xe7819dd39c894f6e!2sGraft3D%20Healthcare%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    },
    {
        city: "Mumbai",
        type: "Branch Office",
        address: "Shiv Sagar Society, Pestom Sagar, Chembur - West, Mumbai - 400089",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.88000000000001!3d19.110000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87700000001%3A0x0000000000000000!2sTex%20Centre%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    },
    {
        city: "Bengaluru",
        type: "Branch Office",
        address: "No. 2501, IV Phase, 2nd Floor, 8th Cross Rd, Ganapathi Nagar, Phase 2, Peenya, Bengaluru, Karnataka 560058.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.421285342143!2d77.514055!3d13.022254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d468e2f9eb3%3A0x7f0432eccd16b9ce!2sPrecise3DM%20Bangalore%20-%203D%20Scanning%20Service%20%7C%20Reverse%20Engineering%20Service%20%7C%203D%20Printing%20Service!5e0!3m2!1sen!2sin!4v1772187543706!5m2!1sen!2sin"
    }
];

const ContactLocations = () => {
    return (
        <section className="w-full py-20 bg-[#2270AF]">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {locations.map((loc, index) => (
                        <div key={index} className="flex flex-col text-white">
                            {/* Headings */}
                            <h2 className="text-[26px] font-extrabold mb-3 tracking-wide">Office locations</h2>
                            <div className="text-[17px] font-medium opacity-90 mb-5">{loc.type}</div>

                            {/* City Title with Icon */}
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                                <MapPin className="w-5 h-5" strokeWidth={2.5} /> {loc.city}
                            </h3>

                            {/* Map */}
                            <div className="relative h-[280px] w-full overflow-hidden rounded mb-6">
                                <iframe
                                    src={loc.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale-[20%] transition-all duration-700"
                                ></iframe>
                            </div>

                            {/* Address */}
                            <p className="text-[14px] leading-relaxed font-bold tracking-wide w-[90%]">
                                {loc.address}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactLocations;
