import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetHbs from 'unocss-preset-hbs'
import { presetUnstyled } from '@unstyled-design/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetHbs(),
    presetUnstyled(),
    presetIcons(),
  ],
})
