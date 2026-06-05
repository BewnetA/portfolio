import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { certifications } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Certifications() {
  return (
    <AnimatedSection
      id="certifications"
      className="bg-surface-900/40"
      ariaLabelledby="certifications-heading"
    >
      <SectionHeading
        label="Certifications"
        title="Certifications"
        description="Professional credentials and completed certification programs."
      />
      <h3 id="certifications-heading" className="sr-only">
        Certifications
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.a
            key={`${cert.title}-${index}`}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group block overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            whileHover={{ y: -6, scale: 1.02 }}
            aria-label={`View ${cert.title} certificate`}
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-amber-500/10 via-surface-800 to-violet-500/10">
              <Award
                className="text-slate-600 transition-colors group-hover:text-amber-400/60"
                size={48}
                aria-hidden="true"
              />
              <span className="sr-only">Certificate image placeholder</span>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-white">{cert.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{cert.organization}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                {cert.date}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  )
}
