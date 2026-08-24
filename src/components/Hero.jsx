import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { siteConfig } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import ParticleBackground from './ui/ParticleBackground'

export default function Hero() {
  const sectionRef = useRef(null)
  const { text, mounted } = useTypewriter(siteConfig.typewriterWords)

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col pt-16 sm:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="section-container relative z-10 flex-1 flex flex-col justify-center py-10 sm:py-12 md:py-16 lg:py-20 min-w-0 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card text-xs sm:text-sm text-body mb-4 sm:mb-6 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow flex-shrink-0" />
          Available for AI Engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight break-words"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base lg:text-lg text-body mb-4 sm:mb-5 leading-relaxed"
        >
          {siteConfig.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl font-medium mb-4 min-h-[2rem] sm:min-h-[1.75rem]"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-body-muted">Specializing in </span>
          <span className="accent-gradient-text font-semibold">
            {text}
            {mounted && (
              <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-accent align-middle animate-blink" />
            )}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-body text-sm sm:text-base lg:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
        >
          <a href="#projects" className="btn-primary text-center">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary text-center">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 pb-6 sm:pb-8 flex flex-col items-center gap-2 text-body-muted hover:text-accent transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
