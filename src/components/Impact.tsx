import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

function NumberTicker({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // cinematic ease-out
        onUpdate(v) {
          if (ref.current) {
            const displayVal = value % 1 !== 0 ? v.toFixed(1) : Math.round(v);
            ref.current.textContent = `${prefix}${displayVal}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function Impact() {
  return (
    <section className="bg-reef-bleached text-reef-darkest py-32 px-4 bleach-effect bleach-bg-transition">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-md"
        >
          <h2 className="text-3xl font-fraunces mb-6 text-[#12262A]">The Toll</h2>
          <p className="text-base text-[#8A867F] leading-relaxed">
            The numbers represent irreversible loss. We view the decline not as an endpoint, but as a baseline for recovery. This is the moment the color drains completely.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#8A867F]/20 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-7xl md:text-8xl lg:text-9xl font-fraunces tracking-tighter mb-4 text-[#12262A]">
              <NumberTicker value={14} prefix="-" suffix="%" />
            </div>
            <div className="uppercase tracking-widest text-[10px] font-semibold text-[#8A867F]">Global cover lost since 2009</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-7xl md:text-8xl lg:text-9xl font-fraunces tracking-tighter mb-4 text-[#12262A]">
              <NumberTicker value={90} suffix="%" />
            </div>
            <div className="uppercase tracking-widest text-[10px] font-semibold text-[#8A867F]">Projected loss by 2050</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-7xl md:text-8xl lg:text-9xl font-fraunces tracking-tighter mb-4 text-[#12262A]">
              <NumberTicker value={1.5} suffix="°" />
            </div>
            <div className="uppercase tracking-widest text-[10px] font-semibold text-[#8A867F]">Critical thermal threshold</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
