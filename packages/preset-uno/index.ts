import type { Preset } from 'unocss'

export function presetUnstyled(): Preset {
  return {
    name: '@unstyled-design/preset-uno',

    theme: {
      colors: {
        primary: '#409eff',
        success: '#432142',
        warning: '#e6a23c',
        info: '#909399',
        danger: '#f56c6c'
      }
    },

    shortcuts: {
      // general
      'u-border-base': 'border-gray-400/50',
      'u-transition': 'transition-all duration-200',

      // link
      'u-link': 'underline underline-offset-2 underline-black/20 u-transition hover:underline-black/40',

      // button
      'u-button': 'inline-block text-center text-base border border-transparent rounded u-transition opacity-80',
      'u-button-default': 'text-black bg-white u-border-base hover:text-primary hover:border-primary hover:opacity-100',
      // button size
      'u-button-large': 'px-5 py-3 text-xl',
      'u-button-medium': 'px-4 py-2 text-base',
      'u-button-small': 'px-2 py-1 text-sm',

      // select
      'u-select': ''
    }
  }
}
