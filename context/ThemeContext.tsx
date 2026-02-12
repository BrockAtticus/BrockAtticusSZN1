import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeSettings } from '../types';

interface ThemeContextType {
  settings: ThemeSettings;
  updateSetting: <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const defaultSettings: ThemeSettings = {
  invertColors: false,
  showGrid: false,
  fontSize: 'medium',
  highContrast: true,
  accentColor: 'red',
  fontFamily: 'mono',
  backgroundMode: 'grunge'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateSetting = <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <ThemeContext.Provider value={{ settings, updateSetting, isMenuOpen, toggleMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
