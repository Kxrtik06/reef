import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if device is touch based
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsHidden(true);
      return;
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      const isTextInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        window.getComputedStyle(target).cursor === 'text';

      setIsPointer(!!isClickable);
      setIsText(!!isTextInput);
    };

    const handleMouseLeave = () => setPosition({ x: -100, y: -100 });

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', updateCursorStyle);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', updateCursorStyle);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isHidden || isText) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 bleach-effect mix-blend-difference"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      {/* Algae Sprite - simplified SVGs */}
      <div 
        className={`relative transition-all duration-300 ease-out flex items-center justify-center
          ${isPointer ? 'scale-150 drop-shadow-[0_0_8px_rgba(45,212,167,0.8)]' : 'scale-100'}
        `}
        style={{ width: '20px', height: '20px', transform: 'translate(-50%, -50%)' }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-reef-recovery animate-[sway_2s_ease-in-out_infinite]"
        >
          <path d="M12 22C12 22 10 18 10 15C10 12 14 10 14 7C14 4 12 2 12 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18C12 18 8 16 8 13C8 10 10 9 10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15C12 15 16 13 16 11C16 9 14 8 14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
