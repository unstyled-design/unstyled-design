import type { Preset, RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'
import { fonts } from '@unocss/preset-mini/rules'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',

    theme: {
      colors: {
        context: 'rgba(var(--u-c-context), %alpha)',
        primary: '#409EFF',
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        info: '#909399'
      }
    },

    rules: [
      [/^u-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
          return {
            '--u-c-context': `${color.cssColor.components.join(',')}`
          }
        }
      }],
      [/^u-(.*)$/, fonts[1][1] as any],
      ['u-dashed', { 'border-style': 'dashed' }],
      ['u-solid', {
        'color': 'white !important',
        'border-color': 'rgba(var(--u-c-context), 1)',
        'background-color': 'rgba(var(--u-c-context), 1) !important'
      }],
      ['u-disabled', {
        'opacity': 0.4,
        'filter': 'saturate(0)',
        'pointer-events': 'none'
      }]
    ],

    variants: [
      (input: string) => {
        const prefix = 'u-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`
          }
        }
      },
      (input: string) => {
        const prefix = 'u-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`
          }
        }
      }
    ],

    shortcuts: {
      // general
      'u-border-base': 'border-gray-400/50',
      'u-focus-base': 'ring-2 ring-context/50',
      'u-active-base': 'ring-3 ring-context/10',
      'u-transition': 'transition-all duration-200',

      // button
      'u-button': 'inline-flex items-center gap-1 px-1em py-0.25em border u-border-base rounded shadow-sm opacity-80 !outline-none',
      'u-button-hover': 'opacity-100 !border-context text-context',
      'u-button-active': 'u-active-base bg-context/5',

      // space
      'u-space': 'flex',

      // radio
      'u-radio': 'inline-flex items-center u-primary cursor-pointer',
      'u-radio-input': 'absolute opacity-0',
      'u-radio-outer': 'relative mr-1 w-1em h-1em text-white border u-border-base rounded-full ',
      'u-radio-outer-checked': 'border-context',
      'u-radio-inner': 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-0 h-0 bg-context rounded-full',
      'u-radio-inner-checked': 'w-0.6em h-0.6em',

      // link
      'u-link': 'underline underline-offset-2 underline-black/20 u-transition hover:underline-black/40',

      // select
      'u-select': ''
    }
  }
}
