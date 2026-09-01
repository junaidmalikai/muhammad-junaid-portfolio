import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  icon,
  titleId,
  className = '',
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className={`text-center mb-10 md:mb-14 ${className}`}
    >
      {eyebrow && (
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 inline-flex items-center justify-center gap-2 w-full">
          {icon && <Icon name={icon} size={14} aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h2 id={titleId} className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body max-w-2xl mx-auto text-base sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}

export function ScrollReveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: reduce ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
