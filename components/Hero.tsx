import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById(SectionId.ABOUT);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Split background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
        {/* Abstract shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-500/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-gold-400 font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Art & Intelligence
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-white leading-tight mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          その真価を、 <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">永遠に。</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          私たちは「<span className="text-gold-400">写真</span>」による真の姿の描写と、<br className="hidden md:block" />
          「<span className="text-blue-400">AI技術</span>」による知性の継承を繋ぐ架け橋となります。
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
           <button 
             onClick={() => document.getElementById(SectionId.PHOTO)?.scrollIntoView({behavior: 'smooth'})}
             className="px-8 py-4 border border-gold-500/30 hover:border-gold-500 text-gold-100 hover:bg-gold-500/10 transition-all duration-300 font-sans uppercase tracking-widest text-sm"
           >
             写真事業を見る
           </button>
           <button 
             onClick={() => document.getElementById(SectionId.AI)?.scrollIntoView({behavior: 'smooth'})}
             className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-sans uppercase tracking-widest text-sm font-bold"
           >
             AI事業を見る
           </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce cursor-pointer" onClick={scrollToContent}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;