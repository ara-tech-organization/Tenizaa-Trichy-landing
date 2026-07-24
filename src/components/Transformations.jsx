import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import './Transformations.css'
import jonaBefore from '../assets/ba-jona-before.jpg'
import jonaAfter from '../assets/ba-jona-after.jpg'
import karthikBefore from '../assets/ba-karthik-before.jpg'
import karthikAfter from '../assets/ba-karthik-after.jpg'
import vijayBefore from '../assets/ba-vijay-before.jpg'
import vijayAfter from '../assets/ba-vijay-after.jpg'

const PAIRS = [
  { before: jonaBefore, after: jonaAfter, cat: 'Weight Loss' },
  { before: karthikBefore, after: karthikAfter, cat: 'Weight Loss' },
  { before: vijayBefore, after: vijayAfter, cat: 'Weight Loss' },
]

function Transformations() {
  const [revealed, setRevealed] = useState(null)

  return (
    <section id="results" className="transformations has-decor">
      <SectionDecor variant="e" />
      <div className="container">
        <SectionHead
          eyebrow="Before & After Gallery"
          title="Real Transformations, Real Results"
          desc={<>Real transformations from real Trichy clients &mdash; explore visible results across our weight loss, skin, and hair restoration programs. Hover a card to reveal the after.</>}
        />

        <div className="transformations__grid">
          {PAIRS.map((pair, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={(i % 3) * 120}
              dir={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}
              className={`ba-card ${pair.fit === 'top' ? 'ba-card--top' : ''} ${revealed === i ? 'is-revealed' : ''}`}
              onClick={() => setRevealed(revealed === i ? null : i)}
            >
              <div className="ba-card__media">
                <img className="ba-card__img ba-card__img--before" src={pair.before} alt="Client before transformation" loading="lazy" />
                <img className="ba-card__img ba-card__img--after" src={pair.after} alt="Client after transformation" loading="lazy" />

                {/* Diagonal shine sweep on hover */}
                <span className="ba-card__shine" aria-hidden="true" />

                <span className="ba-card__tag ba-card__tag--before">Before</span>
                <span className="ba-card__tag ba-card__tag--after">After</span>

                <div className="ba-card__overlay">
                  <span className="ba-card__cat">{pair.cat}</span>
                  <span className="ba-card__hint">
                    See the result <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformations
