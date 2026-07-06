import { MapPin, PhoneCall, Mail, Instagram, Heart } from 'lucide-react'
import logo from '../assets/tenzia logo.png'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './Footer.css'

const LINKS = [
  { label: 'Why Us', id: 'why-us' },
  { label: 'Programs', id: 'programs' },
  { label: 'Journey', id: 'journey' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'FAQ', id: 'faq' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
          <p>Personalized weight loss &amp; wellness programs in Trichy.</p>
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
            <li className="site-footer__contact">
              <Instagram size={16} />
              <a href="https://www.instagram.com/tenziaaclinictrichy/" target="_blank" rel="noopener noreferrer">
                @tenziaaclinictrichy
              </a>
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
