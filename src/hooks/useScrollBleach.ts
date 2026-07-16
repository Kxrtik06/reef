import { useEffect, useState } from 'react';

export function useScrollBleach() {
  const [bleachValue, setBleachValue] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.body.scrollHeight - window.innerHeight;
          const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
          
          let bleach = 0;
          // Sharper curve: reaches 100% bleach faster and holds it through the middle sections
          if (scrollPercent < 0.25) {
            bleach = scrollPercent / 0.25; 
          } else if (scrollPercent <= 0.65) {
            bleach = 1; 
          } else {
            const p = (scrollPercent - 0.65) / 0.35; 
            bleach = 1 - (p * 0.7); // Leaves a little color (0.3) for the footer/recovery
          }
          
          bleach = Math.max(0, Math.min(1, bleach));
          
          setBleachValue(bleach);
          document.documentElement.style.setProperty('--bleach', bleach.toString());
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return bleachValue;
}
