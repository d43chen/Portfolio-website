import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
