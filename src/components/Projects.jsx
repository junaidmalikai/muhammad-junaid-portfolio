import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { projects, tagIcons } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'
import Icon from './ui/Icon'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / Agentic' },
  { id: 'fullstack', label: 'Full-Stack' },
]

function ProjectLinks({ liveUrl, githubUrl }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent/15 text-accent border border-accent/35 hover:bg-accent/25 focus-visible:outline-none"
        >
          <Icon name="ExternalLink" size={12} aria-hidden="true" />
          Live demo
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-body border border-white/15 hover:border-accent/35 hover:text-accent focus-visible:outline-none"
        >
          <Icon name="Github" size={12} aria-hidden="true" />
          GitHub
        </a>
      )}
    </div>
  )
}

function ProjectCard({ project, featured }) {
  const isAi = project.category === 'ai'

  return (
    <article
      className={`glass-card p-5 sm:p-6 h-full flex flex-col min-w-0 ${
        featured ? 'ring-1 ring-accent/20 border-accent/25' : ''
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4 mb-4 min-w-0">
        <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          <Icon name={project.icon} size={22} className="text-accent" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-white font-semibold text-base sm:text-lg leading-snug break-words">
              {project.title}
            </h3>
            {featured && (
              <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                Featured
              </span>
            )}
          </div>
          <p className="text-xs text-body-muted uppercase tracking-wide">
            {isAi ? 'AI / Agentic' : 'Full-Stack'}
          </p>
        </div>
      </div>

      <p className="text-body text-sm leading-6 mb-4">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {project.highlights.map((item) => (
            <li key={item} className="text-body text-sm flex items-start gap-2">
              <Icon
                name="CheckCircle2"
                size={14}
                className="text-accent mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      )}

      {(project.liveUrl || project.githubUrl) && (
        <div className="mb-4">
          <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="tag inline-flex items-center gap-1">
            <Icon name={tagIcons[tag] || 'Code'} size={11} aria-hidden="true" />
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const reduce = useReducedMotion()

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab)
  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28" aria-labelledby="projects-heading">
      <div className="section-container min-w-0">
        <SectionHeading
          icon="FolderOpen"
          eyebrow="Projects"
          title="Featured work"
          titleId="projects-heading"
          subtitle="Strongest AI systems first — RAG, multi-agent LangGraph, and production full-stack."
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10" role="tablist" aria-label="Filter projects">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-accent text-surface'
                    : 'bg-white/5 text-body hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <AnimatePresence mode="popLayout">
              {featured.map((project) => (
                <motion.div
                  key={project.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  className="h-full min-w-0"
                >
                  <ProjectCard project={project} featured />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {rest.length > 0 && (
          <>
            <h3 className="text-white font-semibold text-lg mb-4">More projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {rest.map((project) => (
                  <motion.div
                    key={project.id}
                    layout={!reduce}
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    className="h-full min-w-0"
                  >
                    <ProjectCard project={project} featured={false} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
