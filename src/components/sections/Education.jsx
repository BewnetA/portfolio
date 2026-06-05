import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { education, trainings } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <AnimatedSection id="education" ariaLabelledby="education-heading">
      <SectionHeading
        label="Education"
        title="Education & Training"
        description="Academic background and professional development programs."
      />
      <h3 id="education-heading" className="sr-only">
        Education and Training
      </h3>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.article
          className="glass-card relative overflow-hidden p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <BookOpen size={24} aria-hidden="true" />
            </div>
            <h4 className="text-xl font-semibold text-white">
              {education.institution}
            </h4>
            <p className="mt-2 font-medium text-cyan-300">{education.degree}</p>
            <p className="mt-1 text-sm text-slate-500">{education.graduation}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {education.description}
            </p>
          </div>
        </motion.article>

        <div className="space-y-4">
          <h4 className="text-sm font-medium tracking-wide text-slate-500 uppercase">
            Training Programs
          </h4>
          {trainings.map((training, index) => (
            <motion.article
              key={training.title}
              className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ x: 4, borderColor: 'rgba(139, 92, 246, 0.3)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h5 className="text-lg font-semibold text-white">{training.title}</h5>
                <span className="text-xs text-slate-500">{training.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {training.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
