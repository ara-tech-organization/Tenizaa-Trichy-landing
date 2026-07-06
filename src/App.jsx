import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Programs from './components/Programs'
import Benefits from './components/Benefits'
import SeoContent from './components/SeoContent'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { idForPath, scrollToId } from './utils/sectionNav'

function App() {
  useEffect(() => {
    const id = idForPath(window.location.pathname)
    if (id !== 'top') {
      requestAnimationFrame(() => scrollToId(id, { replace: true, smooth: false }))
    }

    const onPopState = () => {
      scrollToId(idForPath(window.location.pathname), { replace: true, smooth: false })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Programs />
        <Benefits />
        <SeoContent />
        <Journey />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
