import React from 'react';
import { STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className={`py-24 lg:py-32 ${
      isGlass ? 'bg-transparent text-white' :
      isNeu ? 'bg-neu-base text-neu-text' : 
      isBrutal ? 'bg-white text-black' :
      isClay ? 'text-neutral-800' :
      isY2K ? 'bg-black text-white' :
      isIllus ? 'bg-transparent text-illus-ink' :
      isDark ? 'bg-dark-bg text-dark-text' :
      isMag ? 'bg-mag-bg text-mag-text' :
      isSkeu ? 'bg-gray-200 text-gray-800' :
      'bg-neutral-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="lg:sticky lg:top-32 h-fit">
            <h2 className={`text-3xl lg:text-5xl font-bold tracking-tight mb-8 ${isBrutal ? 'uppercase' : ''} ${isY2K ? 'font-y2k' : ''} ${isIllus ? 'font-hand drop-shadow-sm' : ''} ${isMag ? 'font-mag text-6xl tracking-tighter' : ''} ${isSkeu ? 'text-shadow-skeu-light' : ''}`}>
              Seamless workflow from <br /><span className={`${
                isGlass ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300' :
                isNeu ? 'text-neu-accent' : 
                isBrutal ? 'bg-[#3366FF] text-white px-2 decoration-slice' :
                isClay ? 'text-[#6366f1]' :
                isY2K ? 'text-[#CCFF00] drop-shadow-[0_0_5px_rgba(204,255,0,0.8)]' :
                isIllus ? 'text-illus-ink bg-illus-green/40 px-2 rounded-sketch-sm inline-block rotate-[-2deg]' :
                isDark ? 'text-dark-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' :
                isMag ? 'italic font-serif' :
                isSkeu ? 'text-blue-600 text-shadow-skeu-light' :
                'text-neutral-500'
              }`}>start to finish.</span>
            </h2>
            <p className={`text-lg max-w-md leading-relaxed mb-12 ${
              isGlass ? 'text-white/70' :
              isNeu ? 'text-neu-text/70' : 
              isBrutal ? 'text-black font-bold' :
              isClay ? 'text-neutral-600 font-medium' :
              isY2K ? 'text-[#C0C0C0] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-2xl' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif italic text-xl' :
              isSkeu ? 'text-gray-600 font-medium text-shadow-skeu-light' :
              'text-neutral-400'
            }`}>
              Our platform is designed to be intuitive. No training manuals needed. Just sign up and start trading immediately.
            </p>
            <div className={`hidden lg:flex items-center gap-4 text-sm font-medium ${
              isGlass ? 'text-white/50' :
              isNeu ? 'text-neu-text/50' : 
              isBrutal ? 'text-black uppercase font-bold' :
              isClay ? 'text-neutral-500 font-bold' :
              isY2K ? 'text-[#FF00CC] font-y2k' :
              isIllus ? 'text-illus-ink font-hand text-xl' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif italic' :
              isSkeu ? 'text-gray-500 text-shadow-skeu-light' :
              'text-neutral-500'
            }`}>
               <span>SCROLL DOWN</span>
               <ArrowDown size={16} className={isBrutal ? '' : isIllus ? 'animate-bounce text-illus-ink' : isMag ? 'text-black animate-bounce' : "animate-bounce"} />
            </div>
          </div>

          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <div key={step.id} className="relative pl-8 md:pl-0">
                {/* Vertical Line for Mobile */}
                {index !== STEPS.length - 1 && (
                  <div className={`absolute left-[11px] top-12 bottom-[-48px] w-px md:hidden ${
                    isGlass ? 'bg-white/10' :
                    isNeu ? 'bg-neu-shadow-dark/20' : 
                    isBrutal ? 'bg-black w-1' :
                    isClay ? 'bg-blue-200 w-2' :
                    isY2K ? 'bg-[#FF00CC]' :
                    isIllus ? 'bg-black border-l-2 border-dashed border-black w-0' :
                    isDark ? 'bg-dark-border' :
                    isMag ? 'bg-black' :
                    isSkeu ? 'bg-gray-400 w-2 border-x border-gray-300' :
                    'bg-neutral-800'
                  }`}></div>
                )}
                
                <div className={`group p-8 transition-all duration-300 ${
                  isGlass
                    ? 'rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:bg-white/10'
                    : isNeu 
                      ? 'rounded-3xl bg-neu-base shadow-neu-flat hover:translate-y-[-4px]' 
                      : isBrutal
                        ? 'border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                        : isClay
                          ? 'rounded-3xl bg-white shadow-clay-card border-2 border-white hover:scale-[1.02]'
                          : isY2K
                            ? 'bg-black/80 border border-[#00FFFF] hover:shadow-[0_0_20px_#00FFFF]'
                            : isIllus
                              ? 'bg-white border-2 border-black rounded-sketch shadow-sketch hover:-rotate-1'
                              : isDark
                                ? 'rounded-xl bg-dark-surface border border-dark-border hover:border-dark-primary/30 hover:shadow-dark-glow'
                                : isMag
                                  ? 'border-l border-black pl-12 rounded-none hover:pl-16 transition-all duration-500'
                                  : isSkeu
                                    ? 'bg-skeu-metal rounded-lg shadow-skeu-bevel border border-gray-400 hover:shadow-lg'
                          : 'rounded-3xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800'
                }`}>
                   <span className={`inline-block text-5xl font-bold mb-6 transition-colors duration-300 ${
                     isGlass ? 'text-white/20 group-hover:text-white/80' :
                     isNeu 
                       ? 'text-neu-base text-shadow-neu-convex text-neu-text/20 group-hover:text-neu-accent'
                       : isBrutal
                         ? 'text-white bg-black p-2 border-2 border-transparent group-hover:bg-[#FF3333] group-hover:border-black'
                         : isClay
                           ? 'text-[#6366f1] opacity-40 group-hover:opacity-100'
                           : isY2K
                             ? 'text-[#FF00CC] font-mono'
                             : isIllus
                               ? 'text-illus-ink font-hand bg-illus-yellow/50 rounded-full w-16 h-16 flex items-center justify-center border-2 border-black shadow-sm'
                               : isDark
                                 ? 'text-dark-bg text-stroke-1 text-stroke-dark-border group-hover:text-dark-primary/20'
                                 : isMag
                                   ? 'text-black font-mag text-6xl italic'
                                   : isSkeu
                                     ? 'text-gray-400 text-shadow-skeu-inner font-mono'
                           : 'text-neutral-800 group-hover:text-white'
                   }`}>
                     {step.number}
                   </span>
                   <h3 className={`text-2xl font-bold mb-4 ${
                     isGlass ? 'text-white' :
                     isNeu ? 'text-neu-text' : 
                     isBrutal ? 'text-black uppercase' :
                     isClay ? 'text-neutral-800' :
                     isY2K ? 'text-white font-y2k' :
                     isIllus ? 'text-illus-ink font-hand text-3xl' :
                     isDark ? 'text-white' :
                     isMag ? 'text-black font-mag text-3xl' :
                     isSkeu ? 'text-gray-800 text-shadow-skeu-light' :
                     ''
                   }`}>
                     {step.title}
                   </h3>
                   <p className={`leading-relaxed ${
                     isGlass ? 'text-white/70' :
                     isNeu ? 'text-neu-text/70' : 
                     isBrutal ? 'text-black font-medium' :
                     isClay ? 'text-neutral-600 font-medium' :
                     isY2K ? 'text-[#C0C0C0] font-mono' :
                     isIllus ? 'text-illus-ink font-hand text-xl' :
                     isDark ? 'text-dark-muted' :
                     isMag ? 'text-black font-serif' :
                     isSkeu ? 'text-gray-600 font-medium text-shadow-skeu-light' :
                     'text-neutral-400'
                   }`}>
                     {step.description}
                   </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;