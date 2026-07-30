import { CalendarCheck, Phone } from 'lucide-react'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './MobileCTABar.css'

function MobileCTABar() {
  return (
    <>
      <div className="mobile-cta-bar__spacer" aria-hidden="true" />
      <div className="mobile-cta-bar">
        <a href="tel:+919080808183" className="mobile-cta-bar__btn mobile-cta-bar__btn--call">
          <Phone size={18} />
          Call Now
        </a>
        <a
          href={pathForId('consult')}
          className="mobile-cta-bar__btn mobile-cta-bar__btn--book"
          onClick={(e) => {
            // On pages without the form (thank-you), fall through to a real navigation.
            if (document.getElementById('consult')) handleSectionNavClick(e, 'consult')
          }}
        >
          <CalendarCheck size={18} />
          Book Appointment
        </a>
      </div>
    </>
  )
}

export default MobileCTABar
