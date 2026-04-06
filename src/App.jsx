import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import BentoGrid from './components/BentoGrid';
import Mechanism from './components/Mechanism';
import ObjectionsGrid from './components/ObjectionsGrid';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-obsidian min-h-screen text-ivory selection:bg-champagne selection:text-obsidian scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <BentoGrid />
        <Mechanism />
        <ObjectionsGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
