import { experience } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative" aria-labelledby="experience-heading">
      <div className="section-container relative">
        <SectionHeading
          icon="Briefcase"
          eyebrow="Experience"
          title="Professional Journey"
          titleId="experience-heading"
          subtitle="Most recent first — AI/ML internships and full-stack delivery across Generative AI, RAG, Python, and production web apps."
        />

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent"
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {experience.map((job, index) => (
              <li key={job.company + job.period} className="relative pl-12 md:pl-20">
                <ScrollReveal delay={index * 0.08}>
                <div
                  className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-surface ${
                    job.featured ? 'ring-4 ring-accent/20' : ''
                  }`}
                  aria-hidden="true"
                />

                <article
                  className={`glass-card p-6 md:p-8 ${
                    job.featured ? 'border-accent/30 ring-1 ring-accent/15' : ''
                  }`}
                >
                  <header className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg md:text-xl">
                        {job.role}
                      </h3>
                      <p className="text-accent font-medium mt-1">{job.company}</p>
                    </div>
                    {job.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-wide">
                        Most recent
                      </span>
                    )}
                  </header>

                  <p className="flex flex-wrap gap-4 text-sm text-body-muted mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="Calendar" size={14} aria-hidden="true" />
                      <time>{job.period}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="MapPin" size={14} aria-hidden="true" />
                      {job.location}
                    </span>
                  </p>

                  <ul className="space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-body text-sm md:text-base flex items-start gap-2"
                      >
                        <Icon
                          name="CheckCircle2"
                          size={15}
                          className="text-accent mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
