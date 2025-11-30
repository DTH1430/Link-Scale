import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Testimonials: React.FC = () => {
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

  return (
    <section id="testimonials" className={`py-24 lg:py-32 ${
      isGlass ? 'bg-transparent' :
      isNeu ? 'bg-neu-base' : 
      isBrutal ? 'bg-yellow-300' :
      isClay ? '' :
      isY2K ? 'bg-transparent' :
      isIllus ? 'bg-transparent' :
      isDark ? 'bg-dark-surface' :
      isMag ? 'bg-mag-paper border-t border-black' :
      isSkeu ? 'bg-skeu-leather' :
      'bg-neutral-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className={`text-2xl font-bold mb-16 text-center tracking-tight ${
          isGlass ? 'text-white/90' :
          isNeu ? 'text-neu-text/80' : 
          isBrutal ? 'text-black uppercase text-4xl bg-white border-4 border-black inline-block p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' :
          isClay ? 'text-neutral-800 text-3xl' :
          isY2K ? 'text-[#00FFFF] font-y2k text-3xl animate-pulse' :
          isIllus ? 'text-illus-ink font-hand text-4xl' :
          isDark ? 'text-white uppercase tracking-widest text-sm' :
          isMag ? 'text-black font-mag text-4xl italic tracking-normal' :
          isSkeu ? 'text-gray-200 text-shadow-skeu-dark text-3xl font-serif tracking-wide' :
          'text-neutral-900'
        }`}>
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        
        <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 ${isMag ? 'gap-0 md:divide-x divide-black border border-black' : ''}`}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className={`p-10 flex flex-col justify-between h-full transition-all duration-300 ${
              isGlass
                ? 'rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:bg-white/10'
                : isNeu 
                  ? 'rounded-2xl bg-neu-base shadow-neu-flat' 
                  : isBrutal
                    ? `bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`
                    : isClay
                      ? 'rounded-[2rem] bg-white shadow-clay-card border-2 border-white hover:scale-[1.02]'
                      : isY2K
                        ? 'bg-gradient-to-br from-[#C0C0C0] to-[#E0E0E0] border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-t-lg rounded-bl-lg rounded-br-3xl'
                        : isIllus
                          ? `bg-white border-2 border-black rounded-sketch shadow-sketch ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`
                          : isDark
                            ? 'rounded-lg bg-dark-bg border border-dark-border hover:border-dark-primary/30 hover:shadow-dark-glow'
                            : isMag
                              ? 'rounded-none bg-mag-bg p-12 hover:bg-white'
                              : isSkeu
                                ? 'rounded-lg bg-skeu-panel shadow-skeu-bevel border border-gray-500'
                      : 'rounded-2xl bg-white shadow-sm border border-neutral-100'
            }`}>
              {/* Y2K Header Bar Style */}
              {isY2K && (
                <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-6 -mx-10 -mt-10 mb-6 flex items-center justify-between px-2 border-b-2 border-white/50">
                    <span className="text-white text-xs font-bold font-sans">Message from {t.author}</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-gray-300 border border-gray-500 shadow-inner"></div>
                        <div className="w-3 h-3 bg-gray-300 border border-gray-500 shadow-inner"></div>
                        <div className="w-3 h-3 bg-red-500 border border-red-700 shadow-inner"></div>
                    </div>
                </div>
              )}

              {/* Skeuomorphism Tape */}
              {isSkeu && (
                <div className="w-32 h-8 bg-yellow-100/30 absolute -top-4 left-1/2 -translate-x-1/2 rotate-1 shadow-sm backdrop-blur-[1px] border-l border-r border-white/20"></div>
              )}

              <div>
                <Quote className={`mb-6 fill-current ${
                  isGlass ? 'text-white/20' :
                  isNeu ? 'text-neu-text/10' : 
                  isBrutal ? 'text-black fill-black' :
                  isClay ? 'text-neutral-500 opacity-20' :
                  isY2K ? 'text-[#FF00CC]' :
                  isIllus ? 'text-illus-pink fill-illus-pink/20' :
                  isDark ? 'text-dark-primary/50' :
                  isMag ? 'text-black fill-black w-12 h-12' :
                  isSkeu ? 'text-gray-400 drop-shadow-sm' :
                  'text-neutral-200'
                }`} size={isIllus ? 56 : 48} />
                <p className={`text-xl lg:text-2xl font-medium leading-snug mb-8 ${
                  isGlass ? 'text-white' :
                  isNeu ? 'text-neu-text' : 
                  isBrutal ? 'text-black font-bold font-mono' :
                  isClay ? 'text-neutral-700 font-semibold' :
                  isY2K ? 'text-black font-mono' :
                  isIllus ? 'text-illus-ink font-hand text-3xl' :
                  isDark ? 'text-white' :
                  isMag ? 'text-black font-mag leading-tight text-3xl' :
                  isSkeu ? 'text-gray-800 text-shadow-skeu-light font-serif italic' :
                  'text-neutral-900'
                }`}>
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 overflow-hidden ${
                  isGlass ? 'rounded-full bg-white/20 border border-white/30' :
                  isNeu ? 'rounded-full bg-neu-base shadow-neu-pressed p-1' : 
                  isBrutal ? 'rounded-none border-2 border-black' :
                  isClay ? 'rounded-full bg-blue-100 shadow-inner' :
                  isY2K ? 'rounded-none border-2 border-[#00FFFF] shadow-[2px_2px_0_black]' :
                  isIllus ? 'rounded-full border-2 border-black bg-illus-yellow' :
                  isDark ? 'rounded-full bg-dark-surface border border-dark-border' :
                  isMag ? 'rounded-none grayscale' :
                  isSkeu ? 'rounded-full border-2 border-gray-400 shadow-skeu-button' :
                  'rounded-full bg-neutral-200'
                }`}>
                    <img src={`https://picsum.photos/seed/${t.author}/100/100`} alt={t.author} className={`w-full h-full object-cover ${!isIllus && !isDark && !isMag && !isSkeu && 'grayscale opacity-80'} ${isIllus ? 'mix-blend-multiply opacity-90' : ''} ${isDark ? 'grayscale brightness-75 contrast-125' : ''} ${isMag ? 'contrast-125' : ''} ${isSkeu ? 'sepia-[0.3]' : ''}`} />
                </div>
                <div>
                  <div className={`font-bold ${isGlass ? 'text-white' : isNeu ? 'text-neu-text' : isBrutal ? 'text-black uppercase' : isClay ? 'text-neutral-800' : isY2K ? 'text-black font-y2k' : isIllus ? 'text-illus-ink font-hand text-xl' : isDark ? 'text-white' : isMag ? 'text-black font-mag' : isSkeu ? 'text-gray-900 text-shadow-skeu-light' : 'text-neutral-900'}`}>{t.author}</div>
                  <div className={`text-sm ${isGlass ? 'text-white/60' : isNeu ? 'text-neu-text/60' : isBrutal ? 'text-black font-bold' : isClay ? 'text-neutral-500 font-medium' : isY2K ? 'text-gray-600 font-mono' : isIllus ? 'text-illus-ink font-hand text-lg' : isDark ? 'text-dark-muted' : isMag ? 'text-black font-serif italic' : isSkeu ? 'text-gray-600 font-medium' : 'text-neutral-500'}`}>{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;