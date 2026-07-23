import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Eyebrow from './Eyebrow'
import './FAQ.css'

function FAQDoll() {
  return (
    <DotLottieReact
      className="faq__doll"
      src="https://lottie.host/ab2e2221-eefa-49d3-84e2-79f9f70e2302/QVXIt1FZP4.lottie"
      loop
      autoplay
    />
  )
}

const FAQS = [
  {
    q: 'What treatments does Tenziaa Trichy offer?',
    a: 'We offer weight loss and slimming programs, fat reduction and body contouring, plus skin treatments like Hydrafacial, skin rejuvenation, brightening and anti-aging, and hair treatments including laser hair reduction and hair-fall care.',
  },
  {
    q: 'Are your treatments non-surgical and pain-free?',
    a: 'Yes. Our weight loss, skin, and hair treatments follow a non-surgical, pain-free philosophy using advanced, clinically guided technology with minimal downtime.',
  },
  {
    q: 'Do you provide personalized diet and treatment plans?',
    a: 'Yes. Every client begins with a proper diagnostic assessment, so their treatment and diet plan matches their body, skin, or hair goals precisely — never a one-size-fits-all package.',
  },
  {
    q: 'Is the weight loss program safe?',
    a: 'Yes. Our programs use non-surgical, non-invasive approaches supervised by certified wellness specialists, combined with customized diet and continuous nutritionist support.',
  },
  {
    q: 'How does laser hair reduction work?',
    a: 'Laser hair reduction targets unwanted hair at the root for smoother, longer-lasting results. It begins with a skin and hair assessment, followed by targeted sessions customized to the treatment area.',
  },
  {
    q: 'What skin concerns can you treat?',
    a: 'We address dull skin, pigmentation, dark spots, uneven tone, fine lines, and wrinkles through Hydrafacial, skin rejuvenation, skin brightening, and anti-aging treatments tailored to your skin type.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'It depends on your goals and current condition. After your diagnostic assessment, our specialists recommend a suitable session plan and monitor your progress throughout.',
  },
  {
    q: 'Where is Tenziaa Wellness & Aesthetic Clinic located in Trichy?',
    a: 'We are conveniently located at NSA Arcade, D83, 8th Cross St, Thillai Nagar, Tiruchirappalli — easily accessible across Trichy. Contact us for directions or to schedule your consultation.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq__inner">
        <Reveal as="div" className="faq__intro">
          <Eyebrow text="Got Questions?" />
          <SplitText as="h2" parts={[{ text: 'Frequently Asked Questions' }]} />
          <p>Everything you need to know before starting your weight loss journey with Tenziaa.</p>
          <div className="faq__intro-icon">
            <FAQDoll />
          </div>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal as="div" delay={i * 40} key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className="faq__chevron" />
                </button>
                <div className="faq__answer-wrap">
                  <p className="faq__answer">{item.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
