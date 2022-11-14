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
      'u-button-primary': 'text-white bg-primary hover:opacity-100',
      'u-button-success': 'text-white bg-success hover:opacity-100',
      'u-button-warning': 'text-white bg-warning hover:opacity-100',
      'u-button-info': 'text-white bg-info hover:opacity-100',
      'u-button-danger': 'text-white bg-danger hover:opacity-100',
      // button size
      'u-button-large': 'px-3 py-1.5 text-base',
      'u-button-medium': 'px-2 py-1 text-sm',
      'u-button-small': 'px-1 py-0.5 text-xs',

      // select
      'u-select': ''
    }
  }
}
