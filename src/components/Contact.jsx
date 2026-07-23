import { PhoneCall, Mail, Clock, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons'
import './Contact.css'

const CARDS = [
  {
    icon: PhoneCall,
    label: 'Call Us',
    value: '+91 90808 08183',
    href: 'tel:+919080808183',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/919080808183',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'tenziaaclinictrichy@gmail.com',
    href: 'mailto:tenziaaclinictrichy@gmail.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sun · 10 AM – 8 PM',
  },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/tenziaaclinictrichy/', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/tenziaaclinictrichy/', Icon: FacebookIcon },
  { label: 'WhatsApp', href: 'https://wa.me/919080808183', Icon: WhatsAppIcon },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHead
          eyebrow="Contact Us"
          title="Get in Touch with Tenziaa Trichy"
          desc={<>We&rsquo;re here to help &mdash; reach out by phone, WhatsApp, or email, or visit us in Thillai Nagar.</>}
        />

        <div className="contact__grid">
          {CARDS.map(({ icon: Icon, label, value, href, external }, i) => {
            const dir = i % 4 === 0 ? 'left' : i % 4 === 3 ? 'right' : 'up'
            const delay = (i % 4) * 110
            const inner = (
              <>
                <span className="contact__icon"><Icon size={22} /></span>
                <span className="contact__label">{label}</span>
                <span className="contact__value">{value}</span>
              </>
            )
            return href ? (
              <Reveal
                as="a"
                key={label}
                dir={dir}
                delay={delay}
                className="contact__card"
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {inner}
              </Reveal>
            ) : (
              <Reveal as="div" key={label} dir={dir} delay={delay} className="contact__card">{inner}</Reveal>
            )
          })}
        </div>

        <Reveal as="div" className="contact__bar">
          <p className="contact__address">
            <MapPin size={17} /> NSA Arcade, D83, 8th Cross St, Thillai Nagar, W, Tiruchirappalli, Tamil Nadu 620018
          </p>
          <div className="contact__socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
