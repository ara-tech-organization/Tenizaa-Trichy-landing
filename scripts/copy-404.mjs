import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const distDir = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..', 'dist')
copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'))
