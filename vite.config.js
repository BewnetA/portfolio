import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const plugins = [react()]

try {
  const tailwindcss = require('@tailwindcss/vite')
  plugins.push(tailwindcss.default())
} catch {
  // Tailwind loads via CDN in index.html until npm install completes
}

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      'framer-motion': path.resolve(__dirname, 'src/lib/motion.jsx'),
      'lucide-react': path.resolve(__dirname, 'src/lib/icons.jsx'),
    },
  },
})
