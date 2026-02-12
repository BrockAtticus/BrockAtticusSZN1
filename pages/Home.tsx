import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { settings } = useTheme();

  const getBgImage = () => {
    switch(settings.backgroundMode) {
      case 'grunge': return 'https://picsum.photos/seed/grunge99/1920/1080?grayscale';
      case 'studio': return 'https://picsum.photos/seed/studio/1920/1080?grayscale&blur=2';
      case 'concrete': return 'https://picsum.photos/seed/wall/1920/1080?grayscale';
      case 'void': return 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop';
      default: return '';
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Layer */}
      <div className={`absolute inset-0 z-0 transition-all duration-1000 ${settings.backgroundMode === 'clean' ? 'bg-transparent' : ''}`}>
        {settings.backgroundMode !== 'clean' && (
          <img 
            src={getBgImage()} 
            alt="Environment"
            className={`w-full h-full object-cover transition-all duration-700 ${settings.invertColors ? 'invert' : ''} contrast-150 brightness-[0.4]`}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mix-blend-difference text-white">
        <h1 className="text-[18vw] leading-none font-black tracking-tighter opacity-95 select-none hover:tracking-[-0.05em] transition-all duration-700">
          SZN 1
        </h1>
        <p className="uppercase tracking-[1em] text-[10px] md:text-sm mt-8 font-bold opacity-70">
          BROCKATTICUS DESIGN_SYSTEM
        </p>
      </div>

      {/* Frame */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[94vw] h-[94vh] border border-white/10 pointer-events-none" />
      
      <div className="absolute bottom-12 right-12 text-white/40 text-[9px] uppercase tracking-[0.5em] font-mono">
        LOC: 34.0522° N, 118.2437° W
      </div>
    </div>
  );
};