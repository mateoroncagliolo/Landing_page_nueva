import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mateo-flowmintautomations/consultoria-gratuita',
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      padding: scrolled ? '16px 20px' : '24px 20px',
      transition: 'all 0.3s ease',
      pointerEvents: 'none' // allow clicking through the wrapper
    }}>
      {/* Desktop Navbar */}
      <nav 
        className="hidden md:flex"
        style={{
        pointerEvents: 'auto',
        width: '100%',
        maxWidth: '1200px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        borderRadius: '100px',
        background: scrolled ? 'rgba(13, 17, 23, 0.7)' : 'rgba(13, 17, 23, 0.4)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.2)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img 
            src="/logo.png" 
            alt="FlowMint Logo" 
            style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
          />
          <span style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>
            FlowMint <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '13px', color: '#00ffa3', letterSpacing: '0.1em', marginLeft: '2px' }}>AUTOMATIONS</span>
          </span>
        </div>

        <button 
          onClick={openCalendly}
          style={{
            background: '#00ffa3',
            color: '#0d1117',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '50px',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(0,255,163,0.5)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,163,0.8)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,163,0.5)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Auditoría Gratuita →
        </button>
      </nav>

      {/* Mobile Floating Logo */}
      <div className="md:hidden absolute top-6 left-6 pointer-events-auto">
        <img 
          src="/logo.png" 
          alt="FlowMint Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
        />
      </div>
    </div>
  );
}
