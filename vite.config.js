import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages serves this from /Tenizaa-Trichy-landing/, so assets need that
// prefix there. Everywhere else (local dev, root-domain hosting such as
// trichy.tenziaa.com) it stays at '/'. The Pages workflow sets GITHUB_PAGES=true.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Tenizaa-Trichy-landing/' : '/',
})
