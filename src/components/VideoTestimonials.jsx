import { useEffect, useRef, useState } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import SectionDecor from './SectionDecor'
import './VideoTestimonials.css'

// Self-hosted from public/videos — Drive blocks thumbnail hotlinking in browsers.
const BASE = import.meta.env.BASE_URL

const VIDEOS = [
  { file: 'nandhini.mp4', title: 'Nandhini Devi’s weight loss story' },
  { file: '116-to-106.mp4', title: '116 kg to 106 kg — 10 kg down' },
  { file: 'confident-again.mp4', title: 'Feeling confident again' },
  { file: 'kickstart.mp4', title: 'Kickstarting a wellness journey' },
  { file: 'happy-client.mp4', title: 'A happy client’s experience' },
  { file: 'achieving-goals.mp4', title: 'Clients achieving their goals' },
  { file: 'real-stories.mp4', title: 'Real stories, real transformations' },
  { file: 'every-journey.mp4', title: 'Every client’s journey matters' },
]

const AUTO_SLIDE_MS = 4200

const fmt = (secs) => `${Math.floor(secs / 60)}:${String(Math.floor(secs % 60)).padStart(2, '0')}`

function VideoTestimonials() {
  const [playing, setPlaying] = useState(null)
  const [durations, setDurations] = useState({})
  const trackRef = useRef(null)
  const refs = useRef({})
  const pausedRef = useRef(false)
  const clickedRef = useRef(null)

  const scrollBy = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.reel')
    const amount = card ? card.offsetWidth + 18 : track.clientWidth
    if (dir > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 8) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Auto-slide — pauses on hover/touch and while a video is playing.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!pausedRef.current && !playing) scrollBy(1)
    }, AUTO_SLIDE_MS)
    return () => clearInterval(id)
  }, [playing])

  // Reels behave like a feed: only one plays at a time.
  const pauseOthers = (file) => {
    Object.entries(refs.current).forEach(([key, el]) => { if (key !== file) el?.pause() })
  }

  // Hover = muted preview (browsers only allow autoplay when muted).
  const hoverPlay = (file) => {
    if (clickedRef.current === file) return
    if (clickedRef.current && clickedRef.current !== file) clickedRef.current = null
    const el = refs.current[file]
    if (!el) return
    pauseOthers(file)
    el.muted = true
    el.play().catch(() => {})
    setPlaying(file)
  }

  const hoverStop = (file) => {
    if (clickedRef.current === file) return
    const el = refs.current[file]
    if (!el) return
    el.pause()
    el.currentTime = 0
    setPlaying((prev) => (prev === file ? null : prev))
  }

  // Click = play with sound, and keep playing after the pointer leaves.
  const toggle = (file) => {
    const el = refs.current[file]
    if (!el) return
    pauseOthers(file)
    if (el.paused || el.muted) {
      el.muted = false
      el.play().catch(() => {})
      clickedRef.current = file
      setPlaying(file)
    } else {
      el.pause()
      clickedRef.current = null
      setPlaying(null)
    }
  }

  return (
    <section id="video-reviews" className="reels has-decor">
      <SectionDecor variant="g" />
      <div className="container">
        <SectionHead
          eyebrow="Video Testimonials"
          title="Hear It Straight From Our Clients"
          desc={<>Real Trichy clients sharing their weight loss and wellness journeys in their own words.</>}
        />
      </div>

      <Reveal
        as="div"
        className="reels__carousel"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        onTouchStart={() => { pausedRef.current = true }}
      >
        <button type="button" className="reels__nav reels__nav--prev" aria-label="Previous video" onClick={() => scrollBy(-1)}>
          <ChevronLeft size={22} />
        </button>

        <div className="reels__track" ref={trackRef}>
          {VIDEOS.map((video) => (
            <figure
              className={`reel ${playing === video.file ? 'is-playing' : ''}`}
              key={video.file}
              onMouseEnter={() => hoverPlay(video.file)}
              onMouseLeave={() => hoverStop(video.file)}
            >
              <button
                type="button"
                className="reel__btn"
                onClick={() => toggle(video.file)}
                onMouseEnter={() => hoverPlay(video.file)}
                onMouseLeave={() => hoverStop(video.file)}
                aria-label={`${playing === video.file ? 'Pause' : 'Play'} video: ${video.title}`}
              >
                <video
                  ref={(el) => { refs.current[video.file] = el }}
                  className="reel__video"
                  src={`${BASE}videos/${video.file}#t=0.1`}
                  preload="metadata"
                  playsInline
                  muted
                  onEnded={() => setPlaying(null)}
                  onLoadedMetadata={(e) => {
                    const d = e.currentTarget.duration
                    if (Number.isFinite(d)) setDurations((prev) => ({ ...prev, [video.file]: fmt(d) }))
                  }}
                />
                <span className="reel__shade" />
                {durations[video.file] && (
                  <span className="reel__duration">{durations[video.file]}</span>
                )}
                <span className="reel__badge">
                  {playing === video.file
                    ? <Pause size={17} fill="currentColor" strokeWidth={0} />
                    : <Play size={17} fill="currentColor" strokeWidth={0} />}
                </span>
                <figcaption className="reel__caption">{video.title}</figcaption>
              </button>
            </figure>
          ))}
        </div>

        <button type="button" className="reels__nav reels__nav--next" aria-label="Next video" onClick={() => scrollBy(1)}>
          <ChevronRight size={22} />
        </button>
      </Reveal>
    </section>
  )
}

export default VideoTestimonials
