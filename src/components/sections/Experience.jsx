import { motion } from 'framer-motion'
import { experiences } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <AnimatedSection id="experience" ariaLabelledby="experience-heading">
      <SectionHeading
        label="Experience"
        title="Work Experience"
        description="Professional roles and hands-on project experience across software and machine learning."
      />
      <h3 id="experience-heading" className="sr-only">
        Experience
      </h3>

      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent"
          aria-hidden="true"
        />

        <ul className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.li
              key={exp.title}
              className="relative pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span
                className="absolute top-6 left-2.5 z-10 h-3 w-3 rounded-full border-2 border-cyan-400 bg-surface-950"
                aria-hidden="true"
              />

              <motion.article
                className="glass-card p-6"
                whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(34, 211, 238, 0.15)' }}
              >
                <p className="text-sm font-medium text-cyan-400">{exp.period}</p>
                <h4 className="mt-2 text-xl font-semibold text-white">{exp.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </motion.li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}
