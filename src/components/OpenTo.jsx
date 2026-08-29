import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { openToRoles, siteConfig } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'

export default function OpenTo() {
  return (
    <section id="open-to" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Career Objective"
          title="Let's Work Together"
          subtitle={siteConfig.careerObjective}
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {openToRoles.map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card text-body font-medium hover:border-accent/40 hover:text-white transition-all cursor-default"
              >
                <Sparkles size={16} className="text-accent" />
                {role}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
