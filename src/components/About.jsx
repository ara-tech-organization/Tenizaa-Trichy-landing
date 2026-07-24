import { Sparkles, Award, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Eyebrow from './Eyebrow'
import SectionDecor from './SectionDecor'
import './About.css'

const PILLARS = [
  'Proper diagnostic assessment for every client',
  'Personalized plans, never one-size-fits-all',
  'Certified professionals & advanced technology',
  'Safe, comfortable, result-driven visits',
]

function About() {
  return (
    <section id="about" className="about has-decor">
      <SectionDecor variant="i" />
      <div className="container about__inner">
        <Reveal as="div" dir="left" className="about__visual">
          <div className="about__panel">
            <div className="about__panel-glow" aria-hidden="true" />
            <div className="about__panel-icon">
              <Sparkles size={34} strokeWidth={1.5} />
            </div>
            <strong>Wellness &amp; Aesthetic Care</strong>
            <span>NSA Arcade, Thillai Nagar &middot; Trichy</span>
          </div>

          <div className="about__badge about__badge--one">
            <strong>1000+</strong>
            <span>Happy Clients</span>
          </div>

          <div className="about__badge about__badge--two">
            <span className="about__badge-icon"><Award size={18} /></span>
            <span>3+ Years of Excellence</span>
          </div>
        </Reveal>

        <Reveal as="div" dir="right" className="about__content">
          <Eyebrow text="About Tenziaa Trichy" />
          <SplitText
            as="h2"
            delay={0.12}
            parts={[{ text: 'Science-Backed Wellness & Aesthetic Care in Thillai Nagar' }]}
          />
          <p>
            Tenziaa Wellness &amp; Aesthetic Clinic in Trichy brings the same trusted, science-backed
            approach to weight loss, skin, and hair care that has helped thousands of clients across
            Tamil Nadu. Conveniently located at NSA Arcade in Thillai Nagar, our Trichy centre is built
            around the belief that real transformation comes from a personalized plan, not a
            one-size-fits-all package.
          </p>
          <p>
            Every client begins with a proper diagnostic assessment, so their treatment matches their
            body, skin, or hair goals precisely. Our certified professionals combine clinical expertise
            with genuine, heartfelt care, using advanced technology to make every visit safe,
            comfortable, and result-driven.
          </p>

          <ul className="about__ticks">
            {PILLARS.map((text) => (
              <li key={text}>
                <CheckCircle2 size={18} strokeWidth={2.4} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About
