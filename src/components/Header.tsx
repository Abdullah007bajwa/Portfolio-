'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ChevronUp } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastScroll = useRef(0)

  // Scroll effects with improved transition range
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const navY = useTransform(scrollY, [0, 100], [0, -80])
  const triggerY = useTransform(scrollY, [0, 100], [80, 0])

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const scrollDirection = currentScroll > lastScroll.current ? 'down' : 'up'
      lastScroll.current = currentScroll

      if (scrollDirection === 'down' && currentScroll > 100) {
        setIsHidden(true)
      } else if (scrollDirection === 'up') {
        setIsHidden(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isHidden && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-8 right-8 z-50"
          >
            <motion.button
              style={{ y: triggerY }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={cn(
                'bg-transparent rounded-full p-3 shadow-xl backdrop-blur-lg',
                'border border-rose-500/30',
                'flex items-center gap-2 text-background',
                'transition-all duration-300',
                'hover:shadow-2xl hover:bg-rose-600'
              )}
            >
              <ChevronUp className="h-5 w-5" />
              <span className="font-medium text-sm">Menu</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        style={{ opacity: navOpacity, y: navY }}
        className="fixed top-0 w-full z-40"
      >
        <motion.nav
          className={cn(
            'bg-gradient-to-b from-black/80 to-transparent',
            'backdrop-blur-xl border-b border-gray-800/20',
            'transition-all duration-300'
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden"
            >
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-coral to-rose-600 bg-clip-text text-transparent"
              >
                Abdullah
              </Link>
            </motion.div>

            <nav className="hidden md:flex space-x-6">
              {['About','Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 transition-all"
                  >
                    {item}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </nav>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="md:hidden"
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white transition-colors"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95"
              >
                <div className="px-4 py-4 space-y-3">
                  {['About','Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-300 hover:text-white px-3 py-3 rounded-lg bg-white/5 backdrop-blur-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
    </>
  )
}