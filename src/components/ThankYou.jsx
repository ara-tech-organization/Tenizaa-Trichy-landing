import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react'
import './ThankYou.css'

function ThankYou() {
  return (
    <section className="thank-you">
      <div className="container thank-you__inner">
        <div className="thank-you__icon">
          <CheckCircle2 size={48} strokeWidth={1.6} />
        </div>
        <h1>Thank You!</h1>
        <p>
          Your consultation request has been received. Our wellness expert will contact you within
          30 minutes during clinic hours.
        </p>
        <div className="thank-you__actions">
          <a href="/" className="btn btn-primary">
            <ArrowLeft size={17} /> Back to Home
          </a>
          <a href="tel:+919080808183" className="btn btn-outline">
            <Phone size={17} /> Call Our Wellness Experts
          </a>
        </div>
      </div>
    </section>
  )
}

export default ThankYou
