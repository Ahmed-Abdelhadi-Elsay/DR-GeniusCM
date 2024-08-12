import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // تأكد من أن هذا هو المسار الذي يتوقعه Vercel
  },
  server: {
    port: 3000,
  }
})
