import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const menu = [
  { name: "Solutions", href: "#solutions" },
  { name: "Infrastructure", href: "#infrastructure" },
  { name: "Marine", href: "#marine" },
  { name: "Resources", href: "#resources" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-0 bg-white shadow-sm border-b border-slate-100 h-[100px]">
      
      {/* LEFT: Logo - Height reduced to 55px to keep nav slim */}
      <div className="flex items-center h-full">
        <Image 
          src="/assets/H2O LOGO PNG.png" 
          alt="H2O Logo"  
          width={300} 
          height={65} 
          className="object-contain h-[150px] py-2 w-auto" 
          priority
        />
      </div>

      {/* MIDDLE: Slate Gray Text, Bold, Light Blue Hover */}
      <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
        {menu.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className="hover:text-[#1B79EE] hover:font-black transition-all duration-200 ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* RIGHT: Action Button & Login */}
      <div className="flex items-center gap-8 h-full">
        <Link 
          href="/login" 
          className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#1B79EE] transition-colors"
        >
          Portal Login
        </Link>
        {/* Button height adjusted to fit slim nav */}
        <Button className="bg-[#1B79EE] hover:bg-[#004aad] text-white rounded-none p-4 rounded-xl uppercase text-[10px] font-black tracking-[0.2em] transition-all border-none shadow-lg shadow-[#1B79EE]/10">
          Get Started
        </Button>
      </div>
    </nav>
  );
};