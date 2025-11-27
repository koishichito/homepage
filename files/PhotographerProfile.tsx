import React from 'react';
import { Camera, Award, Briefcase, ExternalLink } from 'lucide-react';
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
    <section id="profile" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/images/portfolio/man%20wearing%20suits%20on%20top%20of%20the%20building.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          filter: 'blur(2px)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">Photographer</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-4 mb-4">
              撮影を担当するのは
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/images/profile/sasho.jpeg"
                    alt="佐粧俊之"
                    className="w-full aspect-[3/4] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-serif text-white">佐粧 俊之</h3>
                    <p className="text-gray-500 text-sm">Toshiyuki Sasho</p>
                  </div>
                  <p className="text-amber-500 text-sm font-mono">株式会社anystyle 代表取締役</p>
                  <div className="h-px bg-white/10"></div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    1964年名古屋生まれ。写真家・長濱治に師事。1995年独立。
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Experience */}
              <div className="bg-slate-900/30 border border-white/5 p-6 md:p-8 rounded-xl">
                <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-3">
                  <Camera size={20} className="text-amber-500" />
                  30年以上の商業撮影経験
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  雑誌の表紙、映画ポスター、広告写真など、大手メディアの撮影を数多く担当してきました。
                  広告代理店や出版社と仕事をしてきたからこそ持っている「見せ方」のノウハウを、
                  個人や中小企業のブランディングに活かしています。
                </p>
                <p className="text-gray-400 leading-relaxed">
                  「人間の数だけ価値観がある」という意味を込めた"Anystyle"の名のもと、
                  お客様一人ひとりに合わせた撮影を行っています。
                </p>
              </div>

              {/* Philosophy */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/30 border border-white/5 p-6 rounded-xl">
                  <h5 className="text-amber-400 font-medium mb-3">私服での撮影</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    レンタル衣装ではなく、お客様ご自身の服や愛用品で撮影。
                    その時の空気感まで思い出せる写真を目指しています。
                  </p>
                </div>
                <div className="bg-slate-900/30 border border-white/5 p-6 rounded-xl">
                  <h5 className="text-amber-400 font-medium mb-3">広告視点の提案</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    ただ撮るだけでなく「どう使うか」まで考えた撮影プランをご提案。
                    Webサイトや名刺での活用まで見据えます。
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-slate-900/30 border border-white/5 p-6 md:p-8 rounded-xl">
                <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-3">
                  <Award size={20} className="text-amber-500" />
                  主な実績
                </h4>
                <div className="space-y-4">
                  {achievements.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="text-amber-500 font-mono text-sm shrink-0">{item.year}</span>
                      <div>
                        <h5 className="text-white font-medium mb-1">{item.title}</h5>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate('/portfolio')}
                className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-lg transition-all duration-300 font-medium"
              >
                <span>作品を見る</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographerProfile;
