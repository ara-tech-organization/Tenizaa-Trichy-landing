import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'
import './FloatingSocial.css'

function FloatingSocial() {
  return (
    <>
      <a href="tel:+919080808183" aria-label="Call Us" className="floating-social floating-social--left floating-social--call">
        <Phone size={22} />
      </a>
      <a
        href="https://wa.me/919080808183"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="floating-social floating-social--right floating-social--whatsapp"
      >
        <WhatsAppIcon width={26} height={26} />
      </a>
    </>
  )
}

export default FloatingSocial
