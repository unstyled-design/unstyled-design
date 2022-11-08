import { defineComponent, h } from 'vue'

export const UnButton = defineComponent({
  name: 'UnButton',

  props: {
    to: {
      type: String,
      default: undefined
    }
  },

  setup(props, { slots }) {
    return () => h(props.to ? 'a' : 'button', { class: 'un-button', href: props.to }, slots.default?.())
  }
})

export type UnButtonInstance = InstanceType<typeof UnButton>
