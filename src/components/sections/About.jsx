import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, User } from 'lucide-react'
import { personalInfo, quickFacts } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const factIcons = {
  Location: MapPin,
  Education: GraduationCap,
  Experience: Briefcase,
  Focus: User,
}

export default function About() {
  return (
    <AnimatedSection id="about" ariaLabelledby="about-heading">
      <SectionHeading
        label="About"
        title="About Me"
        description="Get to know my background, journey, and what drives my work."
      />

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card glow-ring mx-auto aspect-[4/5] max-w-sm overflow-hidden p-1 lg:mx-0">
            <div className="h-full w-full overflow-hidden rounded-[14px] bg-gradient-to-br from-surface-800 to-surface-900">
              <img
                src="/profile.jpg"
                alt="Bewnet Addisalem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 id="about-heading" className="sr-only">
            About Me
          </h3>
          <p className="whitespace-pre-line text-lg leading-relaxed text-slate-300">
            {personalInfo.about}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {quickFacts.map((fact, index) => {
              const Icon = factIcons[fact.label] || User
              return (
                <motion.div
                  key={fact.label}
                  className="glass-card flex items-start gap-4 p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, borderColor: 'rgba(34, 211, 238, 0.2)' }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-medium text-white">{fact.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
