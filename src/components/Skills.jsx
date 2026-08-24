import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit"
          subtitle="Technologies and frameworks I use to build intelligent systems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 h-full"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-body border border-white/10 cursor-default transition-colors hover:border-accent/30 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
