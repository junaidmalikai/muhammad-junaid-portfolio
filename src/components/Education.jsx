import { education } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-28 relative" aria-labelledby="education-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading icon="GraduationCap" eyebrow="Education" title="Academic background" titleId="education-heading" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <ScrollReveal key={item.degree} delay={index * 0.1}>
              <div
                className={`glass-card p-8 text-center h-full transition-colors ${
                  item.inProgress
                    ? 'border-accent/30 ring-1 ring-accent/10 hover:border-accent/40'
                    : 'hover:border-accent/20'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={item.badge ? 'BookOpen' : 'GraduationCap'}
                    size={32}
                    className="text-accent"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.degree}</h3>
                <p className="text-accent font-medium mb-4 text-sm sm:text-base flex items-center justify-center gap-1.5 flex-wrap">
                  <Icon name="Building2" size={14} />
                  {item.institution}
                </p>
                <p className="text-body-muted mb-4 flex items-center justify-center gap-1.5 flex-wrap">
                  <Icon name="Calendar" size={14} />
                  {item.period}
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {item.badge && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      {item.badge}
                    </span>
                  )}
                  {item.grade && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
                      <Icon name="Award" size={16} />
                      {item.grade}
                    </span>
                  )}
                  {item.cgpa && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-body font-semibold text-sm">
                      <Icon name="Trophy" size={14} className="text-accent" />
                      {item.cgpa}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
