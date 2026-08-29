import { motion } from 'framer-motion'
import {
  Sparkles,
  Bot,
  Database,
  Workflow,
  Plug,
  Server,
  Layers,
} from 'lucide-react'
import { whatIBuild } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'

const iconMap = { Sparkles, Bot, Database, Workflow, Plug, Server, Layers }

export default function WhatIBuild() {
  return (
    <section id="build" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          eyebrow="What I Build"
          title="End-to-End AI Solutions"
          subtitle="From generative apps and RAG to agents, APIs, and automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whatIBuild.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-card p-6 h-full group cursor-default hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/20 transition-shadow">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
