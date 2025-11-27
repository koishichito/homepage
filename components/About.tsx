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
            写真と技術で、<br />
            会社の「伝える力」を<br />
            強くする。
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-blue-500 mb-8"></div>
          <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
            Anystyleは、写真・動画撮影と、デジタル技術を組み合わせたサービスを提供しています。
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            「良い写真を撮ったけど、ホームページに載せただけで終わっている」「会社の魅力をもっと伝えたいけど、どうすればいいかわからない」。そんな課題を解決するために、撮影からWebサイト、AI活用まで一貫して対応できる体制を整えました。
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