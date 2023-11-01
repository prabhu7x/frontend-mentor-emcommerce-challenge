import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/frontend-mentor-emcommerce-challenge/',
    server: {
        open: true
    }
})

process.env.BROWSER = 'chromium'
