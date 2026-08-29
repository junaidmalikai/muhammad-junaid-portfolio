import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { siteConfig } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'

const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim()
const useFormspree = Boolean(formspreeId) && formspreeId !== 'your_form_id_here'
const CONTACT_ENDPOINT = useFormspree
  ? `https://formspree.io/f/${formspreeId}`
  : `https://formsubmit.co/ajax/${siteConfig.email}`

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === 'error' || status === 'activate') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio contact from ${formState.name}`,
          _replyto: formState.email,
          _captcha: 'false',
        }),
      })

      const data = await response.json().catch(() => ({}))
      const payload = `${data.message || ''} ${data.error || ''}`.toLowerCase()
      const needsActivation = payload.includes('activation') || payload.includes('activate form')

      if (needsActivation) {
        setStatus('activate')
        return
      }

      const failed =
        !response.ok || data.success === false || data.success === 'false' || data.error

      if (failed) {
        throw new Error(data.error || data.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent pointer-events-none" />
      <div className="section-container relative min-w-0">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Email, phone, GitHub, LinkedIn — or send a message with the form."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto min-w-0">
          <ScrollReveal>
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col justify-center min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Let's build practical AI-powered applications
              </h3>
              <p className="text-body mb-6 sm:mb-8 leading-relaxed">
                Open to Associate / Junior AI Engineer roles working on Generative AI, RAG, LLMs,
                AI Agents, Python, and FastAPI.
              </p>

              <div className="space-y-4 min-w-0">
                <a
                  href={`mailto:${siteConfig.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-body hover:text-accent transition-colors group min-w-0"
                >
                  <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </span>
                  <span className="truncate">{siteConfig.email}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center gap-3 text-body hover:text-accent transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </span>
                  {siteConfig.phone}
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-body hover:text-accent transition-colors group min-w-0"
                >
                  <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Github size={18} className="text-accent" />
                  </span>
                  <span className="truncate">github.com/junaidmalikai</span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-body hover:text-accent transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Linkedin size={18} className="text-accent" />
                  </span>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 space-y-4 sm:space-y-5 min-w-0"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-body mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-body-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-body mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-body-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-body mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-body-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-accent text-sm flex items-center gap-2">
                  <CheckCircle size={14} className="flex-shrink-0" />
                  Thanks! Your message was sent successfully. I'll get back to you soon.
                </p>
              )}

              {status === 'activate' && (
                <p className="text-accent text-sm flex items-start gap-2">
                  <Mail size={14} className="flex-shrink-0 mt-0.5" />
                  Check {siteConfig.email} for an &quot;Activate Form&quot; email, click the link,
                  then submit again. This is a one-time step.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-400 text-sm flex items-start gap-2">
                  <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                  {errorMessage}
                </p>
              )}
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
