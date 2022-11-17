import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import Components from 'unplugin-vue-components/vite'
import { getComponentContributors } from '../scripts/contributors'
import { Contributors } from './.vitepress/plugins/contributors'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig(async () => {
  const contributors = await getComponentContributors()

  return {
    plugins: [
      Inspect(),

      MarkdownTransform(),
      Contributors(contributors),

      UnoCSS(),
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: './.vitepress/components.d.ts'
      })
    ]
  }
})
