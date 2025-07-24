// components/skeletons.tsx
import { motion } from 'framer-motion'

export const ProjectSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-[480px] rounded-3xl bg-muted/20 overflow-hidden"
  >
    <div className="h-full w-full bg-gradient-to-r from-transparent via-muted/10 to-transparent animate-shimmer" />
  </motion.div>
)

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-muted/20 rounded-full w-full animate-pulse"
        style={{ width: `${100 - i * 10}%` }}
      />
    ))}
  </div>
)

export const ButtonSkeleton = () => (
  <div className="h-11 w-32 rounded-full bg-muted/20 animate-pulse" />
)