import { UserCheck, GraduationCap, ShieldCheck, ScanLine, LineChart, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './WhyChooseUs.css'

const REASONS = [
  {
    icon: GraduationCap,
    title: 'Certified Wellness Specialists',
    desc: 'Certified wellness specialists with proven expertise across weight loss, skin, and hair care.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Diet Plan Approach',
    desc: 'A personalized diet plan clinic approach for every client, matched to their body, skin, or hair goals.',
  },
  {
    icon: ScanLine,
    title: 'Advanced, Safe Technology',
    desc: 'Advanced, safe technology for visible results in every session at our Trichy clinic.',
  },
  {
    icon: ShieldCheck,
    title: 'Non-Surgical & Pain-Free',
    desc: 'A non-surgical, pain-free treatment philosophy with minimal downtime and genuine comfort.',
  },
  {
    icon: LineChart,
    title: 'Consistent Client Satisfaction',
    desc: 'Consistent client satisfaction across our weight loss, skin, and hair programs.',
  },
  {
    icon: MapPin,
    title: 'Convenient Thillai Nagar Location',
    desc: 'A convenient Thillai Nagar location, easily accessible across Trichy.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="why">
      <div className="container">
        <SectionHead
          eyebrow="Why Choose Tenziaa Trichy?"
          title="Care That Understands Your Goals"
          desc={<>From weight loss and slimming to skin and hair care, every client receives a personalized, science-backed plan &mdash; never a one-size-fits-all package.</>}
        />

        <div className="why__grid">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal
                as="div"
                key={reason.title}
                delay={(i % 3) * 120}
                dir={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}
                className="why__card"
              >
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
