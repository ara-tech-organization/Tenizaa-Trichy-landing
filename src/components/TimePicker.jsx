import { useEffect, useRef, useState } from 'react'
import { Clock4 } from 'lucide-react'
import './TimePicker.css'

const HOURS = Array.from({ length: 12 }, (_, i) => (i === 0 ? 12 : i))
const MINUTES = Array.from({ length: 12 }, (_, i) => i * 5)

function pointOnCircle(index, total, radius) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  return {
    x: radius + radius * Math.cos(angle),
    y: radius + radius * Math.sin(angle),
  }
}

function TimePicker({ required }) {
  const [open, setOpen] = useState(false)
  const [stage, setStage] = useState('hour')
  const [hour, setHour] = useState(null)
  const [minute, setMinute] = useState(null)
  const [period, setPeriod] = useState('AM')
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
        setStage('hour')
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  const displayValue =
    hour !== null && minute !== null
      ? `${hour}:${String(minute).padStart(2, '0')} ${period}`
      : ''

  const handleHourPick = (h) => {
    setHour(h)
    setStage('minute')
  }

  const handleMinutePick = (m) => {
    setMinute(m)
    setOpen(false)
    setStage('hour')
  }

  const radius = 88

  return (
    <div className="time-picker" ref={wrapRef}>
      <label className="hero__field time-picker__field" onClick={() => setOpen((v) => !v)}>
        <Clock4 size={17} />
        <input
          type="text"
          readOnly
          placeholder="Preferred Time"
          value={displayValue}
          required={required}
        />
      </label>
      <input type="hidden" name="time" value={displayValue} />

      {open && (
        <div
          className="time-picker__backdrop"
          onClick={() => {
            setOpen(false)
            setStage('hour')
          }}
        />
      )}

      {open && (
        <div className="time-picker__panel">
          <div className="time-picker__header">
            <span
              className={stage === 'hour' ? 'is-active' : ''}
              onClick={() => setStage('hour')}
            >
              {hour !== null ? hour : '--'}
            </span>
            <span className="time-picker__colon">:</span>
            <span
              className={stage === 'minute' ? 'is-active' : ''}
              onClick={() => hour !== null && setStage('minute')}
            >
              {minute !== null ? String(minute).padStart(2, '0') : '--'}
            </span>

            <div className="time-picker__ampm">
              <button
                type="button"
                className={period === 'AM' ? 'is-active' : ''}
                onClick={() => setPeriod('AM')}
              >
                AM
              </button>
              <button
                type="button"
                className={period === 'PM' ? 'is-active' : ''}
                onClick={() => setPeriod('PM')}
              >
                PM
              </button>
            </div>
          </div>

          <div className="time-picker__clock" style={{ width: radius * 2, height: radius * 2 }}>
            <div className="time-picker__center" />
            {stage === 'hour'
              ? HOURS.map((h, i) => {
                  const { x, y } = pointOnCircle(i, 12, radius - 24)
                  return (
                    <button
                      type="button"
                      key={h}
                      className={`time-picker__num ${hour === h ? 'is-selected' : ''}`}
                      style={{ left: x + 24, top: y + 24 }}
                      onClick={() => handleHourPick(h)}
                    >
                      {h}
                    </button>
                  )
                })
              : MINUTES.map((m, i) => {
                  const { x, y } = pointOnCircle(i, 12, radius - 24)
                  return (
                    <button
                      type="button"
                      key={m}
                      className={`time-picker__num ${minute === m ? 'is-selected' : ''}`}
                      style={{ left: x + 24, top: y + 24 }}
                      onClick={() => handleMinutePick(m)}
                    >
                      {String(m).padStart(2, '0')}
                    </button>
                  )
                })}
          </div>
        </div>
      )}
    </div>
  )
}

export default TimePicker
