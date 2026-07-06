import { UserCheck, GraduationCap, ShieldCheck, ScanLine, LineChart, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import './WhyChooseUs.css'

const REASONS = [
  {
    icon: UserCheck,
    title: 'Personalized Weight Loss Programs',
    desc: 'Every treatment plan is customized based on your body composition, metabolism, lifestyle, and weight loss goals.',
  },
  {
    icon: GraduationCap,
    title: 'Experienced Wellness & Nutrition Experts',
    desc: 'Our qualified wellness professionals and dieticians guide you with practical nutrition advice and continuous motivation throughout your journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Non-Surgical Fat Reduction',
    desc: 'Achieve visible fat and inch loss through non-invasive wellness solutions without surgery or extended recovery time.',
  },
  {
    icon: ScanLine,
    title: 'Body Composition Analysis (BCA)',
    desc: 'Understand your body better with detailed analysis of body fat percentage, muscle mass, BMI, and hydration levels before starting your program.',
  },
  {
    icon: LineChart,
    title: 'Continuous Progress Monitoring',
    desc: 'Track your progress through regular assessments and personalized plan adjustments for long-term success.',
  },
  {
    icon: MapPin,
    title: 'Convenient Trichy Location',
    desc: 'Access professional weight management services close to you with flexible appointment scheduling.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="why">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Why Tenziaa</span>
          <h2>Why Choose Tenziaa Wellness Clinic in Trichy</h2>
          <p>
            Finding the right weight loss clinic in Trichy is about choosing a team that understands your
            body&mdash;not following a one-size-fits-all program. At Tenziaa, every client receives a
            personalized wellness plan focused on safe, sustainable, and healthy weight loss.
          </p>
        </Reveal>

        <div className="why__grid">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal as="div" key={reason.title} delay={i * 90} className="why__card">
                <div className="why__icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
