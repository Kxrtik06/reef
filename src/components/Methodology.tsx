import { useState } from 'react';
import { Droplets, BookOpen, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const methods = [
  {
    id: 'restoration',
    title: 'Restoration',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1200&auto=format&fit=crop',
    points: ['Micro-fragmentation', 'Substrate stabilization'],
    description: 'Accelerating natural coral growth using cutting-edge fragmentation techniques and establishing stable substrates for new polyps to anchor.'
  },
  {
    id: 'education',
    title: 'Education',
    icon: BookOpen,
    image: 'https://images.pexels.com/photos/10041139/pexels-photo-10041139.jpeg?auto=compress&cs=tinysrgb&w=1200',
    points: ['Local stewardship', 'Policy drafting'],
    description: 'Empowering local communities with the tools for stewardship and shaping protective legislative policies.'
  },
  {
    id: 'protection',
    title: 'Protection',
    icon: ShieldAlert,
    image: 'https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&w=1200',
    points: ['Acoustic monitoring', 'Vessel tracking'],
    description: 'Establishing enforcement frameworks for Marine Protected Areas (MPAs) to prevent overfishing and physical damage.'
  }
];

export function Methodology() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section id="methodology" className="bg-reef-bleached text-reef-darkest py-32 bleach-effect bleach-bg-transition">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xl font-fraunces text-[#8A867F] mb-16"
        >
          Methodology
        </motion.h2>
        
        {/* Expanding Cards Layout */}
        <div className="flex flex-col md:flex-row h-[700px] md:h-[600px] gap-4 w-full" onMouseLeave={() => setHoveredIndex(0)}>
          {methods.map((method, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = method.icon;
            
            return (
              <motion.div
                key={method.id}
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1
                }}
                style={{ flex: isHovered ? 4 : 1 }}
                className="relative rounded-xl overflow-hidden cursor-pointer flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ease-out"
                  style={{ 
                    backgroundImage: `url(${method.image})`,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    filter: isHovered ? 'grayscale(0%) brightness(0.8)' : 'grayscale(100%) brightness(0.4)'
                  }}
                />
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 text-white p-6 md:p-8 flex flex-col justify-end h-full w-full min-w-[250px]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-full backdrop-blur-md border transition-all duration-500 shrink-0 ${isHovered ? 'bg-white/10 border-white/30 text-reef-coral' : 'bg-transparent border-transparent text-white/50'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-fraunces whitespace-nowrap transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/50'}`}>
                      {method.title}
                    </h3>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'max-h-[300px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-md text-[#F2EFE9]">
                      {method.description}
                    </p>
                    <ul className="text-sm space-y-3 opacity-80 list-none border-t border-white/20 pt-6">
                      {method.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-reef-coral" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
