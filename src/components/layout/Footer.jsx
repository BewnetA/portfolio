import { personalInfo, socialLinks } from '../../data/portfolioData'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-surface-900/50 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-white">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks links={socialLinks} size="sm" />
      </div>
    </footer>
  )
}
