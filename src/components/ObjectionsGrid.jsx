import { useState } from 'react';

const faqs = [
  {
    q: '"Ya respondemos nosotros por WhatsApp"',
    a: "El problema no es si respondes, es CUÁNDO. Los leads que esperan más de 5 minutos pierden gran parte de su intención de compra. FlowMint responde en segundos las 24 horas del día, asegurando que capturen la motivación del cliente cuando está en su pico más alto."
  },
  {
    q: '"No quiero que el bot invente o responda mal"',
    a: "Totalmente entendible. Por eso FlowMint no es un ChatGPT libre: solo sabe lo que tú le enseñas. Si le preguntan algo que no está en su base de conocimiento, para, te avisa y tú continúas. Nunca improvisa ni inventa información sobre tu centro."
  },
  {
    q: '"Ya tenemos algo parecido con otra empresa"',
    a: "Las herramientas tradicionales ofrecen árboles lógicos lentos (\"escribe 1 para precios\"). Eso frustra al usuario. Nosotros ofrecemos un agente conversacional fluido, con memoria, que se siente como un asistente premium, agendando citas naturalmente dentro de la charla."
  },
  {
    q: '"No quiero perder el control de las conversiones"',
    a: "Nunca lo pierdes. Tienes acceso al dashboard en vivo para ver todas las conversaciones, puedes intervenir manualmente la charla que quieras en cualquier momento de forma instantánea."
  },
  {
    q: '"No sé si esto me va a servir realmente"',
    a: "Te aporta tiempo libre para dar clases, elimina el estrés del móvil sonando en el fin de semana, y aumenta tu porcentaje de asistencia a clases de prueba porque se gestiona rápido y en automático."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1); // Default open second one as in screenshot

  return (
    <section id="faq" style={{ padding: '80px 24px', background: '#0d1117' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="label-tag" style={{ marginBottom: '16px' }}>PREGUNTAS FRECUENTES</div>
          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', lineHeight: '1.2' }}>
            Por qué dudan los gimnasios...<br />
            <span style={{ 
              color: '#00e676', 
              fontFamily: "'Playfair Display', serif", 
              fontStyle: 'italic',
              fontWeight: 600
            }}>y por qué FlowMint funciona.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => {
            const isOpen = i === openIndex;
            return (
              <div 
                key={i} 
                className="card"
                style={{ overflow: 'hidden' }}
              >
                <button 
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    color: '#fff',
                  }}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span style={{ fontSize: '15px', fontWeight: 600, textAlign: 'left', paddingRight: '24px' }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '24px', height: '24px', flexShrink: 0,
                    borderRadius: '50%',
                    background: isOpen ? '#00e676' : 'rgba(0,230,118,0.08)',
                    color: isOpen ? '#0d1117' : '#00e676',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', fontWeight: 'bold'
                  }}>
                    {isOpen ? '×' : '+'}
                  </div>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <div style={{ height: '1px', background: '#21262d', marginBottom: '20px' }}></div>
                    <p style={{ fontSize: '14px', color: '#8b949e', lineHeight: '1.7' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
