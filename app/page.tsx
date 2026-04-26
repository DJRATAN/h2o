import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function H2OWebsite() {
  const bridgeVideoUrl = "/assets/6182471_Europe Croatia Drone Landmark_By_Feelm_Artlist_HD.mp4"; 
  const umbrellaGifUrl = "/assets/gif of umbrella.gif";

  return (
    <div className="relative min-h-screen w-full text-white font-sans">
      
      {/* BACKGROUND BRIDGE VIDEO */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover brightness-50"
        >
          <source src={bridgeVideoUrl} type="video/mp4" />
        </video>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        
        {/* Left: Tight Container, Wide Image */}
        <div className="bg-white p-1 rounded-md shadow-2xl flex items-center justify-center w-fit h-fit overflow-hidden">
          <Image 
            src="/assets/H2O LOGO PNG.png" 
            alt="H2O Logo" 
            width={280} // Increased base width significantly
            height={60}  // Keeping height proportional
            className="object-contain h-12 w-auto max-w-[300px]" // h-12 makes it larger, w-auto follows the scale
            priority
          />
        </div>

        {/* Middle: Menu */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link>
          <Link href="/submittals" className="hover:text-blue-400 transition-colors">Submittals</Link>
          <Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
        </div>

        {/* Right: Action */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 uppercase text-xs font-bold tracking-[0.2em] transition-all shadow-lg">
          Get Started
        </Button>
      </nav>

      {/* HERO SECTION */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32">
        
        {/* Center Protected Video/GIF */}
        <div className="relative group">
          {/* Ben's Protected Border */}
          <div className="absolute inset-0 z-20 pointer-events-none border-[14px] border-white/10 rounded-[3rem] backdrop-blur-[1px]">
             <div className="absolute inset-0 border border-blue-500/20 rounded-[3rem]"></div>
          </div>

          <div className="relative bg-black/40 backdrop-blur-3xl border border-white/10 p-4 rounded-[3.5rem] shadow-2xl overflow-hidden max-w-[650px]">
            <img 
              src={umbrellaGifUrl} 
              alt="Umbrella Animation" 
              className="w-full h-auto rounded-[2.5rem] opacity-90"
            />
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Saving Our <span className="text-blue-400">Oceans</span>
          </h2>
        </div>
      </main>
      
    </div>
  );
}