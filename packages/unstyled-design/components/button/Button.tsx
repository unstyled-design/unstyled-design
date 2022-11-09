import { defineComponent, h } from 'vue'
import { UnIcon } from '../icon'

export const UnButton = defineComponent({
  name: 'UnButton',

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
    return () => h(props.to ? 'a' : 'button', { class: 'un-button', href: props.to }, [
      props.icon ? h(UnIcon, { icon: props.icon }) : undefined,
      slots.default?.()
    ])
  }
})

export type UnButtonInstance = InstanceType<typeof UnButton>
