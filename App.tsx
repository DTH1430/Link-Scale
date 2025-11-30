import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './ThemeContext';

const MainContent = () => {
  const { theme } = useTheme();
  const isGlass = theme === 'glassmorphism';
  const isNeu = theme === 'neumorphism';
  const isBrutal = theme === 'brutalism';
  const isClay = theme === 'claymorphism';
  const isY2K = theme === 'y2k';
  const isIllustrative = theme === 'illustrative';
  const isDark = theme === 'dark';
  const isMag = theme === 'magazine';
  const isSkeu = theme === 'skeuomorphism';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 relative overflow-x-hidden ${
      isNeu 
        ? 'bg-neu-base text-neu-text' 
        : isGlass
          ? 'bg-[#0f172a] text-white selection:bg-pink-500 selection:text-white'
          : isBrutal
            ? 'bg-[#FFFCF0] text-black selection:bg-yellow-400 selection:text-black font-mono'
            : isClay
              ? 'bg-[#f0f4f8] text-neutral-800'
              : isY2K
                ? 'bg-black text-white bg-grid-y2k selection:bg-[#FF00CC] selection:text-white font-sans'
                : isIllustrative
                  ? 'bg-paper text-illus-ink font-hand selection:bg-illus-yellow selection:text-black'
                  : isDark
                    ? 'bg-dark-bg text-dark-text selection:bg-dark-primary selection:text-white'
                    : isMag
                      ? 'bg-mag-bg text-mag-text font-serif selection:bg-black selection:text-white'
                      : isSkeu
                        ? 'bg-skeu-leather text-gray-200 selection:bg-orange-900 selection:text-white'
                  : 'bg-white text-neutral-900'
    }`}>
      {/* Glassmorphism Ambient Background */}
      {isGlass && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/30 blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/30 blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-pink-600/20 blur-[120px] animate-blob animation-delay-4000"></div>
          <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"></div>
        </div>
      )}

      {/* Claymorphism Ambient Background */}
      {isClay && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      )}

      {/* Y2K Ambient Background Elements */}
      {isY2K && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80"></div>
           {/* Floating elements */}
           <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#FF00CC] rounded-full opacity-30 animate-float"></div>
           <div className="absolute bottom-40 left-10 w-24 h-24 border-2 border-[#00FFFF] rotate-45 opacity-40 animate-spin" style={{ animationDuration: '10s' }}></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9D00FF] rounded-full blur-[150px] opacity-10"></div>
        </div>
      )}

      {/* Dark Mode Background Effects */}
      {isDark && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-dark-gradient opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark-primary/5 rounded-full blur-3xl filter"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),_transparent_70%)]"></div>
        </div>
      )}
      
      {/* Skeuomorphism Vignette */}
      {isSkeu && (
         <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      )}

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;