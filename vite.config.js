import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}']
  },
  manifest: {
    name: 'To Do List',
    short_name: 'Todo',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/pwa-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/pwa-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
})
  ]
})  
