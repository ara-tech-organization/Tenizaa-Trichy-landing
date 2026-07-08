import { useEffect, useState } from 'react'
import { X, ArrowRight, User, Smartphone, MapPin, CalendarDays, Sparkles } from 'lucide-react'
import { validateLeadForm } from '../utils/formValidation'
import './Popup.css'

function Popup() {
  const [visible, setVisible] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const close = () => setVisible(false)

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
      treatment: '-',
      message: '-',
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
      setSuccess(true)
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

        {success ? (
          <div className="popup__success">
            <h3>Thank You!</h3>
            <p>Our wellness expert will contact you shortly.</p>
          </div>
        ) : (
          <>
            <span className="eyebrow popup__eyebrow">
              <Sparkles size={14} /> Trichy&rsquo;s Trusted Wellness Clinic
            </span>
            <h2>Start Your Weight Loss Journey Today</h2>
            <p>Leave your details and our wellness expert will call you back.</p>

            <form className="popup__form" onSubmit={handleSubmit}>
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
                <input type="text" name="city" placeholder="Enter your city" required />
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
          </>
        )}
      </div>
    </div>
  )
}

export default Popup
