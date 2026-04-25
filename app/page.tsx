import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function H2OWebsite() {
  // Replace these with your actual URLs
  const bridgeVideoUrl = "/assets/6182471_Europe Croatia Drone Landmark_By_Feelm_Artlist_HD.mp4"; 
  const umbrellaGifUrl = "/assets/gif of umbrella.gif";

  return (
    <div className="relative min-h-screen w-full text-white font-sans selection:bg-blue-500">
      
      {/* BACKGROUND BRIDGE VIDEO */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover brightness-75"
        >
          <source src={bridgeVideoUrl} type="video/mp4" />
        </video>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-6 backdrop-blur-sm bg-black/10 border-b border-white/10">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">H2O</div>
          <span className="text-xl font-black tracking-tighter uppercase">Industries</span>
        </div>

        {/* Middle: Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link>
          <Link href="/submittals" className="hover:text-blue-400 transition-colors">Submittals</Link>
          <Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
        </div>

        {/* Right: Action */}
        <div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-5 uppercase text-xs font-bold tracking-widest transition-all hover:scale-105">
            Get Started
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="relative flex flex-col py-36 items-center justify-center min-h-screen px-4">
        {/* The Umbrella GIF Container (Replacing Center Logo) */}
        <div className="relative group">
          {/* Decorative glow behind the GIF */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl shadow-2xl overflow-hidden max-w-[500px]">
            <img 
              src={umbrellaGifUrl} 
              alt="Umbrella Animation" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="mt-12 text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            Saving Our Oceans
          </h2>
          <p className="text-lg md:text-xl text-blue-200 font-light tracking-wide max-w-xl mx-auto">
            Advanced filtration and industrial catch basin solutions for a sustainable future.
          </p>
        </div>
      </main>
      
    </div>
  );
}