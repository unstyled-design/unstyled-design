import type { Preset } from 'unocss'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',
    shortcuts: [
      {
        'un-button': 'bg-red p-2 rounded'
      }
    ]
  }
}
