import React from 'react';
import { SectionId } from '../types';
import { Smartphone, MessageSquare, Users, Globe, ArrowRight, Zap } from 'lucide-react';
import GeminiConceptGenerator from './GeminiConceptGenerator';

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
    const colors: Record<string, { border: string; text: string; iconBg: string }> = {
      amber: { border: 'hover:border-amber-500/50', text: 'text-amber-400', iconBg: 'bg-amber-900/20' },
      blue: { border: 'hover:border-blue-500/50', text: 'text-blue-400', iconBg: 'bg-blue-900/20' },
      purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400', iconBg: 'bg-purple-900/20' },
      cyan: { border: 'hover:border-cyan-500/50', text: 'text-cyan-400', iconBg: 'bg-cyan-900/20' }
    };
    return colors[color] || colors.amber;
  };

  return (
    <section id={SectionId.AI} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 text-blue-400 border border-blue-400/30 px-4 py-1 rounded-full mb-6">
            <Zap size={16} />
            <span className="uppercase tracking-widest text-xs font-mono">Digital Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            プロの品質を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">テクノロジーで拡張する。</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            人手が足りない、でも情報発信は続けたい。そんな中小企業・個人事業主の課題を、デジタル技術で解決します。撮影した写真・動画を最大限に活用できる仕組みをご提案。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`bg-slate-900/50 border border-white/5 p-8 rounded-xl ${colors.border} transition-all duration-500 group`}
              >
                <div className={`w-14 h-14 ${colors.iconBg} rounded-lg flex items-center justify-center mb-6 ${colors.text} group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl text-white font-serif mb-2">{service.title}</h3>
                <p className={`text-sm ${colors.text} mb-4 font-mono`}>{service.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="text-gray-500 text-xs space-y-2 font-mono">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <ArrowRight size={12} className={colors.text} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Integration Message */}
        <div className="bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/10 rounded-xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif text-white mb-4">
              撮影とセットで、より効果的に。
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              これらのサービスは単体でもご利用いただけますが、
              写真・動画撮影と組み合わせることで最大の効果を発揮します。
              「撮ったコンテンツをどう活かすか」まで一緒に考えます。
            </p>
            <button
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <span>まずは相談する</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Interactive Demo */}
        <GeminiConceptGenerator />

      </div>
    </section>
  );
};

export default AISection;