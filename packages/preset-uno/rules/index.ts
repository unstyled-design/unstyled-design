import type { Rule } from 'unocss'
import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'
import { fonts } from '@unocss/preset-mini/rules'

export default [
  [/^u-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      return {
        '--u-c-context': `${color.cssColor.components.join(',')}`,
      }
    }
  }],
  [/^u-(.*)$/, fonts[1][1] as any],
  ['u-dashed', { 'border-style': 'dashed' }],
  ['u-solid', {
    'color': 'white !important',
    'border-color': 'rgba(var(--u-c-context), 1)',
    'background-color': 'rgba(var(--u-c-context), 1) !important',
  }],
  ['u-disabled', {
    'opacity': 0.4,
    'filter': 'saturate(0)',
    'pointer-events': 'none',
  }],
] as Rule[]
