import { useState } from 'react'
import { CheckCircle2, Phone, ArrowRight, User, Smartphone, Clock4, Sparkles } from 'lucide-react'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './Hero.css'

const HIGHLIGHTS = [
  'Personalized Weight Loss Programs',
  'Non-Surgical Fat Reduction',
  'Expert Diet & Nutrition Guidance',
  'Body Composition Analysis (BCA)',
]

function Hero() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="top" className="hero">
      <div className="hero__blob hero__blob--one" aria-hidden="true" />
      <div className="hero__blob hero__blob--two" aria-hidden="true" />

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

            {submitted ? (
              <div className="hero__form-success">
                <CheckCircle2 size={40} strokeWidth={1.8} />
                <h3>Thank you!</h3>
                <p>Our wellness expert will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="hero__form" onSubmit={handleSubmit}>
                <label className="hero__field">
                  <User size={17} />
                  <input type="text" placeholder="Full Name" required />
                </label>
                <label className="hero__field">
                  <Smartphone size={17} />
                  <input type="tel" placeholder="Mobile Number" required />
                </label>
                <label className="hero__field">
                  <Clock4 size={17} />
                  <select defaultValue="">
                    <option value="" disabled>
                      Preferred Time
                    </option>
                    <option value="morning">Morning (9 AM &ndash; 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM &ndash; 4 PM)</option>
                    <option value="evening">Evening (4 PM &ndash; 8 PM)</option>
                  </select>
                </label>
                <button type="submit" className="btn btn-primary hero__submit">
                  Get My Consultation <ArrowRight size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
