import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

const publicDir = resolve(__dirname, 'public')


// https://vitejs.dev/config/
export default defineConfig({
  publicDir,
  plugins: [react(), svgr()],
})
