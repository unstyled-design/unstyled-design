import type { Preset } from '@unocss/core'
import theme from './theme'
import rules from './rules'
import variants from './variants'
import shortcuts from './shortcuts'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',
    theme,
    rules,
    variants,
    shortcuts
  }
}
