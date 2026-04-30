'use client'
import React, { useState } from 'react'
const archiveItems = [
    {
        type: "video",
        title: "Marine Cross Bollard Installation",
        tag: "Deployment",
        src: "/assets/data/marin/Marine_Cross_Bollard.18.mp4",
        preview: "",
    },
    {
        type: "video",
        title: "Mooring System Stress Testing",
        tag: "Deployment",
        src: "/assets/data/marin/Marine_Cross_Bollard.18.mp4",
        preview: "",
    },
    {
        type: "video",
        title: "Mushroom Anchor Engineering",
        tag: "Deployment",
        src: "/assets/data/marin/Marine_Cross_Bollard.18.mp4",
        preview: "",
    },
    {
        type: "video",
        title: "Marine Cross Bollard Installation",
        tag: "Deployment",
        src: "/assets/data/marin/Marine_Cross_Bollard.18.mp4",
        preview: "",
    },
]

const Resourcess = () => {
    const [activeTab, setActiveTab] = useState('Videos');
    return (
        <section id="resources" className='py-32 bg-white relative'>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex item-center gap-3 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                            <div className='w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse'>
                                <h2 className='text-[10px] font-black uppercase tracking-[0.4em] text-slate-500'>Technical Archive</h2>
                            </div>
                            <h3 className='text-4xl md:text-7xl font-black uppercase tracking-[0.4em] text-slate-500'>Operational <span className='text-[#1B79EE]'>Intelligence</span>
                            </h3>
                        </div>

                        <div className='flex bg-slate-50 border border-slate-200 rounded-full p-1.5'>
                            {["Videos", "Blueprints", "Case Studies"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === tab ? 'bg-[#004aad] text-white shadow-xl shadow-[#004aad]/20' : 'text-slate-400 hover:text-[#004aad]'}`}
                                >{tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {archiveItems.map((item, index) => (
                            <div
                                key={index}
                                className='group relative bg-slate-100 rounded-[2.5rem] overflow-hidden aspect-video lg:aspect-[16/9] shadow-2xl shadow-slate-200'
                            >
                                <video className='absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-1000'
                                    muted
                                    loop
                                    playsInline
                                    poster={item.preview}
                                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                                    onMouseLeave={(e) => {
                                        const v = e.target as HTMLVideoElement;
                                        v.pause();
                                        v.currentTime = 0;
                                    }}
                                >
                                    <source src={item.src} type='video/mp4' />
                                </video>

                                <div>
                                    <div className='absolute inset-0 border border-white/10 rounded-['></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Resourcess
