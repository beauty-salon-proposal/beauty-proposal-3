import { useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Faq from "./pages/Faq"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Services from "./pages/Services"
import SinglePost from "./pages/SinglePost"
import useInitScripts from "./hooks/useInitScripts"
import { PAGES } from "./data/manifest"

function ScrollAndTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const p = PAGES[pathname]
    if (p && p.title) document.title = p.title
  }, [pathname])
  return null
}

function SpaLinks() {
  const nav = useNavigate()
  useEffect(() => {
    const h = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest && e.target.closest("a")
      if (!a) return
      const href = a.getAttribute("href")
      if (!href || /^(https?:|mailto:|tel:|javascript:|#)/i.test(href)) return
      if (href.endsWith(".html")) {
        e.preventDefault()
        const clean = href.replace(/^\.\//, "").replace(/^\//, "")
        nav(clean === "index.html" ? "/" : "/" + clean)
      }
    }
    document.addEventListener("click", h)
    return () => document.removeEventListener("click", h)
  }, [nav])
  return null
}

export default function App() {
  useInitScripts()
  return (
    <>
      <ScrollAndTitle />
      <SpaLinks />
      <Routes>
        <Route path="/about.html" element={<About />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/faq.html" element={<Faq />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing.html" element={<Pricing />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/single-post.html" element={<SinglePost />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
