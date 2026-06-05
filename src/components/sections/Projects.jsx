import { projects } from '../../data/portfolioData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="bg-surface-900/40"
      ariaLabelledby="projects-heading"
    >
      <SectionHeading
        label="Projects"
        title="Featured Projects"
        description="A selection of software engineering and machine learning work."
      />
      <h3 id="projects-heading" className="sr-only">
        Projects
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  )
}
