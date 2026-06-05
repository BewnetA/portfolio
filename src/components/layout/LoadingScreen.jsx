import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onComplete?.()
    }, 1400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="relative flex h-20 w-20 items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute inset-0 rounded-full border border-cyan-500/30" />
            <span
              className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-violet-500"
              aria-hidden="true"
            />
            <span className="text-lg font-bold text-gradient">P</span>
          </motion.div>
          <motion.p
            className="mt-6 text-sm tracking-[0.25em] text-slate-500 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
