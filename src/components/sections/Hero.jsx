import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import Button from '../ui/Button'
import SocialLinks from '../ui/SocialLinks'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_50%)]" />
      </div>

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-cyan-400 uppercase">
            Welcome
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-300 sm:text-xl">
            {personalInfo.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            {personalInfo.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={personalInfo.resumeUrl} external>
              <Download size={18} aria-hidden="true" />
              Download Resume
            </Button>
            <Button variant="secondary" href="https://t.me/bewnet">
              Contact Me
            </Button>
          </div>

          <SocialLinks links={socialLinks} className="mt-10" />
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-transparent blur-2xl" />
            <div className="glass glow-ring relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-white/10">
              <div className="h-[88%] w-[88%] overflow-hidden rounded-full">
                <img
                  src="/profile.jpg"
                  alt="Bewnet Addisalem"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="glass absolute -right-2 bottom-8 rounded-2xl px-4 py-3 sm:right-0"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs text-slate-500">Available for</p>
              <p className="text-sm font-semibold text-white">Freelance & Projects</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 hover:text-cyan-400"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  )
}
