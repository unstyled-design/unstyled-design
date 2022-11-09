import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { Contributors } from './.vitepress/plugins/contributors'

export default defineConfig({
  plugins: [
    Contributors([1, 2, 3]),

    UnoCSS(),
    Components({
      dirs: resolve(__dirname, '.vitepress/theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './.vitepress/components.d.ts'
    })
  ]
})
