import { motion } from 'framer-motion';

const Starfish = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16">
    <path d="M50 15 L60 38 L85 40 L65 55 L72 80 L50 65 L28 80 L35 55 L15 40 L40 38 Z" />
    <circle cx="50" cy="50" r="2" fill="currentColor" />
    <circle cx="50" cy="40" r="1" fill="currentColor" />
    <circle cx="45" cy="55" r="1" fill="currentColor" />
    <circle cx="55" cy="55" r="1" fill="currentColor" />
  </svg>
);

const Fish = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14">
    <path d="M75 50 C 75 65, 45 65, 25 50 C 45 35, 75 35, 75 50 Z" />
    <path d="M25 50 L 10 38 L 10 62 Z" />
    <circle cx="60" cy="46" r="2" fill="currentColor" />
    <path d="M 65 52 Q 60 55 55 52" />
  </svg>
);

const Bubbles = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="70" r="12" />
    <circle cx="75" cy="40" r="8" />
    <circle cx="35" cy="20" r="5" />
  </svg>
);

const Jellyfish = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-12 h-12 md:w-16 md:h-16">
    <path d="M25 50 C 25 15, 75 15, 75 50 Z" />
    <path d="M35 50 Q 30 70 35 85" />
    <path d="M50 50 Q 55 75 48 90" />
    <path d="M65 50 Q 70 70 65 85" />
    <circle cx="40" cy="40" r="2" fill="currentColor" />
    <circle cx="60" cy="40" r="2" fill="currentColor" />
  </svg>
);

export function Doodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Top Left Fish */}
      <motion.div 
        className="absolute top-[15%] left-[8%] text-reef-coral/30"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Fish />
      </motion.div>
      
      {/* Middle Right Jellyfish */}
      <motion.div 
        className="absolute top-[45%] right-[10%] text-[#a59b85]/30"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Jellyfish />
      </motion.div>

      {/* Bottom Left Bubbles */}
      <motion.div 
        className="absolute top-[75%] left-[12%] text-white/20"
        animate={{ y: [0, -40, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Bubbles />
      </motion.div>

      {/* Bottom Right Starfish */}
      <motion.div 
        className="absolute top-[80%] right-[15%] text-reef-coral/20"
        animate={{ rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <Starfish />
      </motion.div>
      
      {/* Top Center Bubbles */}
      <motion.div 
        className="absolute top-[10%] left-[60%] text-[#a59b85]/20"
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Bubbles />
      </motion.div>
    </div>
  );
}
