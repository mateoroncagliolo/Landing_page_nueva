import React from 'react';

export default function Hero() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita',
      });
    }
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(100px, 15vw, 160px) 24px clamp(40px, 8vw, 80px)',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(400px, 1.1fr) minmax(350px, 1fr)',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Lado Textual */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '50px',
            border: '1px solid rgba(0, 255, 163, 0.2)',
            background: 'rgba(0, 255, 163, 0.05)',
            marginBottom: '32px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ffa3', boxShadow: '0 0 8px #00ffa3' }}></span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#00ffa3', letterSpacing: '0.08em' }}>AUTOMATIZACIÓN DE WHATSAPP PARA GIMNASIOS</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(48px, 6vw, 76px)',
            fontWeight: 800,
            lineHeight: '1.05',
            color: '#ffffff',
            marginBottom: '32px',
            letterSpacing: '-1px'
          }}>
            Tu gimnasio<br />
            responde<br />
            solo.<br />
            <span className="neon-text">Tú das clase.</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#8b949e',
            lineHeight: '1.6',
            maxWidth: '520px',
            marginBottom: '40px'
          }}>
            FlowMint responde al instante por WhatsApp con la información real de tu centro, resuelve dudas, guía a los interesados a reservar una clase de prueba y avisa a tu equipo cuando hace falta una persona.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-start' }}>
            <button onClick={openCalendly} className="neon-btn" style={{ fontSize: '18px', padding: '20px 44px' }}>
              Reservar Auditoría Gratuita
            </button>
            <button
              onClick={() => {
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: 'transparent',
                color: '#8b949e',
                border: '1px solid #21262d',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={e => {
                e.target.style.color = '#fff';
                e.target.style.borderColor = '#484f58';
              }}
              onMouseOut={e => {
                e.target.style.color = '#8b949e';
                e.target.style.borderColor = '#21262d';
              }}
            >
              Ver cómo funciona
            </button>
            
            {/* Social Proof / Niche indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '12px', color: '#6e7681' }}>
              <span>Especializado para: </span>
              <strong style={{ color: '#8b949e' }}>CrossFit · Artes Marciales · Prácticas de Yoga</strong>
            </div>
          </div>

          {/* Stats simples */}
          <div style={{
            display: 'flex',
            gap: '40px',
            marginTop: '60px',
            paddingTop: '32px',
            borderTop: '1px solid #21262d'
          }}>
            <div>
              <div className="neon-text" style={{ fontSize: '32px', fontWeight: 800 }}>Inmediata</div>
              <div style={{ fontSize: '14px', color: '#8b949e', marginTop: '4px' }}>Respuesta en WhatsApp</div>
            </div>
            <div>
              <div className="neon-text" style={{ fontSize: '32px', fontWeight: 800 }}>24/7</div>
              <div style={{ fontSize: '14px', color: '#8b949e', marginTop: '4px' }}>Disponibilidad</div>
            </div>
            <div>
              <div className="neon-text" style={{ fontSize: '32px', fontWeight: 800 }}>0</div>
              <div style={{ fontSize: '14px', color: '#8b949e', marginTop: '4px' }}>Respuestas inventadas</div>
            </div>
          </div>
        </div>

        {/* Lado Visual (WhatsApp Demo) */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          
          {/* Fondo Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0,255,163,0.15) 0%, transparent 70%)',
            zIndex: 0
          }}></div>

          <div
            className="float-3d"
            style={{
              width: '100%',
              maxWidth: '320px',
              background: '#161b22',
              borderRadius: '20px',
              border: '1px solid #21262d',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Header del Chat */}
            <div style={{
              background: '#0d1117',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderBottom: '1px solid #21262d'
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: '#00ffa3', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#0d1117', fontWeight: 700, fontSize: '13px'
              }}>
                CE
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#fff' }}>CrossFit Élite</div>
                <div style={{ fontSize: '11px', color: '#00ffa3', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ffa3' }}></span>
                  en línea
                </div>
              </div>
              <div style={{ color: '#8b949e', fontSize: '12px' }}>•••</div>
            </div>

            {/* Cuerpo del Chat */}
            <div style={{ padding: '16px', backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
              <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                <span style={{ background: '#21262d', padding: '4px 10px', borderRadius: '12px', fontSize: '10px', color: '#8b949e' }}>HOY</span>
              </div>

              {/* Mensaje Cliente */}
              <div style={{ background: '#21262d', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', color: '#fff', fontSize: '13px', maxWidth: '85%', marginBottom: '12px', lineHeight: '1.4' }}>
                ¡Hola! Vi vuestro anuncio en Instagram. ¿Tenéis clases de prueba de CrossFit?
                <div style={{ fontSize: '9px', color: '#8b949e', textAlign: 'right', marginTop: '2px' }}>18:42</div>
              </div>

              {/* Mensaje Bot */}
              <div style={{ background: 'rgba(0,255,163,0.1)', border: '1px solid rgba(0,255,163,0.2)', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', color: '#fff', fontSize: '13px', maxWidth: '85%', marginLeft: 'auto', marginBottom: '4px', lineHeight: '1.4' }}>
                ¡Hola! ¡Bienvenido! 👋 Sí, tenemos clases de prueba completamente gratuitas. Tenemos hueco hoy a las 19:00h y mañana a las 7:30h y 18:00h. ¿Cuál te va mejor?
                <div style={{ fontSize: '9px', color: '#00ffa3', textAlign: 'right', marginTop: '2px' }}>18:42 ✓✓</div>
              </div>
              
              <div style={{ fontSize: '9px', color: '#00ffa3', textAlign: 'right', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                ✦ Respondido automáticamente en 1.8s
              </div>

              {/* Mensaje Cliente 2 */}
              <div style={{ background: '#21262d', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', color: '#fff', fontSize: '13px', maxWidth: '85%', marginBottom: '12px', lineHeight: '1.4' }}>
                ¿Cuánto cuesta la matrícula si me apunto?
                <div style={{ fontSize: '9px', color: '#8b949e', textAlign: 'right', marginTop: '2px' }}>18:44</div>
              </div>
              
              {/* Mensaje Bot 2 */}
              <div style={{ background: 'rgba(0,255,163,0.1)', border: '1px solid rgba(0,255,163,0.2)', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', color: '#fff', fontSize: '13px', maxWidth: '85%', marginLeft: 'auto', marginBottom: '16px', lineHeight: '1.4' }}>
                La matrícula es de 30€ y la cuota mensual de 65€ con acceso ilimitado. Si reservas la prueba esta semana te regalo la matrícula 🎁
                <div style={{ fontSize: '9px', color: '#00ffa3', textAlign: 'right', marginTop: '2px' }}>18:44 ✓✓</div>
              </div>

            </div>

            {/* Input Chat */}
            <div style={{ padding: '12px', background: '#0d1117', borderTop: '1px solid #21262d', display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1, background: '#161b22', borderRadius: '20px', padding: '10px 14px', color: '#8b949e', fontSize: '13px' }}>Escribe un mensaje...</div>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#00ffa3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0d1117" style={{ marginLeft: '2px' }}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
