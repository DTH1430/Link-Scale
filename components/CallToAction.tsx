import React from 'react';
import Button from './Button';
import { useTheme } from '../ThemeContext';

const CallToAction: React.FC = () => {
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
    <section className={`py-24 ${
      isGlass ? 'bg-transparent' :
      isNeu ? 'bg-neu-base' : 
      isBrutal ? 'bg-white border-t-4 border-black' :
      isClay ? '' :
      isY2K ? 'bg-transparent border-t border-[#FF00CC]' :
      isIllus ? 'bg-transparent' :
      isDark ? 'bg-dark-bg border-t border-dark-border' :
      isMag ? 'bg-black text-white' :
      isSkeu ? 'bg-skeu-leather border-t border-gray-600' :
      'bg-white border-t border-neutral-100'
    }`}>
      <div className={`max-w-4xl mx-auto px-6 text-center ${
        isGlass 
          ? 'p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl'
          : isNeu 
            ? 'p-12 rounded-3xl shadow-neu-flat' 
            : isBrutal
              ? 'p-12 bg-[#3366FF] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]'
              : isClay
                ? 'p-16 rounded-[3rem] bg-white shadow-clay-card border-4 border-white'
                : isY2K
                  ? 'p-12 bg-black border-2 border-[#00FFFF] shadow-[0_0_30px_#9D00FF]'
                  : isIllus
                    ? 'p-12 bg-white border-2 border-black rounded-sketch shadow-sketch rotate-1'
                    : isDark
                      ? 'p-12 rounded-2xl bg-dark-surface border border-dark-border shadow-[0_0_50px_rgba(59,130,246,0.1)]'
                      : isMag
                        ? 'p-12 border border-white'
                        : isSkeu
                          ? 'p-12 bg-skeu-metal rounded-lg shadow-skeu-bevel border border-gray-400'
              : ''
      }`}>
        <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight mb-6 ${
          isGlass ? 'text-white' :
          isNeu ? 'text-neu-text' : 
          isBrutal ? 'text-white uppercase' :
          isClay ? 'text-neutral-800' :
          isY2K ? 'text-white font-y2k animate-pulse' :
          isIllus ? 'text-illus-ink font-hand' :
          isDark ? 'text-white' :
          isMag ? 'text-white font-mag italic' :
          isSkeu ? 'text-gray-800 text-shadow-skeu-light' :
          'text-neutral-900'
        }`}>
          Ready to scale your business?
        </h2>
        <p className={`text-lg mb-10 max-w-2xl mx-auto ${
          isGlass ? 'text-white/80' :
          isNeu ? 'text-neu-text/80' : 
          isBrutal ? 'text-white font-bold' :
          isClay ? 'text-neutral-600 font-medium' :
          isY2K ? 'text-[#C0C0C0] font-mono' :
          isIllus ? 'text-illus-ink font-hand text-2xl' :
          isDark ? 'text-dark-muted' :
          isMag ? 'text-white/80 font-serif' :
          isSkeu ? 'text-gray-600 font-semibold text-shadow-skeu-light' :
          'text-neutral-600'
        }`}>
          Join thousands of wholesalers and retailers who have simplified their supply chain. No credit card required for the trial.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="w-full sm:w-auto" variant={isBrutal ? "outline" : isMag ? "secondary" : "primary"}>Get Started Free</Button>
          <Button size="lg" variant={isBrutal ? "primary" : isMag ? "outline" : "outline"} className={`w-full sm:w-auto ${isMag ? '!text-white !border-white hover:!bg-white hover:!text-black' : ''}`}>Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;