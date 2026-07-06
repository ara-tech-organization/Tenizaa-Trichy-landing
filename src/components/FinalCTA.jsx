import { CheckCircle2, PhoneCall } from 'lucide-react'
import Reveal from './Reveal'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__blob final-cta__blob--one" aria-hidden="true" />
      <div className="final-cta__blob final-cta__blob--two" aria-hidden="true" />

      <div className="container final-cta__inner">
        <Reveal as="div">
          <h2>Ready to Start Your Weight Loss Journey?</h2>
          <p>
            Achieve your health goals with personalized guidance from experienced wellness professionals.
            Book your free consultation today and take the first step toward a healthier lifestyle.
          </p>
          <div className="final-cta__actions">
            <a href={pathForId('consult')} className="btn btn-light" onClick={(e) => handleSectionNavClick(e, 'consult')}>
              <CheckCircle2 size={18} /> Book Your Free Consultation
            </a>
            <a href="tel:+919080808183" className="btn btn-ghost">
              <PhoneCall size={18} /> Talk to Our Wellness Expert
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCTA
