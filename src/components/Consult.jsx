import { useState } from 'react'
import { User, Smartphone, Mail, MapPin, Stethoscope, Building2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Eyebrow from './Eyebrow'
import CustomSelect from './CustomSelect'
import SectionDecor from './SectionDecor'
import { validateLeadForm } from '../utils/formValidation'
import './Consult.css'

const TREATMENTS = [
  'Weight Loss Programs',
  'Slimming Treatments',
  'Body Contouring',
  'Fat Reduction',
  'Inch Loss Program',
  'Weight Management Program',
  'Diet & Nutrition Consultation',
  'Lifestyle Coaching',
  'Skin & Hair Care Program',
]

const BRANCHES = ['Trichy — Thillai Nagar', 'Salem', 'Dharmapuri']

function Consult() {
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

    // Custom dropdowns submit via hidden inputs, so validate them here.
    if (!formData.get('treatment')) {
      setError('Please select the treatment you are interested in.')
      return
    }
    if (!formData.get('branch')) {
      setError('Please select your preferred branch.')
      return
    }

    // Same API concept as the existing forms — endpoint and core fields unchanged.
    const payload = {
      name: formData.get('name') || '-',
      phone: formData.get('phone') || '-',
      city: formData.get('city') || '-',
      date: new Date().toISOString().slice(0, 10),
      source: 'Consultation Form',
      email: formData.get('email') || '-',
      treatment: formData.get('treatment') || '-',
      branch: formData.get('branch') || '-',
      message: formData.get('message') || '-',
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
    <section id="consult" className="consult has-decor">
      <SectionDecor variant="n" />
      <div className="consult__blob consult__blob--one" aria-hidden="true" />
      <div className="consult__blob consult__blob--two" aria-hidden="true" />

      <div className="container consult__inner">
        <Reveal as="div" dir="left" className="consult__copy">
          <Eyebrow icon={<Sparkles size={14} />} className="eyebrow--accent" text="Book Your Free Consultation" />
          <SplitText as="h2" parts={[{ text: 'Start Your Wellness & Aesthetic Journey' }]} />
          <p>
            Share a few details and our certified wellness specialists will get in touch to plan your
            personalized weight loss, skin, or hair treatment in Trichy.
          </p>

          <ul className="consult__points">
            <li>Free, no-obligation consultation</li>
            <li>Personalized diagnostic assessment</li>
            <li>Guided by certified specialists</li>
          </ul>
        </Reveal>

        <Reveal as="div" dir="right" className="consult__form-card">
          <form className="consult__form" onSubmit={handleSubmit}>
            <div className="consult__row">
              <label className="hero__field">
                <User size={17} />
                <input type="text" name="name" placeholder="Name" pattern="[A-Za-z\s]+" title="Only letters are allowed" required />
              </label>
              <label className="hero__field">
                <Smartphone size={17} />
                <input type="tel" name="phone" placeholder="Mobile Number" required />
              </label>
            </div>

            <div className="consult__row">
              <label className="hero__field">
                <Mail size={17} />
                <input type="email" name="email" placeholder="Email" required />
              </label>
              <label className="hero__field">
                <MapPin size={17} />
                <input type="text" name="city" placeholder="City" pattern="[A-Za-z\s]+" title="Only letters are allowed" required />
              </label>
            </div>

            <div className="consult__row">
              <CustomSelect
                name="treatment"
                options={TREATMENTS}
                placeholder="Treatment Interested In"
                icon={<Stethoscope size={17} />}
              />
              <CustomSelect
                name="branch"
                options={BRANCHES}
                placeholder="Preferred Branch"
                icon={<Building2 size={17} />}
              />
            </div>

            <label className="hero__field hero__field--textarea">
              <MessageSquare size={17} />
              <textarea name="message" placeholder="Message (optional)" rows={3} />
            </label>

            {error && <p className="hero__form-error">{error}</p>}

            <button type="submit" className="btn btn-primary consult__submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Book Your Free Consultation'} <ArrowRight size={17} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Consult
