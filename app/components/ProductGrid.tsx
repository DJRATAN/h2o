"use client";

import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, Download, Loader2 } from 'lucide-react';

// Initial data
const initialProducts = [
  { id: "VB-5026", name: "Heavy Duty Valve Box", category: "Underground", specs: "Ductile Iron", status: "In Stock", img: "/assets/data/vrj-1/VB - 5026.32.png" },
  { id: "VL-010", name: "Marine Vertical Link", category: "Marine", specs: "316L Stainless", status: "Limited", img: "/assets/data/vrj-1/VL - 010.29.png" },
  { id: "VB-5027", name: "Reinforced Valve Chamber", category: "Underground", specs: "Composite", status: "In Stock", img: "/assets/data/vrj-1/VB - 5027.33.png" },
  { id: "VL-020", name: "High-Load Shackle", category: "Marine", specs: "Alloy Steel", status: "Custom", img: "/assets/data/vrj-1/VL - 020.30.png" },
];

// Mock data to load more
const extraProducts = [
  { id: "VB-5028", name: "Industrial Access Box", category: "Infrastructure", specs: "Galvanized", status: "In Stock", img: "/assets/data/vrj-1/VB - 5028.34.png" },
  { id: "VL-030", name: "Precision Rail Base", category: "Marine", specs: "Marine Grade", status: "In Stock", img: "/assets/data/vrj-1/VL - 30.31.png" },
];

export const ProductGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayProducts, setDisplayProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = displayProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setDisplayProducts([...displayProducts, ...extraProducts]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="infrastructure" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
               <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Technical Catalog</h2>
            </div>
            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-[#004aad]">
              Component <span className="text-[#1B79EE]">Precision</span>
            </h3>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group w-full sm:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1B79EE] transition-colors" />
              <input 
                type="text" 
                placeholder="Search by ID or Part Name..."
                className="w-full bg-slate-50 border border-slate-200 rounded-none py-5 pl-14 pr-6 text-[11px] font-bold uppercase tracking-widest text-[#004aad] placeholder:text-slate-400 focus:outline-none focus:border-[#1B79EE] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-4 px-10 py-5 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:border-[#1B79EE] hover:text-[#1B79EE] transition-all">
              <Filter className="w-3 h-3" /> Filter
            </button>
          </div>
        </div>

        {/* HIGH DENSITY TABLE-GRID */}
        <div className="border-t border-slate-200">
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-6 gap-8 px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 bg-slate-50/50">
            <div className="col-span-2">Component / Serial</div>
            <div>Category</div>
            <div>Specs</div>
            <div>Status</div>
            <div className="text-right">Access</div>
          </div>

          {/* Rows */}
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8 px-6 lg:px-10 py-10 lg:py-8 items-center border-b border-slate-100 hover:bg-slate-50/80 transition-all relative"
            >
              <div className="col-span-1 lg:col-span-2 flex items-center gap-8 relative z-10">
                <div className="w-20 h-20 bg-white border border-slate-100 p-2 rounded-xl shadow-sm group-hover:border-[#1B79EE]/30 transition-colors">
                  <img src={product.img} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#1B79EE] uppercase tracking-[0.2em] mb-1">{product.id}</p>
                  <h4 className="text-lg font-black uppercase tracking-tight text-[#004aad] italic">{product.name}</h4>
                </div>
              </div>

              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{product.category}</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{product.specs}</div>

              <div>
                <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block ${
                  product.status === 'In Stock' ? 'bg-green-50 text-green-600 border border-green-100' : 
                  product.status === 'Limited' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {product.status}
                </span>
              </div>

              <div className="flex justify-end gap-3">
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-[#1B79EE] hover:border-[#1B79EE] transition-all rounded-none">
                  <Download className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 bg-[#004aad] text-white text-[9px] font-black uppercase tracking-[0.3em] hover:bg-[#1B79EE] transition-all flex items-center gap-3">
                  Specs <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-20 flex justify-center">
          <button 
            onClick={handleLoadMore}
            disabled={isLoading}
            className="group px-16 py-6 border-2 border-slate-100 text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 hover:border-[#1B79EE] hover:text-[#004aad] transition-all flex items-center gap-4 italic disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#1B79EE]" />
                Accessing Archive...
              </>
            ) : (
              "Load Full 2500+ Part Archive"
            )}
          </button>
        </div>

      </div>
    </section>
  );
};