import { useEffect, useState } from 'react'
import {
  Scale, Activity, Droplets, Zap, Sparkles, Shapes, Flame, Sun, Gem, Scissors,
  X, ArrowRight, Check, ClipboardList,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { pathForId, handleSectionNavClick } from '../utils/sectionNav'
import './Treatments.css'

const CATS = {
  weight: 'Weight Loss',
  skin: 'Skin',
  hair: 'Hair',
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
    icon: Droplets,
    cat: 'skin',
    title: 'Hydrafacial',
    overview:
      'A deep-cleansing, hydrating facial treatment available at our Trichy clinic that instantly refreshes the skin, leaving it clearer, smoother, and visibly radiant.',
    benefits: ['Improved skin texture', 'Deep pore cleansing', 'Instant hydration boost', 'Suitable for all skin types'],
    procedure: ['Starts with a skin analysis', 'Followed by a multi-step cleansing, exfoliation, and extraction process', 'Completed with nourishing serum infusion for glowing results'],
  },
  {
    icon: Zap,
    cat: 'hair',
    title: 'Laser Hair Reduction',
    overview:
      'A safe, advanced laser hair reduction treatment in Trichy that targets unwanted hair at the root for smoother, longer-lasting results.',
    benefits: ['Long-term hair reduction', 'Minimal discomfort', 'Quick sessions', 'Suitable for various skin and hair types'],
    procedure: ['Begins with a skin and hair assessment', 'Followed by targeted laser sessions customized to the treatment area', 'Progress monitored across a recommended session plan'],
  },
  {
    icon: Sparkles,
    cat: 'skin',
    title: 'Skin Rejuvenation',
    overview:
      'A restorative treatment at our Trichy branch that revives dull, tired skin, helping restore natural glow, tone, and texture.',
    benefits: ['Brighter, healthier-looking skin', 'Reduced dullness and uneven tone', 'Improved skin elasticity', 'Minimal downtime'],
    procedure: ['Starts with a detailed skin diagnosis', 'Followed by a customized rejuvenation protocol, with sessions', 'Monitored to track visible improvement over time'],
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
    icon: Sun,
    cat: 'skin',
    title: 'Skin Brightening',
    overview:
      'A specialized skin brightening treatment in Trichy that reduces pigmentation, dark spots, and uneven tone, revealing clearer, more radiant skin.',
    benefits: ['Reduced pigmentation and dark spots', 'More even skin tone', 'Brighter, healthier-looking complexion', 'Suitable for regular skincare maintenance'],
    procedure: ['Begins with a skin tone and pigmentation assessment', 'Followed by a customized brightening protocol', 'Monitored across sessions for gradual, visible improvement'],
  },
  {
    icon: Gem,
    cat: 'skin',
    title: 'Anti-Aging Treatments',
    overview:
      'A rejuvenating anti-aging treatment in Trichy that targets fine lines, wrinkles, and sagging skin for a refreshed, youthful appearance.',
    benefits: ['Smoother, firmer skin', 'Reduced fine lines and wrinkles', 'Improved skin elasticity', 'Natural-looking results'],
    procedure: ['Starts with a detailed skin and aging assessment', 'Followed by a personalized anti-aging protocol, with progress', 'Monitored to maintain natural, lasting results'],
  },
  {
    icon: Scissors,
    cat: 'hair',
    title: 'Hair Treatments',
    overview:
      'A comprehensive hair treatment program at our Trichy clinic addressing hair fall, thinning, and scalp health through safe, results-driven therapies.',
    benefits: ['Reduced hair fall', 'Improved scalp health', 'Stronger hair growth over time', 'Customized to individual hair concerns'],
    procedure: ['Begins with a scalp and hair diagnostic assessment', 'Followed by a customized treatment plan combining therapy and care routines', 'Monitored regularly for consistent hair health improvement'],
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

function Treatments() {
  const [active, setActive] = useState(null)

  return (
    <section id="treatments" className="treatments">
      <div className="container">
        <SectionHead
          eyebrow="Our Advanced Treatments in Trichy"
          eyebrowClass="eyebrow--accent"
          title="Treatments for Weight Loss, Skin & Hair"
          desc={<>Explore Tenziaa Trichy&rsquo;s specialized treatments for weight loss, skin, and hair, each guided by expert care and proven techniques. Tap any treatment to see the full details.</>}
        />

        <div className="treatments__grid">
          {TREATMENTS.map((treatment, i) => {
            const Icon = treatment.icon
            return (
              <Reveal
                as="div"
                key={treatment.title}
                delay={(i % 3) * 120}
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
