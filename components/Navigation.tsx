import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { settings } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => `
    uppercase tracking-[0.2em] text-xs md:text-sm transition-all duration-300 hover:text-red-600
    ${isActive(path) ? 'font-bold underline decoration-2 underline-offset-4 decoration-red-600' : 'font-normal'}
  `;

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 mix-blend-difference text-white px-6 py-4 flex justify-between items-center ${settings.showGrid ? 'border-b border-white/20' : ''}`}>
      <Link to="/" className="text-xl font-bold tracking-tighter hover:tracking-widest transition-all duration-500">
        BROCKATTICUS
      </Link>

      <div className="flex gap-8">
        <Link to="/apparel" className={linkClass('/apparel')}>Apparel</Link>
        <Link to="/sketch-lab" className={linkClass('/sketch-lab')}>Sketch Lab</Link>
      </div>
    </nav>
  );
};
