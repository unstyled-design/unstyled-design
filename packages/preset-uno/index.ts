import type { Preset } from 'unocss'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',

    theme: {
      colors: {

      }
    },

    shortcuts: {
      // general
      'u-transition': 'transition-all duration-200',

      // link
      'u-link': 'underline underline-offset-2 underline-black/20 u-transition hover:underline-black/40',

      // button
      'u-button': 'inline-block px-0.75em py-0.25em shadow-sm bg-red rounded opacity-80 un-transition hover:opacity-100',

      // select
      'u-select': ''
    }
  }
}
