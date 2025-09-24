import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/porfolio-remix/', // Cambia esto por el nombre de tu repositorio
  server: {
    port: 3000,
    open: true
  }
})
