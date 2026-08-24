import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : ''
      }`}
    >
      <nav className="section-container flex items-center justify-between h-14 sm:h-16 md:h-20 min-w-0">
        <a
          href="#hero"
          className="text-lg font-bold text-white hover:text-accent transition-colors flex-shrink-0"
        >
          MJ<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-body hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5 flex-shrink-0"
        >
          Contact Me
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-body hover:text-white flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-raised/98 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <ul className="section-container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-body hover:text-white py-2 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={handleNavClick} className="btn-primary w-full">
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
