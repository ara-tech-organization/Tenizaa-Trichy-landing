import { CheckCircle2, PhoneCall } from 'lucide-react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__blob final-cta__blob--one" aria-hidden="true" />
      <div className="final-cta__blob final-cta__blob--two" aria-hidden="true" />

      <div className="container final-cta__inner">
        <Reveal as="div">
          <SplitText as="h2" parts={[{ text: 'Ready for Your Wellness & Aesthetic Transformation?' }]} />
          <p>
            Achieve your weight loss, skin, and hair goals with personalized guidance from certified
            wellness specialists. Book your free consultation today and take the first step.
          </p>
          <div className="final-cta__actions">
            <a href={pathForId('consult')} className="btn btn-light" onClick={(e) => handleSectionNavClick(e, 'consult')}>
              <CheckCircle2 size={18} /> Book Appointment
            </a>
            <a href="tel:+919080808183" className="btn btn-ghost">
              <PhoneCall size={18} /> Talk to Our Specialist
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCTA
