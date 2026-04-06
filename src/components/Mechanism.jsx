import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Cpu, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Mechanism() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });

      tl.fromTo('.mech-node', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.3, ease: 'back.out(1.7)' }
      )
      .to('.mech-line', { width: "100%", duration: 0.6, stagger: 0.3, ease: 'power2.inOut' }, "-=0.6")
      .to('.mech-particle', { x: "100%", duration: 1.5, repeat: -1, ease: 'linear', stagger: 0.5 }, "-=0.5");
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-champagne/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          <span className="font-drama text-champagne">El Motor</span> detrás de tu crecimiento
        </h2>
        <p className="text-ivory/60 max-w-2xl mx-auto text-lg font-light">
          No cambies tu forma de trabajar. Nosotros conectamos tu canal de WhatsApp con tu calendario y sistema actual, creando un flujo invisible, rápido y seguro.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative py-10">
        
        {/* Lines between nodes for Desktop */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-slate -translate-y-1/2 z-0">
          <div className="mech-line h-full w-0 bg-champagne relative shadow-[0_0_10px_rgba(201,168,76,0.5)]">
            <div className="mech-particle absolute top-1/2 -translate-y-1/2 left-0 w-8 h-8 bg-champagne/30 rounded-full blur-[8px]"></div>
          </div>
        </div>

        {/* Node 1 */}
        <div className="mech-node relative z-10 glass-card bg-obsidian border-slate w-40 h-40 flex flex-col items-center justify-center rounded-2xl mb-8 md:mb-0">
          <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-3 text-champagne">
            <MessageSquare size={24} />
          </div>
          <span className="font-sans font-medium">WhatsApp</span>
          <span className="font-data text-[10px] text-ivory/40 mt-1">El Lead Pregunta</span>
        </div>

        {/* Node 2 */}
        <div className="mech-node relative z-10 glass-card bg-obsidian border-champagne/30 w-48 h-48 flex flex-col items-center justify-center rounded-full glow-champagne mb-8 md:mb-0">
          <div className="w-16 h-16 bg-champagne/10 border border-champagne/30 rounded-full flex items-center justify-center mb-3 text-champagne">
            <Cpu size={28} />
          </div>
          <span className="font-sans font-medium text-lg">FlowMint AI</span>
          <span className="font-data text-[10px] text-champagne/70 mt-1 text-center px-4">Procesa en &lt; 2s <br/> Solo respuestas reales</span>
        </div>

        {/* Node 3 */}
        <div className="mech-node relative z-10 glass-card bg-obsidian border-slate w-40 h-40 flex flex-col items-center justify-center rounded-2xl">
          <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-3 text-champagne">
            <Database size={24} />
          </div>
          <span className="font-sans font-medium">Tu Software</span>
          <span className="font-data text-[10px] text-ivory/40 mt-1 text-center px-2">Calendario y <br/> Base de Datos</span>
        </div>

      </div>
    </section>
  );
}
