import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/tenzia logo.png'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './Header.css'

const NAV_LINKS = [
  { label: 'Why Us', id: 'why-us' },
  { label: 'Programs', id: 'programs' },
  { label: 'Journey', id: 'journey' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'FAQ', id: 'faq' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="/" className="site-header__logo" onClick={(e) => handleSectionNavClick(e, 'top')}>
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
        </a>

        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={pathForId(link.id)}
              className={activeId === link.id ? 'is-active' : ''}
              onClick={(e) => handleSectionNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href="tel:+919080808183" className="site-header__call">
            <Phone size={16} />
            <span className="site-header__call-number">090808 08183</span>
          </a>
          <a
            href={pathForId('consult')}
            className="btn btn-primary site-header__cta"
            onClick={(e) => handleSectionNavClick(e, 'consult')}
          >
            Book a Consultation
          </a>
          <button
            type="button"
            className="site-header__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="site-header__mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={pathForId(link.id)}
              onClick={(e) => {
                handleSectionNavClick(e, link.id)
                setOpen(false)
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919080808183" className="site-header__mobile-call">
            <Phone size={16} />
            Trichy: 090808 08183
          </a>
          <a
            href={pathForId('consult')}
            className="btn btn-primary"
            onClick={(e) => {
              handleSectionNavClick(e, 'consult')
              setOpen(false)
            }}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
