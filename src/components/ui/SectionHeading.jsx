import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-body max-w-2xl mx-auto text-base sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}

export function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
