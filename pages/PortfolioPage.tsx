import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const PortfolioPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-950 min-h-screen text-white selection:bg-gold-500 selection:text-black overflow-x-hidden">
            <Navbar />
            <main className="pt-20">
                <Portfolio />
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
