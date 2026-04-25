import React from 'react';
import { Gauge, BadgeCheck, PenTool, Wand2, ShieldCheck } from 'lucide-react';

const WhySurgeonsChooseUs = () => {
    return (
        <section className="py-20 bg-[#f4f8fb]">
            <div className="container mx-auto px-4 max-w-6xl">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#113b69] inline-block relative">
                        Why Surgeons Choose Our Platform
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#155a96]"></div>
                    </h2>
                </div>
                
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Card 1 */}
                    <div className="col-span-1 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="w-12 h-12 rounded-xl bg-[#eef5fa] flex items-center justify-center mb-6">
                            <Gauge className="text-[#155a96] w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#111827] mb-3 leading-tight">
                            Reduced Design Turnaround<br />Time
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Direct collaboration between surgeons and technical teams minimizes delays and accelerates the workflow
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="col-span-1 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="w-12 h-12 rounded-xl bg-[#eef5fa] flex items-center justify-center mb-6">
                            <BadgeCheck className="text-[#155a96] w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#111827] mb-3 leading-tight">
                            Higher First-Time Approval<br />Rates
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Clear 3D visualization and structured review reduce last-minute changes
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="col-span-1 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="w-12 h-12 rounded-xl bg-[#eef5fa] flex items-center justify-center mb-6">
                            <PenTool className="text-[#155a96] w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#111827] mb-3 leading-tight">
                            Superior Aesthetics with<br />Excellent Results
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Transparent material selection and expert-driven design support for better clinical output.
                        </p>
                    </div>

                    {/* Card 4 (Wide) */}
                    <div className="col-span-1 md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="w-16 h-16 rounded-xl bg-[#eef5fa] flex items-center justify-center flex-shrink-0">
                            <Wand2 className="text-[#155a96] w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#111827] mb-2 leading-tight">
                                Lower Operational Friction
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                                Centralized communication and approvals reduce administrative burden across departments.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 (Centered) */}
                    <div className="col-span-1 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-xl bg-[#fff0f0] flex items-center justify-center mb-6">
                            <ShieldCheck className="text-[#d32f2f] w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#111827] mb-3 leading-tight">
                            Protect Patient Data
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Secure handling of patient information with authorization and controlled access.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhySurgeonsChooseUs;
