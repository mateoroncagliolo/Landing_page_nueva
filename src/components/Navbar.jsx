import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card px-6 py-3 flex justify-between items-center rounded-2xl">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-champagne glow-champagne flex items-center justify-center text-obsidian font-bold">F</div>
          <span className="font-serif italic text-xl tracking-wide font-semibold text-ivory">FlowMint <span className="font-sans text-sm font-light not-italic text-ivory/60 uppercase tracking-widest">Auto</span></span>
        </div>
        <div>
          <button className="bg-champagne hover:bg-champagne-light text-obsidian font-medium font-sans px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]">
            Auditoría Gratuita
          </button>
        </div>
      </div>
    </nav>
  );
}
