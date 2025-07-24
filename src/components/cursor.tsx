'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

type CursorType = 'default' | 'hover' | 'click' | 'drag' | 'text';

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');

  return (
    <div
      className="cursor-none"
      onMouseEnter={() => setCursorType('default')}
      onMouseLeave={() => setCursorType('default')}
    >
      {children}
      <Cursor cursorType={cursorType} />
    </div>
  );
};

export const Cursor = ({ cursorType }: { cursorType: CursorType }) => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const rotate = useTransform<[number, number], number>(
    [smoothMouse.x, smoothMouse.y],
    ([x, y]) => {
      const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
      const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
      return (Math.atan2(Number(y) - centerY, Number(x) - centerX) * 180) / Math.PI;
    }
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouse.x, mouse.y]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{
        x: smoothMouse.x,
        y: smoothMouse.y,
        rotate: rotate,
      }}
    >
      <motion.div
        className={cn(
          'w-10 h-10 rounded-full border-2 flex items-center justify-center',
          'transition-all duration-300 ease-out',
          cursorType === 'hover' && 'border-coral bg-coral/10 scale-125 shadow-xl',
          cursorType === 'click' && 'border-rose-600 bg-rose-600/20 scale-75',
          cursorType === 'drag' && 'border-purple-500 bg-purple-500/10 w-14 h-14',
          cursorType === 'text' && 'bg-transparent border-white/30 scale-50'
        )}
        animate={{
          borderWidth: cursorType === 'text' ? 1 : 2,
          scale: cursorType === 'default' ? 1 : undefined,
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-coral"
          animate={{
            opacity: cursorType === 'default' ? 1 : 0,
            scale: cursorType === 'default' ? 1 : 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
