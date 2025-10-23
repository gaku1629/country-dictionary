import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED': 'false',
  },

  plugins: [
    vue(),
    vuetify({ autoImport: true }), // ← vuetifyを追加
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
