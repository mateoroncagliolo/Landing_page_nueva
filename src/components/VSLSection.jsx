import { useState, useRef } from 'react';
import { Play, CheckCircle2, CalendarDays } from 'lucide-react';

const bullets = [
  "Ve exactamente cómo FlowMint responde a un lead real en segundos",
  "Sin guiones de venta. Sin menús. Una conversación natural que termina en reserva",
  "Entiende por qué el tiempo de respuesta es el mayor filtro de conversión en tu gimnasio",
  "Descubre cómo se activa el traspaso al equipo humano cuando hace falta",
];

export default function VSLSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 50);
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita',
      });
    }
  };

  return (
    <section id="vsl-section" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-champagne/30 bg-champagne/5 text-champagne font-data text-xs uppercase tracking-widest">
          Míralo en acción
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Lo que hace FlowMint,{' '}
          <span className="font-drama text-champagne">en menos de 3 minutos.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video / Thumbnail */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(201,168,76,0.1)] group">
          {!playing ? (
            <div
              className="relative cursor-pointer"
              onClick={handlePlay}
            >
              <img
                src="/VSL cover.png"
                alt="Ver demostración de FlowMint"
                className="w-full h-auto object-cover block"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/30 transition-colors duration-300" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-champagne flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.5)] group-hover:shadow-[0_0_60px_rgba(201,168,76,0.7)] group-hover:scale-110 transition-all duration-300">
                  <Play className="text-obsidian w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              src="/VSL.mp4"
              controls
              autoPlay
              className="w-full h-auto block"
            />
          )}
        </div>

        {/* Bullets + CTA */}
        <div className="flex flex-col justify-center gap-8">
          <div className="space-y-5">
            {bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="text-champagne w-3.5 h-3.5" />
                </div>
                <p className="text-ivory/80 font-light leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-ivory/50 text-sm font-light mb-5">
              Si después de verlo tienes dudas, te las resolvemos en una auditoría de 30 minutos sin coste.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-3 bg-champagne hover:bg-champagne-light text-obsidian font-semibold font-sans px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_45px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
            >
              <CalendarDays size={20} />
              Reservar Auditoría Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
