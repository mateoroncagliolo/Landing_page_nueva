import React, { useRef, useState } from 'react';

const IconBox = ({ children }) => (
  <div style={{
    width: '40px',
    height: '40px',
    background: 'rgba(0, 255, 163, 0.08)',
    border: '1px solid rgba(0, 255, 163, 0.2)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    flexShrink: 0,
    boxShadow: '0 0 15px rgba(0, 255, 163, 0.1)',
  }}>
    {children}
  </div>
);

const FeatureCard = ({ icon, title, desc, fullWidth }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="card card-hover"
      style={{
        padding: '18px',
        gridColumn: fullWidth ? '1 / -1' : 'span 1',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Glow mouse tracking effect */}
      <div 
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 255, 163, 0.1) 0%, transparent 60%)',
          transform: 'translate(-50%, -50%)',
          opacity: opacity,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      {/* Content wrapper to stay above the effect */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <IconBox>{icon}</IconBox>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{title}</h3>
        <p className="hidden md:block" style={{ fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>{desc}</p>
      </div>
    </div>
  );
};

const ZapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" stroke="#00ffa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00ffa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#00ffa3" strokeWidth="2"/>
    <path d="M3 9h18M8 2v4M16 2v4" stroke="#00ffa3" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91A16 16 0 0016.09 17.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#00ffa3" strokeWidth="2"/>
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#00ffa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BentoGrid() {
  return (
    <section id="sistema" 
      className="px-5 md:px-[24px]"
      style={{ 
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)',
        maxWidth: '900px', 
        margin: '0 auto', 
        position: 'relative' 
      }}>
      {/* Header */}
      <div style={{ marginBottom: '56px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '50px',
          border: '1px solid rgba(0, 255, 163, 0.2)',
          background: 'rgba(0, 255, 163, 0.05)',
          color: '#00ffa3',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>QUÉ HACE EXACTAMENTE</div>
        
        <h2 
          className="text-3xl md:text-[clamp(32px,4vw,48px)]"
          style={{ fontWeight: 800, lineHeight: '1.15', marginBottom: '20px' }}>
          <span style={{ color: '#fff' }}>No es un bot de menús.</span><br className="hidden md:block" />
          <span style={{ color: '#fff' }}>Es un </span>
          <span className="neon-text">asistente que convierte conversaciones en reservas.</span>
        </h2>
        
        <p style={{ fontSize: '16px', color: '#8b949e', maxWidth: '540px', lineHeight: '1.7', margin: '0 auto' }}>
          FlowMint actúa como tu mejor recepcionista, disponible a cualquier hora, entrenado solo con la información de tu centro.
        </p>
      </div>

      {/* Feature grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        <FeatureCard
          icon={<ZapIcon />}
          title="Responde al instante en WhatsApp"
          desc="Cualquier mensaje entra y recibe respuesta en segundos, a cualquier hora del día, sin hacer esperar al interesado."
        />
        <FeatureCard
          icon={<ShieldIcon />}
          title="Resuelve dudas con la info real de tu centro"
          desc="Precios, horarios, modalidades, ubicación... el sistema solo responde con lo que tú le has dado. Sin inventar nada."
        />
        <FeatureCard
          icon={<CalendarIcon />}
          title="Guía a reservar una clase de prueba"
          desc="Cuando detecta intención, propone disponibilidad y lleva al interesado a comprometerse con una fecha concreta."
        />
        <FeatureCard
          icon={<PhoneIcon />}
          title="Hace seguimiento automático"
          desc="Si alguien no confirmó, el sistema puede enviar un recordatorio. Sin que tengas que perseguir a nadie manualmente."
        />
        <FeatureCard
          icon={<UserIcon />}
          title="Avisa al equipo cuando hace falta una persona real"
          desc="Si la consulta está fuera del guión, el interesado tiene un problema delicado o pide hablar con alguien, el sistema para y te avisa para que tú tomes el relevo. Sin que el cliente apenas lo note."
          fullWidth
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button
          onClick={() => {
            if (window.Calendly) {
              window.Calendly.initPopupWidget({ url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita' });
            }
          }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#8b949e',
            fontSize: '15px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'color 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#fff'}
          onMouseOut={e => e.currentTarget.style.color = '#8b949e'}
        >
          Implementar esto en mi gimnasio <span style={{ color: '#00ffa3' }}>→</span>
        </button>
      </div>
    </section>
  );
}
