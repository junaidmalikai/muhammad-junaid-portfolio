import { aboutContent, whatIBuild } from '../data/portfolio'
import { ScrollReveal } from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative" aria-labelledby="about-heading">
      <div className="section-container max-w-4xl">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 inline-flex items-center gap-2">
            <Icon name="User" size={14} aria-hidden="true" />
            About
          </p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8">
            AI-focused engineer who ships working systems
          </h2>

          <div className="glass-card p-6 md:p-8 space-y-5 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-1">Who I am</h3>
              <p className="text-body leading-relaxed">{aboutContent.who}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">What I specialize in</h3>
              <p className="text-body leading-relaxed">{aboutContent.specialize}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Technologies I work with</h3>
              <p className="text-body leading-relaxed">{aboutContent.technologies}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Systems I build</h3>
              <p className="text-body leading-relaxed">{aboutContent.systems}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Roles I am looking for</h3>
              <p className="text-body leading-relaxed">{aboutContent.roles}</p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {whatIBuild.map((item) => (
              <li
                key={item.title}
                className="glass-card p-4 flex items-start gap-3"
              >
                <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={16} className="text-accent" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-sm mb-0.5">{item.title}</h3>
                  <p className="text-body-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
