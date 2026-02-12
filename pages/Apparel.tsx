import React from 'react';
import { ApparelItem } from '../types';
import { useTheme } from '../context/ThemeContext';

const ITEMS: ApparelItem[] = [
  { id: '1', name: 'POST_PUNK_JACKET', price: 1200, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/apparel1/600/800' },
  { id: '2', name: 'STIPPLE_HOODIE', price: 450, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/apparel2/600/800' },
  { id: '3', name: 'VOID_TEE', price: 280, type: 'TSHIRT', imageUrl: 'https://picsum.photos/seed/apparel3/600/800' },
  { id: '4', name: 'WAXED_CARGO', price: 890, type: 'PANT', imageUrl: 'https://picsum.photos/seed/apparel4/600/800' },
  { id: '5', name: 'SZN_BOMBER', price: 1100, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/apparel5/600/800', soldOut: true },
  { id: '6', name: 'DISTRESSED_FLNL', price: 350, type: 'TSHIRT', imageUrl: 'https://picsum.photos/seed/apparel6/600/800' },
  { id: '7', name: 'ARCHIVE_LEATHER', price: 2500, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/apparel7/600/800' },
  { id: '8', name: 'THERMAL_KNIT', price: 600, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/apparel8/600/800' },
  { id: '9', name: 'MOTO_PANT', price: 900, type: 'PANT', imageUrl: 'https://picsum.photos/seed/apparel9/600/800' },
  { id: '10', name: 'UTILITY_VEST', price: 500, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/apparel10/600/800' },
  { id: '11', name: 'DUSK_HOODIE', price: 400, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/apparel11/600/800' },
  { id: '12', name: 'RAW_TSHIRT', price: 200, type: 'TSHIRT', imageUrl: 'https://picsum.photos/seed/apparel12/600/800' },
  { id: '13', name: 'GRAVEYARD_DENIM', price: 800, type: 'PANT', imageUrl: 'https://picsum.photos/seed/apparel13/600/800' },
  { id: '14', name: 'BONE_JACKET', price: 1400, type: 'JACKET', imageUrl: 'https://picsum.photos/seed/apparel14/600/800' },
  { id: '15', name: 'ONYX_HOODIE', price: 450, type: 'HOODIE', imageUrl: 'https://picsum.photos/seed/apparel15/600/800' },
  { id: '16', name: 'CEMENT_TEE', price: 180, type: 'TSHIRT', imageUrl: 'https://picsum.photos/seed/apparel16/600/800' },
];

export const Apparel: React.FC = () => {
  const { settings } = useTheme();

  return (
    <div className={`pt-24 pb-12 px-1 min-h-screen transition-colors duration-500 ${settings.invertColors ? 'bg-black text-white' : 'bg-[#f0f0f0] text-black'}`}>
      
      <div className="mb-6 px-4 flex justify-between items-baseline border-b border-current pb-2">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">APPAREL_ARCHIVE</h2>
        <span className="text-[9px] uppercase tracking-[0.4em] font-mono opacity-50">SZN_01_CORE</span>
      </div>

      {/* Ultra Dense Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 ${settings.showGrid ? 'ring-1 ring-current' : ''}`}>
        {ITEMS.map((item) => (
          <div key={item.id} className="group relative border border-current/10 bg-white overflow-hidden flex flex-col">
            
            <div className="relative aspect-[3/4.5] overflow-hidden bg-zinc-200">
              <img 
                src={`${item.imageUrl}?grayscale&contrast=150`} 
                alt={item.name}
                className={`w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 filter grayscale ${settings.highContrast ? 'contrast-[2] brightness-125' : 'contrast-125'}`}
                loading="lazy"
              />
              
              {item.soldOut && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                   <span className="text-white text-[9px] font-black uppercase tracking-[0.3em] border border-white px-2 py-1 rotate-12">OUT_OF_STOCK</span>
                </div>
              )}

              {/* Hover Label Overlay */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100">
                <button className="bg-white text-black text-[10px] font-bold uppercase py-2 tracking-widest hover:bg-black hover:text-white transition-colors">
                  VIEW_DETAILS
                </button>
              </div>
            </div>

            <div className="p-2 border-t border-current/10 flex flex-col gap-1">
              <div className="flex justify-between items-start gap-1">
                <h3 className="text-[10px] font-black uppercase tracking-tighter leading-none truncate">{item.name}</h3>
                <span className="text-[9px] font-bold opacity-70">${item.price}</span>
              </div>
              <p className="text-[8px] uppercase tracking-widest opacity-40 font-mono">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 px-4 border-t border-current pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
        <div className="text-[9px] uppercase tracking-widest leading-loose">
          BROCKATTICUS CORP © 2025<br/>ALL RIGHTS RESERVED.<br/>MANUFACTURED IN VOID.
        </div>
        <div className="text-[9px] uppercase tracking-widest leading-loose text-center">
          NO RETURNS.<br/>NO EXCHANGES.<br/>NO REGRETS.
        </div>
        <div className="text-[9px] uppercase tracking-widest leading-loose text-right">
          STATUS: ALPHA_01<br/>AUTH: SYNCED<br/>ENCRYPTED_DESIGN
        </div>
      </div>
    </div>
  );
};