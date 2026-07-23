import { useEffect, useRef, useState } from 'react'

function baseClass({ scale, dir }) {
  if (scale) return 'reveal-scale'
  if (dir === 'left') return 'reveal-dir reveal-dir--left'
  if (dir === 'right') return 'reveal-dir reveal-dir--right'
  return 'reveal'
}

function Reveal({ as: Tag = 'div', className = '', delay = 0, scale = false, dir = 'up', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${baseClass({ scale, dir })} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
