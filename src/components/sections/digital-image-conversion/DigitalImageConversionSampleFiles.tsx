"use client";

import React from 'react';

const sampleFiles = [
    {
        id: "spine",
        title: "Spine",
        embedUrl: "https://sketchfab.com/models/e218499e89d143d9b6aca26890718727/embed",
        modelUrl: "https://sketchfab.com/3d-models/spine-e218499e89d143d9b6aca26890718727?utm_medium=embed&utm_campaign=share-popup&utm_content=e218499e89d143d9b6aca26890718727"
    },
    {
        id: "shoulder",
        title: "Shoulder",
        embedUrl: "https://sketchfab.com/models/84d146e21c0e4173988a2539611e875c/embed",
        modelUrl: "https://sketchfab.com/3d-models/shoulder-84d146e21c0e4173988a2539611e875c?utm_medium=embed&utm_campaign=share-popup&utm_content=84d146e21c0e4173988a2539611e875c"
    },
    {
        id: "knee",
        title: "Knee",
        embedUrl: "https://sketchfab.com/models/63a81789e2144ed7bd6c7a8eff56e943/embed",
        modelUrl: "https://sketchfab.com/3d-models/knee-63a81789e2144ed7bd6c7a8eff56e943?utm_medium=embed&utm_campaign=share-popup&utm_content=63a81789e2144ed7bd6c7a8eff56e943"
    },
    {
        id: "heart",
        title: "Heart",
        embedUrl: "https://sketchfab.com/models/f4a2f373963b44789ebf6de63ddc0884/embed",
        modelUrl: "https://sketchfab.com/3d-models/heart-f4a2f373963b44789ebf6de63ddc0884?utm_medium=embed&utm_campaign=share-popup&utm_content=f4a2f373963b44789ebf6de63ddc0884"
    },
    {
        id: "basilar-tip-aneursym",
        title: "Basilar Tip Aneursym",
        embedUrl: "https://sketchfab.com/models/fd8c73e6f4aa4bc4bb75e1f6d177a871/embed",
        modelUrl: "https://sketchfab.com/3d-models/basilar-tip-aneursym-fd8c73e6f4aa4bc4bb75e1f6d177a871?utm_medium=embed&utm_campaign=share-popup&utm_content=fd8c73e6f4aa4bc4bb75e1f6d177a871"
    },
    {
        id: "blood-vessel",
        title: "Blood Vessel",
        embedUrl: "https://sketchfab.com/models/43bf86b80aef437e9f1ca05cb93ca5ab/embed",
        modelUrl: "https://sketchfab.com/3d-models/blood-vessel-43bf86b80aef437e9f1ca05cb93ca5ab?utm_medium=embed&utm_campaign=share-popup&utm_content=43bf86b80aef437e9f1ca05cb93ca5ab"
    }
];

const DigitalImageConversionSampleFiles = () => {
    return (
        <section id="sample-files" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                SAMPLE 3D FILES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleFiles.map((file) => (
                    <div key={file.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                        {/* Sketchfab Embed Container */}
                        <div className="relative w-full aspect-video">
                            <iframe
                                title={file.title}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                {...({
                                    mozallowfullscreen: "true",
                                    webkitallowfullscreen: "true",
                                    "xr-spatial-tracking": "true",
                                    "execution-while-out-of-viewport": "true",
                                    "execution-while-not-rendered": "true",
                                    "web-share": "true"
                                } as any)}
                                src={file.embedUrl}
                            ></iframe>
                        </div>

                        {/* Caption */}
                        <div className="p-4 text-center text-sm text-gray-500">
                            <a
                                href={file.modelUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#1CAAD9] hover:underline"
                            >
                                {file.title}
                            </a>
                            {' '}by{' '}
                            <a
                                href="https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#1CAAD9] hover:underline"
                            >
                                Graft3D
                            </a>
                            {' '}on{' '}
                            <a
                                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#1CAAD9] hover:underline"
                            >
                                Sketchfab
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DigitalImageConversionSampleFiles;
