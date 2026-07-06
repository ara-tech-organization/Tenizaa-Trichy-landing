import { Search, Leaf, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import './SeoContent.css'

const SEARCHES = ['weight loss clinic near me', 'best slimming centre in Trichy', 'wellness clinic in Trichy']

function SeoContent() {
  return (
    <section className="seo">
      <div className="container seo__inner">
        <Reveal as="div" className="seo__copy">
          <span className="eyebrow">Trusted &amp; Local</span>
          <h2>Looking for the Best Weight Loss Clinic in Trichy?</h2>
          <p>
            If you&rsquo;ve been searching for a weight loss clinic near me, best slimming centre in Trichy,
            or a trusted wellness clinic in Trichy, Tenziaa offers personalized solutions designed around
            your health&mdash;not generic programs.
          </p>
          <p>
            Our approach combines nutrition counselling, body composition analysis, lifestyle coaching, and
            non-surgical fat reduction to help you achieve sustainable weight loss. Every program is
            customized based on your current health, body composition, and personal goals, making your
            journey safer, more effective, and easier to maintain.
          </p>
        </Reveal>

        <Reveal as="div" delay={120} scale className="seo__visual">
          <Leaf className="seo__leaf seo__leaf--one" size={38} strokeWidth={1.4} />
          <Leaf className="seo__leaf seo__leaf--two" size={26} strokeWidth={1.4} />
          <div className="seo__card">
            <div className="seo__card-head">
              <Sparkles size={16} />
              <span>People in Trichy search for</span>
            </div>
            {SEARCHES.map((q) => (
              <div className="seo__search-row" key={q}>
                <Search size={16} />
                <span>{q}</span>
              </div>
            ))}
            <div className="seo__card-footer">
              <span>Tenziaa Wellness Clinic</span>
              <strong>Your personalized answer</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default SeoContent
