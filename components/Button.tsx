import React from 'react';
import { useTheme } from '../ThemeContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const { theme } = useTheme();
  
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "text-sm px-4 py-2 rounded-md",
    md: "text-base px-6 py-3 rounded-xl",
    lg: "text-lg px-8 py-4 rounded-xl",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  // Minimalist Styles
  const minimalVariants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900 border border-transparent shadow-sm",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500 border border-transparent",
    outline: "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-50 focus:ring-neutral-900",
  };

  // Neumorphic Styles
  const neuVariants = {
    primary: "bg-neu-base text-neu-accent shadow-neu-flat active:shadow-neu-pressed hover:translate-y-[-2px] active:translate-y-[0px] font-semibold tracking-wide",
    secondary: "bg-neu-base text-neu-text shadow-neu-pressed font-medium", 
    outline: "bg-neu-base text-neu-text border-2 border-[#e6e9ef] shadow-neu-flat hover:shadow-neu-pressed",
  };

  // Glassmorphism Styles
  const glassVariants = {
    primary: "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)]",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/10 hover:bg-white/20",
    outline: "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60",
  };

  // Brutalism Styles
  const brutalVariants = {
    primary: "bg-[#FF3333] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded-none font-bold uppercase tracking-wider !transition-none",
    secondary: "bg-[#3366FF] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded-none font-bold uppercase tracking-wider !transition-none",
    outline: "bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded-none font-bold uppercase tracking-wider !transition-none",
  };

  // Claymorphism Styles
  const clayVariants = {
    primary: "bg-[#6366f1] text-white rounded-3xl shadow-clay-btn active:shadow-clay-btn-pressed active:translate-y-1 hover:bg-[#585ce0]",
    secondary: "bg-white text-[#6366f1] rounded-3xl shadow-clay-btn active:shadow-clay-btn-pressed active:translate-y-1 hover:bg-gray-50",
    outline: "bg-transparent text-[#6366f1] rounded-3xl border-2 border-[#6366f1]/50 hover:bg-[#6366f1]/10",
  };

  // Y2K Styles
  const y2kVariants = {
    primary: "bg-gradient-to-r from-[#FF00CC] to-[#00FFFF] text-black font-y2k font-bold uppercase tracking-wider rounded-full border-2 border-white hover:shadow-y2k-glow hover:scale-105 active:scale-95",
    secondary: "bg-white/10 backdrop-blur-sm text-[#00FFFF] font-mono border border-[#00FFFF] hover:bg-[#00FFFF]/20 hover:shadow-y2k-blue-glow rounded-none clip-path-polygon",
    outline: "bg-transparent text-[#FF00CC] font-y2k border-2 border-[#FF00CC] hover:bg-[#FF00CC] hover:text-white hover:shadow-y2k-glow rounded-full",
  };

  // Illustrative Styles
  const illusVariants = {
    primary: "bg-illus-yellow text-illus-ink font-hand text-xl font-bold border-2 border-black rounded-sketch shadow-sketch hover:scale-105 hover:-rotate-1 active:scale-95",
    secondary: "bg-illus-blue text-illus-ink font-hand text-xl font-bold border-2 border-black rounded-sketch shadow-sketch hover:scale-105 hover:rotate-1 active:scale-95",
    outline: "bg-transparent text-illus-ink font-hand text-xl font-bold border-2 border-black rounded-sketch hover:bg-illus-pink/20 hover:rotate-2",
  };

  // Dark Mode Styles
  const darkVariants = {
    primary: "bg-dark-primary text-white border border-dark-primary shadow-dark-glow hover:bg-blue-600 hover:shadow-dark-glow-hover rounded-lg",
    secondary: "bg-dark-surface text-white border border-dark-border hover:border-dark-primary hover:text-dark-primary rounded-lg",
    outline: "bg-transparent text-dark-text border border-dark-border hover:border-dark-primary hover:text-white hover:shadow-dark-glow rounded-lg",
  };

  // Magazine Styles
  const magVariants = {
    primary: "bg-black text-white font-mag font-semibold tracking-wide border border-black rounded-none hover:bg-white hover:text-black hover:border-black transition-colors duration-200",
    secondary: "bg-mag-paper text-black font-mag border border-black rounded-none hover:bg-black hover:text-white transition-colors duration-200",
    outline: "bg-transparent text-black font-mag border border-black rounded-none hover:bg-black hover:text-white transition-colors duration-200",
  };

  // Skeuomorphism Styles
  const skeuVariants = {
    primary: "bg-skeu-blue-gloss text-white shadow-skeu-button border border-blue-900 active:shadow-skeu-inner active:bg-blue-700 active:text-blue-200 rounded-lg text-shadow-skeu",
    secondary: "bg-skeu-metal text-gray-800 shadow-skeu-button border border-gray-400 active:shadow-skeu-inner active:bg-gray-300 rounded-lg text-shadow-skeu-light",
    outline: "bg-transparent text-gray-300 border border-gray-500 shadow-skeu-bevel hover:bg-white/5 active:bg-black/20 rounded-lg",
  };

  let selectedVariant = minimalVariants;
  if (theme === 'neumorphism') selectedVariant = neuVariants;
  if (theme === 'glassmorphism') selectedVariant = glassVariants;
  if (theme === 'brutalism') selectedVariant = brutalVariants;
  if (theme === 'claymorphism') selectedVariant = clayVariants;
  if (theme === 'y2k') selectedVariant = y2kVariants;
  if (theme === 'illustrative') selectedVariant = illusVariants;
  if (theme === 'dark') selectedVariant = darkVariants;
  if (theme === 'magazine') selectedVariant = magVariants;
  if (theme === 'skeuomorphism') selectedVariant = skeuVariants;

  // Override sizes for specific themes
  let currentSizes = sizes;
  
  if (theme === 'brutalism') {
    currentSizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    };
  } else if (theme === 'claymorphism') {
    currentSizes = {
      sm: "text-sm px-6 py-2 rounded-2xl",
      md: "text-base px-8 py-3 rounded-3xl",
      lg: "text-lg px-10 py-4 rounded-3xl",
    };
  } else if (theme === 'y2k') {
    currentSizes = {
      sm: "text-xs px-4 py-2",
      md: "text-sm px-6 py-2",
      lg: "text-base px-8 py-3",
    };
  } else if (theme === 'illustrative') {
    currentSizes = {
      sm: "text-lg px-4 py-1",
      md: "text-xl px-6 py-2",
      lg: "text-2xl px-8 py-3",
    };
  } else if (theme === 'dark') {
    currentSizes = {
      sm: "text-sm px-4 py-2 rounded-lg",
      md: "text-sm font-semibold px-6 py-3 rounded-lg tracking-wide uppercase",
      lg: "text-base font-semibold px-8 py-4 rounded-lg tracking-wide uppercase",
    };
  } else if (theme === 'magazine') {
    currentSizes = {
      sm: "text-xs uppercase tracking-widest px-4 py-2 rounded-none",
      md: "text-sm uppercase tracking-widest px-8 py-3 rounded-none",
      lg: "text-base uppercase tracking-widest px-10 py-4 rounded-none",
    };
  } else if (theme === 'skeuomorphism') {
    currentSizes = {
      sm: "text-sm font-bold px-4 py-2 rounded-md",
      md: "text-base font-bold px-6 py-3 rounded-lg",
      lg: "text-lg font-bold px-8 py-4 rounded-lg",
    };
  }

  return (
    <button 
      className={`${baseStyles} ${selectedVariant[variant]} ${currentSizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;