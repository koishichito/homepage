import React from 'react';
import { SectionId } from '../types';
import { Camera, Award, Briefcase, User, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PhotographerProfile: React.FC = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      year: '2003',
      title: '踊る大捜査線 THE MOVIE 2',
      description: 'パブリシティ撮影担当。日本実写映画の歴代興行収入1位を記録。'
    },
    {
      year: '2004',
      title: 'WATER BOYS',
      description: 'ポスター撮影。フジテレビ年間ポスターベストアワード選出。'
    },
    {
      year: '2024',
      title: 'Any Style In Europe',
      description: '2000-2001年のヨーロッパ撮影作品集（Kindle版）を出版。'
    }
  ];

  return (
    <section id="profile" className="py-24 relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/portfolio/man%20wearing%20suits%20on%20top%20of%20the%20building.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="md:w-1/3 sticky top-24">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/images/profile/sasho.jpeg"
                alt="佐粧俊之"
                className="relative w-full rounded-lg shadow-2xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 rounded-lg pointer-events-none"></div>
              <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
            </div>

            <div className="mt-8 space-y-4 bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-center space-x-3 text-gold-500">
                <User size={20} />
                <span className="font-mono text-sm tracking-widest uppercase">Photographer</span>
              </div>
              <h3 className="text-2xl font-serif text-white">佐粧 俊之</h3>
              <p className="text-gray-400 text-sm">Toshiyuki Sasho</p>
              <p className="text-gold-500 text-xs font-mono mt-2">株式会社anystyle 代表取締役</p>
              <div className="h-px w-full bg-white/10 my-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                1964年名古屋生まれ。写真家・長濱治に師事。1995年独立。
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 space-y-8">
            {/* Experience */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md">
              <h4 className="text-xl font-serif mb-6 flex items-center text-white">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                <Camera size={20} className="text-gold-500 mr-2" />
                30年以上の商業撮影経験
              </h4>
              <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                <p>
                  雑誌の表紙、映画ポスター、広告写真など、時代を象徴する数々のビジュアルを撮影してきました。
                  その中で培ったのは、被写体の一瞬の輝きを見逃さない「眼」と、それを最大限に引き出す演出力です。
                </p>
                <p>
                  AIやデジタル技術は、その「本質」をより広く、より長く伝えるための手段に過ぎません。
                  アナログで培った確かな技術があるからこそ、デジタルの世界でも揺るがない品質を提供できると確信しています。
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md">
              <h4 className="text-xl font-serif mb-6 flex items-center text-white">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                写真家としての哲学
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-gold-500 font-serif mb-3 text-lg">私服での撮影</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    レンタル衣装ではなく、お客様ご自身の服や愛用品で撮影。
                    その時の空気感まで思い出せる写真を目指しています。
                  </p>
                </div>
                <div>
                  <h5 className="text-gold-500 font-serif mb-3 text-lg">広告視点の提案</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    ただ撮るだけでなく「どう使うか」まで考えた撮影プランをご提案。
                    Webサイトや名刺での活用まで見据えます。
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md">
              <h4 className="text-xl font-serif mb-6 flex items-center text-white">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                <Award size={20} className="text-gold-500 mr-2" />
                主な実績
              </h4>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-gold-500 font-mono text-sm shrink-0">{item.year}</span>
                    <div>
                      <h5 className="text-white font-medium mb-1">{item.title}</h5>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-start">
                <button
                  onClick={() => navigate('/portfolio')}
                  className="group flex items-center space-x-3 bg-gold-500 text-black px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-medium tracking-widest text-sm shadow-lg shadow-gold-500/20"
                >
                  <span>作品を見る</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographerProfile;
