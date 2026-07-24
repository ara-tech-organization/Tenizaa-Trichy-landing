import { useRef, useEffect } from 'react'
import { Waves, Dumbbell, Snowflake, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import './Machines.css'

const MACHINES = [
  { icon: Waves, tone: 'weight', name: 'VCA Machine', purpose: 'Uses advanced vacuum and cavitation technology to break down stubborn fat and smooth targeted areas without surgery.' },
  { icon: Dumbbell, tone: 'weight', name: 'EMSculpt', purpose: 'Stimulates deep, high-intensity muscle contractions to tone, strengthen, and sculpt the body while reducing fat.' },
  { icon: Snowflake, tone: 'skin', name: 'Cryo', purpose: 'Uses controlled cooling to target and reduce stubborn fat cells for a more contoured, defined shape.' },
]

const BENEFITS = [
  'Faster, more targeted treatment results',
  'Non-invasive, pain-free application',
  'Reduced recovery and downtime',
  'Consistent, measurable outcomes',
  'Enhanced comfort during sessions',
  'Safe for a range of skin and body types',
]

function Machines() {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)

  const scrollBy = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.machines__slide')
    const amount = card ? card.offsetWidth + 22 : track.clientWidth
    // Loop back to the start once the end is reached.
    if (dir > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 8) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Auto-advance with manual override — pauses on hover / touch, respects reduced-motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const id = setInterval(() => {
      if (!pausedRef.current) scrollBy(1)
    }, 3800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="machines" className="machines has-decor">
      <SectionDecor variant="b" />
      <div className="container">
        <SectionHead
          eyebrow="Advanced Machines at Our Trichy Clinic"
          title="Precision Technology, Proven Safety"
          desc={<>Our Trichy centre is equipped with precision technology and proven safety standards, helping deliver visible, consistent results in every session.</>}
        />

        <Reveal
          as="div"
          className="machines__carousel"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          onTouchStart={() => { pausedRef.current = true }}
        >
          <button type="button" className="machines__nav machines__nav--prev" aria-label="Previous machine" onClick={() => scrollBy(-1)}>
            <ChevronLeft size={22} />
          </button>

          <div className="machines__track" ref={trackRef}>
            {MACHINES.map(({ icon: Icon, tone, name, purpose }) => (
              <article className={`machines__slide machines__slide--${tone}`} key={name}>
                <div className="machines__image">
                  <Icon size={46} strokeWidth={1.4} />
                </div>
                <div className="machines__slide-body">
                  <h3>{name}</h3>
                  <p>{purpose}</p>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="machines__nav machines__nav--next" aria-label="Next machine" onClick={() => scrollBy(1)}>
            <ChevronRight size={22} />
          </button>
        </Reveal>

        <Reveal as="div" className="machines__benefits">
          {BENEFITS.map((text) => (
            <div className="machines__benefit" key={text}>
              <span className="machines__benefit-icon"><Check size={15} strokeWidth={3} /></span>
              <span>{text}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Machines
