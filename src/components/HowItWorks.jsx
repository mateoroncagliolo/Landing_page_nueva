import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'El lead escribe por WhatsApp',
      desc: 'Pregunta por horarios, precios o quiere apuntarse. Da igual la hora que sea.',
    },
    {
      num: '02',
      title: 'FlowMint responde, resuelve y detecta intención',
      desc: 'Responde con la información real de tu centro, mantiene la conversación y empuja hacia la reserva cuando detecta interés.',
    },
    {
      num: '03',
      title: 'El lead reserva — o se escala a una persona',
      desc: 'Si todo encaja, agenda la clase de prueba. Si hace falta un humano, te avisa al instante y tú tomas el relevo.',
    },
  ];

  const trustItems = [
    'Implementación en menos de una semana',
    'Onboarding guiado por nuestro equipo',
    'Sin cambiar tu operativa ni tus herramientas',
    'Control humano siempre disponible',
  ];

  return (
    <section style={{ padding: '80px 24px 40px', background: '#0d1117' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="label-tag" style={{ marginBottom: '16px' }}>CÓMO FUNCIONA</div>
          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            Tres pasos.<br />
            <span style={{ color: '#00e676' }}>Todo automatizado.</span>
          </h2>
          <p style={{ fontSize: '14px', color: '#8b949e', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
            No cambias nada en tu rutina. FlowMint entra en tu WhatsApp actual y empieza a trabajar desde el día uno.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '60px',
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: '32px', position: 'relative' }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0,230,118,0.08)',
                color: '#00e676',
                fontFamily: 'JetBrains Mono',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '12px', lineHeight: '1.5' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          {trustItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '13px', color: '#8b949e',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#00e676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
