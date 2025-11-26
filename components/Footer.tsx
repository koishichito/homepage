import React from 'react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-12 md:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-tr from-gold-400 to-white rounded-full opacity-80"></div>
              <span className="text-xl font-serif font-bold tracking-widest text-white">
                ANYSTYLE
              </span>
            </div>
            <p className="text-gray-500 max-w-xs mb-6">
              Tokyo, Japan.<br />
              Exclusive Services for Corporate Leaders.
            </p>
            <a href="mailto:contact@anystyle-example.com" className="text-white border-b border-gold-500 pb-1 hover:text-gold-400 transition-colors">
              contact@anystyle-example.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-serif mb-6">Business</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">コンセプトフォトグラフィー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">コーポレートブランディング</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AIデジタルツイン事業</a></li>
                <li><a href="#" className="hover:text-white transition-colors">エグゼクティブWeb制作</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-white transition-colors">コミュニティガイドライン</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Anystyle Inc. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-mono">Designed with Art & Intelligence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;