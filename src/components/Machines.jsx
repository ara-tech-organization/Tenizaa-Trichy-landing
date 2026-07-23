import { useRef, useEffect } from 'react'
import { Flame, Zap, Droplets, Gem, Shapes, Sun, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Machines.css'

const MACHINES = [
  { icon: Flame, tone: 'weight', name: 'Non-Surgical Fat Reduction', purpose: 'Breaks down stubborn fat deposits without surgery for a leaner, more toned appearance.' },
  { icon: Shapes, tone: 'weight', name: 'Body Contouring & Slimming', purpose: 'Reshapes and defines your figure by targeting stubborn fat across multiple body zones.' },
  { icon: Zap, tone: 'hair', name: 'Laser Hair Reduction System', purpose: 'Targets unwanted hair at the root for smoother, longer-lasting results.' },
  { icon: Droplets, tone: 'skin', name: 'Hydrafacial Skin System', purpose: 'Deep-cleanses, exfoliates, and hydrates the skin for an instantly radiant glow.' },
  { icon: Gem, tone: 'skin', name: 'Skin Tightening & Anti-Aging', purpose: 'Firms and smooths the skin, reducing fine lines, wrinkles, and sagging.' },
  { icon: Sun, tone: 'skin', name: 'Skin Brightening & Rejuvenation', purpose: 'Reduces pigmentation and uneven tone while restoring natural glow and texture.' },
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
    <section id="machines" className="machines">
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
