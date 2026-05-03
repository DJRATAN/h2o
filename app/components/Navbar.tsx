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
    
    <nav className="relative top-8 w-full z-50 flex items-center justify-between px-8 py-0 bg-white shadow-sm border-b border-slate-100 h-[100px]">

      {/* LEFT: Menu Items */}
      <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-[#1B79EE] transition-all duration-200 ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* MIDDLE: Logo - Centered and medium-based scaling */}
      <div className="absolute left-1/2 py-2 -translate-x-1/2 flex items-center h-full">
        <Image
          src="/assets/h2o LOGO NEW UPDATED.png"
          alt="H2O Logo"
          width={250}
          height={90}
          className="object-contain h-24 w-auto"
          priority
        />
      </div>

      {/* RIGHT: Action Button & Login */}
      <div className="flex items-center gap-8 h-full">
        <Link
          href="/login"
          className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-[#1B79EE] transition-colors"
        >
          Portal Login
        </Link>
        
        {/* Button with industrial shadow for Ben's demographic */}
        <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
          Get Started
        </Button>
      </div>
    </nav>
  );
};