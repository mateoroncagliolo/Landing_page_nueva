export default function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass-card relative overflow-hidden p-12 md:p-20 text-center rounded-3xl border-champagne/20">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Recupera tu <span className="font-drama text-champagne">Tiempo.</span><br/>
            Escala tu <span className="font-drama text-champagne">Gimnasio.</span>
          </h2>
          <p className="text-lg md:text-xl text-ivory/70 font-light max-w-2xl mx-auto mb-10">
            Agenda una auditoría gratuita con nuestro equipo. Evaluaremos tu flujo de captación actual y te mostraremos exactamente cuánto tiempo puedes ahorrar al mes, sin compromiso.
          </p>
          
          <button className="bg-champagne hover:bg-champagne-light text-obsidian font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.6)] hover:-translate-y-1">
            Reservar Auditoría Gratuita
          </button>
          
          <p className="font-data text-xs text-ivory/40 mt-6 tracking-wide">
            SOLO 5 CUPOS DE IMPLEMENTACIÓN DISPONIBLES ESTE MES
          </p>
        </div>
      </div>
    </section>
  );
}
