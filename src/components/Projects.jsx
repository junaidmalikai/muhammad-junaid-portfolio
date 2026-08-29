import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Database,
  FileText,
  BookOpen,
  Search,
  Mail,
  MessageCircle,
  TrafficCone,
  Leaf,
  UtensilsCrossed,
  Pizza,
  ExternalLink,
  Github,
} from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'

const iconMap = {
  Database,
  FileText,
  BookOpen,
  Search,
  Mail,
  MessageCircle,
  TrafficCone,
  Leaf,
  UtensilsCrossed,
  Pizza,
}

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI-Agentic' },
  { id: 'fullstack', label: 'Full-Stack' },
]

function ProjectLinkBadge({ href, type }) {
  const isLive = type === 'live'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
        isLive
          ? 'bg-accent/15 text-accent border border-accent/35 hover:bg-accent/25'
          : 'bg-white/5 text-body border border-white/15 hover:border-accent/35 hover:text-accent'
      }`}
      aria-label={isLive ? 'View live project' : 'View source code on GitHub'}
    >
      {isLive ? (
        <>
          <ExternalLink size={10} />
          Live
        </>
      ) : (
        <>
          <Github size={10} />
          GitHub
        </>
      )}
    </a>
  )
}

function CaseStudyField({ label, children }) {
  return (
    <div>
      <dt className="text-accent text-[11px] font-bold uppercase tracking-wider mb-1">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28">
      <div className="section-container min-w-0">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Building Real AI Systems"
          subtitle="Case studies — problem, approach, challenge, and result."
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-surface shadow-lg shadow-accent/20'
                    : 'bg-white/5 text-body hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch min-w-0"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = iconMap[project.icon]
              const isLive = Boolean(project.liveUrl)
              const isCode = Boolean(project.githubUrl)

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="h-full min-w-0"
                >
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`glass-card p-5 sm:p-6 h-full flex flex-col group transition-all duration-300 hover:border-accent/30 min-w-0 ${
                      project.featured ? 'ring-1 ring-accent/10' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 flex-shrink-0 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-semibold text-base sm:text-lg leading-snug mb-1 group-hover:text-accent transition-colors break-words">
                          {project.title}
                        </h3>
                        <span className="text-xs text-body-muted uppercase tracking-wide">
                          {project.category === 'ai' ? 'AI / Agentic' : 'Full-Stack'}
                        </span>
                      </div>
                    </div>

                    <p className="text-body text-sm leading-6 mb-4">
                      {project.description}
                    </p>

                    <dl className="space-y-3 mb-4 flex-1">
                      <CaseStudyField label="Problem">
                        <p className="text-body text-sm leading-relaxed">{project.problem}</p>
                      </CaseStudyField>
                      <CaseStudyField label="Approach">
                        <p className="text-body text-sm leading-relaxed">{project.approach}</p>
                      </CaseStudyField>
                      <CaseStudyField label="Challenge">
                        <p className="text-body text-sm leading-relaxed">{project.challenge}</p>
                      </CaseStudyField>
                      <CaseStudyField label="Result">
                        <p className="text-body text-sm leading-relaxed">{project.result}</p>
                      </CaseStudyField>
                    </dl>

                    {(isLive || isCode) && (
                      <div className="flex flex-wrap items-center gap-2 mb-4 flex-shrink-0">
                        {isLive && <ProjectLinkBadge href={project.liveUrl} type="live" />}
                        {isCode && <ProjectLinkBadge href={project.githubUrl} type="code" />}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-auto flex-shrink-0">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
