import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-950 border-b border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
          <h2 className="text-sm font-mono text-gold-500 uppercase tracking-widest mb-4">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            心に響くビジュアル。<br/>
            永遠に続く知性。
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-blue-500 mb-8"></div>
        </div>
        <div className="md:w-1/2">
           <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
             Anystyleは、選ばれたネットワーク内で活動するブティック・コンサルタンシーです。現代のエグゼクティブにとって、時間は最も希少な資産であり、評判こそが最も価値ある通貨であることを理解しています。
           </p>
           <p className="text-gray-400 text-lg leading-relaxed font-light">
             ハイファッションな写真技術と最先端の大規模言語モデル（LLM）の実装を組み合わせることで、私たちは二つのサービスを提供します。<strong className="text-white font-normal">投影（世界があなたをどう見るか）</strong>と、<strong className="text-white font-normal">拡張（あなたが世界とどう関わるか）</strong>です。
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;