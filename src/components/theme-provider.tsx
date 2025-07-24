// components/theme-provider.tsx
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />
      <GradientOverlay />
      {children}
    </NextThemesProvider>
  )
}

const GradientOverlay = () => (
  <>
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_800px_at_100px_100px,rgba(var(--coral),0.1),transparent)]" />
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_800px_at_90%_90%,rgba(var(--rose),0.1),transparent)]" />
    <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(var(--coral),0.05),transparent)]" />
  </>
)