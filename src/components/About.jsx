import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutContent } from '../data/portfolio'
import { ScrollReveal } from './ui/SectionHeading'

function BioText({ text }) {
  const parts = text.split(/(n8n|Model Context Protocol \(MCP\))/g)

  return (
    <p className="text-body leading-relaxed text-base md:text-lg">
      {parts.map((part, i) =>
        part === 'n8n' || part === 'Model Context Protocol (MCP)' ? (
          <strong key={i} className="text-white font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  )
}

function PhilosophyStepper() {
  return (
    <div className="mt-8">
      <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
        <span className="w-1 h-6 bg-accent rounded-full" />
        Engineering Philosophy
      </h3>

      <ul className="space-y-3 lg:hidden">
        {aboutContent.philosophy.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="flex items-center gap-3 text-body"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">
              {index + 1}
            </span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <div className="flex flex-wrap items-center gap-y-4">
          {aboutContent.philosophy.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-sm text-body whitespace-nowrap">{item}</span>
              </div>
              {index < aboutContent.philosophy.length - 1 && (
                <ArrowRight size={14} className="text-body-muted mx-1 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="section-container max-w-4xl">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Engineering Intelligence at Scale
          </h2>
          <p className="text-body text-base sm:text-lg mb-8 leading-relaxed">
            Bridging AI reasoning with production-grade backend systems.
          </p>

          <div className="glass-card p-6 md:p-8 mb-2">
            <BioText text={aboutContent.bio} />
          </div>

          <PhilosophyStepper />
        </ScrollReveal>
      </div>
    </section>
  )
}
