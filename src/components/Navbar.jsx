import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { navLinks, siteConfig } from '../data/portfolio'
import Icon from './ui/Icon'

function scrollToSection(href) {
  const target = document.querySelector(href)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduce = useReducedMotion()

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

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    if (mobileOpen) {
      setMobileOpen(false)
      window.setTimeout(() => scrollToSection(href), 350)
    } else {
      scrollToSection(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <nav className="section-container flex items-center justify-between h-14 sm:h-16 md:h-20 min-w-0" aria-label="Primary">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-bold text-white hover:text-accent transition-colors flex-shrink-0"
        >
          {siteConfig.name.split(' ').at(-1)}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-body hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm py-2.5 px-4"
          >
            <Icon name="FileDown" size={16} aria-hidden="true" />
            Resume
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary text-sm py-2.5 px-4">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-body hover:text-white flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-surface-raised/98 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-body hover:text-white py-2.5 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-2">
                <a
                  href={siteConfig.resumeUrl}
                  download={siteConfig.resumeFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  <Icon name="FileDown" size={16} aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-primary w-full text-center"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
