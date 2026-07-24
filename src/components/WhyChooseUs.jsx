import { UserCheck, GraduationCap, ShieldCheck, ScanLine, LineChart, MapPin, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Eyebrow from './Eyebrow'
import SectionDecor from './SectionDecor'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
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
    <section id="why-us" className="why has-decor">
      <SectionDecor variant="k" />
      <div className="container why__inner">
        <Reveal as="div" dir="left" className="why__intro">
          <Eyebrow text="Why Choose Tenziaa Trichy?" />
          <SplitText as="h2" delay={0.12} parts={[{ text: 'Care That Understands Your Goals' }]} />
          <p>
            From weight loss and slimming to skin and hair care, every client receives a personalized,
            science-backed plan &mdash; never a one-size-fits-all package.
          </p>
          <a
            href={pathForId('consult')}
            className="btn btn-primary why__cta"
            onClick={(e) => handleSectionNavClick(e, 'consult')}
          >
            Book Appointment <ArrowRight size={17} />
          </a>
        </Reveal>

        <div className="why__list">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal as="div" key={reason.title} delay={(i % 2) * 90} className="why__item">
                <span className="why__num">{`0${i + 1}`}</span>
                <div className="why__item-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div className="why__item-body">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
