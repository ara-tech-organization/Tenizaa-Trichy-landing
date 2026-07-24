import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Treatments from './components/Treatments'
import WhyChooseUs from './components/WhyChooseUs'
import Machines from './components/Machines'
import Benefits from './components/Benefits'
import Journey from './components/Journey'
import Transformations from './components/Transformations'
import Testimonials from './components/Testimonials'
import VideoTestimonials from './components/VideoTestimonials'
import Branches from './components/Branches'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Consult from './components/Consult'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingSocial from './components/FloatingSocial'
import ThankYou from './components/ThankYou'
import Popup from './components/Popup'
import { idForPath, scrollToId } from './utils/sectionNav'

function App() {
  const isThankYou = window.location.pathname.replace(/\/$/, '').endsWith('/thank-you')

  useEffect(() => {
    if (isThankYou) return

    const id = idForPath(window.location.pathname)
    if (id !== 'top') {
      requestAnimationFrame(() => scrollToId(id, { replace: true, smooth: false }))
    }

    const onPopState = () => {
      scrollToId(idForPath(window.location.pathname), { replace: true, smooth: false })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [isThankYou])

  if (isThankYou) {
    return (
      <>
        <Header />
        <main>
          <ThankYou />
        </main>
        <Footer />
        <FloatingSocial />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Machines />
        <Benefits />
        <Journey />
        <Transformations />
        <Testimonials />
        <VideoTestimonials />
        <Branches />
        <FAQ />
        <FinalCTA />
        <Consult />
        <Contact />
      </main>
      <Footer />
      <FloatingSocial />
      <Popup />
    </>
  )
}

export default App
