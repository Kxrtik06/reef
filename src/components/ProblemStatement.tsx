import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function ProblemStatement() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const percent = Math.min(Math.max((clientX - left) / width * 100, 0), 100);
    setSliderPos(percent);
  };

  return (
    <section id="archive" className="py-32 px-4 bg-reef-bleached text-reef-darkest text-center bleach-effect bleach-bg-transition overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces leading-tight mb-8 text-balance text-[#8A867F]">
            Since 1950, live coral cover has<br />declined by 50%.
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#8A867F] mb-16 leading-relaxed text-balance">
            The rate of loss is accelerating exponentially due to human-driven climate change. What took millions of years to build is unraveling in decades. Without immediate intervention, we face the extinction of the ocean's most vital ecosystem.
          </p>
        </motion.div>

        {/* Cinematic Scroll-Linked Bleaching Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[60vh] md:h-[80vh] rounded-xl overflow-hidden mb-24 shadow-2xl group"
        >
          {/* We use the true 4K landscape image, and its grayscale is tied directly to the global --bleach variable via CSS! */}
          <div 
             className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-300"
             style={{ 
               backgroundImage: "url('/slider-reef-4k.jpg')",
               filter: 'grayscale(calc(var(--bleach) * 100%)) contrast(calc(100% + var(--bleach) * 30%)) brightness(calc(100% + var(--bleach) * 20%))'
             }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-8 md:p-12 text-left">
             <h3 className="text-white text-3xl md:text-5xl font-fraunces mb-4 drop-shadow-md">The Extinction Curve</h3>
             <p className="text-white/80 text-lg md:text-xl max-w-2xl drop-shadow-md">Keep scrolling. As you move down the page, watch the color drain from the reef in real-time. This is exactly what is happening globally right now.</p>
          </div>
        </motion.div>
        
        {/* Additional information rows with images */}
        <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto border-t border-[#8A867F]/30 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="h-64 overflow-hidden rounded-lg">
               <img src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=800&auto=format&fit=crop" alt="Temperature" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-[#8A867F]">Temperature Threshold</h3>
              <p className="text-sm leading-relaxed text-[#8A867F] mb-4">
                A sustained increase of just 1.5°C triggers mass bleaching events. We are currently tracking towards 2.7°C. When waters warm, corals expel the symbiotic algae living in their tissues, starving them and leaving behind a white skeleton.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="h-64 overflow-hidden rounded-lg">
               <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800&auto=format&fit=crop" alt="Acidification" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-[#8A867F]">Acidification</h3>
              <p className="text-sm leading-relaxed text-[#8A867F]">
                Ocean pH levels have dropped 30%, dissolving the calcium carbonate structures that form the foundation of the reef. This prevents corals from absorbing the minerals they need to maintain their skeletons, literally dissolving them over time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
