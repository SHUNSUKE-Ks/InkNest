import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'InkNest',
        short_name: 'InkNest',
        description: 'InkNest App',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/InkNest_Logo_192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/InkNest_Logo_512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})