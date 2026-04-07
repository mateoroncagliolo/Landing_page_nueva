export default function FinalCTA() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita',
      });
    }
  };

  return (
    <section style={{
      padding: 'clamp(40px, 8vw, 100px) 24px',
      background: '#0d1117',
      position: 'relative'
    }}>
      {/* Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(0,255,163,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div className="card" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '64px 32px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 800, color: '#fff', lineHeight: '1.2', marginBottom: '24px' }}>
          Haz que tu WhatsApp responda<br />
          <span className="neon-text">aunque tú estés dando clase.</span>
        </h2>
        <p style={{ fontSize: '15px', color: '#8b949e', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.7' }}>
          Agenda una auditoría gratuita. Analizamos juntos cómo llegan tus leads ahora y te mostramos exactamente qué mejoraría con FlowMint, sin compromiso ni presión.
        </p>
        
        <button
          onClick={openCalendly}
          className="neon-btn"
          style={{ fontSize: '16px', padding: '16px 36px', marginBottom: '24px' }}
        >
          Reservar Auditoría Gratuita →
        </button>

        <div style={{
          fontSize: '11px',
          fontWeight: 600,
          color: '#6e7681',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          AUDITORÍA GRATUITA · SIN COMPROMISO · RESPUESTA EN MENOS DE 24H
        </div>

        {/* Pulse Scarcity */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '24px', 
          fontSize: '13px', 
          color: '#fff', 
          background: 'rgba(0, 255, 163, 0.05)', 
          border: '1px solid rgba(0, 255, 163, 0.15)', 
          padding: '6px 16px', 
          borderRadius: '50px' 
        }}>
          <span style={{ width: '8px', height: '8px', background: '#00ffa3', borderRadius: '50%', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
          <span>Capacidad limitada: <strong>sólo 2 Setups disponibles</strong> este mes.</span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px', 
          color: '#8b949e', 
          fontSize: '12px', 
          marginBottom: '24px' 
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00ffa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ opacity: 0.9 }}>
            <strong>Garantía FlowMint:</strong> si el sistema no funciona como te lo mostramos, te devolvemos el setup completo.
          </span>
        </div>

        <a href="#demo" style={{
          fontSize: '13px',
          color: '#8b949e',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'color 0.2s',
        }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#8b949e'}>
          → Ver cómo funciona primero
        </a>
      </div>
    </section>
  );
}
