import { defineComponent, h } from 'vue'
import { UIcon } from '../icon'

export const UButton = defineComponent({
  name: 'UButton',

  props: {
    to: {
      type: String,
      default: undefined
    },

    icon: {
      type: String,
      default: undefined
    }
  },

  setup(props, { slots }) {
    return () => h(props.to ? 'a' : 'button', { class: 'u-button', href: props.to }, [
      props.icon ? h(UIcon, { icon: props.icon }) : undefined,
      slots.default?.()
    ])
  }
})

export type UButtonInstance = InstanceType<typeof UButton>
