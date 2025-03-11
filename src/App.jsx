import './App.css'
import About from './components/About'
import Contact from './components/contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Work from './components/LatestWork'
import Navbar from './components/Navbar'
import Skills from './components/skills'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
      {/* <ContactUs/> */}
      
  
    </>
  )
}

export default App
