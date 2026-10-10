import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PAGES } from "../data/manifest"

function waitForGlobals(checkFn, timeout = 8000, interval = 50) {
  return new Promise((resolve) => {
    const start = Date.now()
    const tick = () => {
      try { if (checkFn()) return resolve(true) } catch {}
      if (Date.now() - start > timeout) return resolve(false)
      setTimeout(tick, interval)
    }
    tick()
  })
}

export default function useInitScripts() {
  const { pathname } = useLocation()
  useEffect(() => {
    let cancelled = false
    const run = async () => {
      if (cancelled) return
      document.querySelectorAll("[data-page-init]").forEach((n) => n.remove())
      await waitForGlobals(() => typeof jQuery !== "undefined" && typeof Swiper !== "undefined")
      if (cancelled) return
      const page = PAGES[pathname] || {}
      window.__immediate = window.__immediate || ((fn) => fn())
      const injectSrc = (src) =>
        new Promise((res) => {
          const s = document.createElement("script")
          s.src = src
          s.dataset.pageInit = "1"
          s.async = false
          s.onload = res
          s.onerror = res
          document.body.appendChild(s)
        })
      const injectInline = (code) => {
        const s = document.createElement("script")
        s.dataset.pageInit = "1"
        s.text = code
        document.body.appendChild(s)
      }
      for (const x of page.initScripts || []) {
        await injectSrc(x)
        if (cancelled) return
      }
      for (const code of page.inlineScripts || []) injectInline(code)
    }
    const t = setTimeout(run, 30)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [pathname])
}
