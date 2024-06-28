import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      '/Api': {
        target: 'https://2a13-101-99-32-135.ngrok-free.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Api/, ''),
      },
    }
  }
})
