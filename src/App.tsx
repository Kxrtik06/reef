import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { Methodology } from './components/Methodology';
import { Impact } from './components/Impact';
import { CommitForm } from './components/CommitForm';
import { FundRecovery } from './components/FundRecovery';
import { Footer } from './components/Footer';
import { Doodles } from './components/Doodles';
import { useScrollBleach } from './hooks/useScrollBleach';

function App() {
  useScrollBleach();

  return (
    <div className="min-h-screen bg-reef-darkest selection:bg-reef-recovery selection:text-reef-darkest">
      <CustomCursor />
      <Doodles />
      
      {/* Enhanced Global Ocean Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay overflow-hidden opacity-40">
        {/* Layer 1: Fast small caustics */}
        <div className="absolute inset-0 animate-[drift_15s_ease-in-out_infinite_alternate] w-[200%] h-[200%] -left-[50%] -top-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent bg-[length:100px_100px]" />
        {/* Layer 2: Slow large caustics */}
        <div className="absolute inset-0 animate-[drift_25s_linear_infinite_alternate_reverse] w-[200%] h-[200%] -left-[50%] -top-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-reef-recovery/20 via-transparent to-transparent bg-[length:250px_250px]" />
      </div>

      <nav className="absolute top-0 left-0 w-full z-40 p-6 text-[#C9C4BA] flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="font-fraunces text-2xl ml-4 pointer-events-auto cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>REEF</div>
        <div className="hidden md:flex gap-12 uppercase tracking-[0.2em] text-[11px] font-semibold text-[#a59b85] pointer-events-auto">
          <button onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 tracking-[0.2em]">ARCHIVE</button>
          <button onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 tracking-[0.2em]">METHODOLOGY</button>
          <button onClick={() => document.getElementById('fund-recovery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 tracking-[0.2em]">FUND RECOVERY</button>
        </div>
        <div className="hidden md:block pointer-events-auto">
          <button onClick={() => document.getElementById('commit-form')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] uppercase tracking-widest border border-[#C9C4BA]/30 px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
            Commit
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemStatement />
        <Methodology />
        <Impact />
        <CommitForm />
        <FundRecovery />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
