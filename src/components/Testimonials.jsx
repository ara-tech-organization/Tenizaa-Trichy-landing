import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Testimonials.css'

const REVIEWS = [
  {
    text: 'I lost 2kgs within 3 weeks, peaceful therapy, thank you Tenziaa.',
    author: 'Karthikeyan Kartikeyan',
  },
  {
    text: 'They provide customized treatment and a customized diet. Thank you Tenziaa for your care and support with my weight loss.',
    author: 'Prabhakaran R',
  },
  {
    text: 'The staff is amazing, everyone is super friendly. I lost 15 pounds in a month.',
    author: 'Thamizh',
  },
]

function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <SectionHead
          eyebrow="Client Testimonials"
          title="What Our Trichy Clients Say"
          desc="Real stories from real clients across our weight loss, skin, and hair programs."
        />

        <div className="testimonials__grid">
          {REVIEWS.map((review, i) => (
            <Reveal
              as="figure"
              key={review.author + i}
              delay={(i % 3) * 120}
              dir={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}
              className="testimonials__card"
            >
              <Quote className="testimonials__quote-icon" size={40} strokeWidth={1.4} />
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={17} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>{review.text}</blockquote>
              <figcaption>
                <span className="testimonials__avatar">{review.author.charAt(0)}</span>
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
