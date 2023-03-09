import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetHbs from 'unocss-preset-hbs'
import { presetUnstyled } from '@unstyled-design/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetHbs(),
    presetUnstyled(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
  ],
})
