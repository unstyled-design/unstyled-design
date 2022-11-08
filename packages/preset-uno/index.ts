import type { Preset } from 'unocss'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',

    shortcuts: [
      {
        'un-button': 'px-2 py-1 text-base text-white bg-blue rounded transition-opacity hover:opacity-90'
      }
    ]
  }
}
