import puppeteer from 'puppeteer-core'

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--disable-gpu'],
})
const page = await browser.newPage()
const logs = []
page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message))
page.on('console', (m) => logs.push(`${m.type()}: ${m.text()}`))
page.on('requestfailed', (r) => logs.push('REQFAIL: ' + r.url()))

await page.goto('http://localhost:5199/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise((r) => setTimeout(r, 3000))

const dom = await page.evaluate(() => ({
  fdock: !!document.querySelector('.fdock'),
  contact: !!document.querySelector('.fdock__contact'),
  popup: !!document.querySelector('.popup__card'),
  rootHTMLLength: document.getElementById('root')?.innerHTML.length ?? 0,
}))
console.log('DOM:', JSON.stringify(dom))
console.log('--- logs ---')
console.log(logs.slice(0, 15).join('\n') || 'none')
await browser.close()
