import React from 'react';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      title: '撮って終わりにしない',
      description: '写真・動画は「作って納品」で終わりがち。私たちは、それをどう活かすかまで設計します。'
    },
    {
      title: '技術を道具として使う',
      description: 'AIやNFCは手段であって目的ではありません。御社の課題解決に必要なものだけを提案します。'
    },
    {
      title: '伝わる形に仕上げる',
      description: '30年以上の商業撮影で培った「見せ方」のノウハウを、デジタルツールに落とし込みます。'
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-950 border-b border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12 sticky top-24">
          <h2 className="text-sm font-mono text-gold-500 uppercase tracking-widest mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            技術は、<br />
            想いを運ぶ<br />
            器でしかない。
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-blue-500 mb-8"></div>
          <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
            どれほどAIが進化しても、伝えるべき「核」がなければ人の心は動きません。
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            私たちは写真家としての眼差しでその「核」を捉え、デジタル技術で社会へ、そして次代へと届けます。流行の技術を使うことではなく、あなたの「真価」を正しく伝えることが私たちの使命です。
          </p>
        </div>
        <div className="md:w-1/2 space-y-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-lg hover:border-gold-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 size={24} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;