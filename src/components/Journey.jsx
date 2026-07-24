import { MessageCircle, ScanLine, ClipboardList, TrendingUp, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import './Journey.css'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    desc: 'Meet our certified specialists to discuss your weight loss, skin, or hair concerns and your goals.',
  },
  {
    icon: ScanLine,
    title: 'Diagnostic Assessment',
    desc: 'A proper body, skin, or hair assessment so your treatment matches your goals precisely.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Treatment Plan',
    desc: 'Receive a customized plan combining advanced technology, therapies, and expert guidance.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support & Progress Tracking',
    desc: 'Regular reviews and continuous support help you stay on track toward visible, lasting results.',
  },
]

function Journey() {
  return (
    <section id="journey" className="journey has-decor">
      <SectionDecor variant="a" />
      <div className="container">
        <SectionHead
          eyebrow="How It Works"
          title="Your Journey at Tenziaa Trichy"
        />

        <div className="journey__steps">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div className="journey__step-wrap" key={step.title}>
                <Reveal as="div" delay={i * 130} className="journey__step">
                  <span className="journey__number">{`0${i + 1}`}</span>
                  <div className="journey__icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Reveal>
                {i < STEPS.length - 1 && (
                  <span className="journey__arrow" aria-hidden="true">
                    <ArrowRight size={22} strokeWidth={2} />
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Journey
