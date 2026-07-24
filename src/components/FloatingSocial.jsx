import { useEffect, useState } from 'react'
import { ArrowUp, Mail, Phone } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'
import { OPEN_APPOINTMENT } from './Popup'
import './FloatingSocial.css'

function FloatingSocial() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fdock" aria-label="Quick contact">
      <button
        type="button"
        className={`fdock__top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={18} />
      </button>

      <button
        type="button"
        className="fdock__contact"
        onClick={() => window.dispatchEvent(new Event(OPEN_APPOINTMENT))}
        aria-label="Book your appointment"
      >
        <Mail size={17} />
        <span className="fdock__contact-text">Contact Us</span>
      </button>

      <a href="tel:+919080808183" className="fdock__btn fdock__btn--call" aria-label="Call us">
        <Phone size={20} />
      </a>

      <a
        href="https://wa.me/919080808183"
        target="_blank"
        rel="noopener noreferrer"
        className="fdock__btn fdock__btn--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon width={22} height={22} />
      </a>
    </div>
  )
}

export default FloatingSocial
