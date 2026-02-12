import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { settings } = useTheme();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Mode Handling */}
      {settings.backgroundMode === 'grunge' && (
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/grunge99/1920/1080?grayscale" 
            alt="Grunge Aesthetic"
            className={`w-full h-full object-cover transition-all duration-700 ${settings.invertColors ? 'invert' : ''} contrast-125 brightness-75`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      
      {settings.backgroundMode === 'noise' && (
         <div className="absolute inset-0 z-0 bg-neutral-800" />
      )}

      {/* Content */}
      <div className="relative z-10 text-center mix-blend-difference text-white">
        <h1 className="text-[15vw] leading-none font-bold tracking-tighter opacity-90 select-none">
          SZN 1
        </h1>
        <p className="uppercase tracking-[0.5em] text-sm md:text-xl mt-4 font-light">
          Americana Modern Punk
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 text-white/50 text-xs uppercase tracking-widest writing-vertical-rl">
        Est. 2024
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] border border-white/20 pointer-events-none" />
    </div>
  );
};
