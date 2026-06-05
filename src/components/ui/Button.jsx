import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10',
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  download,
  external,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}
