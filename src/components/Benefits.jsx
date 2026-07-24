import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Benefits.css'

const BENEFITS = [
  'Non-Surgical Weight Loss',
  'Slimming & Inch Loss',
  'Body Contouring',
  'Fat Reduction',
  'Personalized Diet Plans',
  'Weight Management Programs',
  'Diet & Nutrition Guidance',
  'Lifestyle Coaching',
  'Skin & Hair Care',
  'Certified Wellness Specialists',
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
        <SectionHead
          eyebrow="Benefits"
          eyebrowClass="eyebrow--dark"
          title="Why Clients Choose Tenziaa Trichy"
          titleClass="benefits__heading"
        />
      </div>

      <Reveal as="div" scale className="benefits__marquee">
        <BenefitRow items={ROW_ONE} />
        <BenefitRow items={ROW_TWO} reverse />
      </Reveal>
    </section>
  )
}

export default Benefits
