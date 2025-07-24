// components/motion.tsx
'use client'

import { motion, Variants } from 'framer-motion'

const defaultEasing = [0.6, -0.05, 0.01, 0.99]

export const staggerVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

export const StaggerParent = ({ children, className }: { 
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={staggerVariants}
    className={className}
  >
    {children}
  </motion.div>
)

export const FadeUp = ({ children, className }: { 
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    variants={{
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { ease: defaultEasing } }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, className }: { 
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.6, ease: defaultEasing }}
    className={className}
  >
    {children}
  </motion.div>
)

export const RotateBlur = ({ children, className }: { 
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial={{ rotate: 12, filter: 'blur(12px)', opacity: 0 }}
    whileInView={{ rotate: 0, filter: 'blur(0px)', opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: defaultEasing }}
    className={className}
  >
    {children}
  </motion.div>
)