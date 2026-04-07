export default function Footer() {
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita',
      });
    }
  };

  return (
    <footer style={{
      borderTop: '1px solid #21262d',
      padding: '64px 24px 32px',
      background: '#0d1117',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {/* Top area */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '64px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: '1 / -1', '@media(min-width: 768px)': { gridColumn: 'span 2' } }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <img 
                src="/logo.png" 
                alt="FlowMint Logo" 
                style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
              />
              <span style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                FlowMint <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '13px', color: '#00ffa3', letterSpacing: '0.1em', marginLeft: '2px' }}>AUTOMATIONS</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.7', maxWidth: '300px' }}>
              Automatización de WhatsApp para gimnasios boutique, centros de artes marciales y entrenadores especializados.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="label-tag" style={{ marginBottom: '20px', border: 'none', background: 'transparent', padding: 0 }}>SERVICIOS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#sistema" style={{ fontSize: '13px', color: '#8b949e', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#8b949e'}>Automatización de WhatsApp</a>
              <a href="#" onClick={openCalendly} style={{ fontSize: '13px', color: '#8b949e', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#8b949e'}>Auditoría Gratuita</a>
              <a href="https://wa.me/34613855535" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#8b949e', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#8b949e'}>Contacto por WhatsApp</a>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="label-tag" style={{ marginBottom: '20px', border: 'none', background: 'transparent', padding: 0 }}>LEGAL</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" style={{ fontSize: '13px', color: '#8b949e', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#8b949e'}>Política de Privacidad</a>
              <a href="#" style={{ fontSize: '13px', color: '#8b949e', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#8b949e'}>Términos de Servicio</a>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div style={{
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '12px', color: '#6e7681' }}>
            © 2024 FlowMint Automations. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '12px', color: '#6e7681' }}>
            Hecho con intención.
          </p>
        </div>
      </div>
    </footer>
  );
}
