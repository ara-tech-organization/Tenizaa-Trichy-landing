import { useState } from 'react'
import { CheckCircle2, Phone, ArrowRight, User, Smartphone, MapPin, CalendarDays, Sparkles } from 'lucide-react'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import { validateLeadForm } from '../utils/formValidation'
import { WhatsAppIcon } from './BrandIcons'
import SplitText from './SplitText'
import Eyebrow from './Eyebrow'
import './Hero.css'

const TITLE_PARTS = [
  { text: 'Trichy’s Wellness & Aesthetic Clinic for ' },
  { text: 'Weight Loss, Skin & Hair', grad: true },
]

const HIGHLIGHTS = [
  'Non-Surgical Weight Loss & Slimming',
  'Advanced Skin & Aesthetic Care',
  'Safe, Pain-Free Hair Treatments',
  'Certified Wellness Specialists',
]

function Hero() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const validationError = validateLeadForm(formData)
    if (validationError) {
      setError(validationError)
      return
    }

    const payload = {
      name: formData.get('name') || '-',
      city: formData.get('city') || '-',
      phone: formData.get('phone') || '-',
      date: formData.get('date') || new Date().toISOString().slice(0, 10),
      source: 'Website Form',
    }

    setError('')
    setSubmitting(true)

    try {
      const res = await fetch('https://trichy.tenziaa.com/api/email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Request failed')
      window.location.href = `${import.meta.env.BASE_URL}thank-you`
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="top" className="hero">
      <div className="hero__blob-layer" aria-hidden="true">
        <div className="hero__blob hero__blob--one" />
        <div className="hero__blob hero__blob--two" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <Eyebrow icon={<Sparkles size={14} />} text="Trichy’s Wellness & Aesthetic Clinic" />

          <SplitText as="h1" className="hero__title" parts={TITLE_PARTS} />


          <p className="hero__desc">
            Discover safe, pain-free slimming treatment in Trichy along with personalized skin and hair
            care, delivered by certified wellness specialists using advanced clinical technology.
          </p>

          <ul className="hero__highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} strokeWidth={2.4} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero__cta-row">
            <a href={pathForId('consult')} className="btn btn-primary" onClick={(e) => handleSectionNavClick(e, 'consult')}>
              Book Appointment <ArrowRight size={17} />
            </a>
            <a href="https://wa.me/919080808183" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <WhatsAppIcon width={17} height={17} /> WhatsApp Us
            </a>
            <a href="tel:+919080808183" className="btn btn-outline">
              <Phone size={17} /> Call Now
            </a>
          </div>
        </div>

        <div className="hero__form-wrap">
          <div className="hero__form-card">
            <div className="hero__form-glow" aria-hidden="true" />
            <h2>Start Your Weight Loss Journey Today</h2>
            <p>Fill in your details and our wellness expert will contact you within 30 minutes during clinic hours.</p>

            <form className="hero__form" onSubmit={handleSubmit}>
              <label className="hero__field">
                <User size={17} />
                <input type="text" name="name" placeholder="Full Name" pattern="[A-Za-z\s]+" title="Only letters are allowed" required />
              </label>
              <label className="hero__field">
                <Smartphone size={17} />
                <input type="tel" name="phone" placeholder="Mobile Number" required />
              </label>
              <label className="hero__field">
                <MapPin size={17} />
                <input type="text" name="city" placeholder="Enter your city" pattern="[A-Za-z\s]+" title="Only letters are allowed" required />
              </label>
              <label className="hero__field">
                <CalendarDays size={17} />
                <input type="date" name="date" required />
              </label>
              {error && <p className="hero__form-error">{error}</p>}
              <button type="submit" className="btn btn-primary hero__submit" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Get My Consultation'} <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
