export default function SocialProof() {
  // We use placeholder gym names/logos stylized in text for the demo.
  const gymLogos = [
    "IRON BOX", "ZENITH PILATES", "COMBAT ACADEMY", "ELEVATE FITNESS", "CORE STUDIO", "APEX ATHLETICS"
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-obsidian/50 overflow-hidden relative">
      {/* Gradient Fades for Marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10"></div>
      
      <div className="flex gap-20 animate-[marquee_30s_linear_infinite] whitespace-nowrap px-10">
        {[...gymLogos, ...gymLogos, ...gymLogos].map((name, i) => (
          <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <div className="w-6 h-6 rounded border border-white/20 bg-white/5"></div>
            <span className="font-sans font-bold text-lg tracking-widest text-ivory">{name}</span>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
