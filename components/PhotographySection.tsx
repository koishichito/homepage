import React from 'react';
import { SectionId } from '../types';
import { Camera, Building2, Heart, ArrowRight } from 'lucide-react';

const PhotographySection: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'ビジネスプロフィール',
      description: '経営者・士業・コンサルタントの方へ。名刺やWebサイトで使える、信頼感のあるポートレートを撮影します。',
      examples: ['経営者プロフィール', 'Webサイト用写真', '講演者紹介写真']
    },
    {
      icon: Camera,
      title: '商品・店舗撮影',
      description: 'ECサイトや販促物用の商品写真、店舗の雰囲気を伝える写真を撮影。購買意欲を高める構図を提案します。',
      examples: ['商品カタログ', '店舗・施設紹介', '施術風景']
    },
    {
      icon: Heart,
      title: 'エンディングフォト',
      description: '人生の記録を残したい方へ。ご本人の言葉とともに、ご家族へ伝えるメッセージを写真と映像で残します。',
      examples: ['生前撮影', 'メッセージビデオ', 'ファミリーヒストリー']
    }
  ];

  const features = [
    {
      title: '出張撮影対応',
      description: 'オフィス、店舗、ご自宅など、ご希望の場所に機材を持参して撮影します。'
    },
    {
      title: '丁寧なヒアリング',
      description: '撮影前に用途や想いをお聞きし、最適な撮影プランをご提案します。'
    },
    {
      title: 'デジタル活用の提案',
      description: '撮った写真をNFC名刺やチャット付きHPで活用する方法もご提案できます。'
    }
  ];

  const images = [
    "https://picsum.photos/400/500?grayscale&random=1",
    "https://picsum.photos/400/500?grayscale&random=2",
    "https://picsum.photos/400/500?grayscale&random=3",
    "https://picsum.photos/400/500?grayscale&random=4",
  ];

  return (
    <section id={SectionId.PHOTO} className="py-32 bg-[#0c0c0c] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="md:w-1/2">
            <div className="flex items-center space-x-3 mb-4 text-gold-500">
              <Camera size={20} />
              <span className="uppercase tracking-widest text-sm font-mono">Photography</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              あなたと御社の魅力を、<br />
              <span className="italic text-gray-500">写真で伝える。</span>
            </h2>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <p className="text-gray-400 leading-relaxed font-light border-l-2 border-gold-500/20 pl-6">
              30年以上の商業撮影経験を活かし、ただ撮るだけでなく「どう見せるか」「どう使うか」まで考えた写真を提供します。
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/30 border border-white/5 p-8 rounded-xl hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl text-white font-serif mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.examples.map((example, eIndex) => (
                    <span
                      key={eIndex}
                      className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <h4 className="text-white font-serif text-xl mb-4 flex items-center gap-3">
                <ArrowRight size={18} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed pl-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;