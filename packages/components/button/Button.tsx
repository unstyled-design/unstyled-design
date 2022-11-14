import { defineComponent, h } from 'vue'
import { UIcon } from '../icon'

export const UButton = defineComponent({
  name: 'UButton',

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
      default: 'medium'
    },

    icon: {
      type: String,
      default: undefined
    }
  },

  setup(props, { slots }) {
    const allClasses = {
      default: 'u-button-default',
      primary: 'u-button-primary',
      success: 'u-button-success',
      warning: 'u-button-warning',
      info: 'u-button-info',
      danger: 'u-button-danger',
      large: 'u-button-large',
      medium: 'u-button-medium',
      small: 'u-button-small'
    }

    const sizeClass = allClasses[props.size] || allClasses.medium
    const typeClass = allClasses[props.type] || allClasses.default

    return () => h(props.to ? 'a' : 'button', { class: `u-button ${sizeClass} ${typeClass}`, href: props.to }, [
      props.icon ? h(UIcon, { icon: props.icon }) : undefined,
      slots.default?.()
    ])
  }
})

export type UButtonInstance = InstanceType<typeof UButton>
