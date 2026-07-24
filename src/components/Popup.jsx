import { useEffect, useState } from 'react'
import { X, ArrowRight, User, Smartphone, MapPin, CalendarDays, Sparkles } from 'lucide-react'
import { validateLeadForm } from '../utils/formValidation'
import './Popup.css'

const TODAY = new Date().toISOString().slice(0, 10)

// Any component can open the appointment popup by firing this on `window`.
export const OPEN_APPOINTMENT = 'tenziaa:open-appointment'

function Popup() {
  const [visible, setVisible] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  // Opened on demand by the floating "Contact Us" tab. Reset back to the form
  // so a reopen after a successful submit isn't stuck on the thank-you state.
  useEffect(() => {
    const open = () => {
      setSuccess(false)
      setError('')
      setVisible(true)
    }
    window.addEventListener(OPEN_APPOINTMENT, open)
    return () => window.removeEventListener(OPEN_APPOINTMENT, open)
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
            <h2>Book Your Appointment</h2>
            <p>Leave your details and our wellness expert will call you back to confirm your slot.</p>

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
                {/* min = today, so a past appointment date can't be picked */}
                <input
                  type="date"
                  name="date"
                  min={TODAY}
                  aria-label="Preferred appointment date"
                  required
                />
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
