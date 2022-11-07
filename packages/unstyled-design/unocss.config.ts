import { defineConfig, presetUno } from 'unocss'
import { presetUnstyled } from '@unstyled-design/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetUnstyled()
  ]
})
