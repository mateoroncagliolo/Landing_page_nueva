import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBar from './components/MarqueeBar';
import BentoGrid from './components/BentoGrid';
import Mechanism from './components/Mechanism';
import HowItWorks from './components/HowItWorks';
import VSLSection from './components/VSLSection';
import ObjectionsGrid from './components/ObjectionsGrid';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ParticlesBackground from './components/ParticlesBackground';

const SectionDivider = () => (
  <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
);

function App() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      <div className="noise-overlay" />
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <MarqueeBar />
        <SectionDivider />
        <VSLSection />
        <SectionDivider />
        <BentoGrid />
        <SectionDivider />
        {/* <Mechanism /> */}
        {/* <HowItWorks /> */}
        {/* <ObjectionsGrid /> */}
        <FinalCTA />
      </main>
      <SectionDivider />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
