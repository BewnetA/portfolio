import { motion } from 'framer-motion'

export default function AnimatedSection({
  id,
  children,
  className = '',
  ariaLabelledby,
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`section-padding ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">{children}</div>
    </motion.section>
  )
}
