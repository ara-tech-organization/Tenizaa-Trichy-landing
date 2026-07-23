import { Users, Building2, CalendarClock, Award } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'
import './Highlights.css'

const STATS = [
  { icon: Users, value: 1000, suffix: '+', label: 'Happy Clients' },
  { icon: Building2, value: 4, suffix: '+', label: 'Branches' },
  { icon: CalendarClock, value: 3, suffix: '+', label: 'Years of Excellence' },
  { icon: Award, value: null, display: 'Expert', label: 'Wellness & Aesthetic Specialists' },
]

function StatCard({ icon: Icon, value, suffix, display, label, index }) {
  const [ref, count] = useCountUp(value ?? 0)
  return (
    <Reveal as="div" delay={index * 120} className="highlights__card">
      <div className="highlights__icon">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <div className="highlights__number" ref={ref}>
        {value === null ? display : count}
        {suffix && <span className="highlights__suffix">{suffix}</span>}
      </div>
      <p className="highlights__label">{label}</p>
    </Reveal>
  )
}

function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights__grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} index={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
