import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FundRecovery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="fund-recovery" ref={ref} className="relative bg-[#050A0B] text-white py-32 px-4 pb-48 overflow-hidden">
      
      {/* Background imagery - Color wash reveal (The Wow Beat) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Bleached base image */}
         <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10" />
         
         {/* Colorful recovery image washing in */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 0.25 } : { opacity: 0 }}
           transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
           className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1546026423-cc46426ba694?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
         />
         
         {/* Soft recovery green #2DD4A7 overlay glow washing in */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 0.15 } : { opacity: 0 }}
           transition={{ duration: 4, ease: "easeOut", delay: 0.8 }}
           className="absolute inset-0 bg-reef-recovery mix-blend-color"
         />
         
         {/* Fade gradient to blend with footer */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050A0B] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-fraunces text-[#C9C4BA] mb-6"
        >
          Fund Recovery
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-[#8A867F] max-w-xl mx-auto leading-relaxed"
        >
          Direct capital intervention. 100% of funds are allocated to on-site restoration hardware and scientific monitoring. Life returns when given a chance.
        </motion.p>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Tier 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#1A1A1A]/80 backdrop-blur-md p-8 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(45,212,167,0.1)] border border-white/5"
        >
          <div>
            <div className="text-2xl font-fraunces mb-1">₹4,000</div>
            <div className="uppercase tracking-widest text-[10px] font-semibold opacity-70 mb-6 text-reef-recovery">Seed Substrate</div>
            <p className="text-sm leading-relaxed opacity-90">
              Procures and deploys 10 artificial substrate frames for coral fragment attachment.
            </p>
          </div>
          <button className="no-bleach mt-12 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black px-6 py-2 w-max uppercase tracking-widest text-[10px] font-semibold transition-colors duration-300">
            Select
          </button>
        </motion.div>

        {/* Tier 2 (Highlighted) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#2A3132] p-8 flex flex-col justify-between text-white relative transition-all duration-300 hover:-translate-y-2 transform md:scale-105 z-10 shadow-2xl border border-reef-recovery/30 hover:border-reef-recovery"
        >
          <div className="absolute top-4 right-4 bg-reef-recovery text-[#12262A] text-[9px] uppercase tracking-widest font-bold px-2 py-1 shadow-[0_0_15px_rgba(45,212,167,0.4)]">
            Impact
          </div>
          <div>
            <div className="text-3xl font-fraunces mb-1 text-reef-recovery drop-shadow-[0_0_8px_rgba(45,212,167,0.5)]">₹21,000</div>
            <div className="uppercase tracking-widest text-[10px] font-semibold opacity-90 mb-6 text-white">Hardware Maintenance</div>
            <p className="text-sm leading-relaxed opacity-90">
              Funds one month of maintenance and cleaning for a 500-fragment offshore nursery structure.
            </p>
          </div>
          <button className="no-bleach mt-12 bg-transparent border border-reef-recovery text-reef-recovery hover:bg-reef-recovery hover:text-[#12262A] px-6 py-2 w-max uppercase tracking-widest text-[10px] font-semibold transition-colors duration-300 hover:shadow-[0_0_20px_rgba(45,212,167,0.4)]">
            Select
          </button>
        </motion.div>

        {/* Tier 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#1A1A1A]/80 backdrop-blur-md p-8 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(45,212,167,0.1)] border border-white/5"
        >
          <div>
            <div className="text-2xl font-fraunces mb-1">₹84,000</div>
            <div className="uppercase tracking-widest text-[10px] font-semibold opacity-70 mb-6 text-reef-recovery">Acoustic Array</div>
            <p className="text-sm leading-relaxed opacity-90">
              Deploys a permanent acoustic monitoring station to track biodiversity recovery on a restored bank.
            </p>
          </div>
          <button className="no-bleach mt-12 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black px-6 py-2 w-max uppercase tracking-widest text-[10px] font-semibold transition-colors duration-300">
            Select
          </button>
        </motion.div>
      </div>
    </section>
  );
}
