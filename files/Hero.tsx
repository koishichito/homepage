import React from 'react';
import { SectionId } from '../types';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById(SectionId.ABOUT);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-900/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/5 blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50"></div>
            <span className="text-amber-400/80 font-mono text-xs md:text-sm tracking-[0.25em] uppercase">
              Photography × Digital Technology
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/50"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-center mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <span className="block text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-4">
              あなたの会社を
            </span>
            <span className="block text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                24時間働く存在
              </span>
              <span className="text-white">に。</span>
            </span>
          </h1>

          {/* Sub Description */}
          <p className="max-w-2xl mx-auto text-center text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            NFC名刺、AIアバター、対話型ホームページ。<br className="hidden md:block" />
            写真・動画撮影と最新テクノロジーで、<br className="hidden md:block" />
            御社の魅力を「伝え続ける仕組み」をつくります。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <button 
              onClick={() => document.getElementById(SectionId.AI)?.scrollIntoView({behavior: 'smooth'})}
              className="group px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black transition-all duration-300 font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-3"
            >
              <span>サービスを見る</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-4 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 transition-all duration-300 font-sans text-sm tracking-wide"
            >
              無料相談する
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/5 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">実績</p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="text-center">
                <span className="block text-2xl font-serif text-white mb-1">30+</span>
                <span className="text-xs text-gray-500">年の撮影経験</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="text-center">
                <span className="block text-2xl font-serif text-white mb-1">映画・TV</span>
                <span className="text-xs text-gray-500">ポスター撮影実績</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="text-center">
                <span className="block text-2xl font-serif text-white mb-1">AI×写真</span>
                <span className="text-xs text-gray-500">ワンストップ提供</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/20 hover:text-white/40 transition-colors cursor-pointer"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
