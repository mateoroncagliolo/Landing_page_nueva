import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text cascade animation
      gsap.fromTo('.hero-text', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );

      // 3D Visual animation on load and scroll
      gsap.fromTo(visualRef.current,
        { rotateX: 25, rotateY: -10, y: 100, opacity: 0, scale: 0.9 },
        { rotateX: 10, rotateY: -5, y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.8 }
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        animation: gsap.to(visualRef.current, { rotateX: 0, rotateY: 0, scale: 1.05 })
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-champagne/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="hero-text inline-block mb-4 px-4 py-1.5 rounded-full border border-champagne/30 bg-champagne/5 text-champagne font-data text-xs uppercase tracking-widest">
          Sistemas de Conversión para Gimnasios
        </div>
        <h1 className="hero-text text-5xl md:text-7xl font-semibold mb-6 leading-tight">
          Deja de Perder Alumnos <br className="hidden md:block"/> 
          <span className="font-drama text-champagne text-glow">Mientras Das Clase.</span>
        </h1>
        <p className="hero-text text-lg md:text-xl text-ivory/70 mb-10 max-w-2xl mx-auto font-light">
          Respondemos al instante por WhatsApp, agendamos pruebas y filtramos interesados. Tú concéntrate en el entrenamiento, nosotros automatizamos la captación.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-champagne hover:bg-champagne-light text-obsidian font-medium font-sans px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)]">
            Reservar Auditoría Gratuita
          </button>
          <button className="w-full sm:w-auto glass-card hover:bg-white/5 text-ivory font-medium font-sans px-8 py-4 rounded-xl transition-all duration-300">
            Ver cómo funciona
          </button>
        </div>
      </div>

      {/* 3D Visual Mockup */}
      <div ref={visualRef} className="mt-20 w-full max-w-3xl glass-card border-slate/50 p-6 relative z-10" style={{ transformPerspective: "1200px" }}>
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate"></div>
            <div className="w-3 h-3 rounded-full bg-slate"></div>
            <div className="w-3 h-3 rounded-full bg-slate"></div>
          </div>
          <div className="font-data text-xs text-ivory/50">whatsapp_flow.json</div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-slate flex-shrink-0 flex items-center justify-center">
              <span className="text-xs">U</span>
            </div>
            <div className="bg-slate/50 p-4 rounded-2xl rounded-tl-sm text-sm text-ivory/90 max-w-[80%]">
              Hola, vi el anuncio en Instagram. ¿Tienen clases de prueba para Crossfit hoy por la tarde?
            </div>
          </div>
          
          <div className="flex items-start gap-4 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-champagne flex-shrink-0 flex items-center justify-center text-obsidian">
              <MessageCircle size={16} />
            </div>
            <div className="bg-champagne/10 border border-champagne/20 p-4 rounded-2xl rounded-tr-sm text-sm text-ivory max-w-[80%]">
              ¡Hola! Sí, claro. Tenemos un cupo libre a las 18:00h y otro a las 19:30h. ¿En cuál te gustaría reservar tu clase de prueba? 🏋️‍♂️
              <div className="mt-3 flex items-center gap-2 text-xs text-champagne font-data">
                <CheckCircle2 size={12} /> Respondido en 2.4s (Automático)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
