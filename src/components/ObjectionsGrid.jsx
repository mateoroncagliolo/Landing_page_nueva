import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for conditional classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const faqs = [
  {
    q: '"Ya respondemos nosotros por WhatsApp"',
    a: "El problema no es si respondes, es CUÁNDO. Los leads que esperan más de 5 minutos pierden gran parte de su intención de compra. FlowMint responde en segundos las 24 horas del día, asegurando que capturen la motivación del cliente cuando está en su pico más alto."
  },
  {
    q: '"No quiero que un bot responda mal o invente cosas"',
    a: "Nuestra IA no está libre para inventar (no es un ChatGPT genérico). Está estrictamente contenida a tu base de conocimientos: tus horarios, precios reales y filosofía. Si no sabe algo, tiene programado callarse y pasarte la conversación alertándote al teléfono."
  },
  {
    q: '"Ya lo hacemos con otra empresa / herramienta"',
    a: "Las herramientas tradicionales ofrecen árboles lógicos lentos (\"escribe 1 para precios\"). Eso frustra al usuario. Nosotros ofrecemos un agente conversacional fluido, con memoria, que se siente como un asistente premium, agendando citas naturalmente dentro de la charla."
  },
  {
    q: '"No quiero perder el control de las conversiones"',
    a: "Nunca lo pierdes. Tienes acceso al dashboard en vivo para ver todas las conversaciones, puedes intervenir manualmente la charla que quieras en cualquier momento de forma instantánea."
  },
  {
    q: '"No sé si esto realmente me va a aportar algo"',
    a: "Te aporta tiempo libre para dar clases, elimina el estrés del móvil sonando en el fin de semana, y aumenta tu porcentaje de asistencia a clases de prueba porque se gestiona rápido y en automático."
  }
];

export default function ObjectionsGrid() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          <span className="font-drama text-ivory/50">Por qué dudan los gimnasios...<br/></span>
          Y por qué <span className="text-champagne">FlowMint funciona</span>.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="glass-card border-white/5 overflow-hidden transition-all duration-300"
          >
            <button 
              className="w-full text-left p-6 flex justify-between items-center bg-transparent hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
            >
              <span className={cn("font-medium text-lg pr-8 transition-colors", i === openIndex ? "text-champagne" : "text-ivory")}>
                {faq.q}
              </span>
              <span className="text-ivory/50 flex-shrink-0">
                {i === openIndex ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <div 
              className={cn(
                "px-6 text-ivory/70 font-light overflow-hidden transition-all duration-300",
                i === openIndex ? "pb-6 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pt-2 border-t border-white/5 mt-2">
                 {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
