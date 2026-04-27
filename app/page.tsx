import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

 
export default function Home() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <Navbar />
      <Hero 
        videoSrc="/assets/6182471_Europe Croatia Drone Landmark_By_Feelm_Artlist_HD.mp4" 
        gifSrc="/assets/gif of umbrella.gif" 
      />
      
      {/* Bottom Footer Bar */}
      <div className="fixed bottom-0 w-full bg-[#004aad]/80 backdrop-blur-md py-3 px-10 flex justify-between items-center z-50 text-[9px] font-bold tracking-widest text-gray-400">
        <p>H2O INDUSTRIES &copy; 2026</p>
        <p className="text-[#1B79EE]">SECURE DATA ARCHIVE</p>
      </div>
    </div>
  );
}