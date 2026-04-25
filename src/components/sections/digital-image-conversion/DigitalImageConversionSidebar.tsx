"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';
const menuItems = [
    { id: 'how-it-works', label: 'How Does This Works?' },
    { id: 'applications', label: 'Applications' },
    { id: 'sample-files', label: 'Sample 3D Files' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-graft3d', label: 'Why Graft 3d Healthcare?' },
];

interface DigitalImageConversionSidebarProps {
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

const DigitalImageConversionSidebar: React.FC<DigitalImageConversionSidebarProps> = ({ activeTab, onTabChange }) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
        e.preventDefault();
        onTabChange(id);
        // Optional: Scroll to top of content if needed, but for tabs usually just switching is enough
        window.scrollTo({ top: 600, behavior: 'smooth' }); // Scroll past hero slightly
    };

    return (
        <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-[#1e73be] rounded-lg overflow-hidden shadow-lg">
                <ul className="flex flex-col">
                    {menuItems.map((item) => (
                        <li key={item.id} className="border-b border-blue-400 last:border-b-0">
                            <button
                                onClick={(e) => handleClick(e, item.id)}
                                className={`w-full text-left block px-6 py-4 text-sm font-medium transition-colors duration-300 ${activeTab === item.id
                                    ? 'bg-[#155a96] text-white border-l-4 border-white'
                                    : 'text-blue-100 hover:bg-[#155a96] hover:text-white'
                                    }`}
                            >
                                {item.label}
                                {activeTab === item.id && (
                                    <ChevronRight className="float-right" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DigitalImageConversionSidebar;
