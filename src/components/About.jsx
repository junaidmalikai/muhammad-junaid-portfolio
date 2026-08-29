import { aboutContent } from '../data/portfolio'
import { ScrollReveal } from './ui/SectionHeading'

function BioText({ text }) {
  const highlights = new Set([
    'Computer Science',
    'CGPA 3.89',
    'MS in Artificial Intelligence',
    'Generative AI',
    'RAG systems',
    'LLM applications',
    'AI Agents',
    'machine learning',
    'intelligent automation',
    'Associate/Junior AI Engineer',
  ])
  const pattern =
    /(Computer Science|CGPA 3\.89|MS in Artificial Intelligence|Generative AI|RAG systems|LLM applications|AI Agents|machine learning|intelligent automation|Associate\/Junior AI Engineer)/g
  const parts = text.split(pattern)

  return (
    <p className="text-body leading-relaxed text-base md:text-lg">
      {parts.map((part, i) =>
        highlights.has(part) ? (
          <strong key={i} className="text-white font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="section-container max-w-4xl">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            CS Graduate · MS AI · Building Real-World AI
          </h2>
          <p className="text-body text-base sm:text-lg mb-8 leading-relaxed">
            Focused on Generative AI, RAG, and full-stack AI development.
          </p>

          <div className="glass-card p-6 md:p-8">
            <BioText text={aboutContent.bio} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
