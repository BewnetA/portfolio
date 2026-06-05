import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Button from '../ui/Button'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="glass-card group flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-surface-800 to-surface-900">
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm text-slate-500">[PROJECT IMAGE PLACEHOLDER]</span>
        )}
        {project.featured && (
          <span className="absolute top-4 left-4 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-xl font-semibold text-white">{project.title}</h4>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={project.liveUrl} variant="secondary" className="text-xs">
            <ExternalLink size={16} aria-hidden="true" />
            Live Demo
          </Button>
          <Button href={project.githubUrl} variant="ghost" className="text-xs" external>
            <Github size={16} aria-hidden="true" />
            GitHub
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
