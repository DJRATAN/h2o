import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  const lightBlue = "#1B79EE";
  const darkBlue = "#004aad";

  return (
    <footer className="w-full bg-white text-[#004aad] pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Top Section: Logo & Statement */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="space-y-6 max-w-sm">
            <Image 
              src="/assets/H2O LOGO PNG.png" 
              alt="H2O Logo" 
              width={200} 
              height={40} 
              className="object-contain"
            />
            <p className="text-lg leading-relaxed font-medium text-[#1B79EE] uppercase tracking-wider">
              Advanced filtration technology for global industrial transformation.
            </p>
          </div>
          
          <div className="flex flex-col text-right">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Established</span>
             <span className="text-4xl font-black italic text-[#1B79EE]">2026</span>
          </div>
        </div>

        {/* Middle Section: Address Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-gray-100 py-16">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#1B79EE] text-xs font-black uppercase tracking-[0.2em]">USA Headquarters</h4>
            <div className="text-[14px] font-semibold leading-relaxed space-y-1">
              <p>105 Maxes Road</p>
              <p>Melville, NY 11747</p>
              <p className="opacity-50">United States</p>
            </div>
            <p className="text-[#1B79EE] font-black text-sm pt-2 select-all tracking-tighter">
              +1 631 458 1111
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#1B79EE] text-xs font-black uppercase tracking-[0.2em]">Research & Engineering</h4>
            <div className="text-[14px] font-semibold leading-relaxed space-y-1">
              <p>1850 North West Hwy.</p>
              <p>Stuart, Florida</p>
              <p className="opacity-50">Industrial Division</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#1B79EE] text-xs font-black uppercase tracking-[0.2em]">Canada Headquarters</h4>
            <div className="text-[14px] font-semibold leading-relaxed space-y-1">
              <p>15 King St W,</p>
              <p>Toronto, ON M5H 4C7</p>
              <p className="opacity-50">Canada</p>
            </div>
            <p className="text-[#1B79EE] font-black text-sm pt-2 select-all tracking-tighter">
              +1 631 458 1111
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 mb-4 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-10 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#1B79EE] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1B79EE] transition-colors">Compliance</a>
            <a href="#" className="hover:text-[#1B79EE] transition-colors">Logistics</a>
          </div>
          
          <p className="opacity-40">
            © H2O Industries. Designed for Global Impact.
          </p>
        </div>
      </div>
    </footer>
  );
};