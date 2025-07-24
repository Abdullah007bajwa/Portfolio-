// components/ui/motion.tsx
'use client'

import { motion, Variants } from 'framer-motion'

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
}

interface MotionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const StaggerParent = ({ children, className }: MotionProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerVariants}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerChild = ({ children, className, delay }: MotionProps) => (
  <motion.div
    variants={childVariants}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
)

// Additional animation presets
export const FadeIn = ({ children, className }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideUp = ({ children, className }: MotionProps) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)