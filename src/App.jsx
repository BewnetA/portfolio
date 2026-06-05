import { useState } from 'react'
import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
