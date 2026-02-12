import React from 'react';
import { X, Settings, Eye, Grid, Type, Palette, Image as ImageIcon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AccentColor, FontFamily, BackgroundMode } from '../types';

export const Customizer: React.FC = () => {
  const { isMenuOpen, toggleMenu, settings, updateSetting } = useTheme();

  const colors: AccentColor[] = ['red', 'blue', 'green', 'orange', 'purple'];
  const fonts: { id: FontFamily; label: string }[] = [
    { id: 'mono', label: 'Mono' },
    { id: 'sans', label: 'Sans' },
    { id: 'serif', label: 'Serif' },
  ];
  const bgModes: { id: BackgroundMode; label: string }[] = [
    { id: 'grunge', label: 'Grunge' },
    { id: 'noise', label: 'Noise' },
    { id: 'clean', label: 'Clean' },
  ];

  return (
    <>
      {/* Toggle Button (Visible only when closed) */}
      {!isMenuOpen && (
        <button 
          onClick={toggleMenu}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-3 hover:bg-red-700 transition-colors z-50 uppercase text-xs tracking-widest writing-vertical-rl"
          style={{ writingMode: 'vertical-rl' }}
        >
          Customize
        </button>
      )}

      {/* Side Menu Overlay */}
      <div 
        className={`fixed inset-y-0 right-0 w-80 bg-[#111] text-[#f2f2f2] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-l border-zinc-800 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <Settings className="w-5 h-5" /> SYSTEM
            </h2>
            <button onClick={toggleMenu} className="hover:text-red-500 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8 flex-1">
            
            {/* Accent Color */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                <Palette className="w-3 h-3" /> Accent Color
              </label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateSetting('accentColor', color)}
                    className={`w-8 h-8 border border-zinc-600 transition-all ${settings.accentColor === color ? 'border-white scale-110' : 'hover:border-zinc-400'}`}
                    style={{ backgroundColor: color === 'red' ? '#dc2626' : color === 'blue' ? '#2563eb' : color === 'green' ? '#16a34a' : color === 'orange' ? '#ea580c' : '#9333ea' }}
                  />
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                <Type className="w-3 h-3" /> Typography
              </label>
              <div className="grid grid-cols-3 gap-2">
                {fonts.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => updateSetting('fontFamily', font.id)}
                    className={`border border-zinc-700 py-2 text-xs uppercase hover:bg-zinc-800 transition-all ${settings.fontFamily === font.id ? 'bg-white text-black font-bold' : ''}`}
                  >
                    {font.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => updateSetting('fontSize', size)}
                    className={`border border-zinc-700 py-1 text-[10px] uppercase hover:bg-zinc-800 transition-all ${settings.fontSize === size ? 'bg-white text-black font-bold' : ''}`}
                  >
                    {size.charAt(0)}
                  </button>
                ))}
              </div>
            </div>

            {/* Background & Visuals */}
            <div className="space-y-3">
               <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                <ImageIcon className="w-3 h-3" /> Environment
              </label>
               <div className="grid grid-cols-3 gap-2">
                {bgModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => updateSetting('backgroundMode', mode.id)}
                    className={`border border-zinc-700 py-2 text-xs uppercase hover:bg-zinc-800 transition-all ${settings.backgroundMode === mode.id ? 'bg-white text-black font-bold' : ''}`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* System Visuals */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                <Monitor className="w-3 h-3" /> Display
              </label>
              
              <div className="flex items-center justify-between group">
                <span className="flex items-center gap-3 text-sm">
                  <Eye className="w-4 h-4 text-zinc-400" /> Invert Colors
                </span>
                <button 
                  onClick={() => updateSetting('invertColors', !settings.invertColors)}
                  className={`w-10 h-5 rounded-none border border-zinc-600 relative transition-colors ${settings.invertColors ? 'bg-white' : 'bg-transparent'}`}
                >
                  <span className={`absolute top-0.5 bottom-0.5 w-4 bg-zinc-400 transition-all ${settings.invertColors ? 'right-0.5 bg-black' : 'left-0.5'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between group">
                 <span className="flex items-center gap-3 text-sm">
                  <Grid className="w-4 h-4 text-zinc-400" /> Debug Grid
                </span>
                <button 
                  onClick={() => updateSetting('showGrid', !settings.showGrid)}
                  className={`w-10 h-5 rounded-none border border-zinc-600 relative transition-colors ${settings.showGrid ? 'bg-white' : 'bg-transparent'}`}
                >
                   <span className={`absolute top-0.5 bottom-0.5 w-4 bg-zinc-400 transition-all ${settings.showGrid ? 'right-0.5 bg-black' : 'left-0.5'}`} />
                </button>
              </div>
            </div>

          </div>

          <div className="mt-auto pt-6 border-t border-zinc-800 text-xs text-zinc-500 uppercase text-center tracking-widest">
            BrockAtticus &copy; 2025
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
};
