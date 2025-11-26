import React from 'react';
import { SectionId } from '../types';

const Portfolio: React.FC = () => {
    const images = [
        { src: "/images/portfolio/man wearing suits on top of the building.jpg", alt: "Man on building" },
        { src: "/images/portfolio/man on the motorcycle.jpg", alt: "Man on motorcycle" },
        { src: "/images/portfolio/child playing piano.png", alt: "Child playing piano" },
        { src: "/images/portfolio/child on mother lap playing piano.png", alt: "Child on mother's lap" },
        { src: "/images/portfolio/enjoying girl in pool.png", alt: "Girl in pool" },
        { src: "/images/portfolio/happy guy in night town.png", alt: "Happy guy in night town" },
        { src: "/images/portfolio/europian middle-aged man.png", alt: "European middle-aged man" },
        { src: "/images/portfolio/middle aged handsome man.png", alt: "Middle aged handsome man" },
        { src: "/images/portfolio/salayman wearing glasses.png", alt: "Salaryman wearing glasses" },
        { src: "/images/portfolio/teacher in lab.png", alt: "Teacher in lab" },
        { src: "/images/portfolio/piano in beach.png", alt: "Piano in beach" },
        { src: "/images/portfolio/3 foregin mans.png", alt: "3 foreign men" },
    ];

    return (
        <section id="portfolio" className="py-24 bg-[#0c0c0c] text-white">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-mono text-gold-500 uppercase tracking-widest mb-4">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl font-serif">
                        Works & Collections
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-blue-500 mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-serif tracking-wide">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
