import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import './Benefits.css'

const BENEFITS = [
  'Personalized Weight Loss Plans',
  'Healthy & Sustainable Weight Loss',
  'Non-Surgical Wellness Solutions',
  'Customized Diet Charts',
  'Expert Nutrition Guidance',
  'Regular Progress Tracking',
  'Flexible Consultation Timings',
  'Body Composition Analysis',
  'Lifestyle Coaching',
  'Safe & Scientifically Guided Programs',
]

const ROW_ONE = BENEFITS.slice(0, 5)
const ROW_TWO = BENEFITS.slice(5)

function BenefitRow({ items, reverse }) {
  const loop = [...items, ...items]
  return (
    <div className={`benefits__row ${reverse ? 'benefits__row--reverse' : ''}`}>
      <div className="benefits__track">
        {loop.map((item, i) => (
          <span className="benefits__pill" key={`${item}-${i}`}>
            <CheckCircle2 size={16} strokeWidth={2.4} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow eyebrow--dark">Benefits</span>
          <h2 className="benefits__heading">Benefits of Choosing Tenziaa</h2>
        </Reveal>
      </div>

      <Reveal as="div" scale className="benefits__marquee">
        <BenefitRow items={ROW_ONE} />
        <BenefitRow items={ROW_TWO} reverse />
      </Reveal>
    </section>
  )
}

export default Benefits
