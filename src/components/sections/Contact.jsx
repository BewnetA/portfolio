import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { contactLinks, personalInfo } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const contactIconMap = {
  Email: Mail,
  Phone: Phone,
  LinkedIn: Linkedin,
  GitHub: Github,
  Telegram: Send,
}

const contactAccentMap = {
  Email: 'text-cyan-400',
  Phone: 'text-violet-400',
  LinkedIn: 'text-sky-400',
  GitHub: 'text-slate-200',
  Telegram: 'text-emerald-400',
}

export default function Contact() {
  return (
    <AnimatedSection id="contact" ariaLabelledby="contact-heading">
      <SectionHeading
        label="Contact"
        title="Get In Touch"
        description="Reach out through any of the channels below — I'd love to hear from you."
      />
      <h3 id="contact-heading" className="sr-only">
        Contact
      </h3>

      <motion.div
        className="glass-card mx-auto max-w-4xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => {
            const Icon = contactIconMap[link.label] || Mail
            const accent = contactAccentMap[link.label] || 'text-cyan-400'

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : undefined}
                rel={
                  link.label !== 'Email' && link.label !== 'Phone'
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan-400/30 hover:bg-white/10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-surface-900/60 ${accent}`}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    {link.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-white transition-colors group-hover:text-cyan-300">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Prefer email? Write to{' '}
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-medium text-cyan-300 transition-colors hover:text-cyan-200"
          >
            {personalInfo.email}
          </a>
        </p>
      </motion.div>
    </AnimatedSection>
  )
}
