import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStyleMenuOpen, setIsStyleMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNeu = theme === 'neumorphism';
  const isGlass = theme === 'glassmorphism';
  const isBrutal = theme === 'brutalism';
  const isClay = theme === 'claymorphism';
  const isY2K = theme === 'y2k';
  const isIllus = theme === 'illustrative';
  const isDark = theme === 'dark';
  const isMag = theme === 'magazine';
  const isSkeu = theme === 'skeuomorphism';

  // Dynamic Background Styles
  let navClasses = "";
  if (isGlass) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
      isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
    }`;
  } else if (isNeu) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-neu-base/90 backdrop-blur-md shadow-neu-flat py-4' : 'bg-neu-base/90 backdrop-blur-md py-4'
    }`;
  } else if (isBrutal) {
    navClasses = `fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-white py-4 transition-none`;
  } else if (isClay) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 ${
      isScrolled ? 'py-4' : 'py-6'
    }`;
  } else if (isY2K) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-y2k-pink/50 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm py-4 shadow-y2k-glow' : 'bg-transparent py-6'
    }`;
  } else if (isIllus) {
     navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
       isScrolled ? 'bg-paper border-black py-3 shadow-sm' : 'bg-transparent border-transparent py-5'
     }`;
  } else if (isDark) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-dark-border py-4 shadow-dark-sm' : 'bg-transparent border-transparent py-6'
    }`;
  } else if (isMag) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black ${
      isScrolled ? 'bg-mag-bg py-4' : 'bg-mag-bg py-6'
    }`;
  } else if (isSkeu) {
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-700 bg-skeu-dark-gloss shadow-lg ${
      isScrolled ? 'py-3' : 'py-4'
    }`;
  } else {
    // Minimal
    navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-neutral-200 py-4' : 'bg-white border-transparent py-6'
    }`;
  }

  const textColor = isGlass ? 'text-white' : isNeu ? 'text-neu-text' : isBrutal ? 'text-black font-bold uppercase' : isClay ? 'text-neutral-800 font-bold' : isY2K ? 'text-white font-y2k' : isIllus ? 'text-illus-ink font-hand text-xl font-bold' : isDark ? 'text-dark-text' : isMag ? 'text-black font-mag' : isSkeu ? 'text-gray-100 text-shadow-skeu-dark font-bold' : 'text-neutral-900';
  const navItemColor = isGlass ? 'text-white/80 hover:text-white' : isNeu ? 'text-neu-text/70 hover:text-neu-accent' : isBrutal ? 'text-black hover:bg-yellow-300 hover:text-black px-1' : isClay ? 'text-neutral-600 hover:text-[#6366f1] hover:bg-white/50 px-3 py-1 rounded-full' : isY2K ? 'text-[#00FFFF] hover:text-[#FF00CC] font-mono tracking-widest' : isIllus ? 'text-illus-ink hover:text-illus-pink hover:underline decoration-wavy' : isDark ? 'text-dark-muted hover:text-white hover:shadow-dark-glow transition-all' : isMag ? 'text-black font-serif italic hover:underline decoration-1 underline-offset-4' : isSkeu ? 'text-gray-400 hover:text-white text-shadow-skeu-dark font-semibold' : 'text-neutral-600 hover:text-neutral-900';

  return (
    <nav className={navClasses}>
      {/* Claymorphism uses a floating island navbar container when scrolled */}
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${
          isClay && isScrolled 
            ? 'bg-white/70 backdrop-blur-md rounded-3xl shadow-clay-card py-3 transition-all duration-300' 
            : ''
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-sm ${
              isGlass ? 'bg-white/20 border border-white/30 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 
              isNeu ? 'bg-neu-base shadow-neu-flat border border-white/20' : 
              isBrutal ? 'bg-black rounded-none border-2 border-transparent' :
              isClay ? 'w-8 h-8 rounded-full bg-[#6366f1] shadow-clay-btn border-2 border-white' :
              isY2K ? 'w-8 h-8 rounded-full bg-chrome shadow-y2k-glow border border-white' :
              isIllus ? 'w-8 h-8 bg-illus-yellow border-2 border-black rounded-sketch shadow-sketch' :
              isDark ? 'bg-dark-primary shadow-dark-glow' :
              isMag ? 'hidden' :
              isSkeu ? 'bg-skeu-metal shadow-skeu-bevel border border-gray-500 rounded-md' :
              'bg-neutral-900'
            }`}>
              {isNeu && <div className="w-full h-full rounded-sm bg-neu-accent opacity-80" />}
              {isBrutal && <div className="w-full h-full bg-red-500 translate-x-[2px] translate-y-[-2px] border-2 border-black"></div>}
            </div>
            <span className={`text-xl font-bold tracking-tight ${textColor} ${isY2K ? 'text-transparent bg-clip-text bg-chrome drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : ''} ${isIllus ? 'text-2xl' : ''} ${isMag ? 'text-3xl font-mag tracking-tighter' : ''} ${isSkeu ? 'text-gray-100 drop-shadow-md' : ''}`}>LinkScale</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => e.preventDefault()}
                className={`text-sm font-medium transition-colors ${navItemColor} ${isBrutal ? 'border-b-2 border-transparent hover:border-black transition-none' : ''} ${isIllus ? 'text-lg' : ''} ${isDark ? 'uppercase tracking-wider text-xs' : ''}`}
              >
                {item.label}
              </a>
            ))}

            {/* Style Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsStyleMenuOpen(!isStyleMenuOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none px-3 py-1.5 rounded-lg ${
                    isGlass ? 'text-white/90 hover:bg-white/10 border border-white/10' :
                    isNeu ? 'text-neu-text hover:text-neu-accent shadow-neu-flat hover:shadow-neu-pressed' : 
                    isBrutal ? 'text-black border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none bg-yellow-300 font-bold uppercase transition-none' :
                    isClay ? 'text-neutral-700 bg-white shadow-clay-btn hover:translate-y-[-2px] active:translate-y-0 active:shadow-clay-btn-pressed rounded-2xl' :
                    isY2K ? 'text-[#CCFF00] font-y2k border border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black rounded-none uppercase' :
                    isIllus ? 'text-illus-ink font-hand text-lg font-bold bg-white border-2 border-black rounded-sketch shadow-sketch hover:bg-illus-blue/20' :
                    isDark ? 'text-white border border-dark-border bg-dark-surface hover:border-dark-primary transition-all uppercase tracking-wide text-xs' :
                    isMag ? 'text-black font-serif italic border border-black rounded-none hover:bg-black hover:text-white' :
                    isSkeu ? 'text-gray-800 bg-skeu-metal shadow-skeu-button border border-gray-500 active:shadow-skeu-inner active:bg-gray-400 font-bold text-shadow-skeu-light' :
                    'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Style <ChevronDown size={14} className={`transition-transform duration-200 ${isStyleMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isStyleMenuOpen && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 duration-200 ${isBrutal || isMag ? 'mt-2' : 'animate-in fade-in zoom-in-95'}`}>
                    <div className={`rounded-xl p-2 overflow-hidden ${
                        isGlass ? 'bg-gray-900/80 backdrop-blur-xl border border-white/20 shadow-xl' :
                        isNeu ? 'bg-neu-base shadow-neu-flat border border-white/40' : 
                        isBrutal ? 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none p-0' :
                        isClay ? 'bg-white rounded-3xl shadow-clay-card border-2 border-white p-3' :
                        isY2K ? 'bg-black/90 border-2 border-[#FF00CC] shadow-y2k-glow rounded-none' :
                        isIllus ? 'bg-paper border-2 border-black shadow-sketch rounded-sketch-sm p-3' :
                        isDark ? 'bg-dark-bg border border-dark-border shadow-2xl shadow-dark-primary/20 rounded-lg' :
                        isMag ? 'bg-mag-paper border border-black shadow-none rounded-none p-0' :
                        isSkeu ? 'bg-gray-200 border-2 border-gray-400 shadow-xl rounded-lg' :
                        'bg-white shadow-xl border border-neutral-100'
                    }`}>
                      {['Minimal', 'Neumorphism', 'Glassmorphism', 'Brutalism', 'Claymorphism', 'Y2K', 'Illustrative', 'Dark', 'Magazine', 'Skeuomorphism'].map((style) => (
                        <button 
                          key={style}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              isGlass ? 'text-white/80 hover:bg-white/10 hover:text-white rounded-md' :
                              isNeu ? 'text-neu-text hover:text-neu-accent hover:shadow-neu-pressed rounded-md' : 
                              isBrutal ? 'text-black font-bold uppercase hover:bg-black hover:text-white rounded-none border-b-2 border-black last:border-b-0' :
                              isClay ? 'text-neutral-700 font-semibold hover:bg-blue-50 hover:text-[#6366f1] rounded-xl mb-1 last:mb-0' :
                              isY2K ? 'text-[#00FFFF] font-mono hover:bg-[#FF00CC] hover:text-white uppercase' :
                              isIllus ? 'text-illus-ink font-hand text-lg font-bold hover:bg-illus-yellow/50 rounded-md' :
                              isDark ? 'text-dark-text hover:text-dark-primary hover:bg-dark-surface rounded-md uppercase text-xs tracking-wider' :
                              isMag ? 'text-black font-serif italic hover:bg-black hover:text-white border-b border-black last:border-b-0 rounded-none' :
                              isSkeu ? 'text-gray-800 hover:bg-gray-300 hover:shadow-skeu-inner rounded font-semibold' :
                              'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md'
                          }`}
                          onClick={() => {
                              setTheme(style.toLowerCase() as any);
                              setIsStyleMenuOpen(false);
                          }}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#login" 
              className={`text-sm font-medium hover:opacity-70 ${textColor} ${isIllus ? 'text-lg' : ''} ${isDark ? 'uppercase tracking-wider text-xs' : ''} ${isMag ? 'font-serif italic text-base' : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              Log in
            </a>
            <Button variant="primary" size="sm" className="gap-2 group">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${
              isGlass ? 'text-white hover:bg-white/10' :
              isNeu ? 'text-neu-text shadow-neu-flat active:shadow-neu-pressed' : 
              isBrutal ? 'text-black border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none bg-white' :
              isClay ? 'bg-white text-[#6366f1] shadow-clay-btn rounded-2xl active:shadow-clay-btn-pressed' :
              isY2K ? 'text-[#00FFFF] border border-[#00FFFF] rounded-none hover:bg-[#00FFFF]/20' :
              isIllus ? 'text-illus-ink bg-illus-yellow border-2 border-black rounded-sketch shadow-sketch active:scale-95' :
              isDark ? 'text-white border border-dark-border bg-dark-surface' :
              isMag ? 'text-black border border-black rounded-none bg-transparent' :
              isSkeu ? 'bg-skeu-metal shadow-skeu-button border border-gray-500 active:shadow-skeu-inner active:bg-gray-400 text-gray-800' :
              'text-neutral-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`absolute top-full left-0 right-0 p-6 md:hidden flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-200 ${
            isGlass ? 'bg-gray-900/95 backdrop-blur-xl border-t border-white/10' :
            isNeu ? 'bg-neu-base border-t border-white/20' : 
            isBrutal ? 'bg-white border-b-4 border-black' :
            isClay ? 'bg-[#f0f4f8] border-t-2 border-white shadow-xl m-4 rounded-3xl' :
            isY2K ? 'bg-black/95 border-b-2 border-[#FF00CC]' :
            isIllus ? 'bg-paper border-b-2 border-black shadow-lg m-2 rounded-sketch' :
            isDark ? 'bg-dark-bg border-b border-dark-border shadow-2xl' :
            isMag ? 'bg-mag-bg border-b border-black shadow-none' :
            isSkeu ? 'bg-gray-200 border-t border-gray-400 shadow-2xl' :
            'bg-white border-b border-neutral-200'
        }`}>
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-lg font-medium py-3 border-b ${
                  isGlass ? 'text-white/90 border-white/10' :
                  isNeu ? 'text-neu-text border-neu-shadow-dark/10' : 
                  isBrutal ? 'text-black border-black font-bold uppercase' :
                  isClay ? 'text-neutral-700 border-white/50 text-center bg-white rounded-xl shadow-clay-card my-1' :
                  isY2K ? 'text-[#00FFFF] border-[#FF00CC]/30 font-mono hover:text-[#FF00CC]' :
                  isIllus ? 'text-illus-ink font-hand text-xl border-dashed border-gray-300 hover:text-illus-pink' :
                  isDark ? 'text-dark-text border-dark-border uppercase text-sm tracking-wider' :
                  isMag ? 'text-black font-mag border-black hover:bg-black hover:text-white px-2' :
                  isSkeu ? 'text-gray-800 border-gray-300 font-bold text-shadow-skeu-light' :
                  'text-neutral-900 border-neutral-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Style Option */}
          <div className={`py-2 border-b ${isGlass ? 'border-white/10' : isNeu ? 'border-neu-shadow-dark/10' : isBrutal ? 'border-black' : isClay ? 'border-transparent' : isY2K ? 'border-[#FF00CC]/30' : isIllus ? 'border-dashed border-gray-300' : isDark ? 'border-dark-border' : isMag ? 'border-black' : isSkeu ? 'border-gray-300' : 'border-neutral-100'}`}>
            <button 
              onClick={() => setIsStyleMenuOpen(!isStyleMenuOpen)}
              className={`w-full flex items-center justify-between text-lg font-medium ${textColor} ${isClay ? 'bg-white p-3 rounded-xl shadow-clay-card justify-center' : ''}`}
            >
              Style <ChevronDown size={20} className={`transition-transform duration-200 ${isStyleMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isStyleMenuOpen && (
               <div className={`pb-2 flex flex-col gap-2 mt-2 ${isClay ? 'px-2' : 'pl-4'}`}>
                   {['Minimal', 'Neumorphism', 'Glassmorphism', 'Brutalism', 'Claymorphism', 'Y2K', 'Illustrative', 'Dark', 'Magazine', 'Skeuomorphism'].map((style) => (
                     <button 
                        key={style}
                        className={`block w-full text-left py-2 font-medium ${
                          isGlass ? 'text-white/70 hover:text-white' :
                          isNeu ? 'text-neu-text/80' : 
                          isBrutal ? 'text-black font-bold uppercase hover:bg-yellow-300' :
                          isClay ? 'text-center bg-white/50 rounded-xl hover:bg-white hover:text-[#6366f1]' :
                          isY2K ? 'text-[#00FFFF] font-mono hover:text-[#FF00CC]' :
                          isIllus ? 'text-illus-ink font-hand text-xl hover:text-illus-blue' :
                          isDark ? 'text-dark-muted hover:text-white text-sm uppercase' :
                          isMag ? 'text-black font-serif italic hover:underline' :
                          isSkeu ? 'text-gray-800 hover:text-black font-semibold' :
                          'text-neutral-600'
                        }`}
                        onClick={() => {
                            setTheme(style.toLowerCase() as any);
                            setIsStyleMenuOpen(false);
                            setIsMobileMenuOpen(false);
                        }}
                      >
                        {style}
                      </button>
                   ))}
               </div>
            )}
          </div>

          <div className="flex flex-col gap-3 mt-4">
             <Button variant="outline" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Log in</Button>
             <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;