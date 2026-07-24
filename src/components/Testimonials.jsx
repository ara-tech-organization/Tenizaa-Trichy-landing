import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import './Testimonials.css'

const REVIEWS = [
  { text: 'I lost 2kgs within 3 weeks, peaceful therapy, thank you Tenziaa.', author: 'Karthikeyan Kartikeyan' },
  { text: 'They provide customized treatment and a customized diet. Thank you Tenziaa for your care and support with my weight loss.', author: 'Prabhakaran R' },
  { text: 'The staff is amazing, everyone is super friendly. I lost 15 pounds in a month.', author: 'Thamizh' },
  { text: 'I feel much more energetic and confident after following the personalized plan. The team guided me throughout the journey. Thank you, Tenziaa!', author: 'Priya S' },
  { text: 'My lifestyle has completely changed for the better. The diet plan was easy to follow, and I started seeing results within a few weeks. I highly recommend Tenziaa!', author: 'Arun Kumar' },
]

const ROTATE_MS = 6500

function Testimonials() {
  const [index, setIndex] = useState(0)
  const paused = useRef(false)

  const go = (next) => setIndex((next + REVIEWS.length) % REVIEWS.length)

  // Auto-advance, paused on hover/focus and for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!paused.current) setIndex((prev) => (prev + 1) % REVIEWS.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  const active = REVIEWS[index]

  return (
    <section id="reviews" className="spot has-decor">
      <SectionDecor variant="f" />

      <div className="container">
        <SectionHead
          eyebrow="Client Testimonials"
          title="What Our Trichy Clients Say"
          desc="Real stories from real clients across our weight loss, skin, and hair programs."
        />

        <Reveal
          as="div"
          className="spot__stage"
          onMouseEnter={() => { paused.current = true }}
          onMouseLeave={() => { paused.current = false }}
          onFocusCapture={() => { paused.current = true }}
          onBlurCapture={() => { paused.current = false }}
        >
          <Quote className="spot__watermark" size={190} strokeWidth={1} aria-hidden="true" />

          <button type="button" className="spot__nav spot__nav--prev" onClick={() => go(index - 1)} aria-label="Previous testimonial">
            <ChevronLeft size={22} />
          </button>

          <div className="spot__body" aria-live="polite">
            <div className="spot__stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            {/* key restarts the fade each time the quote changes */}
            <blockquote key={index} className="spot__quote">{active.text}</blockquote>

            <figcaption className="spot__author">
              <span className="spot__avatar">{active.author.charAt(0)}</span>
              <span className="spot__name">{active.author}</span>
            </figcaption>

            <p className="spot__count">
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>/ {String(REVIEWS.length).padStart(2, '0')}</span>
            </p>
          </div>

          <button type="button" className="spot__nav spot__nav--next" onClick={() => go(index + 1)} aria-label="Next testimonial">
            <ChevronRight size={22} />
          </button>

          {/* Visualises the auto-advance; key restarts it on every slide. */}
          <span className="spot__progress" aria-hidden="true">
            <span key={index} className="spot__progress-fill" />
          </span>
        </Reveal>

        <div className="spot__pills" role="tablist" aria-label="Choose a testimonial">
          {REVIEWS.map((review, i) => (
            <button
              key={review.author}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`spot__pill ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <span className="spot__pill-avatar">{review.author.charAt(0)}</span>
              <span className="spot__pill-name">{review.author}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
