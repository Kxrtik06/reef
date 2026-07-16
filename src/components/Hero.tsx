import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Track mouse for spotlight
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const line1 = "Half the reef is".split(" ");
  const line2 = "already gone.".split(" ");

  const wordAnimation = {
    hidden: { opacity: 0, y: 50, filter: 'blur(15px)', scale: 1.1 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.1 + 0.3
      }
    })
  };

  const scrollToForm = () => {
    const element = document.getElementById('commit-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#050D0E]"
    >
      {/* Interactive Cursor Spotlight */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none z-0 mix-blend-screen"
        animate={{
          x: mousePos.x - 400,
          y: mousePos.y - 400,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.8 }}
        style={{
          background: 'radial-gradient(circle, rgba(45,212,167,0.15) 0%, rgba(255,94,58,0.05) 30%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-[140%] bg-[url('/slider-reef-4k.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
        
        {/* Ocean Caustics Overlay */}
        <div className="absolute inset-0 opacity-50 mix-blend-overlay w-[200%] h-[200%] -left-[50%] -top-[50%] animate-[drift_20s_linear_infinite_alternate]">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent bg-[length:150px_150px]" />
        </div>
      </motion.div>

      {/* Floating Plankton Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {Array.from({ length: 40 }).map((_, i) => (
           <motion.div
             key={i}
             className="absolute bg-white rounded-full opacity-40"
             style={{
               width: Math.random() * 3 + 1 + 'px',
               height: Math.random() * 3 + 1 + 'px',
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + 100 + '%', // start below screen
               boxShadow: '0 0 12px 2px rgba(45,212,167,0.6)'
             }}
             animate={{
               top: '-10%',
               x: [0, Math.random() * 150 - 75, Math.random() * 150 - 75],
             }}
             transition={{
               duration: Math.random() * 15 + 15,
               repeat: Infinity,
               ease: "linear",
               delay: Math.random() * 15
             }}
           />
         ))}
      </div>
      
      {/* Heavy Vignette & Fade to Darkest */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050D0E_120%)] pointer-events-none opacity-90" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#050D0E] pointer-events-none" />
      
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center mt-20"
        style={{ y: textY, scale: textScale, opacity: textOpacity }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-fraunces font-normal leading-[0.9] text-reef-textPrimary mb-8 tracking-tighter flex flex-col items-center drop-shadow-2xl">
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 overflow-hidden pb-4">
            {line1.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className="inline-block drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 overflow-hidden pb-8">
            {line2.map((word, i) => (
              <motion.span
                key={i + line1.length}
                custom={i + line1.length}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className="inline-block italic text-reef-coral/90 pr-3 drop-shadow-[0_10px_30px_rgba(255,94,58,0.3)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-[#C9C4BA] max-w-3xl mb-16 leading-relaxed drop-shadow-xl font-light"
        >
          We are witnessing the most rapid collapse of a planetary ecosystem in recorded history. <strong className="text-white font-medium">Intervention is no longer optional.</strong>
        </motion.p>
        
        <motion.button 
          onClick={scrollToForm}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.8, type: "spring" }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0px 0px 40px rgba(255, 94, 58, 0.4), inset 0px 0px 15px rgba(255, 94, 58, 0.2)",
            borderColor: "rgba(255, 94, 58, 1)",
            backgroundColor: "rgba(255, 94, 58, 0.15)"
          }}
          whileTap={{ scale: 0.95 }}
          className="no-bleach bg-white/5 backdrop-blur-md border border-white/20 text-white hover:text-white px-10 py-5 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold transition-all duration-500 relative overflow-hidden group rounded-full"
        >
          <span className="relative z-10 flex items-center gap-4">
            Take Action
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-reef-coral group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
