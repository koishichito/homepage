import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById(SectionId.ABOUT);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen w-full overflow-hidden bg-[#020b1c] flex items-center justify-center">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b1c] via-[#051129] to-[#020b1c]"></div>

        {/* Animated Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-gold-500/10 blur-[120px] animate-float animate-pulse-glow mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[100px] animate-float mix-blend-screen" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[80px] animate-pulse-glow mix-blend-screen" style={{ animationDelay: '1s' }}></div>

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center mt-32">
        <h2 className="text-gold-400 font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-8 animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
          Photography × Digital Technology
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.6] tracking-[0.05em] mb-10 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
          一瞬の真価を、<br />
          <span className="italic text-white drop-shadow-lg">揺るぎない資産へ。</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-100 text-lg md:text-xl font-light leading-relaxed tracking-wide mb-16 animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.5s' }}>
          銀幕を彩った30年の撮影技術と、最先端のデジタルツイン。<br className="hidden md:block" />
          あなたの価値を、色褪せない「資産」として<br className="hidden md:block" />
          社会に実装します。
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => document.getElementById(SectionId.AI)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-gold-500/50 hover:border-gold-400 text-gold-100 hover:text-white hover:bg-gold-500/20 transition-all duration-300 font-sans uppercase tracking-widest text-sm backdrop-blur-sm"
          >
            サービスを見る
          </button>
          <button
            onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-sans uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            無料相談する
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-24 pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-6">実績</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm">
            <div className="text-center">
              <span className="block text-2xl font-serif text-white mb-1 drop-shadow-md">30+</span>
              <span className="text-xs text-gray-400">年の撮影経験</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <span className="block text-2xl font-serif text-white mb-1 drop-shadow-md">映画・TV</span>
              <span className="text-xs text-gray-400">ポスター撮影実績</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <span className="block text-2xl font-serif text-white mb-1 drop-shadow-md">AI×写真</span>
              <span className="text-xs text-gray-400">ワンストップ提供</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce cursor-pointer z-20" onClick={scrollToContent}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;