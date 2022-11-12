import { defineComponent, h } from 'vue'
import { UIcon } from '../icon'

export const UButton = defineComponent({
  name: 'UButton',

  props: {
    to: {
      type: String,
      default: undefined
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
      large: 'u-button-large',
      medium: 'u-button-medium',
      small: 'u-button-small'
    }

    const sizeClass = allClasses[props.size] || allClasses.medium

    return () => h(props.to ? 'a' : 'button', { class: `u-button u-button-default ${sizeClass}`, href: props.to }, [
      props.icon ? h(UIcon, { icon: props.icon }) : undefined,
      slots.default?.()
    ])
  }
})

export type UButtonInstance = InstanceType<typeof UButton>
