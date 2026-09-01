import { useState } from 'react'
import { motion } from 'framer-motion'
import { openToRoles, siteConfig } from '../data/portfolio'
import SectionHeading, { ScrollReveal } from './ui/SectionHeading'
import Icon from './ui/Icon'

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
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative" aria-labelledby="contact-heading">
      <div className="section-container relative min-w-0">
        <SectionHeading
          icon="Mail"
          eyebrow="Contact"
          title="Interested in building AI-powered products? Let's connect."
          titleId="contact-heading"
          subtitle={siteConfig.careerObjective}
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
            {openToRoles.map((role) => (
              <span
                key={role.name}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card text-body font-medium"
              >
                <Icon name={role.icon} size={16} className="text-accent" aria-hidden="true" />
                {role.name}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto min-w-0">
          <ScrollReveal>
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col justify-center min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
                Hire or collaborate
              </h3>

              <ul className="space-y-4 min-w-0">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-body hover:text-accent transition-colors group min-w-0"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={18} className="text-accent" aria-hidden="true" />
                    </span>
                    <span className="truncate">{siteConfig.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="flex items-center gap-3 text-body hover:text-accent transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={18} className="text-accent" aria-hidden="true" />
                    </span>
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body hover:text-accent transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Linkedin" size={18} className="text-accent" aria-hidden="true" />
                    </span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body hover:text-accent transition-colors group min-w-0"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Github" size={18} className="text-accent" aria-hidden="true" />
                    </span>
                    <span className="truncate">{siteConfig.githubHandle}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.resumeUrl}
                    download={siteConfig.resumeFileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body hover:text-accent transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileDown" size={18} className="text-accent" aria-hidden="true" />
                    </span>
                    Download resume
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 space-y-4 sm:space-y-5 min-w-0"
              noValidate={false}
            >
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm text-body mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-body-muted focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm text-body mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-body-muted focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm text-body mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-body-muted focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
                  placeholder="Role, team, or project details"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === 'sending' ? (
                  <>
                    <Icon name="Loader2" size={18} className="animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <Icon name="CheckCircle" size={18} aria-hidden="true" />
                    Message sent
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={18} aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-accent text-sm" role="status">
                  Thanks — your message was sent. I will get back to you soon.
                </p>
              )}

              {status === 'activate' && (
                <p className="text-accent text-sm" role="status">
                  Check {siteConfig.email} for an Activate Form email, click the link, then submit
                  again. This is a one-time step.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-400 text-sm" role="alert">
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
