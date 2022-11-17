import { defineComponent, h } from 'vue'
import { UIcon } from '../../icon'

type Classes = Record<string, string>

const typeClasses: Classes = {
  primary: 'u-primary',
  success: 'u-success',
  warning: 'u-warning',
  danger: 'u-danger',
  info: 'u-info'
}

const sizeClasses: Classes = {
  'xs': 'u-xs',
  'sm': 'u-sm',
  'base': 'u-base',
  'xl': 'u-xl',
  '2xl': 'u-2xl'
}

export default defineComponent({
  name: 'Button',

  props: {
    to: {
      type: String,
      default: undefined
    },

    type: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: 'base'
    },

    plain: {
      type: Boolean,
      default: false
    },

    dashed: {
      type: Boolean,
      default: false
    },

    round: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: undefined
    }
  },

  setup(props, { slots }) {
    const baseClass = 'u-button u-transition hover:u-button-hover active:u-button-active focus-visible:u-focus-base u-disabled:u-disabled'
    const typeClass = typeClasses[props.type]
    const sizeClass = sizeClasses[props.size]
    const plainClass = (props.type === 'default' || props.plain) || 'u-solid'
    const dashedClass = props.dashed && 'u-dashed'
    const roundClass = props.round && 'rounded-full'

    const classes = [baseClass, typeClass, sizeClass, plainClass, dashedClass, roundClass]

    return () => h(props.to ? 'a' : 'button', { class: classes, href: props.to }, [
      props.icon ? h(UIcon, { icon: props.icon }) : undefined,
      slots.default?.()
    ])
  }
})
