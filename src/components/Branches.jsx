import { MapPin, PhoneCall, Clock, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './Branches.css'

const MAP_SRC =
  'https://www.google.com/maps?q=Tenziaa%20Wellness%20%26%20Aesthetic%20Clinic%2C%20NSA%20Arcade%2C%20Thillai%20Nagar%2C%20Tiruchirappalli&output=embed'

function Branches() {
  return (
    <section id="branches" className="branches has-decor">
      <SectionDecor variant="c" />
      <div className="container">
        <SectionHead
          eyebrow="Visit Us in Trichy"
          title="Our Branch in Thillai Nagar"
          desc={<>Conveniently located and easily accessible across Trichy &mdash; walk in or book ahead.</>}
        />

        <div className="branches__layout">
          <Reveal as="div" dir="left" className="branches__card">
            <h3>Tenziaa Wellness &amp; Aesthetic Clinic, Trichy</h3>

            <ul className="branches__info">
              <li>
                <span className="branches__info-icon"><MapPin size={18} /></span>
                <span>NSA Arcade, D83, 8th Cross St, Thillai Nagar, W, Tiruchirappalli, Tamil Nadu 620018</span>
              </li>
              <li>
                <span className="branches__info-icon"><PhoneCall size={18} /></span>
                <a href="tel:+919080808183">+91 90808 08183</a>
              </li>
              <li>
                <span className="branches__info-icon"><Clock size={18} /></span>
                <span>Open Mon&ndash;Sun &middot; 10:00 AM &ndash; 8:00 PM</span>
              </li>
            </ul>

            <div className="branches__actions">
              <a href={pathForId('consult')} className="btn btn-primary" onClick={(e) => handleSectionNavClick(e, 'consult')}>
                Book Appointment <ArrowRight size={17} />
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Tenziaa+Wellness+%26+Aesthetic+Clinic+NSA+Arcade+Thillai+Nagar+Tiruchirappalli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MapPin size={17} /> Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal as="div" dir="right" className="branches__map">
            <iframe
              title="Tenziaa Wellness & Aesthetic Clinic, Trichy location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Branches
