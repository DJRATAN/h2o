"use client";

import React from 'react';
import { ShieldCheck, Zap, BarChart3, Globe2, ArrowRight } from 'lucide-react';

const coreFeatures = [
  {
    title: "Asset Protection",
    description: "Military-grade coatings and structural reinforcements designed to extend the lifespan of underground and marine assets.",
    icon: <ShieldCheck className="w-8 h-8 text-[#1B79EE]" />,
    link: "#protection"
  },
  {
    title: "Operational Velocity",
    description: "Rapid-deployment manhole risers and valve box systems that allow paving crews to complete projects 40% faster.",
    icon: <Zap className="w-8 h-8 text-[#1B79EE]" />,
    link: "#velocity"
  },
  {
    title: "Predictive Analytics",
    description: "Integrated sensors providing real-time data on flow rates, pressure levels, and structural integrity across global networks.",
    icon: <BarChart3 className="w-8 h-8 text-[#1B79EE]" />,
    link: "#analytics"
  },
  {
    title: "Global Compliance",
    description: "All H2O components meet or exceed ASTM, OSHA, and international maritime standards for industrial safety.",
    icon: <Globe2 className="w-8 h-8 text-[#1B79EE]" />,
    link: "#compliance"
  }
];

export const InfrastructureFeatures = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="max-w-3xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Systems Overview</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-[#004aad]">
            Industrial <span className="text-[#1B79EE]">Strength</span> <br /> 
            Digital Intelligence
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            H2O Industries bridges the gap between traditional heavy infrastructure and modern digital management, ensuring the safety of global water resources.
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coreFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row gap-8 p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60"
            >
              {/* Icon Container - Turns Blue on Hover */}
              <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-[#1B79EE] group-hover:border-[#1B79EE] transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#004aad] italic">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  {feature.description}
                </p>
                
                <a 
                  href={feature.link} 
                  className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#1B79EE] hover:text-[#004aad] transition-colors pt-2"
                >
                  View Technical Specs <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SUMMARY TAG --- */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
             <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">Global Standards</span>
             <div className="flex gap-4">
               {/* Mock Logo Accents */}
               <div className="h-6 w-12 bg-slate-100 rounded-sm" />
               <div className="h-6 w-12 bg-slate-100 rounded-sm" />
               <div className="h-6 w-12 bg-slate-100 rounded-sm" />
             </div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
            Ref: H2O-INFRA-TR-2026
          </p>
        </div>

      </div>
    </section>
  );
};