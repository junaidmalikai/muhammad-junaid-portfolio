import { navLinks, siteConfig } from '../data/portfolio'
import Icon from './ui/Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-surface-raised/50">
      <div className="section-container py-10 sm:py-12 min-w-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left min-w-0">
            <p className="text-white font-bold text-lg mb-1">{siteConfig.name}</p>
            <p className="text-body-muted text-sm max-w-md">
              AI Engineer — Generative AI, RAG, Agentic AI, Python, FastAPI.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-body-muted hover:text-accent hover:border-accent/30 transition-colors"
              aria-label={`Email ${siteConfig.email}`}
            >
              <Icon name="Mail" size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-body-muted hover:text-accent hover:border-accent/30 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Icon name="Linkedin" size={18} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-body-muted hover:text-accent hover:border-accent/30 transition-colors"
              aria-label="GitHub profile"
            >
              <Icon name="Github" size={18} />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-body-muted hover:text-accent hover:border-accent/30 transition-colors"
              aria-label="Download resume"
            >
              <Icon name="FileDown" size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-muted text-sm text-center sm:text-left">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-muted text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-body-muted hover:text-accent hover:border-accent/30 transition-colors"
              aria-label="Back to top"
            >
              <Icon name="ArrowUp" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
