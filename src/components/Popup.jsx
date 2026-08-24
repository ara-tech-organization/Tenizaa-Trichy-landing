import { useEffect, useState } from 'react'
import { X, ArrowRight, User, Smartphone, MapPin, CalendarDays, Sparkles } from 'lucide-react'
import { validateLeadForm } from '../utils/formValidation'
import './Popup.css'

function Popup({ onDismiss }) {
  const [visible, setVisible] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setVisible(false)
    onDismiss?.(false)
  }

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
      phone: formData.get('phone') || '-',
      city: formData.get('city') || '-',
      date: formData.get('date') || new Date().toISOString().slice(0, 10),
      source: 'Popup Form',
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

  if (!visible) return null

  return (
    <div className="popup__backdrop" onClick={close}>
      <div className="popup__card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="popup__close" onClick={close} aria-label="Close">
          <X size={20} />
        </button>

        <span className="eyebrow popup__eyebrow">
          <Sparkles size={14} /> Trichy&rsquo;s Trusted Wellness Clinic
        </span>
        <h2>Start Your Weight Loss Journey Today</h2>
        <p>Leave your details and our wellness expert will call you back.</p>

        <form className="popup__form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary popup__submit" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Get My Consultation'} <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup
