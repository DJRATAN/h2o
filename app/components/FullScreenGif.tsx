"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Loader2, Monitor, ArrowDown } from 'lucide-react';

interface FullScreenGifProps {
  gifSrc: string;
  altText?: string;
}

export const FullScreenGif = ({ gifSrc, altText = "H2O Industrial Animation" }: FullScreenGifProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    /* 
       Switched from Black to White/Slate-50 for a clean, premium look.
       Maintains full scrollability.
    */
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
      
      {/* Background Decorative Element: Subtle Slate section for depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10" />

      {/* --- LOADING OVERLAY (White Theme) --- */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white">
          <Loader2 className="w-16 h-16 text-[#1B79EE] animate-spin mb-6" />
          <p className="text-[#1B79EE] text-[12px] font-black uppercase tracking-[0.6em] animate-pulse">
            Processing HD Feed
          </p>
        </div>
      )}

      {/* --- TOP UI: Large Industrial Typography --- */}
      <div className="absolute top-16 left-12 z-20 space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-1.5 h-16 bg-[#1B79EE]" />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-[#004aad] leading-none">
            Live <span className="text-[#1B79EE]">Simulation</span>
          </h2>
        </div>
        <p className="text-slate-400 text-[12px] font-black uppercase tracking-[0.6em] pl-10 italic">
          System Node: H2O-NAV-INFRA-2026
        </p>
      </div>

      {/* --- MAIN ASSET CONTAINER --- */}
      <div className="w-full max-w-[1920px] px-6 md:px-16 py-40">
        <div className="relative aspect-video w-full border-[1px] border-slate-200 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.05)] group">
          
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1B79EE]/20 to-[#004aad]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative w-full h-full bg-white overflow-hidden">
            <Image
              src={gifSrc}
              alt={altText}
              fill
              unoptimized 
              className={`object-cover transition-all duration-1000 ${
                isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              onLoadingComplete={() => setIsLoading(false)}
              priority
            />
          </div>
          
          {/* Viewfinder Corners: Industrial Slate Finish */}
          <div className="absolute -top-1 -left-1 w-16 h-16 border-t-4 border-l-4 border-[#004aad]" />
          <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-4 border-r-4 border-[#004aad]" />
          
          {/* Corner Labels */}
          <div className="absolute top-6 right-8">
            <span className="text-[10px] font-black text-[#004aad] uppercase tracking-[0.4em] bg-slate-100 px-3 py-1">
              HD / 1080P
            </span>
          </div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR (Slate/Blue) --- */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-60">
         <span className="text-[11px] font-black text-[#004aad] uppercase tracking-[0.5em] italic">Continue Analysis</span>
         <div className="w-10 h-10 border-2 border-[#1B79EE] rounded-full flex items-center justify-center animate-bounce">
            <ArrowDown className="w-5 h-5 text-[#1B79EE]" />
         </div>
      </div>

    </section>
  );
};