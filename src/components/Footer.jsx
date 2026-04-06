export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-obsidian py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-champagne flex items-center justify-center text-obsidian font-bold text-xs">F</div>
            <span className="font-serif italic text-lg text-ivory">FlowMint <span className="font-sans text-xs font-light not-italic text-ivory/60 uppercase tracking-widest">Auto</span></span>
          </div>
          <p className="text-ivory/50 font-light max-w-xs text-sm">
            Creando sistemas invisibles de conversión y retención para centros fitness, artes marciales y clínicas especializadas.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Soluciones</h4>
          <ul className="space-y-3 text-sm text-ivory/60 font-light">
            <li><a href="#" className="hover:text-champagne transition-colors">Para Gimnasios</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors">Para Entrenadores Personales</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors">Para Centros Boutique</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors">Auditoría Gratuita</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Empresa</h4>
          <ul className="space-y-3 text-sm text-ivory/60 font-light">
            <li><a href="#" className="hover:text-champagne transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors">Casos de Éxito</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors">Privacidad</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors">Términos Legales</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-data text-ivory/30">
        <p>© 2026 FlowMint Automations. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full border border-champagne/50 bg-champagne/20"></span>
          Sistema Operativo: 100%
        </div>
      </div>
    </footer>
  );
}
