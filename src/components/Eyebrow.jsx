import SplitText from './SplitText'

// Eyebrow pill with an optional static icon and a soft character reveal on the text.
function Eyebrow({ icon = null, text, className = '' }) {
  return (
    <span className={`eyebrow ${className}`.trim()}>
      {icon}
      <SplitText
        as="span"
        parts={[{ text }]}
        stagger={0.03}
        duration={0.8}
        distance={12}
        axis="y"
      />
    </span>
  )
}

export default Eyebrow
