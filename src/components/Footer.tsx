export function Footer() {
  return (
    <footer className="bg-[#050A0B] text-[#8A867F] py-12 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest gap-8">
        <div className="font-fraunces text-2xl tracking-normal text-[#C9C4BA]">
          REEF
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#C9C4BA] transition-colors">Archive</a>
          <a href="#" className="hover:text-[#C9C4BA] transition-colors">Methodology</a>
          <a href="#" className="hover:text-[#C9C4BA] transition-colors">Press</a>
          <a href="#" className="hover:text-[#C9C4BA] transition-colors">Terms</a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-[9px] opacity-50 uppercase tracking-widest text-center md:text-left">
        © 2024 REEF. 501(c)(3) REGISTERED NON-PROFIT. LONG LIVE WHAT REMAINS.
      </div>
    </footer>
  );
}
