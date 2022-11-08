import type { Preset } from 'unocss'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',

    shortcuts: {
      // general
      'un-transition': 'transition-all duration-200',

      // link
      'un-link': 'underline underline-offset-2 underline-black/20 un-transition hover:underline-black/40',

      // button
      'un-button': 'inline-block px-0.75em py-0.25em shadow-sm bg-red rounded opacity-80 un-transition hover:opacity-100'
    }
  }
}
