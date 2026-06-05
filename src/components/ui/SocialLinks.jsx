import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Telegram: Send,
  Email: Mail,
}

export default function SocialLinks({ links, size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-9 w-9 [&_svg]:h-4 [&_svg]:w-4',
    md: 'h-10 w-10 [&_svg]:h-[18px] [&_svg]:w-[18px]',
    lg: 'h-11 w-11 [&_svg]:h-5 [&_svg]:w-5',
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((link, index) => {
        const Icon = iconMap[link.name] || Mail
        return (
          <motion.a
            key={link.name}
            href={link.href}
            aria-label={link.label}
            className={`glass flex items-center justify-center rounded-xl text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300 ${sizeClasses[size]}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon aria-hidden="true" />
          </motion.a>
        )
      })}
    </div>
  )
}
