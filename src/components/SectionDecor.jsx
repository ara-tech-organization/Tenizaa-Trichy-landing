import {
  Leaf, Sparkles, HeartPulse, Sun, Gem,
  Activity, Star, Smile, ShieldCheck, Flower2,
} from 'lucide-react'
import './SectionDecor.css'

// Everything is anchored to two fixed corners: top-right and bottom-left.
// Each variant puts the icon chip in one corner and its accent shape in the other.
// `rich: true` adds a second pair of accents (used for Client Testimonials).
// `blobs: false` for sections that already have their own background wash.
// `dark: true` re-tints the shapes for dark backgrounds.
const VARIANTS = {
  a: { icon: Leaf, shape: 'ring', chipAt: 'bl' },
  b: { icon: HeartPulse, shape: 'cross', chipAt: 'tr' },
  c: { icon: Sun, shape: 'dashed', chipAt: 'bl' },
  d: { icon: Activity, shape: 'bars', chipAt: 'tr' },
  e: { icon: Star, shape: 'arc', chipAt: 'bl' },
  f: { icon: Smile, shape: 'squares', chipAt: 'tr', rich: true, extra: 'dots', extra2: 'cross' },
  g: { icon: ShieldCheck, shape: 'dots', chipAt: 'bl' },
  h: { icon: Sparkles, shape: 'cross', chipAt: 'tr', blobs: false },
  i: { icon: Flower2, shape: 'dashed', chipAt: 'tr', blobs: false },
  j: { icon: Gem, shape: 'squares', chipAt: 'bl' },
  k: { icon: ShieldCheck, shape: 'ring', chipAt: 'tr' },
  l: { icon: Smile, shape: 'dots', chipAt: 'bl' },
  m: { icon: Leaf, shape: 'arc', chipAt: 'tr', blobs: false, dark: true },
  n: { icon: HeartPulse, shape: 'dots', chipAt: 'bl', blobs: false },
  o: { icon: Leaf, shape: 'ring', chipAt: 'tr', blobs: false, dark: true },
}

const SHAPE_CLASS = {
  dots: 'decor__dots',
  ring: 'decor__ring',
  dashed: 'decor__dashed',
  arc: 'decor__arc',
  cross: 'decor__cross',
  squares: 'decor__square',
}

function Shape({ shape, pos }) {
  if (!shape) return null
  if (shape === 'bars') {
    return <span className={`decor__bars decor__pos--${pos}`}><i /><i /><i /></span>
  }
  return <span className={`${SHAPE_CLASS[shape]} decor__pos--${pos}`} />
}

function SectionDecor({ variant = 'a' }) {
  const config = VARIANTS[variant] || VARIANTS.a
  const Chip = config.icon
  const chipAt = config.chipAt || 'tr'
  const shapeAt = chipAt === 'tr' ? 'bl' : 'tr'

  return (
    <div
      className={`decor decor--${variant} ${config.dark ? 'decor--dark' : ''}`}
      aria-hidden="true"
    >
      {config.blobs !== false && (
        <>
          <span className="decor__blob decor__blob--tr" />
          <span className="decor__blob decor__blob--bl" />
        </>
      )}

      <Shape shape={config.shape} pos={shapeAt} />

      <span className={`decor__chip decor__pos--${chipAt}`}>
        <Chip size={22} strokeWidth={1.6} />
      </span>

      {config.rich && (
        <>
          <Shape shape={config.extra} pos={`${chipAt}2`} />
          <Shape shape={config.extra2} pos={`${shapeAt}2`} />
        </>
      )}
    </div>
  )
}

export default SectionDecor
