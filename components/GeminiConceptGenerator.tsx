import React, { useState, useCallback } from 'react';
import { generateExecutiveConcept } from '../services/geminiService';
import { AIConceptResponse } from '../types';
import { Sparkles, Loader2, RefreshCcw } from 'lucide-react';

const GeminiConceptGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    industry: '',
    style: '',
    goals: ''
  });
  const [result, setResult] = useState<AIConceptResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!formData.industry || !formData.style) {
      setError("必須項目を入力してください。");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const data = await generateExecutiveConcept(formData.industry, formData.style, formData.goals);
      setResult(data);
    } catch (e) {
      setError("分析に失敗しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/50 border border-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <Sparkles className="text-blue-400" size={64} />
      </div>

      <h3 className="text-2xl font-sans font-light text-white mb-6 flex items-center gap-3">
        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-mono uppercase tracking-wider">Live Demo</span>
        AI コンセプト・アーキテクト
      </h3>
      <p className="text-gray-400 mb-8 text-sm">
        私たちの戦略立案能力をご体験ください。あなたの専門的なパラメータを入力すると、AIデジタルツインの初期コンセプトが生成されます。
      </p>

      {!result ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">業界 / 分野</label>
              <input 
                type="text" 
                placeholder="例：フィンテック、不動産、医療経営..."
                className="w-full bg-slate-950 border border-white/10 rounded p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none placeholder-gray-700"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">リーダーシップのスタイル</label>
              <input 
                type="text" 
                placeholder="例：ビジョナリー、保守的、革新的..."
                className="w-full bg-slate-950 border border-white/10 rounded p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none placeholder-gray-700"
                value={formData.style}
                onChange={(e) => setFormData({...formData, style: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">戦略的ゴール (任意)</label>
              <input 
                type="text" 
                placeholder="例：レガシーの継承、グローバル展開..."
                className="w-full bg-slate-950 border border-white/10 rounded p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none placeholder-gray-700"
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
              />
            </div>
            
            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="group w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
              {loading ? '分析中...' : 'コンセプトを生成'}
            </button>
          </div>
          
          <div className="hidden md:flex items-center justify-center bg-slate-950/50 rounded border border-dashed border-white/5 text-gray-600 text-center p-8">
            <p>AIモデルがあなたのデジタルペルソナを設計するための入力を待っています。</p>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <h4 className="text-3xl text-white font-serif mb-2">{result.conceptTitle}</h4>
            <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">{result.tagline}</p>
          </div>
          
          <div className="bg-slate-950 p-6 rounded border border-white/10 mb-8">
            <h5 className="text-gray-500 text-xs uppercase tracking-widest mb-3">Executive Summary</h5>
            <p className="text-gray-300 leading-relaxed">{result.executiveSummary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.keyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-blue-900/10 p-4 rounded border border-blue-500/20">
                 <p className="text-blue-300 text-sm">{feature}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setResult(null)}
            className="mt-8 text-gray-500 hover:text-white flex items-center gap-2 text-sm transition-colors"
          >
            <RefreshCcw size={16} /> リセット
          </button>
        </div>
      )}
    </div>
  );
};

export default GeminiConceptGenerator;