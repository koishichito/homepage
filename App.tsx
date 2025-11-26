import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PhotographySection from './components/PhotographySection';
import AISection from './components/AISection';
import Footer from './components/Footer';

import PhotographerProfile from './components/PhotographerProfile';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {

  useEffect(() => {
    // Simple smooth scrolling fix for hash links on mount
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-gold-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PhotographerProfile />
        <Portfolio />
        <PhotographySection />
        <div className="h-24 bg-gradient-to-b from-[#0c0c0c] to-slate-950"></div>
        <AISection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
