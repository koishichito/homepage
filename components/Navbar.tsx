import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: '理念', id: SectionId.ABOUT },
    { label: 'プロフィール', id: SectionId.PROFILE },
    { label: 'ポートフォリオ', id: SectionId.PORTFOLIO },
    { label: '写真事業', id: SectionId.PHOTO },
    { label: 'AI事業', id: SectionId.AI },
    { label: 'お問い合わせ', id: SectionId.CONTACT },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
          <div className="w-8 h-8 bg-gradient-to-tr from-gold-400 to-white rounded-full opacity-80"></div>
          <span className="text-2xl font-serif font-bold tracking-widest text-white">
            ANYSTYLE
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors duration-300 font-sans font-light"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white hover:text-gold-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 flex flex-col space-y-6 md:hidden shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-lg uppercase tracking-widest text-slate-300 hover:text-gold-400 font-sans"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;