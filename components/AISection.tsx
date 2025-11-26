import React from 'react';
import { SectionId } from '../types';
import { Bot, BrainCircuit, Globe, Fingerprint } from 'lucide-react';
import GeminiConceptGenerator from './GeminiConceptGenerator';

const AISection: React.FC = () => {
  return (
    <section id={SectionId.AI} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10" 
           style={{backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 text-blue-400 border border-blue-400/30 px-4 py-1 rounded-full mb-6">
            <Bot size={16} />
            <span className="uppercase tracking-widest text-xs font-mono">Intelligence Division</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            コードによる <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">不滅化</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            多忙を極めるリーダーへ。私たちは、あなたの分身となる高度なAIカウンターパートと、社会的権威を高めるデジタルプラットフォームを構築します。
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:border-blue-500/50 transition-all duration-500 group">
            <div className="w-14 h-14 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <Fingerprint size={32} />
            </div>
            <h3 className="text-2xl text-white font-serif mb-4">AIデジタルツイン (AI〇〇)</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              あなたの意思決定履歴、声、哲学を学習したオーダーメイドLLM。
              「AI [あなたのお名前]」が、予備的な相談や社内の問い合わせ、あるいは対外的なエンゲージメントに24時間365日対応します。
            </p>
            <ul className="text-gray-500 text-xs space-y-2 font-mono">
              <li className="flex items-center">• 音声合成技術 (Voice Synthesis)</li>
              <li className="flex items-center">• ナレッジベース統合</li>
              <li className="flex items-center">• マルチプラットフォーム展開</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:border-purple-500/50 transition-all duration-500 group">
            <div className="w-14 h-14 bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl text-white font-serif mb-4">エグゼクティブ・デジタル名刺</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              単なるホームページではありません。ポートフォリオ、経歴、リアルタイムの実績を瞬時に提示する、名刺代わりの「動的Webサイト」。
              ハイレベルなネットワーキングにおいて、即座に権威を証明します。
            </p>
            <ul className="text-gray-500 text-xs space-y-2 font-mono">
              <li className="flex items-center">• ミニマリスト・ハイエンドデザイン</li>
              <li className="flex items-center">• インスタントな連絡先共有</li>
              <li className="flex items-center">• セキュアなアクセス制御</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/5 p-8 rounded-xl hover:border-cyan-500/50 transition-all duration-500 group">
            <div className="w-14 h-14 bg-cyan-900/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl text-white font-serif mb-4">レガシー・アーカイブ</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              企業の叡智を保存します。あなたの非構造化データ（メール、スピーチ、回想録）を、次世代の経営陣が対話可能なインタラクティブ・データベースへと構築します。
            </p>
            <ul className="text-gray-500 text-xs space-y-2 font-mono">
              <li className="flex items-center">• セキュアなデータ保管</li>
              <li className="flex items-center">• セマンティック検索</li>
              <li className="flex items-center">• 世代を超えたアクセス</li>
            </ul>
          </div>
        </div>

        {/* Interactive Demo */}
        <GeminiConceptGenerator />

      </div>
    </section>
  );
};

export default AISection;