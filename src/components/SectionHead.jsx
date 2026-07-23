import Reveal from './Reveal'
import SplitText from './SplitText'

// Sequenced section header: eyebrow badge → heading (char-by-char) → description,
// one after another. Cards below the header continue the cascade via their own
// staggered Reveal delays.
function SectionHead({ eyebrow, eyebrowClass = '', title, titleClass = '', desc, className = '' }) {
  return (
    <div className={`section-head ${className}`.trim()}>
      {eyebrow && (
        <SplitText
          as="span"
          className={`eyebrow ${eyebrowClass}`.trim()}
          parts={[{ text: eyebrow }]}
          stagger={0.03}
          duration={0.8}
          distance={12}
          axis="y"
        />
      )}
      <SplitText as="h2" className={titleClass} delay={0.12} parts={[{ text: title }]} />
      {desc && (
        <Reveal as="p" delay={420}>
          {desc}
        </Reveal>
      )}
    </div>
  )
}

export default SectionHead
