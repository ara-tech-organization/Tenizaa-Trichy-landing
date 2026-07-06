import { useState } from 'react'
import { Target, Flame, Ruler, Scale, Apple, Footprints, Activity, Check } from 'lucide-react'
import Reveal from './Reveal'
import './Programs.css'

const PROGRAMS = [
  {
    icon: Target,
    title: 'Personalized Weight Loss Program',
    desc: 'Our customized weight loss programs combine nutrition, wellness support, and lifestyle modifications to help you lose weight safely and maintain long-term results.',
  },
  {
    icon: Flame,
    title: 'Fat Reduction Therapy',
    desc: 'Target stubborn body fat with non-surgical fat reduction therapies designed to complement your personalized wellness plan.',
    chipsLabel: 'Suitable for:',
    chips: ['Belly Fat', 'Waist Fat', 'Thigh Fat', 'Arm Fat', 'Overall Body Fat Reduction'],
  },
  {
    icon: Ruler,
    title: 'Inch Loss Program',
    desc: "If your goal is body shaping rather than just reducing weight, our inch loss program focuses on improving body measurements while enhancing overall wellness.",
  },
  {
    icon: Scale,
    title: 'Weight Management Program',
    desc: "Whether you're beginning your weight loss journey or maintaining previous results, our structured weight management plans provide ongoing expert guidance and accountability.",
  },
  {
    icon: Apple,
    title: 'Diet & Nutrition Consultation',
    desc: 'Healthy weight loss starts with the right nutrition. Our dieticians create personalized meal plans based on your:',
    chips: ['Lifestyle', 'Food Preferences', 'Daily Routine', 'Health Goals', 'Body Composition'],
    note: 'No crash diets. No unrealistic restrictions.',
  },
  {
    icon: Footprints,
    title: 'Lifestyle Coaching',
    desc: 'Long-term success comes from sustainable habits. We help you improve your eating patterns, daily activity, and overall lifestyle for lasting wellness.',
  },
  {
    icon: Activity,
    title: 'Body Composition Analysis (BCA)',
    desc: 'Before starting your program, we evaluate:',
    chips: ['Body Fat Percentage', 'Muscle Mass', 'BMI', 'Metabolic Indicators', 'Hydration Levels'],
    note: 'This helps us design the most effective personalized weight loss plan.',
  },
]

function Programs() {
  const [active, setActive] = useState(0)
  const current = PROGRAMS[active]
  const CurrentIcon = current.icon

  return (
    <section id="programs" className="programs">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">What We Offer</span>
          <h2>Our Weight Loss &amp; Wellness Programs</h2>
        </Reveal>

        <Reveal as="div" className="programs__panel">
          <div className="programs__list">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon
              return (
                <button
                  key={program.title}
                  type="button"
                  className={`programs__tab ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="programs__tab-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="programs__tab-title">{program.title}</span>
                </button>
              )
            })}
          </div>

          <div className="programs__detail">
            <div className="programs__detail-icon">
              <CurrentIcon size={30} strokeWidth={1.6} />
            </div>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>

            {current.chips && (
              <>
                {current.chipsLabel && <span className="programs__chips-label">{current.chipsLabel}</span>}
                <ul className="programs__chips">
                  {current.chips.map((chip) => (
                    <li key={chip}>
                      <Check size={14} strokeWidth={2.6} />
                      {chip}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {current.note && <p className="programs__note">{current.note}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Programs
