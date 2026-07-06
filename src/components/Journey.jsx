import { MessageCircle, ScanLine, ClipboardList, TrendingUp, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import './Journey.css'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Free Consultation',
    desc: 'Meet our wellness expert to discuss your health history, lifestyle, and weight loss goals.',
  },
  {
    icon: ScanLine,
    title: 'Body Composition Assessment',
    desc: 'We analyze your body fat, muscle mass, BMI, and overall body composition to understand your current health.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Weight Loss Plan',
    desc: 'Receive a customized combination of nutrition guidance, wellness therapies, and lifestyle recommendations.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support & Progress Tracking',
    desc: 'Regular reviews, diet modifications, and continuous motivation help you stay on track toward your goals.',
  },
]

function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">The Process</span>
          <h2>Your Transformation Journey</h2>
        </Reveal>

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
