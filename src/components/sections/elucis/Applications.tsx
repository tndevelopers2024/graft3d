import { Scan, Bone, Brain, Activity, Heart, Users, GraduationCap } from "lucide-react";

/**
 * Compact Applications Section for Elucis
 * Removed images to emphasize functionality with high-fidelity iconography.
 */
const Applications = () => {
    const apps = [
        { title: "Cardiovascular procedure", icon: <Scan className="w-8 h-8" /> },
        { title: "Orthopedic reconstruction", icon: <Bone className="w-8 h-8" /> },
        { title: "Neurosurgery", icon: <Brain className="w-8 h-8" /> },
        { title: "Maxillofacial surgery", icon: <Activity className="w-8 h-8" /> },
        { title: "Implant positioning & device fitting", icon: <Heart className="w-8 h-8" /> },
        { title: "Interdisciplinary case review", icon: <Users className="w-8 h-8" /> },
        { title: "Medical education & simulation", icon: <GraduationCap className="w-8 h-8" /> }
    ];

    return (
        <section id="applications" className="w-full py-24 bg-white font-poppins">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* Containered Area with Light Blue Background */}
                <div className="bg-[#f0f9ff]/80 rounded-[3rem] p-12 md:p-20 border border-blue-50 shadow-sm relative overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#166AAF] tracking-tight">
                            Applications
                        </h2>
                    </div>

                    {/* Applications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {apps.map((app, index) => (
                            <div 
                                key={index} 
                                className={`group flex items-center gap-6 bg-white p-8 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${index === 6 ? 'lg:col-start-2' : ''}`}
                            >
                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-2xl bg-[#166AAF] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                                    {app.icon}
                                </div>
                                
                                {/* Label */}
                                <p className="text-[#166AAF] font-bold text-lg md:text-xl leading-tight">
                                    {app.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Applications;
