import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, CalendarCheck, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.bento-card', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          La precisión de un conserje, <br/>
          <span className="font-drama text-champagne">la velocidad de la máquina.</span>
        </h2>
        <p className="text-ivory/60 max-w-xl text-lg font-light">
          Convertimos tu WhatsApp en un motor de reservas que trabaja 24/7 sin desordenar tu operativa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        
        {/* Card 1: Respuesta Inmediata */}
        <div className="bento-card md:col-span-2 glass-card p-8 relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-champagne/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-champagne/20 transition-colors duration-700"></div>
          
          <div className="z-10 w-12 h-12 rounded-xl bg-slate flex items-center justify-center mb-6">
            <Zap className="text-champagne w-6 h-6" />
          </div>
          
          <div className="z-10 mt-auto">
            <h3 className="text-2xl font-semibold mb-2">Respuesta Inmediata en WhatsApp</h3>
            <p className="text-ivory/60 font-light max-w-md">
              El agente responde al instante usando la información real del gimnasio, evitando que los leads se enfríen por tardanza mientras tú das clase.
            </p>
          </div>

          <div className="absolute right-8 top-8 bottom-8 w-1/3 glass-card bg-obsidian/80 border-slate p-4 hidden md:flex flex-col gap-3 font-data text-xs">
            <div className="flex justify-between text-ivory/40"><span>LEAD</span><span>TIEMPO RESPUESTA</span></div>
            <div className="flex justify-between items-center bg-slate/50 p-2 rounded"><span className="text-ivory">Juan_M</span><span className="text-champagne">1.2s</span></div>
            <div className="flex justify-between items-center bg-slate/50 p-2 rounded"><span className="text-ivory">Sofia_T</span><span className="text-champagne">0.8s</span></div>
            <div className="flex justify-between items-center bg-slate/50 p-2 rounded"><span className="text-ivory">Carlos_R</span><span className="text-champagne">1.4s</span></div>
            <div className="mt-auto h-1 w-full bg-slate rounded overflow-hidden"><div className="h-full bg-champagne w-full animate-pulse"></div></div>
          </div>
        </div>

        {/* Card 2: Más clases */}
        <div className="bento-card glass-card p-8 relative overflow-hidden group flex flex-col justify-between">
          <div className="z-10 w-12 h-12 rounded-xl bg-slate flex items-center justify-center mb-6">
            <CalendarCheck className="text-champagne w-6 h-6" />
          </div>
          
          <div className="z-10 mt-auto">
            <h3 className="text-xl font-semibold mb-2">Más clases, menos carga</h3>
            <p className="text-ivory/60 text-sm font-light">
              Guía a los interesados a reservar una prueba autónomamente, reduciendo el tiempo del equipo.
            </p>
          </div>

          <div className="absolute right-[-20%] top-1/4 grid grid-cols-2 gap-2 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-16 h-16 rounded-md border border-white/10 ${i % 3 === 0 ? 'bg-champagne/20 border-champagne/30' : 'bg-slate'}`}></div>
            ))}
          </div>
        </div>

        {/* Card 3: Control Humano */}
        <div className="bento-card md:col-span-3 glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="max-w-xl z-10 w-full">
            <div className="w-12 h-12 rounded-xl bg-slate flex items-center justify-center mb-6">
              <ShieldCheck className="text-champagne w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Control humano y personalización real</h3>
            <p className="text-ivory/60 font-light">
              El sistema se adapta al gimnasio. No inventa respuestas fuera de la base de conocimiento y avisa automáticamente por notificación cuando hace falta intervención humana real.
            </p>
          </div>

          <div className="flex-1 w-full flex items-center justify-end z-10">
            <div className="glass-card bg-obsidian/90 p-5 font-data text-sm w-full max-w-sm border-champagne/20">
              <div className="text-champagne mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                ALERTA DE HAND-OFF
              </div>
              <div className="text-ivory/80 mb-2">El usuario pregunta por una lesión específica.</div>
              <div className="text-ivory/50 mb-4">&gt; Pausando IA para este chat...</div>
              <button className="w-full bg-slate hover:bg-slate/80 text-ivory py-2 rounded text-center transition-colors">
                Tomar el control
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
