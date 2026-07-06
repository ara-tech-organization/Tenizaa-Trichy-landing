import { Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons'
import './FloatingSocial.css'

const ACTIONS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61566230756429', Icon: FacebookIcon, external: true },
  { label: 'Call Us', href: 'tel:+919080808183', Icon: Phone, external: false },
  { label: 'WhatsApp', href: 'https://wa.me/919080808183', Icon: WhatsAppIcon, external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/tenziaaclinictrichy/', Icon: InstagramIcon, external: true },
]

function FloatingSocial() {
  return (
    <div className="floating-social">
      {ACTIONS.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="floating-social__btn"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

export default FloatingSocial
