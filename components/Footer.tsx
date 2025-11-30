import React from 'react';
import { useTheme } from '../ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isNeu = theme === 'neumorphism';
  const isGlass = theme === 'glassmorphism';
  const isBrutal = theme === 'brutalism';
  const isClay = theme === 'claymorphism';
  const isY2K = theme === 'y2k';
  const isIllus = theme === 'illustrative';
  const isDark = theme === 'dark';
  const isMag = theme === 'magazine';
  const isSkeu = theme === 'skeuomorphism';

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className={`pt-20 pb-10 ${
      isGlass ? 'bg-white/5 border-t border-white/10 backdrop-blur-md' :
      isNeu ? 'bg-neu-base text-neu-text' : 
      isBrutal ? 'bg-black text-white border-t-4 border-black' :
      isClay ? 'bg-white/50 backdrop-blur-sm' :
      isY2K ? 'bg-black text-[#C0C0C0] border-t border-[#FF00CC]' :
      isIllus ? 'bg-transparent border-t-2 border-black border-dashed' :
      isDark ? 'bg-dark-bg border-t border-dark-border' :
      isMag ? 'bg-mag-bg border-t border-black text-black' :
      isSkeu ? 'bg-skeu-dark text-gray-400 border-t border-gray-700 shadow-inner' :
      'bg-white border-t border-neutral-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className={`w-6 h-6 rounded-sm ${
                 isGlass ? 'bg-white/20 border border-white/30' :
                 isNeu ? 'bg-neu-base shadow-neu-flat' : 
                 isBrutal ? 'bg-white rounded-none' :
                 isClay ? 'w-8 h-8 rounded-full bg-[#6366f1] shadow-clay-btn border-2 border-white' :
                 isY2K ? 'bg-gradient-to-tr from-[#C0C0C0] to-white border border-[#00FFFF]' :
                 isIllus ? 'w-8 h-8 bg-illus-green border-2 border-black rounded-sketch shadow-sm' :
                 isDark ? 'bg-dark-primary shadow-dark-glow' :
                 isMag ? 'hidden' :
                 isSkeu ? 'bg-gray-700 shadow-skeu-bevel border border-gray-600' :
                 'bg-neutral-900'
               }`}>
                 {isNeu && <div className="w-full h-full bg-neu-accent opacity-50 rounded-sm"></div>}
               </div>
               <span className={`text-xl font-bold tracking-tight ${
                 isGlass ? 'text-white' :
                 isNeu ? 'text-neu-text' : 
                 isBrutal ? 'text-white uppercase' :
                 isClay ? 'text-neutral-800' :
                 isY2K ? 'text-white font-y2k drop-shadow-[0_0_5px_#FF00CC]' :
                 isIllus ? 'text-illus-ink font-hand text-3xl' :
                 isDark ? 'text-white' :
                 isMag ? 'text-black font-mag text-4xl tracking-tighter' :
                 isSkeu ? 'text-gray-200 text-shadow-skeu-dark' :
                 'text-neutral-900'
               }`}>LinkScale</span>
            </div>
            <p className={`max-w-xs mb-8 ${
              isGlass ? 'text-white/60' :
              isNeu ? 'text-neu-text/70' : 
              isBrutal ? 'text-white/80 font-mono' :
              isClay ? 'text-neutral-600 font-medium' :
              isY2K ? 'text-[#00FFFF] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-lg' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif italic' :
              isSkeu ? 'text-gray-500' :
              'text-neutral-500'
            }`}>
              Redefining B2B wholesale connections with minimalism and efficiency at the core.
            </p>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 ${
              isGlass ? 'text-white' :
              isNeu ? 'text-neu-text' : 
              isBrutal ? 'text-white uppercase border-b-2 border-white inline-block' :
              isClay ? 'text-neutral-800' :
              isY2K ? 'text-[#FF00CC] font-y2k' :
              isIllus ? 'text-illus-ink font-hand text-xl font-bold' :
              isDark ? 'text-white uppercase tracking-wider text-xs' :
              isMag ? 'text-black font-mag uppercase tracking-widest text-xs' :
              isSkeu ? 'text-gray-300 text-shadow-skeu-dark uppercase tracking-wide text-xs' :
              'text-neutral-900'
            }`}>Product</h4>
            <ul className={`space-y-3 text-sm ${
              isGlass ? 'text-white/60' :
              isNeu ? 'text-neu-text/70' : 
              isBrutal ? 'text-white/80' :
              isClay ? 'text-neutral-500' :
              isY2K ? 'text-[#C0C0C0] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-lg' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif' :
              isSkeu ? 'text-gray-500' :
              'text-neutral-600'
            }`}>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Features</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Pricing</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>API</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${
              isGlass ? 'text-white' :
              isNeu ? 'text-neu-text' : 
              isBrutal ? 'text-white uppercase border-b-2 border-white inline-block' :
              isClay ? 'text-neutral-800' :
              isY2K ? 'text-[#FF00CC] font-y2k' :
              isIllus ? 'text-illus-ink font-hand text-xl font-bold' :
              isDark ? 'text-white uppercase tracking-wider text-xs' :
              isMag ? 'text-black font-mag uppercase tracking-widest text-xs' :
              isSkeu ? 'text-gray-300 text-shadow-skeu-dark uppercase tracking-wide text-xs' :
              'text-neutral-900'
            }`}>Company</h4>
            <ul className={`space-y-3 text-sm ${
              isGlass ? 'text-white/60' :
              isNeu ? 'text-neu-text/70' : 
              isBrutal ? 'text-white/80' :
              isClay ? 'text-neutral-500' :
              isY2K ? 'text-[#C0C0C0] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-lg' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif' :
              isSkeu ? 'text-gray-500' :
              'text-neutral-600'
            }`}>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>About</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Careers</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Blog</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${
              isGlass ? 'text-white' :
              isNeu ? 'text-neu-text' : 
              isBrutal ? 'text-white uppercase border-b-2 border-white inline-block' :
              isClay ? 'text-neutral-800' :
              isY2K ? 'text-[#FF00CC] font-y2k' :
              isIllus ? 'text-illus-ink font-hand text-xl font-bold' :
              isDark ? 'text-white uppercase tracking-wider text-xs' :
              isMag ? 'text-black font-mag uppercase tracking-widest text-xs' :
              isSkeu ? 'text-gray-300 text-shadow-skeu-dark uppercase tracking-wide text-xs' :
              'text-neutral-900'
            }`}>Support</h4>
            <ul className={`space-y-3 text-sm ${
              isGlass ? 'text-white/60' :
              isNeu ? 'text-neu-text/70' : 
              isBrutal ? 'text-white/80' :
              isClay ? 'text-neutral-500' :
              isY2K ? 'text-[#C0C0C0] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-lg' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif' :
              isSkeu ? 'text-gray-500' :
              'text-neutral-600'
            }`}>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Help Center</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Status</a></li>
              <li><a href="#" onClick={handlePlaceholderClick} className={`hover:text-neu-accent transition-colors ${isBrutal ? 'hover:text-yellow-300 hover:underline decoration-2' : isClay ? 'hover:text-[#6366f1] hover:font-bold' : isY2K ? 'hover:text-[#00FFFF]' : isIllus ? 'hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'hover:text-white hover:shadow-dark-glow' : isMag ? 'hover:underline underline-offset-4' : isSkeu ? 'hover:text-gray-200' : ''}`}>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
          isGlass ? 'border-t border-white/10' :
          isNeu ? 'border-t border-neu-shadow-dark/10' : 
          isBrutal ? 'border-t-4 border-white' :
          isClay ? 'border-t-2 border-white' :
          isY2K ? 'border-t border-[#FF00CC]' :
          isIllus ? 'border-t-2 border-black border-dashed' :
          isDark ? 'border-t border-dark-border' :
          isMag ? 'border-t border-black' :
          isSkeu ? 'border-t border-gray-700' :
          'border-t border-neutral-100'
        }`}>
          <p className={`text-sm ${
            isGlass ? 'text-white/40' :
            isNeu ? 'text-neu-text/50' : 
            isBrutal ? 'text-white font-bold' :
            isClay ? 'text-neutral-500 font-medium' :
            isY2K ? 'text-[#C0C0C0] font-mono' :
            isIllus ? 'text-illus-ink font-hand text-lg' :
            isDark ? 'text-dark-muted' :
            isMag ? 'text-black font-serif italic' :
            isSkeu ? 'text-gray-600 text-shadow-skeu-dark' :
            'text-neutral-400'
          }`}>© 2024 LinkScale Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social icons placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-8 h-8 flex items-center justify-center cursor-pointer transition-all ${
                isGlass 
                  ? 'rounded-lg bg-white/10 hover:bg-white/20 border border-white/10' 
                  : isNeu 
                    ? 'rounded-lg bg-neu-base shadow-neu-flat hover:shadow-neu-pressed' 
                    : isBrutal
                      ? 'rounded-none bg-white border-2 border-transparent hover:border-white hover:bg-black hover:text-white'
                      : isClay
                        ? 'rounded-full bg-white shadow-clay-btn hover:shadow-clay-btn-pressed hover:bg-[#6366f1]/10'
                        : isY2K
                          ? 'rounded-full bg-chrome hover:shadow-[0_0_10px_#00FFFF] border border-[#00FFFF]'
                          : isIllus
                            ? 'rounded-full bg-white border-2 border-black hover:bg-illus-yellow'
                            : isDark
                              ? 'rounded-full bg-dark-surface border border-dark-border hover:bg-dark-primary hover:text-white'
                              : isMag
                                ? 'rounded-none bg-black hover:bg-white border border-black hover:border-black'
                                : isSkeu
                                  ? 'rounded-full bg-skeu-metal shadow-skeu-button border border-gray-500 hover:shadow-skeu-inner'
                        : 'rounded-lg bg-neutral-200 hover:bg-neutral-900'
              }`}></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;