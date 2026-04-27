import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-5 backdrop-blur-md bg-[#004aad]/10 border-b border-white/5">
      
      {/* LEFT: Logo - Tight fit white background */}
      <div className="bg-white px-4 py-1.5 rounded-sm shadow-xl flex items-center justify-center w-fit h-[50px]">
        <Image 
          src="/assets/H2O LOGO PNG.png" 
          alt="H2O Logo" 
          width={300} 
          height={40} 
          className="object-contain h-full w-auto" 
          priority
        />
      </div>

      {/* MIDDLE: Industrial Menu (Based on reference sites) */}
      <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em]">
        <Link href="/" className="text-[#1B79EE] hover:text-white transition-colors">Home</Link>
        <Link href="/transformation" className="hover:text-[#1B79EE] transition-colors">Transformation</Link>
        <Link href="/innovations" className="hover:text-[#1B79EE] transition-colors">Innovations</Link>
        <Link href="/history" className="hover:text-[#1B79EE] transition-colors">History</Link>
        <Link href="/gov" className="hover:text-[#1B79EE] transition-colors">Gov Affairs</Link>
      </div>

      {/* RIGHT: Action Button */}
      <div className="flex items-center gap-6">
        <Link href="/login" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#1B79EE]">Portal Login</Link>
        <Button className="bg-[#1B79EE] hover:bg-[#004aad] text-white rounded-none px-8 py-6 uppercase text-xs font-bold tracking-[0.2em] transition-all">
          Get Started
        </Button>
      </div>
    </nav>
  );
};