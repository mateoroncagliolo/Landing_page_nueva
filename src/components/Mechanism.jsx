const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" stroke="#00e676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#00e676" strokeWidth="2"/>
    <path d="M3 9h18M8 2v4M16 2v4" stroke="#00e676" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00e676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Mechanism() {
  return (
    <section style={{
      padding: '80px 24px',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '38px', fontWeight: 800, lineHeight: '1.2', color: '#fff', marginBottom: '12px' }}>
          Tres resultados concretos<br />
          <span style={{ color: '#00e676' }}>desde el primer día.</span>
        </h2>
        <p style={{ fontSize: '14px', color: '#8b949e', lineHeight: '1.7' }}>
          Sin cambiar tu operativa. Sin curva de aprendizaje. Sin depender de tu equipo para responder mensajes.
        </p>
      </div>

      {/* Row 1: 2 cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        
        {/* Card 1: Cero leads */}
        <div className="card" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            width: '40px', height: '40px',
            background: 'rgba(0,230,118,0.08)',
            border: '1px solid rgba(0,230,118,0.2)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <ZapIcon />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
            Cero leads perdidos por tardanza
          </h3>
          <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.6', marginBottom: '20px' }}>
            Cada mensaje recibe respuesta al instante, a cualquier hora. Incluso el sábado por la noche o mientras estás en el tatami.
          </p>

          {/* Response time table */}
          <div style={{
            background: '#0d1117',
            border: '1px solid #21262d',
            borderRadius: '8px',
            overflow: 'hidden',
            fontSize: '12px',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              padding: '8px 14px',
              borderBottom: '1px solid #21262d',
              color: '#8b949e',
              fontSize: '11px',
              fontWeight: 600,
            }}>
              <span>LEAD</span><span>RESPUESTA</span>
            </div>
            {[
              { name: 'Juan M.', time: '1.7s' },
              { name: 'Sofía T.', time: '0.8s', highlight: true },
              { name: 'Carlos R.', time: '1.4s' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                padding: '8px 14px',
                borderBottom: i < 2 ? '1px solid #21262d' : 'none',
              }}>
                <span style={{ color: '#e5e7eb' }}>{row.name}</span>
                <span style={{ color: row.highlight ? '#00e676' : '#6e7681', fontWeight: 600 }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Más clases */}
        <div className="card" style={{ padding: '28px' }}>
          <div style={{
            width: '40px', height: '40px',
            background: 'rgba(0,230,118,0.08)',
            border: '1px solid rgba(0,230,118,0.2)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <CalendarIcon />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
            Más clases de prueba,<br />menos fricción operativa
          </h3>
          <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.6' }}>
            El interesado pasa de mensaje a clase reservada sin que intervenga nadie de tu equipo. Tú ves cómo se llena tu agenda.
          </p>
        </div>
      </div>

      {/* Row 2: 1 card full */}
      <div className="card" style={{ padding: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
        <div>
          <div style={{
            width: '40px', height: '40px',
            background: 'rgba(0,230,118,0.08)',
            border: '1px solid rgba(0,230,118,0.2)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <ShieldIcon />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
            Siempre tienes el control
          </h3>
          <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.6' }}>
            El sistema no improvisa. Solo responde con lo que tú le das. Y cuando algo se sale del guión, te avisa de inmediato para que intervengas tú.
          </p>
        </div>

        {/* Alert mock */}
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: '10px',
          padding: '16px',
          fontSize: '12px',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#ff6b6b', fontWeight: 600, fontSize: '11px',
            marginBottom: '10px', letterSpacing: '0.05em',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#ff6b6b', display: 'inline-block',
            }} />
            AVISO: INTERVENCIÓN HUMANA
          </div>
          <p style={{ color: '#8b949e', marginBottom: '12px', lineHeight: '1.5' }}>
            El usuario pregunta por una lesión de rodilla.
          </p>
          <p style={{ color: '#6e7681', marginBottom: '14px', fontSize: '11px' }}>
            {'>'} Pausando respuesta automática...
          </p>
          <button style={{
            width: '100%',
            background: '#00e676',
            color: '#0d1117',
            fontWeight: 600,
            fontSize: '12px',
            padding: '8px 0',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
          }}>
            Retomar conversación
          </button>
        </div>
      </div>
    </section>
  );
}
