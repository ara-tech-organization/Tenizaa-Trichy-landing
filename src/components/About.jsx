import { HeartPulse, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Eyebrow from './Eyebrow'
import './About.css'

const PILLARS = [
  { icon: Stethoscope, text: 'Proper diagnostic assessment for every client' },
  { icon: HeartPulse, text: 'Personalized plans, never one-size-fits-all' },
  { icon: ShieldCheck, text: 'Certified professionals & advanced technology' },
  { icon: Sparkles, text: 'Safe, comfortable, result-driven visits' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <Reveal as="div" dir="left" className="about__copy">
          <Eyebrow text="About Tenziaa Trichy" />
          <SplitText as="h2" parts={[{ text: 'Science-Backed Wellness & Aesthetic Care in Thillai Nagar' }]} />
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
        </Reveal>

        <Reveal as="div" dir="right" className="about__pillars">
          {PILLARS.map(({ icon: Icon, text }, i) => (
            <div className="about__pillar" key={text} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="about__pillar-icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default About
