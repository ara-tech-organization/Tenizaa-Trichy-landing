import { useEffect, useRef, useState } from 'react'
import './SplitText.css'

// Replicates VeCura's "text-anime-style-3": each character slides in from the
// right (x:50 → 0) one-by-one with a Back.easeOut overshoot, stagger 0.02s.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function SplitText({ parts, className = '', stagger = 0.02, duration = 1, delay = 0, distance = 50, axis = 'x', as: Tag = 'span' }) {
  const ref = useRef(null)
  // If the user prefers reduced motion, render already-revealed.
  const [play, setPlay] = useState(prefersReducedMotion)

  useEffect(() => {
    if (play) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlay(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [play])

  const label = parts.map((p) => p.text).join('')
  let charIndex = 0

  return (
    <Tag
      ref={ref}
      className={`splitt ${play ? 'is-play' : ''} ${className}`}
      aria-label={label}
      style={{
        '--splitt-duration': `${duration}s`,
        '--splitt-tx': axis === 'x' ? `${distance}px` : '0px',
        '--splitt-ty': axis === 'y' ? `${distance}px` : '0px',
      }}
    >
      {parts.map((part, pi) => (
        <span
          key={pi}
          className={`splitt__seg ${part.grad ? 'splitt__seg--grad' : ''}`}
          aria-hidden="true"
        >
          {part.text.split(' ').map((word, wi, arr) => (
            <span className="splitt__word" key={wi}>
              {[...word].map((ch, ci) => {
                const charDelay = delay + charIndex++ * stagger
                return (
                  <span className="splitt__char" key={ci} style={{ transitionDelay: `${charDelay}s` }}>
                    {ch}
                  </span>
                )
              })}
              {wi < arr.length - 1 ? ' ' : ''}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}

export default SplitText
