import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import PhotographerProfile from '../components/PhotographerProfile';
import PhotographySection from '../components/PhotographySection';
import AISection from '../components/AISection';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="bg-slate-950 min-h-screen text-white selection:bg-gold-500 selection:text-black overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <PhotographerProfile />
                <PhotographySection />
                <div className="h-24 bg-gradient-to-b from-[#0c0c0c] to-slate-950"></div>
                <AISection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
