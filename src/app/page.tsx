// app/page.tsx
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { ContactSection } from '@/components/ContactSection'
import { CursorProvider } from '@/components/cursor'

export default function Home() {
  return (
    <CursorProvider>
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <ContactSection />
    </CursorProvider>
  )
}
