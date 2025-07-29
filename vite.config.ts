import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@icons': resolve(__dirname, './src/icons'),
      '@src': resolve(__dirname, './src'),
      "@mods": resolve(__dirname, './src/content/mods'),
      "@modApi": resolve(__dirname, './src/content/core/modApi'),
    }
  },
  plugins: [
    react(),
    crx({ manifest }),
  ],
  server: {
    cors: {
      origin: '*'
    }
  }
})
