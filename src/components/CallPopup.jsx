import { useEffect, useState } from 'react'
import { X, PhoneCall, Lock } from 'lucide-react'
import './CallPopup.css'

const COUNTDOWN_SECONDS = 15 * 60
const PHONE_NUMBER = '+919080808183'
const PHONE_DISPLAY = '+91 90808 08183'
const SHOW_DELAY_MS = 800

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function CallPopup({ trigger }) {
  const [visible, setVisible] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS)

  useEffect(() => {
    if (!trigger) return
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [trigger])

  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [visible])

  const close = () => setVisible(false)

  if (!visible) return null

  return (
    <div className="call-popup__backdrop" onClick={close}>
      <div className="call-popup__card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="call-popup__close" onClick={close} aria-label="Close">
          <X size={20} />
        </button>

        <div className="call-popup__badges">
          <span className="call-popup__badge call-popup__badge--urgent">
            <span className="call-popup__badge-dot" /> Limited Slots Only
          </span>
          <span className="call-popup__badge call-popup__badge--gold">Today Only</span>
        </div>

        <h2 className="call-popup__title">
          Call Now, Skip The <span>Wait</span>
        </h2>
        <p className="call-popup__subtitle">
          Talk to our wellness expert directly — book your free consultation before today&rsquo;s offer closes.
        </p>

        <div className="call-popup__offer">
          <span className="call-popup__offer-price">100% Free</span>
          <span className="call-popup__offer-label">Consultation Today Only</span>
        </div>

        <div className="call-popup__timer">
          <span>Offer Ends In</span>
          <strong>{formatTime(secondsLeft)}</strong>
        </div>

        <a href={`tel:${PHONE_NUMBER}`} className="call-popup__call-btn">
          <PhoneCall size={20} /> Call Now — {PHONE_DISPLAY}
        </a>

        <p className="call-popup__trust">Trichy&rsquo;s Trusted Wellness Clinic</p>
        <p className="call-popup__confidential">
          <Lock size={13} /> 100% Confidential · No Spam Calls, Ever
        </p>

        <button type="button" className="call-popup__dismiss" onClick={close}>
          No thanks, I&rsquo;ll browse
        </button>
      </div>
    </div>
  )
}

export default CallPopup
