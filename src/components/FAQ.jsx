import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Reveal from './Reveal'
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
    q: 'Which is the best weight loss clinic in Trichy?',
    a: 'Tenziaa Wellness Clinic offers personalized weight loss programs, expert diet consultation, body composition analysis, and non-surgical wellness solutions tailored to individual goals.',
  },
  {
    q: 'Do you provide personalized diet plans?',
    a: 'Yes. Every client receives a customized nutrition plan based on their body composition, lifestyle, and health objectives.',
  },
  {
    q: 'Is the weight loss program safe?',
    a: 'Yes. Our programs use non-surgical and non-invasive approaches supervised by trained wellness professionals.',
  },
  {
    q: 'Do I need to follow a crash diet?',
    a: 'No. We focus on balanced nutrition and sustainable lifestyle changes rather than restrictive crash diets.',
  },
  {
    q: 'What is Body Composition Analysis (BCA)?',
    a: 'BCA measures body fat percentage, muscle mass, BMI, hydration, and other important health indicators to create a personalized weight loss strategy.',
  },
  {
    q: 'Can I reduce belly fat?',
    a: 'Our personalized fat reduction and wellness programs are designed to support overall fat loss, including common problem areas such as the abdomen, when combined with nutrition and lifestyle guidance.',
  },
  {
    q: 'How long does a weight loss program take?',
    a: 'The duration depends on your current body composition and personal goals. Our wellness experts will recommend a suitable plan during your consultation.',
  },
  {
    q: 'Do you provide follow-up support?',
    a: 'Yes. Regular progress reviews, nutrition guidance, and lifestyle coaching are included throughout your program.',
  },
  {
    q: 'Where is Tenziaa Wellness Clinic located in Trichy?',
    a: 'Our clinic is conveniently located in Thillai Nagar Trichy, making it easy to access personalized weight loss and wellness services. Contact us for directions or to schedule your consultation.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq__inner">
        <Reveal as="div" className="faq__intro">
          <span className="eyebrow">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
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
