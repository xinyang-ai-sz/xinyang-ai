import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/xinyang-ai/',  // 改回使用正确的 base URL
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})


