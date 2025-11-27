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
        <h2 className="text-gold-400 font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Photography × Digital Technology
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-white leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          あなたの会社を <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">24時間働く存在に。</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          NFC名刺、AIアバター、対話型ホームページ。<br className="hidden md:block" />
          写真・動画撮影と最新テクノロジーで、<br className="hidden md:block" />
          御社の魅力を「伝え続ける仕組み」をつくります。
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => document.getElementById(SectionId.AI)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-gold-500/30 hover:border-gold-500 text-gold-100 hover:bg-gold-500/10 transition-all duration-300 font-sans uppercase tracking-widest text-sm"
          >
            サービスを見る
          </button>
          <button
            onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-sans uppercase tracking-widest text-sm font-bold"
          >
            無料相談する
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
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

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce cursor-pointer" onClick={scrollToContent}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;