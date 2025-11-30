import React, { createContext, useContext, useState } from 'react';

export type Theme = 'minimal' | 'neumorphism' | 'glassmorphism' | 'brutalism' | 'claymorphism' | 'y2k' | 'illustrative' | 'dark' | 'magazine' | 'skeuomorphism';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('minimal');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};