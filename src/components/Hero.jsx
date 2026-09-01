import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { siteConfig } from '../data/portfolio'
import ParticleBackground from './ui/ParticleBackground'
import Icon from './ui/Icon'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const wide = window.matchMedia('(min-width: 768px)').matches
    setShowParticles(wide)
  }, [prefersReducedMotion])

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col pt-16 sm:pt-20 overflow-hidden"
      aria-labelledby="hero-name"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      {showParticles && (
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <ParticleBackground />
        </div>
      )}

      <div className="section-container relative z-10 flex-1 flex flex-col justify-center py-10 sm:py-12 md:py-16 min-w-0 max-w-4xl">
        <p className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card text-xs sm:text-sm text-body mb-5 sm:mb-6 w-fit">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
          Available for Associate / Junior AI Engineer roles
        </p>

        <h1
          id="hero-name"
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight break-words"
        >
          {siteConfig.name}
        </h1>

        <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 leading-snug max-w-3xl">
          {siteConfig.headline}
        </p>

        <p className="text-sm sm:text-base text-accent font-medium mb-5">
          {siteConfig.title}
        </p>

        <p className="text-body text-sm sm:text-base lg:text-lg max-w-3xl mb-8 leading-relaxed">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-nowrap items-stretch sm:items-center gap-3">
          <a href="#projects" className="btn-primary text-center">
            <Icon name="FolderOpen" size={18} aria-hidden="true" />
            View Projects
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            <Icon name="Github" size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            <Icon name="Linkedin" size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="relative z-10 pb-6 sm:pb-8 flex flex-col items-center gap-2 text-body-muted hover:text-accent transition-colors focus-visible:outline-none"
        aria-label="Skip to about section"
      >
        <span className="text-xs uppercase tracking-widest">About</span>
        <Icon name="ArrowDown" size={20} className="motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
