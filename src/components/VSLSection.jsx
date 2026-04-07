import React, { useState, useRef } from 'react';

export default function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita',
      });
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play prevented by browser, showing native controls:", error);
        });
      }
    }
  };

  return (
    <section id="demo" 
      className="px-5 md:px-[24px]"
      style={{
      paddingTop: 'clamp(40px, 8vw, 80px)',
      paddingBottom: 'clamp(40px, 8vw, 80px)',
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
        background: 'radial-gradient(circle at center, rgba(0,255,163,0.02) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
          }}>
            DEMOSTRACIÓN
          </div>
          
          <h2 
            className="text-3xl md:text-[clamp(36px,4vw,56px)]"
            style={{
            fontWeight: 800,
            lineHeight: '1.2',
            color: '#ffffff',
            letterSpacing: '-1px'
          }}>
            Mira cómo funciona<br/>
            <span style={{ 
              color: '#00ffa3',
            }}>
              en menos de 2 minutos
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px]"
          style={{
          alignItems: 'center',
        }}>
          
          {/* Lado Video */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #21262d',
            background: '#161b22',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            cursor: isPlaying ? 'default' : 'pointer'
          }} onClick={!isPlaying ? handlePlayClick : undefined}>
            
            {/* Si no se está reproduciendo, mostrar la miniatura (VSL cover) */}
            {!isPlaying && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/VSL_cover.png" 
                  alt="Video Cover" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', 
                    objectPosition: 'center',
                    zIndex: 1
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Fallback Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.9) 100%)',
                  zIndex: 2
                }}></div>
                
                {/* Play Button */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#00ffa3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(0, 255, 163, 0.4)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0d1117" style={{ marginLeft: '4px' }}>
                    <path d="M5 3l14 9-14 9V3z"/>
                  </svg>
                </div>
              </div>
            )}

            {/* Video Player */}
            <video 
              ref={videoRef}
              src="/VSL.mp4" 
              controls={isPlaying}
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                backgroundColor: '#000'
              }}
            />
          </div>

          {/* Lado Texto & Lista */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h3 
              className="text-2xl md:text-[28px]"
              style={{
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: '1.3'
            }}>
              Ve exactamente lo que ocurre desde que el lead escribe hasta que reserva
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { bold: "Respuesta automática", rest: " en WhatsApp usando solo la información real de tu gimnasio." },
                { bold: "Detecta intención y guía", rest: " al interesado a reservar una clase de prueba sin que intervenga nadie." },
                { bold: "Avisa a tu equipo", rest: " cuando hay algo que requiere una persona real. Tú siempre tienes el control." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    minWidth: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 163, 0.1)',
                    border: '1px solid rgba(0, 255, 163, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#00ffa3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ color: '#8b949e', fontSize: '15px', lineHeight: '1.5' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.bold}</span><span className="hidden md:inline">{item.rest}</span>
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '16px' }}>
              <button onClick={openCalendly} className="neon-btn" style={{ fontSize: '16px', padding: '18px 36px' }}>
                Reservar Auditoría Gratuita →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
