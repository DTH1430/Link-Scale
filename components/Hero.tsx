import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from './Button';
import { useTheme } from '../ThemeContext';

const Hero: React.FC = () => {
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
    <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${isBrutal ? 'bg-yellow-50' : ''}`}>
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 relative z-10 ${isMag ? 'border-b border-black pb-24' : ''}`}>
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isMag ? 'gap-0 lg:divide-x divide-black' : ''}`}>
          
          {/* Text Content */}
          <div className={`max-w-2xl ${isMag ? 'pr-12' : ''}`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 mb-8 transition-colors ${
              isGlass
                ? 'bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-full'
                : isNeu 
                  ? 'bg-neu-base shadow-neu-pressed rounded-full' 
                  : isBrutal
                    ? 'bg-[#FFCC00] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none'
                    : isClay
                      ? 'bg-white text-[#6366f1] rounded-2xl shadow-clay-card border-2 border-white px-4 py-2'
                      : isY2K
                        ? 'bg-black border border-[#00FFFF] shadow-[0_0_5px_#00FFFF] rounded-none'
                        : isIllus
                          ? 'bg-white border-2 border-black rounded-sketch shadow-sketch px-4 rotate-[-2deg]'
                          : isDark
                            ? 'bg-dark-surface border border-dark-border rounded-full text-dark-primary shadow-dark-glow'
                            : isMag
                              ? 'bg-black text-white px-4 py-1.5 rounded-none uppercase tracking-widest text-xs font-serif'
                              : isSkeu
                                ? 'bg-skeu-metal shadow-skeu-bevel border border-gray-400 rounded-md'
                        : 'bg-neutral-100 border border-neutral-200 rounded-full'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                isGlass ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse' :
                isNeu ? 'bg-neu-accent shadow-[0_0_10px_#667EEA] animate-pulse' : 
                isBrutal ? 'bg-black w-3 h-3 rounded-none' :
                isClay ? 'bg-[#6366f1] w-3 h-3' :
                isY2K ? 'bg-[#FF00CC] shadow-[0_0_5px_#FF00CC] animate-ping' :
                isIllus ? 'bg-illus-pink w-3 h-3 border border-black' :
                isDark ? 'bg-dark-primary shadow-[0_0_10px_#3b82f6]' :
                isMag ? 'hidden' :
                isSkeu ? 'bg-blue-500 shadow-skeu-button w-3 h-3 border border-blue-700' :
                'bg-blue-600 animate-pulse'
              }`}></span>
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                isGlass ? 'text-white/90' :
                isNeu ? 'text-neu-text/80' : 
                isBrutal ? 'text-black font-bold' :
                isClay ? 'text-[#6366f1] font-bold' :
                isY2K ? 'text-[#00FFFF] font-mono' :
                isIllus ? 'text-illus-ink font-hand text-lg font-bold lowercase' :
                isDark ? 'text-dark-text' :
                isMag ? 'text-white' :
                isSkeu ? 'text-gray-700 font-bold text-shadow-skeu-light' :
                'text-neutral-600'
              }`}>v2.0 Now Available</span>
            </div>
            
            <h1 className={`text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 ${
              isGlass ? 'text-white drop-shadow-md' :
              isNeu ? 'text-neu-text text-shadow-sm' : 
              isBrutal ? 'text-black uppercase' :
              isClay ? 'text-neutral-800' :
              isY2K ? 'text-white font-y2k drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' :
              isIllus ? 'text-illus-ink font-hand drop-shadow-sm' :
              isDark ? 'text-white' :
              isMag ? 'text-black font-mag tracking-tight' :
              isSkeu ? 'text-gray-100 text-shadow-skeu-dark drop-shadow-xl' :
              'text-neutral-900'
            }`}>
              The modern standard for <span className={`${
                isGlass ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' :
                isNeu ? 'text-neu-accent' : 
                isBrutal ? 'bg-[#FF3333] text-white px-2 decoration-slice' :
                isClay ? 'text-[#6366f1] decoration-wavy underline decoration-[#6366f1]/30' :
                isY2K ? 'text-transparent bg-clip-text bg-y2k-gradient animate-pulse' :
                isIllus ? 'text-illus-ink bg-illus-yellow/50 px-2 rounded-sm rotate-1 inline-block border-b-4 border-illus-blue/50' :
                isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-accent drop-shadow-md' :
                isMag ? 'italic font-serif decoration-1 underline underline-offset-8' :
                isSkeu ? 'text-transparent bg-clip-text bg-skeu-blue-gloss filter drop-shadow-md' :
                'text-neutral-500'
              }`}>B2B commerce.</span>
            </h1>
            
            <p className={`text-lg lg:text-xl leading-relaxed mb-10 max-w-lg ${
              isGlass ? 'text-white/80' :
              isNeu ? 'text-neu-text/80' : 
              isBrutal ? 'text-black font-medium border-l-4 border-black pl-4' :
              isClay ? 'text-neutral-600 font-medium' :
              isY2K ? 'text-[#C0C0C0] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-2xl' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif italic text-2xl leading-normal pl-6 border-l border-black' :
              isSkeu ? 'text-gray-300 font-medium text-shadow-skeu-dark' :
              'text-neutral-600'
            }`}>
              Connect wholesalers and retailers in a unified, frictionless ecosystem. Streamline procurement, payments, and logistics in one minimal interface.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Trading <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 w-5 h-5" /> Download App
              </Button>
            </div>

            <div className={`mt-12 flex items-center gap-4 text-sm ${
              isGlass ? 'text-white/60' :
              isNeu ? 'text-neu-text/60' : 
              isBrutal ? 'text-black font-bold' :
              isClay ? 'text-neutral-500 font-semibold' :
              isY2K ? 'text-[#00FFFF] font-mono' :
              isIllus ? 'text-illus-ink font-hand text-lg' :
              isDark ? 'text-dark-muted' :
              isMag ? 'text-black font-serif italic' :
              isSkeu ? 'text-gray-400 font-semibold text-shadow-skeu-dark' :
              'text-neutral-500'
            }`}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 overflow-hidden relative flex items-center justify-center ${
                    isGlass ? 'border-white/10 bg-white/20 backdrop-blur-sm rounded-full border-2' :
                    isNeu ? 'border-neu-base bg-neu-base shadow-neu-flat rounded-full border-2' : 
                    isBrutal ? 'bg-white border-2 border-black rounded-none -ml-3 first:ml-0 z-10 hover:z-20 hover:scale-110 transition-transform' :
                    isClay ? 'bg-white border-2 border-white shadow-clay-btn rounded-full' :
                    isY2K ? 'bg-black border border-[#FF00CC] rounded-full' :
                    isIllus ? 'bg-white border-2 border-black rounded-full' :
                    isDark ? 'bg-dark-surface border-2 border-dark-bg rounded-full' :
                    isMag ? 'bg-white border border-white rounded-full' :
                    isSkeu ? 'bg-gray-300 border-2 border-gray-400 shadow-lg rounded-full' :
                    'border-white bg-neutral-100 rounded-full border-2'
                  }`}>
                    <img 
                      src={`https://picsum.photos/seed/company_${i}/100/100`} 
                      alt="Trusted Business" 
                      className={`w-full h-full object-cover ${
                        isGlass ? 'opacity-90' :
                        isNeu ? 'opacity-80 grayscale mix-blend-multiply' : 
                        isBrutal ? 'grayscale-0 contrast-125' :
                        isClay ? '' :
                        isY2K ? 'contrast-125 hover:hue-rotate-90 transition-all' :
                        isIllus ? 'mix-blend-multiply sepia-[0.3]' :
                        isDark ? 'grayscale brightness-75 hover:grayscale-0 transition-all' :
                        isMag ? 'grayscale contrast-125' :
                        isSkeu ? 'sepia-[0.2] opacity-90' :
                        'grayscale opacity-60 mix-blend-multiply'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ businesses</p>
            </div>
          </div>

          {/* Abstract Visual / Mockup */}
          <div className={`relative lg:h-[600px] w-full flex items-center justify-center ${isMag ? 'lg:pl-16' : ''}`}>
             {/* Background Elements (only for Minimal/Neu - Glass & Clay handles background in App.tsx) */}
             {!isGlass && !isBrutal && !isClay && !isY2K && !isIllus && !isDark && !isMag && !isSkeu && (
               <>
                 <div className={`absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob ${
                   isNeu ? 'bg-neu-accent/20' : 'bg-neutral-100'
                 }`}></div>
                 <div className={`absolute -bottom-8 -left-8 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 ${
                   isNeu ? 'bg-purple-300/20' : 'bg-neutral-200'
                 }`}></div>
               </>
             )}
             
             {isBrutal && (
                <div className="absolute inset-0 bg-transparent" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1 }}></div>
             )}
             
             {isIllus && (
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] border-2 border-dashed border-gray-300 rounded-full animate-spin-slow opacity-50"></div>
                  <div className="absolute w-[350px] h-[350px] border-2 border-dashed border-gray-300 rounded-full animate-reverse-spin opacity-50"></div>
               </div>
             )}

             {isDark && (
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="absolute w-[350px] h-[600px] bg-dark-primary/10 rounded-full blur-3xl animate-pulse"></div>
                 <div className="absolute w-[400px] h-[400px] bg-dark-accent/10 rounded-full blur-3xl translate-x-20 translate-y-20"></div>
               </div>
             )}
             
             {/* Phone Representation */}
             <div className={`relative w-[320px] h-[640px] overflow-hidden transform transition-all duration-700 ${
               isGlass 
                  ? 'rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rotate-[-6deg] hover:rotate-0'
                  : isNeu 
                    ? 'rounded-[3rem] bg-neu-base shadow-neu-flat border-8 border-neu-base rotate-[-6deg] hover:rotate-0' 
                    : isBrutal
                      ? 'rounded-none bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]'
                      : isClay
                        ? 'rounded-[3rem] bg-white shadow-clay-card border-8 border-white rotate-[-6deg] hover:rotate-0 hover:scale-[1.02]'
                        : isY2K
                          ? 'rounded-[2rem] bg-white/20 backdrop-blur-md border-[6px] border-[#C0C0C0] shadow-[0_0_20px_#FF00CC] rotate-[-6deg] hover:rotate-0 hover:shadow-[0_0_40px_#00FFFF]'
                          : isIllus
                            ? 'rounded-sketch bg-white border-[3px] border-black shadow-sketch rotate-[-2deg] hover:rotate-1 hover:shadow-lg animate-wobble-slow'
                            : isDark
                              ? 'rounded-[3rem] bg-dark-surface border-[4px] border-dark-border shadow-[0_0_30px_rgba(59,130,246,0.2)] rotate-[-6deg] hover:rotate-0 hover:shadow-dark-glow-hover hover:border-dark-primary/50'
                              : isMag
                                ? 'rounded-none border border-black bg-mag-paper shadow-none rotate-0 hover:translate-y-[-10px] grayscale'
                                : isSkeu
                                  ? 'rounded-[3rem] bg-gray-900 border-[8px] border-gray-600 shadow-[20px_20px_40px_rgba(0,0,0,0.6),inset_2px_2px_4px_rgba(255,255,255,0.3)] rotate-[-6deg] hover:rotate-0'
                          : 'rounded-[3rem] bg-white shadow-2xl border-[12px] border-neutral-900 rotate-[-6deg] hover:rotate-0'
             }`}>
                {/* Notch */}
                {!isNeu && !isGlass && !isBrutal && !isClay && !isY2K && !isIllus && !isDark && !isMag && !isSkeu && <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 rounded-b-xl z-20 w-40 mx-auto"></div>}
                {(isNeu || isGlass) && <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full z-20 ${
                  isGlass ? 'bg-black/20 backdrop-blur-sm' : 'bg-neu-base shadow-neu-pressed'
                }`}></div>}
                {isClay && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full z-20 bg-[#f0f4f8] shadow-clay-btn-pressed"></div>}
                {isY2K && <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/50 border border-[#00FFFF] rounded-none z-20"></div>}
                {isIllus && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 border-2 border-black rounded-sketch z-20"></div>}
                {isDark && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full z-20 bg-black/50 backdrop-blur-md border border-dark-border"></div>}
                {isMag && <div className="absolute top-0 w-full h-8 bg-black z-20"></div>}
                {isSkeu && (
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/90 rounded-b-2xl z-20 w-48 mx-auto shadow-[0_2px_4px_black]"></div>
                )}
                
                {/* Screen Content */}
                <div className={`p-6 h-full flex flex-col gap-6 ${
                  isGlass ? 'bg-gradient-to-br from-white/5 to-white/0 pt-14' :
                  isNeu ? 'bg-neu-base pt-14' : 
                  isBrutal ? 'bg-white pt-8' :
                  isClay ? 'bg-[#f8fafc] pt-14' :
                  isY2K ? 'bg-black/80 pt-10' :
                  isIllus ? 'bg-white pt-12' :
                  isDark ? 'bg-gradient-to-b from-dark-surface to-dark-bg pt-14' :
                  isMag ? 'bg-mag-paper pt-12' :
                  isSkeu ? 'bg-gray-100 pt-14 shadow-inner' :
                  'bg-neutral-50 pt-14'
                }`}>
                  
                  {/* Header Bar */}
                  <div className={`h-12 w-full flex items-center px-4 ${
                    isGlass ? 'rounded-xl bg-white/10 border border-white/10' :
                    isNeu ? 'rounded-xl shadow-neu-flat bg-neu-base' : 
                    isBrutal ? 'rounded-none border-2 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' :
                    isClay ? 'rounded-2xl bg-white shadow-clay-card border-2 border-white' :
                    isY2K ? 'rounded-none border border-[#FF00CC] bg-black/50' :
                    isIllus ? 'rounded-sketch bg-illus-blue/20 border-2 border-black' :
                    isDark ? 'rounded-lg bg-dark-bg border border-dark-border/50' :
                    isMag ? 'rounded-none border-b border-black bg-transparent' :
                    isSkeu ? 'rounded-md bg-gradient-to-b from-gray-200 to-gray-300 shadow-skeu-button border border-gray-400' :
                    'rounded-xl bg-white border border-neutral-200 shadow-sm'
                  }`}>
                    <div className={`h-4 w-4 ${
                      isGlass ? 'rounded-full bg-white/40' :
                      isNeu ? 'rounded-full bg-neu-accent shadow-neu-flat' : 
                      isBrutal ? 'rounded-none bg-black' :
                      isClay ? 'rounded-full bg-[#6366f1]' :
                      isY2K ? 'rounded-full bg-[#00FFFF] animate-pulse' :
                      isIllus ? 'rounded-full bg-illus-yellow border-2 border-black' :
                      isDark ? 'rounded-full bg-dark-primary shadow-[0_0_8px_#3b82f6]' :
                      isMag ? 'rounded-none bg-black' :
                      isSkeu ? 'rounded-full bg-blue-500 shadow-skeu-button border border-blue-600' :
                      'rounded-full bg-neutral-200'
                    }`}></div>
                  </div>
                  
                  {/* Grid Content */}
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                       <div key={i} className={`aspect-square p-3 flex flex-col justify-end ${
                          isGlass ? 'rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors' :
                          isNeu ? `rounded-2xl ${i === 2 ? 'bg-neu-base shadow-neu-pressed' : 'bg-neu-base shadow-neu-flat'}` : 
                          isBrutal ? 'rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white' :
                          isClay ? `rounded-3xl bg-white shadow-clay-card border-2 border-white` :
                          isY2K ? 'rounded-none border border-[#00FFFF] bg-black/50 hover:bg-[#00FFFF]/20' :
                          isIllus ? 'rounded-sketch-sm border-2 border-black bg-white hover:bg-illus-yellow/10' :
                          isDark ? `rounded-lg border border-dark-border bg-dark-bg hover:border-dark-primary/50 transition-colors` :
                          isMag ? 'rounded-none border border-black bg-transparent' :
                          isSkeu ? 'rounded-md bg-gray-200 shadow-skeu-bevel border border-gray-300 hover:shadow-skeu-inner' :
                          `rounded-2xl ${i === 2 ? 'bg-neutral-900 shadow-sm' : 'bg-white border border-neutral-200 shadow-sm'}`
                       }`}>
                          <div className={`h-2 w-1/2 mb-2 ${
                            isGlass ? 'rounded bg-white/20' :
                            isNeu ? 'rounded bg-neu-text/20' : 
                            isBrutal ? 'bg-black' :
                            isClay ? 'rounded-full bg-blue-100' :
                            isY2K ? 'bg-[#FF00CC]' :
                            isIllus ? 'bg-gray-200 rounded-sm' :
                            isDark ? 'bg-dark-border rounded-sm' :
                            isMag ? 'bg-black rounded-none' :
                            isSkeu ? 'bg-gray-400 shadow-inner rounded-sm' :
                            `rounded ${i === 2 ? 'bg-neutral-600' : 'bg-neutral-200'}`
                          }`}></div>
                          <div className={`h-4 w-3/4 ${
                            isGlass ? 'rounded bg-white/40' :
                            isNeu ? `rounded ${i === 2 ? 'bg-neu-accent shadow-neu-flat' : 'bg-neu-text/40'}` : 
                            isBrutal ? `${i === 2 ? 'bg-[#FF3333]' : 'bg-gray-300'}` :
                            isClay ? `rounded-full ${i === 2 ? 'bg-[#6366f1]' : 'bg-blue-200'}` :
                            isY2K ? 'bg-[#CCFF00]' :
                            isIllus ? `rounded-sm border border-black ${i === 2 ? 'bg-illus-blue' : 'bg-illus-green'}` :
                            isDark ? `rounded-sm ${i === 2 ? 'bg-dark-primary shadow-[0_0_5px_#3b82f6]' : 'bg-dark-muted/20'}` :
                            isMag ? 'bg-gray-400 rounded-none' :
                            isSkeu ? `rounded-sm ${i === 2 ? 'bg-blue-500 shadow-skeu-button' : 'bg-gray-300 shadow-skeu-button'}` :
                            `rounded ${i === 2 ? 'bg-white' : 'bg-neutral-800'}`
                          }`}></div>
                       </div>
                    ))}
                  </div>

                  {/* Bottom Card */}
                  <div className={`mt-auto p-4 ${
                    isGlass ? 'rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md' :
                    isNeu ? 'rounded-2xl bg-neu-base shadow-neu-flat' : 
                    isBrutal ? 'rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#3366FF]' :
                    isClay ? 'rounded-3xl bg-white shadow-clay-card border-2 border-white' :
                    isY2K ? 'rounded-none border border-[#C0C0C0] bg-chrome' :
                    isIllus ? 'rounded-sketch bg-white border-2 border-black' :
                    isDark ? 'rounded-lg bg-dark-bg border border-dark-border shadow-dark-glow' :
                    isMag ? 'rounded-none border-t border-black bg-transparent' :
                    isSkeu ? 'rounded-md bg-gray-200 border border-gray-300 shadow-skeu-bevel' :
                    'rounded-2xl bg-white border border-neutral-200 shadow-sm'
                  }`}>
                    <div className="flex justify-between items-center mb-3">
                      <div className={`h-3 w-20 ${
                        isGlass ? 'rounded bg-white/30' :
                        isNeu ? 'rounded bg-neu-text/20' : 
                        isBrutal ? 'bg-white' :
                        isClay ? 'rounded-full bg-blue-100' :
                        isY2K ? 'bg-black/20' :
                        isIllus ? 'bg-gray-200 rounded-sm' :
                        isDark ? 'bg-dark-border rounded-sm' :
                        isMag ? 'bg-black rounded-none' :
                        isSkeu ? 'bg-gray-400 shadow-inner rounded-sm' :
                        'rounded bg-neutral-200'
                      }`}></div>
                      <div className={`h-5 w-12 text-[10px] flex items-center justify-center font-bold ${
                        isGlass ? 'rounded-full bg-green-500/20 text-green-200 border border-green-500/30' :
                        isNeu ? 'rounded-full bg-neu-base shadow-neu-pressed text-neu-accent' : 
                        isBrutal ? 'bg-black text-white uppercase' :
                        isClay ? 'rounded-full bg-green-100 text-green-600 shadow-sm' :
                        isY2K ? 'bg-black text-[#00FFFF] border border-[#00FFFF]' :
                        isIllus ? 'rounded-full border border-black bg-illus-green text-black' :
                        isDark ? 'rounded bg-dark-accent/20 text-dark-accent border border-dark-accent/30' :
                        isMag ? 'bg-transparent text-black border border-black rounded-none' :
                        isSkeu ? 'rounded-sm bg-green-500 text-white shadow-skeu-button border border-green-600' :
                        'rounded-full bg-green-100 text-green-700'
                      }`}>LIVE</div>
                    </div>
                    <div className={`h-2 w-full overflow-hidden ${
                      isGlass ? 'rounded-full bg-white/10' :
                      isNeu ? 'rounded-full bg-neu-base shadow-neu-pressed' : 
                      isBrutal ? 'bg-white border border-black' :
                      isClay ? 'rounded-full bg-gray-100 shadow-inner' :
                      isY2K ? 'bg-black' :
                      isIllus ? 'rounded-full bg-gray-100 border border-black' :
                      isDark ? 'rounded-full bg-dark-border' :
                      isMag ? 'rounded-none bg-gray-300' :
                      isSkeu ? 'rounded-full bg-gray-300 shadow-skeu-inner' :
                      'rounded-full bg-neutral-100'
                    }`}>
                       <div className={`h-full w-2/3 ${
                         isGlass ? 'bg-gradient-to-r from-blue-400 to-purple-400' :
                         isNeu ? 'bg-neu-accent' : 
                         isBrutal ? 'bg-black' :
                         isClay ? 'bg-[#6366f1] rounded-full' :
                         isY2K ? 'bg-gradient-to-r from-[#FF00CC] to-[#00FFFF]' :
                         isIllus ? 'bg-illus-pink' :
                         isDark ? 'bg-dark-primary shadow-[0_0_10px_#3b82f6]' :
                         isMag ? 'bg-black' :
                         isSkeu ? 'bg-skeu-blue-gloss' :
                         'bg-neutral-900'
                       }`}></div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;