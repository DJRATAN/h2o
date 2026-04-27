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
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-4 bg-white shadow-md border-b border-gray-100">
      
      {/* LEFT: Logo - Increased width, tight height */}
      <div className="flex items-center justify-center w-fit h-[55px] px-2">
        <Image 
          src="/assets/H2O LOGO PNG.png" 
          alt="H2O Logo" 
          width={400} // Increased base width
          height={60} 
          className="object-contain h-full w-auto min-w-[180px]" // Ensures it scales wider
          priority
        />
      </div>

      {/* MIDDLE: Blue Text, Bold, Light Blue Hover */}
      <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-[#004aad]">
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
      <div className="flex items-center gap-8">
        <Link 
          href="/login" 
          className="text-[11px] font-bold uppercase tracking-widest text-[#004aad] hover:text-[#1B79EE] transition-colors"
        >
          Portal Login
        </Link>
        <Button className="bg-[#1B79EE] hover:bg-[#004aad] text-white rounded-none px-10 py-7 uppercase text-xs font-black tracking-[0.2em] transition-all border-none shadow-lg shadow-[#1B79EE]/20">
          Get Started
        </Button>
      </div>
    </nav>
  );
};