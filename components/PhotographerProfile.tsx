import React from 'react';
import { SectionId } from '../types';
import { Camera, Award, Briefcase, User } from 'lucide-react';

const PhotographerProfile: React.FC = () => {
  return (
    <section id="profile" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/images/profile/sasho.jpeg" 
                alt="Toshiyuki Sasho" 
                className="relative w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-gold-500">
                <User size={20} />
                <span className="font-mono text-sm tracking-widest uppercase">Photographer</span>
              </div>
              <h3 className="text-2xl font-serif">佐粧 俊之</h3>
              <p className="text-gray-400 text-sm">Toshiyuki Sasho</p>
              <div className="h-px w-full bg-white/10 my-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                1964年、愛知県名古屋市生まれ。<br/>
                株式会社anystyle代表取締役。<br/>
                師は写真家の長濱治。
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 space-y-12">
            {/* Biography */}
            <div>
              <h4 className="text-xl font-serif mb-6 flex items-center">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                来歴
              </h4>
              <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                <p>
                  1988年、スタジオフォリオに入社。1990年、ハードボイルドな作風で知られる写真家・長濱治に師事。
                  1995年、フリーランスのカメラマンとして独立。以後30年以上にわたり、雑誌の表紙、映画ポスター、広告写真など、多くのメディアで撮影を担当。
                </p>
                <p>
                  その後、株式会社anystyleを設立。「移動写真館」というコンセプトを掲げ、プロフェッショナルな撮影体験を提供する事業を開始した。
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div>
              <h4 className="text-xl font-serif mb-6 flex items-center">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                写真家としての哲学
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-gold-500/30 transition-colors">
                  <h5 className="text-gold-500 font-serif mb-3">リアリティの追求</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    「写真は人生の一瞬を切り取った断片である」。画一的な貸衣装ではなく、被写体自身の私服や愛用品を用いることで、撮影時の記憶や当時の空気感、香りまでもが蘇るようなリアリティのある写真を理想とする。
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-gold-500/30 transition-colors">
                  <h5 className="text-gold-500 font-serif mb-3">商業撮影の視点</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    「ネーミング自体が商業撮影（Commercial Photo）そのものである」。広告代理店や出版社との仕事で培ったノウハウを、個人撮影や中小企業のブランディング撮影に還元することをミッションとしている。
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-serif mb-6 flex items-center">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                主な事業内容
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Camera className="text-gold-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <strong className="text-white block mb-1">個人向けプレミアム撮影</strong>
                    <p className="text-gray-400 text-sm">「人間の数だけ価値観がある（AnyStyle）」という理念のもと、顧客一人ひとりの要望に合わせた撮影を行う。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="text-gold-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <strong className="text-white block mb-1">商用・法人撮影</strong>
                    <p className="text-gray-400 text-sm">店舗撮影、商品カタログ、施術風景など。広告視点を取り入れたディレクションを強みとする。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="text-gold-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <strong className="text-white block mb-1">エンディングノート・生前撮影</strong>
                    <p className="text-gray-400 text-sm">「意志と経験を残す」ことを目的とした映像・写真制作。音楽や映像演出を交え、故人の人生やメッセージを後世に伝える。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Works */}
            <div>
               <h4 className="text-xl font-serif mb-6 flex items-center">
                <span className="w-8 h-px bg-gold-500 mr-4"></span>
                主な実績・著書
              </h4>
              <div className="space-y-4 text-sm text-gray-400">
                <p>
                  <strong className="text-white">2003年：『踊る大捜査線 THE MOVIE 2 レインボーブリッジを封鎖せよ!』（東宝）</strong><br/>
                  パブリシティ撮影。日本実写映画の歴代興行収入記録作品。
                </p>
                <p>
                  <strong className="text-white">2004年：『WATER BOYS』（フジテレビ）</strong><br/>
                  ポスター撮影。「第一回フジテレビ年間ポスターベストアワード」選出。
                </p>
                <p>
                  <strong className="text-white">著書・作品集</strong><br/>
                  『Any Style In Europe 2000-2001』（Kindle版）
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographerProfile;
