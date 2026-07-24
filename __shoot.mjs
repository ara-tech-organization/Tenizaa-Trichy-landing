import puppeteer from 'puppeteer-core'

const OUT = 'C:/Users/karth/AppData/Local/Temp/claude/c--Users-karth-OneDrive-Documents-Ara-Tenziaa-Trichy/5f740d17-38d8-4957-916c-1b2517e86eb8/scratchpad'

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--hide-scrollbars', '--disable-gpu'],
})
const page = await browser.newPage()
const errors = []
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

await page.setViewport({ width: 1440, height: 1000 })
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise((r) => setTimeout(r, 2500))
await page.evaluate(() => {
  const x = [...document.querySelectorAll('button')].find((b) => /close/i.test(b.getAttribute('aria-label') || ''))
  x?.click()
})
await new Promise((r) => setTimeout(r, 900))

// Any decorative child still stuck in normal flow?
const report = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('.has-decor').forEach((s) => {
    const cs = getComputedStyle(s)
    const first = s.querySelector('.container, h2, .eyebrow')
    const gap = first ? Math.round(first.getBoundingClientRect().top - s.getBoundingClientRect().top) : null
    const inFlowDecor = [...s.children]
      .filter((c) => !c.classList.contains('decor'))
      .filter((c) => /blob|glow|decor/i.test(c.className))
      .filter((c) => getComputedStyle(c).position !== 'absolute')
      .map((c) => c.className)
    out.push({
      section: s.className.split(' ')[0],
      paddingTop: cs.paddingTop,
      topToContent: gap,
      strayInFlowDecor: inFlowDecor,
    })
  })
  return out
})
console.table(report)
console.log('ERRORS:', errors.length ? errors : 'none')

for (const [sel, file] of [['.final-cta', 'cta-after.png'], ['.consult', 'consult-after.png']]) {
  await page.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'start' }), sel)
  await new Promise((r) => setTimeout(r, 1600))
  await page.screenshot({ path: `${OUT}/${file}` })
}
await browser.close()
