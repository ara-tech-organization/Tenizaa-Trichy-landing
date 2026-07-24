import { useEffect, useState } from 'react'
import {
  Scale, Activity, Shapes, Flame, Ruler, TrendingDown, Salad, HeartPulse, Sparkles,
  X, ArrowRight, Check, ClipboardList,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './Treatments.css'

const CATS = {
  weight: 'Weight & Slimming',
  skin: 'Skin & Hair',
}

const TREATMENTS = [
  {
    icon: Scale,
    cat: 'weight',
    title: 'Weight Loss Programs',
    overview:
      'A personalized, non-surgical weight loss clinic Trichy program combining diet guidance, body composition analysis, and safe therapeutic techniques for sustainable fat loss.',
    benefits: ['Gradual and healthy weight loss', 'Improved metabolism', 'Zero downtime', 'Continuous nutritionist support'],
    procedure: ['Starts with a diagnostic assessment', 'Followed by a customized diet', 'Monitored treatment plans for consistent progress'],
  },
  {
    icon: Activity,
    cat: 'weight',
    title: 'Slimming Treatments',
    overview:
      'A targeted, non-surgical slimming treatment in Trichy designed to reduce excess fat and reshape problem areas through safe, clinically guided techniques.',
    benefits: ['Visible inch loss', 'Improved body shape', 'No surgery or injections', 'Suitable for multiple body areas'],
    procedure: ['Starts with a body assessment to identify target zones', 'Followed by customized sessions using proven slimming techniques', 'Monitored regularly to track inch-loss progress'],
  },
  {
    icon: Shapes,
    cat: 'weight',
    title: 'Body Contouring',
    overview:
      'A non-invasive body contouring treatment in Trichy designed to reshape and define your figure by targeting stubborn fat areas.',
    benefits: ['Sculpted, more defined body shape', 'No surgery or downtime', 'Safe for multiple body zones', 'Boosts overall confidence'],
    procedure: ['Begins with a body composition assessment', 'Followed by a customized contouring plan', 'Monitored across sessions for consistent, visible shaping results'],
  },
  {
    icon: Flame,
    cat: 'weight',
    title: 'Fat Reduction',
    overview:
      'A focused fat reduction treatment at Tenziaa Trichy that helps break down stubborn fat deposits without surgery, supporting a leaner, more toned appearance.',
    benefits: ['Targeted fat loss in specific areas', 'No incisions or downtime', 'Safe and clinically guided', 'Complements overall weight management goals'],
    procedure: ['Starts with a diagnostic evaluation of target areas', 'Followed by customized fat-reduction sessions', 'Monitored regularly to ensure steady, safe progress'],
  },
  {
    icon: Ruler,
    cat: 'weight',
    title: 'Inch Loss Program',
    overview:
      'A targeted, non-surgical inch loss clinic Trichy program using body contouring techniques, guided exercise and nutrition support to help reduce inches from problem areas safely.',
    benefits: ['Visible reduction in inches', 'Improved body shape and tone', 'Non-invasive and pain-free', 'Personalized session plans'],
    procedure: ['Begins with a body assessment to map target zones', 'Followed by customized inch-loss sessions with exercise and nutrition support', 'Monitored regularly to track measurable inch reduction'],
  },
  {
    icon: TrendingDown,
    cat: 'weight',
    title: 'Weight Management Program',
    overview:
      'A structured, long-term weight management program in Trichy combining lifestyle assessment, diet planning and regular monitoring to help you maintain a healthy weight consistently.',
    benefits: ['Sustainable long-term results', 'Personalized diet and activity plans', 'Regular progress tracking', 'Reduced risk of weight-related health issues'],
    procedure: ['Starts with a lifestyle and body composition assessment', 'Followed by a personalized diet and activity plan', 'Regular monitoring and adjustments to maintain a healthy weight'],
  },
  {
    icon: Salad,
    cat: 'weight',
    title: 'Diet & Nutrition Consultation',
    overview:
      'A one-on-one diet and nutrition consultation in Trichy designed to build a customized eating plan based on your body type, lifestyle and health goals for lasting results.',
    benefits: ['Personalized meal planning', 'Better energy and digestion', 'Balanced, sustainable eating habits', 'Expert nutritionist guidance'],
    procedure: ['Begins with a one-on-one assessment of your body type and lifestyle', 'Followed by a customized, easy-to-follow meal plan', 'Ongoing nutritionist guidance to keep habits on track'],
  },
  {
    icon: HeartPulse,
    cat: 'weight',
    title: 'Lifestyle Coaching',
    overview:
      'A holistic lifestyle coaching program in Trichy focused on building healthy daily habits around nutrition, activity and mindset for long-term wellness and weight management.',
    benefits: ['Improved daily routines and habits', 'Better stress and mindset management', 'Consistent motivation and accountability', 'Long-term wellness support'],
    procedure: ['Starts with a review of your daily routines and goals', 'Followed by practical coaching on nutrition, activity, and mindset', 'Regular accountability check-ins for long-term wellness'],
  },
  {
    icon: Sparkles,
    cat: 'skin',
    title: 'Skin & Hair Care Program',
    overview:
      'A comprehensive skin and hair care clinic Trichy program offering personalized treatments for common skin and hair concerns, combining advanced techniques with expert guidance for healthier, rejuvenated results.',
    benefits: ['Improved skin texture and glow', 'Reduced hair fall and better scalp health', 'Personalized treatment plans', 'Safe, non-invasive procedures'],
    procedure: ['Begins with a skin and scalp diagnostic assessment', 'Followed by a personalized skin and hair treatment plan', 'Monitored across sessions for healthier skin and stronger hair'],
  },
]

function TreatmentModal({ treatment, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const Icon = treatment.icon

  return (
    <div className="treat-modal__backdrop" onClick={onClose}>
      <div className="treat-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="treat-modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className={`treat-modal__head treat-modal__head--${treatment.cat}`}>
          <div className="treat-modal__icon">
            <Icon size={30} strokeWidth={1.6} />
          </div>
          <div>
            <span className={`treatments__tag treatments__tag--${treatment.cat}`}>{CATS[treatment.cat]}</span>
            <h3>{treatment.title}</h3>
          </div>
        </div>

        <div className="treat-modal__body">
          <div className="treat-modal__block">
            <h4>Overview</h4>
            <p>{treatment.overview}</p>
          </div>

          <div className="treat-modal__cols">
            <div className="treat-modal__block">
              <h4><Check size={16} strokeWidth={2.6} /> Benefits</h4>
              <ul className="treat-modal__list treat-modal__list--check">
                {treatment.benefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="treat-modal__block">
              <h4><ClipboardList size={16} strokeWidth={2.2} /> Procedure</h4>
              <ol className="treat-modal__list treat-modal__list--steps">
                {treatment.procedure.map((p) => <li key={p}>{p}</li>)}
              </ol>
            </div>
          </div>

          <a
            href={pathForId('consult')}
            className="btn btn-primary treat-modal__cta"
            onClick={(e) => { handleSectionNavClick(e, 'consult'); onClose() }}
          >
            Book Your Consultation <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </div>
  )
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'weight', label: 'Weight & Slimming' },
  { key: 'skin', label: 'Skin & Hair' },
]

function Treatments() {
  const [active, setActive] = useState(null)
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? TREATMENTS : TREATMENTS.filter((t) => t.cat === filter)

  return (
    <section id="treatments" className="treatments has-decor">
      <SectionDecor variant="j" />
      <div className="container">
        <SectionHead
          eyebrow="Our Advanced Treatments in Trichy"
          eyebrowClass="eyebrow--accent"
          title="Treatments for Weight Loss, Skin & Hair"
          desc={<>Explore Tenziaa Trichy&rsquo;s specialized treatments for weight loss, skin, and hair, each guided by expert care and proven techniques. Tap any treatment to see the full details.</>}
        />

        <div className="treatments__filters" role="tablist" aria-label="Filter treatments">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className={`treatments__filter ${filter === f.key ? 'is-active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="treatments__grid">
          {visible.map((treatment, i) => {
            const Icon = treatment.icon
            return (
              <Reveal
                as="div"
                key={treatment.title}
                delay={(i % 3) * 90}
                dir={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}
              >
                <button
                  type="button"
                  className={`treatments__card treatments__card--${treatment.cat}`}
                  onClick={() => setActive(treatment)}
                >
                  <span className="treatments__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <span className={`treatments__tag treatments__tag--${treatment.cat}`}>{CATS[treatment.cat]}</span>
                  <span className="treatments__card-title">{treatment.title}</span>
                  <span className="treatments__card-desc">{treatment.overview}</span>
                  <span className="treatments__card-link">
                    View Details <ArrowRight size={15} />
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      {active && <TreatmentModal treatment={active} onClose={() => setActive(null)} />}
    </section>
  )
}

export default Treatments
