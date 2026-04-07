import React from 'react';

export default function MarqueeBar() {
  const items = [
    "Implementación en 7 días",
    "Sin cambiar tu operativa",
    "Control humano siempre disponible"
  ];
  
  // Duplicate array multiple times to ensure smooth infinite wrap
  const content = [...items, ...items, ...items, ...items].map((text, i) => (
    <div key={i} className="marquee-item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M5 13L9 17L19 7" stroke="#00ffa3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {text}
    </div>
  ));

  return (
    <div style={{
      width: '100%',
      padding: '24px 0',
      background: 'rgba(13, 17, 23, 0.8)',
      borderTop: '1px solid #21262d',
      borderBottom: '1px solid #21262d',
      zIndex: 10,
      position: 'relative'
    }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {content}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
}
