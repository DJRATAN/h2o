import React from 'react';

interface HeroProps {
  videoSrc: string;
  gifSrc: string;
}

export const Hero = ({ videoSrc, gifSrc }: HeroProps) => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.4]">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* 2. PROTECTED CENTER CONTENT */}
      <div className="relative group">
        {/* Ben's Protection Border Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none border-[18px] border-[#004aad]/30 rounded-[2rem] backdrop-blur-[1px]">
           <div className="absolute inset-0 border border-[#1B79EE]/40 rounded-[2rem]"></div>
           <div className="absolute top-4 left-6 opacity-40">
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white">Asset Preview Mode</span>
           </div>
        </div>

        {/* Outer Glow */}
        <div className="absolute -inset-20 bg-[#1B79EE]/10 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
        
        {/* GIF Container */}
        <div className="relative bg-black/60 backdrop-blur-3xl border border-white/5 p-4 rounded-[2.2rem] shadow-2xl overflow-hidden max-w-[650px]">
          <img 
            src={gifSrc} 
            alt="H2O Industry Content" 
            className="w-full h-auto rounded-[1.2rem] opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
      </div>

      {/* 3. HERO TEXT */}
      <div className="mt-14 text-center space-y-6 max-w-4xl">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
          Saving Our <span className="text-[#1B79EE]">Oceans</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-[#1B79EE]/50"></div>
          <p className="text-[#1B79EE] text-[10px] uppercase tracking-[0.8em] font-black">
            Industrial Water Innovation
          </p>
          <div className="h-[1px] w-12 bg-[#1B79EE]/50"></div>
        </div>
      </div>
    </main>
  );
};