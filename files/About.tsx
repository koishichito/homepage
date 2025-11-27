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
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-4 mb-6 leading-tight">
              写真と技術で、<br />
              会社の「伝える力」を強くする。
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Anystyleは、写真・動画撮影と、デジタル技術を組み合わせたサービスを提供しています。
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                「良い写真を撮ったけど、ホームページに載せただけで終わっている」<br />
                「会社の魅力をもっと伝えたいけど、どうすればいいかわからない」
              </p>
              <p className="text-gray-400 leading-relaxed">
                そんな課題を解決するために、撮影からWebサイト、AI活用まで一貫して対応できる体制を整えました。
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 border border-white/5 p-6 rounded-lg hover:border-amber-500/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 size={20} className="text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">{value.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
