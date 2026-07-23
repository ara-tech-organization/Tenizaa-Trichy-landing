import { MapPin, PhoneCall, Mail, Heart } from 'lucide-react'
import logo from '../assets/tenzia logo.png'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons'
import './Footer.css'

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/tenziaaclinictrichy/', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/tenziaaclinictrichy/', Icon: InstagramIcon },
  { label: 'WhatsApp', href: 'https://wa.me/919080808183', Icon: WhatsAppIcon },
]

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Treatments', id: 'treatments' },
  { label: 'Gallery', id: 'results' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Branches', id: 'branches' },
  { label: 'Book Consultation', id: 'consult' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
          <p>Wellness &amp; aesthetic care for weight loss, skin &amp; hair in Trichy.</p>
          <div className="site-footer__socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__col">
          <h4>Quick Links</h4>
          <ul>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={pathForId(link.id)} onClick={(e) => handleSectionNavClick(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Get In Touch</h4>
          <ul>
            <li className="site-footer__contact">
              <MapPin size={16} />
              <span>NSA Arcade, D83, 8th Cross St, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018</span>
            </li>
            <li className="site-footer__contact">
              <PhoneCall size={16} />
              <a href="tel:+919080808183">090808 08183</a>
            </li>
            <li className="site-footer__contact">
              <Mail size={16} />
              <a href="mailto:tenziaaclinictrichy@gmail.com">tenziaaclinictrichy@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Tenziaa Wellness and Aesthetic Clinic. All rights reserved.</p>
          <a
            className="site-footer__credit"
            href="https://discovertechnologies.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafted with <Heart size={13} className="site-footer__heart" fill="currentColor" strokeWidth={0} /> by ARA Discover Technology
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
