import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
          subtitle="AI/ML internships and full-stack delivery — most recent first. Four roles spanning Generative AI, RAG, Python, and production web apps."
        />

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <ScrollReveal key={job.company + job.period} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="relative pl-12 md:pl-20"
                >
                  <div
                    className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-surface shadow-lg shadow-accent/30 ${
                      job.featured ? 'ring-4 ring-accent/20' : ''
                    }`}
                  />

                  <div
                    className={`glass-card p-6 md:p-8 hover:border-accent/20 transition-colors ${
                      job.featured ? 'border-accent/30 ring-1 ring-accent/15 shadow-lg shadow-accent/5' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg md:text-xl flex items-start gap-2">
                          <Briefcase size={16} className="text-accent mt-1 flex-shrink-0" />
                          {job.role}
                        </h3>
                        <p className="text-accent font-medium mt-1">{job.company}</p>
                      </div>
                      {job.featured && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-wide">
                          Most Recent
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-body-muted mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-body text-sm md:text-base flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
