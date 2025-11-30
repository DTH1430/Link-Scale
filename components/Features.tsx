import React from 'react';
import { FEATURES } from '../constants';
import { useTheme } from '../ThemeContext';

const Features: React.FC = () => {
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
    <section id="features" className={`py-24 lg:py-32 ${
      isGlass ? 'bg-transparent' :
      isNeu ? 'bg-neu-base' : 
      isBrutal ? 'bg-[#FF3333]' :
      isClay ? '' :
      isY2K ? 'bg-transparent' :
      isIllus ? 'bg-transparent' :
      isDark ? 'bg-dark-surface' :
      isMag ? 'bg-mag-bg border-b border-black' :
      isSkeu ? 'bg-skeu-leather' :
      'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mb-20 ${isMag ? 'border-b-4 border-black pb-4' : ''}`}>
          <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight mb-6 ${
            isGlass ? 'text-white' :
            isNeu ? 'text-neu-text' : 
            isBrutal ? 'text-white uppercase bg-black inline-block px-4 py-2' :
            isClay ? 'text-neutral-800' :
            isY2K ? 'text-white font-y2k text-shadow-neon' :
            isIllus ? 'text-illus-ink font-hand text-5xl' :
            isDark ? 'text-white' :
            isMag ? 'text-black font-mag tracking-tight text-5xl' :
            isSkeu ? 'text-gray-200 text-shadow-skeu-dark' :
            'text-neutral-900'
          }`}>
            Essential tools for modern commerce.
          </h2>
          <p className={`text-lg leading-relaxed ${
            isGlass ? 'text-white/80' :
            isNeu ? 'text-neu-text/80' : 
            isBrutal ? 'text-white font-bold max-w-2xl bg-black p-2' :
            isClay ? 'text-neutral-600 font-medium' :
            isY2K ? 'text-[#C0C0C0] font-mono' :
            isIllus ? 'text-illus-ink font-hand text-2xl' :
            isDark ? 'text-dark-muted' :
            isMag ? 'text-black font-serif italic text-xl' :
            isSkeu ? 'text-gray-400 text-shadow-skeu-dark' :
            'text-neutral-600'
          }`}>
            We stripped away the clutter to focus on what matters: connecting supply with demand efficiently, securely, and transparently.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 ${isMag ? 'gap-0 border border-black divide-y lg:divide-y-0 lg:divide-x divide-black' : ''}`}>
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className={`group p-6 transition-all duration-300 ${
                isGlass 
                  ? 'rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-lg'
                  : isNeu 
                    ? 'rounded-2xl hover:shadow-neu-flat' 
                    : isBrutal
                      ? 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-none'
                      : isClay
                        ? 'rounded-3xl bg-white shadow-clay-card border-2 border-white hover:scale-[1.03] hover:shadow-xl'
                        : isY2K
                          ? 'border-2 border-[#9D00FF] bg-black/40 hover:bg-black/60 hover:shadow-[0_0_20px_#9D00FF] hover:border-[#FF00CC]'
                          : isIllus
                            ? `bg-white border-2 border-black rounded-sketch shadow-sketch hover:-translate-y-1 hover:rotate-1`
                            : isDark
                              ? 'rounded-xl bg-dark-bg border border-dark-border hover:border-dark-primary/50 hover:shadow-dark-glow hover:-translate-y-1'
                              : isMag
                                ? 'p-12 border-b border-black lg:border-b-0 hover:bg-mag-paper'
                                : isSkeu
                                  ? 'bg-skeu-panel border border-gray-600 shadow-skeu-bevel rounded-lg hover:bg-gray-200'
                        : 'rounded-2xl'
              }`}>
                <div className={`mb-6 inline-flex p-3 transition-colors duration-300 ${
                  isGlass
                    ? 'rounded-xl bg-white/10 text-white border border-white/20 shadow-inner'
                    : isNeu
                      ? 'rounded-xl bg-neu-base text-neu-accent shadow-neu-flat group-hover:shadow-neu-pressed'
                      : isBrutal
                        ? 'bg-yellow-300 border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                        : isClay
                          ? 'rounded-2xl bg-blue-50 text-[#6366f1] shadow-clay-btn'
                          : isY2K
                            ? 'bg-chrome text-black border border-white shadow-y2k-glow rounded-none'
                            : isIllus
                              ? `bg-illus-${['yellow','blue','green','pink'][index % 4]} text-black border-2 border-black rounded-sketch-sm shadow-sm`
                              : isDark
                                ? 'rounded-lg bg-dark-surface border border-dark-border text-dark-primary shadow-dark-glow group-hover:text-white group-hover:bg-dark-primary'
                                : isMag
                                  ? 'bg-transparent text-black p-0'
                                  : isSkeu
                                    ? 'bg-skeu-metal rounded-full border border-gray-400 shadow-skeu-button p-4 text-blue-600'
                          : 'rounded-xl bg-neutral-50 border border-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white'
                }`}>
                  <Icon strokeWidth={isBrutal ? 2.5 : isClay ? 2.5 : isY2K ? 2 : isIllus ? 2.5 : isMag ? 1 : isSkeu ? 2.5 : 1.5} size={isIllus ? 32 : isMag ? 40 : 28} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  isGlass ? 'text-white group-hover:text-pink-200' :
                  isNeu 
                    ? 'text-neu-text group-hover:text-neu-accent' 
                    : isBrutal
                      ? 'text-black font-bold uppercase'
                      : isClay
                        ? 'text-neutral-800'
                        : isY2K
                          ? 'text-[#00FFFF] font-y2k'
                          : isIllus
                            ? 'text-illus-ink font-hand text-2xl font-bold'
                            : isDark
                              ? 'text-white'
                              : isMag
                                ? 'text-black font-mag text-2xl tracking-tight'
                                : isSkeu
                                  ? 'text-gray-800 text-shadow-skeu-light font-bold'
                        : 'text-neutral-900 group-hover:text-blue-600'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  isGlass ? 'text-white/70' :
                  isNeu ? 'text-neu-text/70' : 
                  isBrutal ? 'text-black font-medium' :
                  isClay ? 'text-neutral-500 font-medium' :
                  isY2K ? 'text-[#C0C0C0] font-mono text-sm' :
                  isIllus ? 'text-illus-ink font-hand text-xl' :
                  isDark ? 'text-dark-muted' :
                  isMag ? 'text-black font-serif text-base' :
                  isSkeu ? 'text-gray-600 text-shadow-skeu-light font-medium' :
                  'text-neutral-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;