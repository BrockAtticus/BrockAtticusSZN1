import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Customizer } from './components/Customizer';
import { Home } from './pages/Home';
import { Apparel } from './pages/Apparel';
import { SketchLab } from './pages/SketchLab';

const AppContent: React.FC = () => {
  const { settings } = useTheme();

  // Map settings to CSS values
  const fontSizeClass = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }[settings.fontSize];

  const fontFamily = {
    mono: '"Courier Prime", monospace',
    sans: '"Oswald", sans-serif',
    serif: '"Times New Roman", serif',
  }[settings.fontFamily];

  const accentColor = {
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    orange: '#ea580c',
    purple: '#9333ea',
  }[settings.accentColor];

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${fontSizeClass} ${settings.invertColors ? 'bg-black' : 'bg-[#f2f2f2]'}`}
      style={{ fontFamily } as React.CSSProperties}
    >
      {/* Dynamic Style Injection for Theme Overrides */}
      <style>{`
        :root {
          --theme-accent: ${accentColor};
        }
        /* Override Tailwind utilities with theme accent */
        .text-red-600 { color: var(--theme-accent) !important; }
        .bg-red-600 { background-color: var(--theme-accent) !important; }
        .border-red-600 { border-color: var(--theme-accent) !important; }
        .decoration-red-600 { text-decoration-color: var(--theme-accent) !important; }
        .hover\\:text-red-600:hover { color: var(--theme-accent) !important; }
        .hover\\:bg-red-600:hover { background-color: var(--theme-accent) !important; }
        .hover\\:border-red-600:hover { border-color: var(--theme-accent) !important; }
        .focus\\:border-red-600:focus { border-color: var(--theme-accent) !important; }
      `}</style>

      <div className="noise-overlay" />
      <Navigation />
      <Customizer />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/sketch-lab" element={<SketchLab />} />
        </Routes>
      </main>

      {/* Global decorative footer/status */}
      <footer className="fixed bottom-0 left-0 w-full p-2 flex justify-between items-center z-30 pointer-events-none mix-blend-difference text-white text-[10px] uppercase tracking-wider">
        <span>sys_ready</span>
        <span>optimize_level: max</span>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
