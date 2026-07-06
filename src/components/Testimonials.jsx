import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'
import './Testimonials.css'

const REVIEWS = [
  {
    text: 'The team explained everything clearly and gave me a personalized diet plan that suited my daily routine. I finally found a weight loss program I could follow comfortably.',
    author: 'Client, Trichy',
  },
  {
    text: 'The wellness experts regularly tracked my progress and motivated me throughout my journey. The personalized support made a huge difference.',
    author: 'Client, Trichy',
  },
]

function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Client Stories</span>
          <h2>What Our Clients Say</h2>
        </Reveal>

        <div className="testimonials__grid">
          {REVIEWS.map((review, i) => (
            <Reveal as="figure" key={review.author + i} delay={i * 130} className="testimonials__card">
              <Quote className="testimonials__quote-icon" size={40} strokeWidth={1.4} />
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={17} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>{review.text}</blockquote>
              <figcaption>
                <span className="testimonials__avatar">C</span>
                <span>&ndash; {review.author}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
