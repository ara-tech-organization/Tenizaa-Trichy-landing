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
import FloatingSocial from './components/FloatingSocial'
import ThankYou from './components/ThankYou'
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
      <FloatingSocial />
    </>
  )
}

export default App
