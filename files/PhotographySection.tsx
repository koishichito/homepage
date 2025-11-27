import React from 'react';
import { SectionId } from '../types';
import { Camera, Building2, Heart, Users, ArrowRight } from 'lucide-react';

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

  return (
    <section id={SectionId.PHOTO} className="py-24 bg-[#0c0c0c] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Camera size={18} className="text-amber-500" />
              <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">Photography</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                  あなたと御社の魅力を、<br />
                  写真で伝える。
                </h2>
              </div>
              <div>
                <p className="text-gray-400 leading-relaxed">
                  30年以上の商業撮影経験を活かし、ただ撮るだけでなく
                  「どう見せるか」「どう使うか」まで考えた写真を提供します。
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-slate-900/30 border border-white/5 p-6 rounded-xl hover:border-amber-500/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl text-white font-medium mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, eIndex) => (
                      <span 
                        key={eIndex}
                        className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            {[
              "https://picsum.photos/400/500?grayscale&random=1",
              "https://picsum.photos/400/500?grayscale&random=2",
              "https://picsum.photos/400/500?grayscale&random=3",
              "https://picsum.photos/400/500?grayscale&random=4",
            ].map((src, index) => (
              <div key={index} className="relative aspect-[4/5] overflow-hidden rounded-lg group">
                <img 
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-slate-900/30 border border-white/5 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-medium text-white mb-6">撮影の特徴</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <h4 className="text-amber-400 font-medium mb-2 flex items-center gap-2">
                    <ArrowRight size={14} />
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
