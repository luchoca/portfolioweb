import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolioweb/', // Nombre de tu repositorio en GitHub
  server: {
    port: 3000,
    open: true
  }
})
