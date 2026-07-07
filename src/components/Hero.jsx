import { useState } from 'react'
import { CheckCircle2, Phone, ArrowRight, User, Smartphone, MapPin, CalendarDays, Sparkles } from 'lucide-react'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import { validateLeadForm } from '../utils/formValidation'
import TimePicker from './TimePicker'
import './Hero.css'

const HIGHLIGHTS = [
  'Personalized Weight Loss Programs',
  'Non-Surgical Fat Reduction',
  'Expert Diet & Nutrition Guidance',
  'Body Composition Analysis (BCA)',
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
      time: formData.get('time') || '-',
      treatment: '-',
      message: '-',
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
          <span className="eyebrow">
            <Sparkles size={14} /> Trichy&rsquo;s Trusted Wellness Clinic
          </span>

          <h1 className="hero__title">
            Best Weight Loss Clinic in Trichy for <span>Personalized Weight Loss &amp; Wellness</span>
          </h1>

          <p className="hero__desc">
            Looking for a trusted Weight Loss Clinic in Trichy? At Tenziaa Wellness Clinic, we help you
            achieve sustainable weight loss with personalized diet plans, non-surgical fat reduction
            programs, body composition analysis, and expert wellness guidance&mdash;designed around your
            body, lifestyle, and health goals.
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
              Book Your Free Consultation <ArrowRight size={17} />
            </a>
            <a href="tel:+919080808183" className="btn btn-outline">
              <Phone size={17} /> Call Our Wellness Experts
            </a>
          </div>
        </div>

        <div className="hero__form-wrap" id="consult">
          <div className="hero__form-card">
            <div className="hero__form-glow" aria-hidden="true" />
            <h2>Start Your Weight Loss Journey Today</h2>
            <p>Fill in your details and our wellness expert will contact you within 30 minutes during clinic hours.</p>

            <form className="hero__form" onSubmit={handleSubmit}>
              <label className="hero__field">
                <User size={17} />
                <input type="text" name="name" placeholder="Full Name" required />
              </label>
              <label className="hero__field">
                <Smartphone size={17} />
                <input type="tel" name="phone" placeholder="Mobile Number" required />
              </label>
              <label className="hero__field">
                <MapPin size={17} />
                <input type="text" name="city" placeholder="City" required />
              </label>
              <label className="hero__field">
                <CalendarDays size={17} />
                <input type="date" name="date" required />
              </label>
              <TimePicker required />
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
