import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// Removed unused animatePageIn import

export const ViewTransitions = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement
      if (!target.href) return

      const url = new URL(target.href)
      if (window.location.pathname !== url.pathname) {
        event.preventDefault()
        if (!document.startViewTransition) {
          router.push(url.pathname)
          return
        }
        document.startViewTransition(() => router.push(url.pathname))
      }
    }

    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [router])

  return <div id="view-transition">{children}</div>
}
