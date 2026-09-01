import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div
        className="fixed inset-0 bg-grid-pattern bg-[length:40px_40px] pointer-events-none opacity-30"
        aria-hidden="true"
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
