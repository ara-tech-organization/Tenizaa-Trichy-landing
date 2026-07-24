import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import './CustomSelect.css'

// Custom dropdown that still submits through the normal form (hidden input),
// so the existing API payload is unchanged.
function CustomSelect({ name, options, placeholder, icon = null }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef(null)

  // Close on outside click.
  useEffect(() => {
    if (!open) return
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open])

  const select = (option) => {
    setValue(option)
    setOpen(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) {
        setOpen(true)
        setActiveIndex(0)
        return
      }
      const dir = e.key === 'ArrowDown' ? 1 : -1
      setActiveIndex((prev) => (prev + dir + options.length) % options.length)
      return
    }
    if ((e.key === 'Enter' || e.key === ' ') && open && activeIndex >= 0) {
      e.preventDefault()
      select(options[activeIndex])
    }
  }

  return (
    <div className={`cselect ${open ? 'is-open' : ''}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        className="hero__field cselect__trigger"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {icon}
        <span className={`cselect__value ${value ? '' : 'is-placeholder'}`}>
          {value || placeholder}
        </span>
        <ChevronDown size={17} className="cselect__chevron" />
      </button>

      {open && (
        <ul className="cselect__menu" role="listbox" aria-label={placeholder}>
          {options.map((option, i) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === value}
                className={`cselect__option ${option === value ? 'is-selected' : ''} ${i === activeIndex ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => select(option)}
              >
                <span>{option}</span>
                {option === value && <Check size={15} strokeWidth={3} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
