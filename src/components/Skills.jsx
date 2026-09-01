import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeading
          icon="Cpu"
          eyebrow="Skills"
          title="Technical skills"
          titleId="skills-heading"
          subtitle="Grouped by how I actually use them — not a keyword dump."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 h-full"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={group.icon} size={16} className="text-accent" />
                  </span>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-white/5 text-body border border-white/10 cursor-default transition-colors hover:border-accent/30 hover:text-white"
                    >
                      <Icon name={skill.icon} size={14} className="text-accent flex-shrink-0" />
                      {skill.name}
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
