import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="bg-surface-900/40"
      ariaLabelledby="skills-heading"
    >
      <SectionHeading
        label="Skills"
        title="Technical Expertise"
        description="Technologies and tools I use to build scalable software and intelligent systems."
      />
      <h3 id="skills-heading" className="sr-only">
        Skills
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            className={`glass-card group relative overflow-hidden p-6 ${category.border}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${category.accent}`}
            />
            <div className="relative">
              <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-white/20 group-hover:text-white">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
