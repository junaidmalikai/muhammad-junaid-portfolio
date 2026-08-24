import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIBuild from './components/WhatIBuild'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import OpenTo from './components/OpenTo'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 bg-grid-pattern bg-[length:40px_40px] pointer-events-none opacity-50"
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <OpenTo />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
