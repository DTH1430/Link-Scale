import React from 'react';
import { STATS } from '../constants';
import { useTheme } from '../ThemeContext';

const Stats: React.FC = () => {
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
    <section className={`py-20 ${
      isGlass
        ? 'bg-transparent'
        : isNeu 
          ? 'bg-neu-base' 
          : isBrutal
            ? 'bg-white border-y-4 border-black'
            : isClay
              ? ''
              : isY2K
                ? 'bg-black/50 border-y border-[#FF00CC]'
                : isIllus
                  ? 'bg-transparent'
                  : isDark
                    ? 'bg-dark-bg border-y border-dark-border'
                    : isMag
                      ? 'bg-mag-bg border-y border-black'
                      : isSkeu
                        ? 'bg-skeu-panel border-y border-gray-500 shadow-skeu-bevel'
                : 'border-y border-neutral-100 bg-neutral-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${
          isGlass 
            ? '' 
            : isNeu 
              ? '' 
              : isBrutal
                ? 'gap-0 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black'
                : isClay
                  ? 'gap-6'
                : isY2K
                  ? 'gap-8'
                : isIllus
                  ? 'gap-8'
                : isDark
                  ? 'divide-y md:divide-y-0 md:divide-x divide-dark-border'
                  : isMag
                    ? 'gap-0 divide-y md:divide-y-0 md:divide-x divide-black'
                    : isSkeu
                      ? 'gap-6'
                : 'divide-y md:divide-y-0 md:divide-x divide-neutral-200'
        }`}>
          {STATS.map((stat, index) => (
            <div key={stat.id} className={`pt-8 md:pt-0 px-4 transition-all duration-300 ${
              isGlass 
                ? 'p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10'
                : isNeu 
                  ? 'p-8 rounded-2xl shadow-neu-flat' 
                  : isBrutal
                    ? 'p-12 bg-white hover:bg-yellow-300 transition-none'
                    : isClay
                      ? 'p-8 rounded-3xl bg-white shadow-clay-card border-2 border-white transform hover:scale-105'
                      : isY2K
                        ? 'p-8 bg-black border border-[#00FFFF] shadow-[4px_4px_0px_#C0C0C0] hover:shadow-[0_0_15px_#00FFFF]'
                        : isIllus
                          ? `p-8 bg-white border-2 border-black rounded-sketch shadow-sketch rotate-${index % 2 === 0 ? '1' : '-1'} hover:rotate-0 hover:scale-105`
                          : isDark
                            ? 'p-8 hover:bg-dark-surface/50 rounded-lg transition-colors group'
                            : isMag
                              ? 'p-12 bg-mag-bg'
                              : isSkeu
                                ? 'p-8 bg-gray-200 border-2 border-gray-400 rounded-lg shadow-skeu-inner'
                    : ''
            }`}>
              <div className={`text-4xl lg:text-5xl font-bold tracking-tight mb-2 ${
                isGlass ? 'text-white drop-shadow-sm' :
                isNeu ? 'text-neu-text' : 
                isBrutal ? 'text-black' :
                isClay ? 'text-neutral-800' :
                isY2K ? 'text-[#CCFF00] font-mono' :
                isIllus ? 'text-illus-ink font-hand text-6xl' :
                isDark ? 'text-white group-hover:text-dark-primary transition-colors text-shadow-glow' :
                isMag ? 'text-black font-mag italic' :
                isSkeu ? 'text-gray-700 text-shadow-skeu-light font-mono' :
                'text-neutral-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium uppercase tracking-widest ${
                isGlass ? 'text-blue-200' :
                isNeu ? 'text-neu-text/60' : 
                isBrutal ? 'text-black font-bold' :
                isClay ? 'text-[#6366f1] font-bold' :
                isY2K ? 'text-[#FF00CC] font-y2k' :
                isIllus ? 'text-illus-ink font-hand text-xl lowercase tracking-normal' :
                isDark ? 'text-dark-muted' :
                isMag ? 'text-black font-serif italic text-xs' :
                isSkeu ? 'text-gray-500 font-bold text-shadow-skeu-light' :
                'text-neutral-500'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;