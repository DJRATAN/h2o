"use client";

import React, { useState } from 'react';
import { Play, FileText, Share2, Monitor, Database } from 'lucide-react';

const archiveItems = [
  { 
    type: "video", 
    title: "Marine Cross Bollard Installation", 
    tag: "Deployment", 
    src: "/assets/data/marin/Marine_Cross_Bollard.18.mp4",
    preview: "/assets/data/marin/marine casting bollards.1004.jpg.jpeg"
  },
  { 
    type: "video", 
    title: "Mooring Systems Stress Testing", 
    tag: "QA/QC", 
    src: "/assets/data/marin/Mooring Bollards.13.mp4",
    preview: "/assets/data/4 valve box.8.jpg.jpeg"
  },
  { 
    type: "video", 
    title: "Mushroom Anchor Engineering", 
    tag: "Design", 
    src: "/assets/data/marin/Mushroom Anchor.443.mp4",
    preview: "/assets/data/4 valve box.7.jpg.jpeg"
  },
  { 
    type: "video", 
    title: "Marine Cleat Durability Study", 
    tag: "Research", 
    src: "/assets/data/marin/Marine Cleat.25.mp4",
    preview: "/assets/data/4 valve box.6.jpg.jpeg"
  }
];

export const Resourcess = () => {
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <section id="resources" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER: Symmetrical with Tab Switcher --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 border-b-2 border-slate-100 pb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#1B79EE]" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Knowledge Base</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-[#004aad]">
              Operational <span className="text-slate-200">Intelligence</span>
            </h3>
          </div>

          <div className="flex bg-slate-50 border border-slate-200 p-1 rounded-none">
            {["Videos", "Blueprints", "Cases"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  activeTab === tab 
                  ? 'bg-[#004aad] text-white shadow-lg' 
                  : 'text-slate-400 hover:text-[#004aad]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- MEDIA GRID: Symmetrical 2-Column --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {archiveItems.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col sm:flex-row gap-6 p-6 border border-slate-100 bg-slate-50/40 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
            >
              {/* MEDIUM BASE VIDEO VISUAL: Proportional to text */}
              <div className="w-full sm:w-48 h-40 bg-slate-200 relative overflow-hidden shrink-0 border border-slate-100">
                <video 
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.8] transition-all duration-700"
                  muted loop playsInline poster={item.preview}
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => {
                    const v = e.target as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                
                {/* Visual Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#1B79EE] transition-all">
                      <Play className="w-4 h-4 text-white fill-current" />
                   </div>
                </div>

                <div className="absolute top-2 left-2">
                  <span className="text-[7px] font-black bg-[#1B79EE] text-white px-2 py-0.5 uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* CONTENT: Balanced with Visual */}
              <div className="flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-3 h-3 text-[#1B79EE]" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">4K Technical Data</span>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-[#004aad] italic leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">
                    Archive Ref: H2O-NAV-{index + 101}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                   <div className="flex gap-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">MP4 HD</span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">24.8 MB</span>
                   </div>
                   <button className="text-slate-400 hover:text-[#1B79EE] transition-colors">
                      <Share2 className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM CTA: Industrial Formatted --- */}
        <div className="mt-20 p-10 bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter italic text-[#004aad]">
              Custom <span className="text-[#1B79EE]">CAD</span> Blueprints
            </h4>
            <p className="text-slate-500 text-[11px] font-medium max-w-xl uppercase tracking-wide">
              Request comprehensive 2D/3D documentation for specialized maritime and infrastructure integration.
            </p>
          </div>
          <button className="px-10 py-5 bg-[#004aad] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#1B79EE] transition-all flex items-center gap-4">
            Request Archive <FileText className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};