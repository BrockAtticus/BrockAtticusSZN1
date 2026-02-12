import React from 'react';
import { ApparelItem } from '../types';
import { useTheme } from '../context/ThemeContext';

// Mock Data representing "BrockAtticus" designs
// Using specific keywords to emulate sketches or dark fashion where possible in placeholders
const ITEMS: ApparelItem[] = [
  { id: '1', name: 'DISTRESSED MOTO', price: 1200, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/jacket1/400/500' },
  { id: '2', name: 'ACID WASH HD', price: 450, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/hoodie1/400/500' },
  { id: '3', name: 'OIL SPILL TEE', price: 280, type: 'TSHIRT', imageUrl: 'https://picsum.photos/seed/tee1/400/500' },
  { id: '4', name: 'WAXED DENIM', price: 890, type: 'PANT', imageUrl: 'https://picsum.photos/seed/pant1/400/500' },
  { id: '5', name: 'OVERSIZED BMR', price: 1100, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/bomber/400/500', soldOut: true },
  { id: '6', name: 'VINTAGE FLNL', price: 350, type: 'TSHIRT', imageUrl: 'https://picsum.photos/seed/flannel/400/500' },
  { id: '7', name: 'PATCHWORK LTR', price: 2500, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/leather/400/500' },
  { id: '8', name: 'DESTROYED KNIT', price: 600, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/knit/400/500' },
  { id: '9', name: 'CARGO SHORT', price: 400, type: 'PANT', imageUrl: 'https://picsum.photos/seed/cargo/400/500' },
  { id: '10', name: 'SAFETY VEST', price: 150, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/vest/400/500' },
  { id: '11', name: 'LOGO BEANIE', price: 120, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/hat/400/500' },
  { id: '12', name: 'COMBAT BOOT', price: 950, type: 'PANT', imageUrl: 'https://picsum.photos/seed/boot/400/500' },
];

export const Apparel: React.FC = () => {
  const { settings } = useTheme();

  return (
    <div className={`pt-24 pb-12 px-2 md:px-6 min-h-screen ${settings.invertColors ? 'bg-black text-white' : 'bg-[#f2f2f2] text-black'} transition-colors duration-500`}>
      
      {/* Header */}
      <div className="mb-8 border-b border-current pb-2 flex justify-between items-end">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">SZN 1</h2>
        <span className="text-[10px] uppercase tracking-widest hidden md:block">Ready to Wear</span>
      </div>

      {/* Grid - Updated for smaller items and closer spacing */}
      <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 ${settings.showGrid ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==")]' : ''}`}>
        {ITEMS.map((item) => (
          <div key={item.id} className="group relative flex flex-col">
            
            {/* Image Container with Heavier Filter for Sketch Look */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-300 mb-2">
              <img 
                src={`${item.imageUrl}?grayscale`} 
                alt={item.name}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale contrast-125 brightness-110 hover:contrast-100 ${settings.highContrast ? 'contrast-150' : ''}`}
              />
              {item.soldOut && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                  <span className="text-white text-xs md:text-sm font-bold uppercase tracking-widest border border-white px-2 py-1 -rotate-12">Sold Out</span>
                </div>
              )}
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Product Info - Compact */}
            <div className="flex flex-col gap-0.5 px-1">
              <div className="flex justify-between items-start">
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-tight leading-tight truncate pr-1">{item.name}</h3>
                <span className="text-[10px] md:text-xs font-normal opacity-70">${item.price}</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest opacity-50">{item.type}</p>
            </div>

          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center border-t border-current pt-8">
        <p className="uppercase text-[10px] tracking-[0.5em] opacity-60">All sales final. No refunds.</p>
      </div>
    </div>
  );
};
