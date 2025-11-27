import React from 'react';
import { SectionId } from '../types';
import { Smartphone, MessageSquare, Users, Globe, ArrowRight, Zap } from 'lucide-react';

const AISection: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'NFC名刺',
      subtitle: 'かざすだけでホームページを表示',
      description: 'スマホにかざすだけで、あなたのプロフィールページが開きます。紙の名刺では伝えきれない会社の魅力を、動画や写真とともに届けられます。',
      features: ['名刺交換の印象が変わる', '動画・写真を即時共有', '更新も自由自在'],
      color: 'amber'
    },
    {
      icon: MessageSquare,
      title: 'チャット機能付きHP',
      subtitle: 'お客様の質問に24時間対応',
      description: '御社の情報を学習したAIチャットボットをホームページに設置。営業時間外でも、お客様の質問に的確に回答します。',
      features: ['問い合わせ対応の負担軽減', 'よくある質問を自動回答', '見込み客の取りこぼし防止'],
      color: 'blue'
    },
    {
      icon: Users,
      title: 'AIアバター / VTuber',
      subtitle: '御社の「顔」をデジタルで表現',
      description: '代表者や社員の分身となるAIアバターを作成。動画コンテンツやライブ配信で、人手をかけずに情報発信を続けられます。',
      features: ['顔出しNGでも動画発信', '多言語対応も可能', '一度作れば繰り返し使える'],
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'デジタルツイン',
      subtitle: '経営者の知見をAIに継承',
      description: '経営者やキーパーソンの考え方・判断基準をAIに学習させ、社内外の相談対応に活用。属人化した知識を資産に変えます。',
      features: ['後継者育成の補助', '社内ナレッジの蓄積', '対外的なブランディング'],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
      amber: { bg: 'bg-amber-900/10', border: 'border-amber-500/20', text: 'text-amber-400', iconBg: 'bg-amber-900/30' },
      blue: { bg: 'bg-blue-900/10', border: 'border-blue-500/20', text: 'text-blue-400', iconBg: 'bg-blue-900/30' },
      purple: { bg: 'bg-purple-900/10', border: 'border-purple-500/20', text: 'text-purple-400', iconBg: 'bg-purple-900/30' },
      cyan: { bg: 'bg-cyan-900/10', border: 'border-cyan-500/20', text: 'text-cyan-400', iconBg: 'bg-cyan-900/30' }
    };
    return colors[color] || colors.amber;
  };

  return (
    <section id={SectionId.AI} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={18} className="text-amber-500" />
            <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">Digital Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
            「伝え続ける仕組み」を、<br />
            テクノロジーでつくる。
          </h2>
          <p className="text-gray-400 leading-relaxed">
            人手が足りない、でも情報発信は続けたい。そんな中小企業・個人事業主の課題を、
            デジタル技術で解決します。撮影した写真・動画を最大限に活用できる仕組みをご提案。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className={`group bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:${colors.border} transition-all duration-300`}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-1">{service.title}</h3>
                    <p className={`text-sm ${colors.text}`}>{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-gray-500 text-sm">
                      <ArrowRight size={12} className={colors.text} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Integration Message */}
        <div className="bg-gradient-to-r from-amber-900/20 to-transparent border border-amber-500/10 rounded-xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-serif text-white mb-4">
              撮影とセットで、より効果的に。
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              これらのサービスは単体でもご利用いただけますが、
              写真・動画撮影と組み合わせることで最大の効果を発揮します。
              「撮ったコンテンツをどう活かすか」まで一緒に考えます。
            </p>
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <span>まずは相談する</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
