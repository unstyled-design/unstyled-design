import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, '.')
    }
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'unstyled-design'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  },

  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ]
})
