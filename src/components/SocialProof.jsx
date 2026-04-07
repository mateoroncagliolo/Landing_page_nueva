// SocialProof - simple stats bar with checkmarks (as seen at bottom of hero/how-it-works sections)
export default function SocialProof() {
  const items = [
    'Implementación en menos de una semana',
    'Onboarding guiado por nuestro equipo',
    'Sin cambiar tu operativa ni tus herramientas',
  ];

  return (
    <div style={{
      background: '#0d1117',
      borderTop: '1px solid #21262d',
      borderBottom: '1px solid #21262d',
      padding: '20px 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        flexWrap: 'wrap',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: '#8b949e',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#00e676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
