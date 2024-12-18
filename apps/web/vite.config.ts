import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@eee/ui']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages/]
    }
  }
})
