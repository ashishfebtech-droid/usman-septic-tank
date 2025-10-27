import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/usman-septic-tank/',
  css: {
    devSourcemap: false,
  },
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // ✅ YEH ADD KARO - 404.html ko include karne ke liye
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html'
      }
    }
  }
})