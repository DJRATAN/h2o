'use client'

import Link from 'next/link';
import React from 'react';

const leftMenu = [
  { label: 'Our Values', href: '/government-affairs' },
  { label: 'History', href: '/acquisitions' },
  { label: 'Transformation', href: '/products' },
  { label: 'Innovations', href: '/hr' },
  { label: 'Making History', href: '/mega-foundation' },
  { label: 'Always First', href: '/materials' },
  { label: 'Government Affairs', href: '/new-technologies' }
];

const rightMenu = [
  { label: 'Ventures', href: '/government-affairs' },
  { label: 'HR', href: '/acquisitions' },
  { label: 'Mega Foundation', href: '/products' },
  { label: 'Metal Price Index', href: '/hr' }
];

const TopNavbarr = () => {
  return (
    <div className='w-full'>
      {/* Reduced height to py-2 for a slim industrial look */}
      <nav className="bg-[#1B79EE] z-100 py-2 px-10 fixed top-0 left-0 h-8 text-white w-full shadow-sm flex items-center justify-between">
        
        {/* LEFT SECTION */}
        <div className='flex items-center gap-8'>
          {leftMenu.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#004aad] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className='flex items-center gap-8 border-l border-white/20 pl-8'>
          {rightMenu.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#004aad] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

      </nav>
    </div>
  )
}

export default TopNavbarr