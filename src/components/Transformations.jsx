import Reveal from './Reveal'
import CompareSlider from './CompareSlider'
import './Transformations.css'
import before1 from '../assets/Before1.png'
import after1 from '../assets/After1.png'
import before2 from '../assets/Before2.png'
import after2 from '../assets/After2.png'
import before3 from '../assets/Before3.png'
import after3 from '../assets/After3.png'

const PAIRS = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
]

function Transformations() {
  return (
    <section id="results" className="transformations">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Real Transformations</span>
          <h2>See the Difference</h2>
          <p>Drag the slider to reveal genuine before &amp; after results from our personalized weight loss programs.</p>
        </Reveal>

        <div className="transformations__grid">
          {PAIRS.map((pair, i) => (
            <Reveal as="figure" key={i} delay={i * 130} className="transformations__card">
              <CompareSlider before={pair.before} after={pair.after} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformations
