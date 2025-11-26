import React from 'react';
import { SectionId } from '../types';
import { Camera, Sun, Aperture } from 'lucide-react';

const PhotographySection: React.FC = () => {
  const images = [
    "https://picsum.photos/600/800?grayscale&random=1",
    "https://picsum.photos/800/600?grayscale&random=2",
    "https://picsum.photos/600/600?grayscale&random=3",
  ];

  return (
    <section id={SectionId.PHOTO} className="py-32 bg-[#0c0c0c] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="md:w-1/2">
            <div className="flex items-center space-x-3 mb-4 text-gold-500">
              <Camera size={20} />
              <span className="uppercase tracking-widest text-sm font-mono">Photography Business</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              見えざる <br />
              <span className="italic text-gray-500">本質を写す</span>
            </h2>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <p className="text-gray-400 leading-relaxed font-light border-l-2 border-gold-500/20 pl-6">
              私たちの写真は単なる記録ではありません。肩書きの背後にある人格と物語を浮かび上がらせます。
              あなたのパーソナルブランドの基盤となる、自然かつコンセプト主導のビジュアルを提供します。
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-4 relative group overflow-hidden">
            <img 
              src={images[0]} 
              alt="Executive Portrait" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-serif text-xl">エグゼクティブ・ポートレート</h3>
              <p className="text-gray-400 text-sm mt-2">一枚に込める「真正性」。</p>
            </div>
          </div>
          <div className="md:col-span-5 relative group overflow-hidden md:mt-12">
            <img 
              src={images[1]} 
              alt="Corporate Lifestyle" 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-serif text-xl">ビジュアル・ストーリーテリング</h3>
              <p className="text-gray-400 text-sm mt-2">物語を語る美学。</p>
            </div>
          </div>
          <div className="md:col-span-3 relative group overflow-hidden md:-mt-12">
             <img 
              src={images[2]} 
              alt="Detail Shot" 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
             <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-serif text-xl">ブランド・アトモスフィア</h3>
              <p className="text-gray-400 text-sm mt-2">世界観の構築。</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          <div className="group">
            <Sun className="text-gold-500 mb-4 group-hover:rotate-45 transition-transform duration-500" size={32} />
            <h4 className="text-white font-serif text-xl mb-2">Natural Lighting</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              自然光を巧みに操り、柔らかく親しみやすい、しかし威厳のあるビジュアルを創り出します。現代のリーダーに求められる空気感を演出します。
            </p>
          </div>
          <div className="group">
            <Aperture className="text-gold-500 mb-4 group-hover:rotate-45 transition-transform duration-500" size={32} />
            <h4 className="text-white font-serif text-xl mb-2">Conceptual Depth</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              すべての撮影は、ビジネスの核心的価値観をビジュアルアウトプットと一致させるための「コンセプトワーク」から始まります。
            </p>
          </div>
          <div className="group">
            <Camera className="text-gold-500 mb-4 group-hover:rotate-45 transition-transform duration-500" size={32} />
            <h4 className="text-white font-serif text-xl mb-2">High-End Retouching</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              真実を歪めることなく魅力を最大化する、雑誌クオリティのハイエンドなレタッチ技術を提供します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;