import { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

function CompareSlider({ before, after }) {
  const containerRef = useRef(null)
  const draggingRef = useRef(false)
  const [position, setPosition] = useState(50)
  const [width, setWidth] = useState(0)
  const [intro, setIntro] = useState(true)
  const [interacted, setInteracted] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const t1 = setTimeout(() => setPosition(32), 500)
    const t2 = setTimeout(() => setPosition(68), 1200)
    const t3 = setTimeout(() => setPosition(50), 1900)
    const t4 = setTimeout(() => setIntro(false), 2300)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [])

  const stopIntro = () => setIntro(false)

  const updateFromClientX = useCallback((clientX) => {
    const node = containerRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(96, Math.max(4, pct)))
  }, [])

  const handlePointerDown = (e) => {
    stopIntro()
    setInteracted(true)
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const handlePointerUp = (e) => {
    draggingRef.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  return (
    <div
      ref={containerRef}
      className={`compare-slider ${intro ? 'compare-slider--intro' : ''}`}
      onPointerDown={(e) => {
        stopIntro()
        setInteracted(true)
        updateFromClientX(e.clientX)
      }}
    >
      <img src={after} alt="After weight loss transformation" className="compare-slider__img" loading="lazy" />
      <div className="compare-slider__before-wrap" style={{ width: `${position}%` }}>
        <img
          src={before}
          alt="Before weight loss transformation"
          className="compare-slider__img"
          loading="lazy"
          style={{ width: width || '100%' }}
        />
      </div>

      <span className="compare-slider__sheen" aria-hidden="true" />

      <span className="compare-slider__tag compare-slider__tag--before">Before</span>
      <span className="compare-slider__tag compare-slider__tag--after">After</span>

      <div className="compare-slider__line" style={{ left: `${position}%` }}>
        <span className={`compare-slider__hint ${interacted ? 'is-hidden' : ''}`}>Drag</span>
        <button
          type="button"
          className="compare-slider__handle"
          aria-label="Drag to compare before and after"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <ChevronsLeftRight size={18} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  )
}

export default CompareSlider
