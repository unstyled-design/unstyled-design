import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Link',

  props: {
    underline: Boolean,
  },

  setup(props, { slots }) {
    return () => <a class={['u-link', props.underline && 'u-link-underline']}>{slots.default?.()}</a>
  },
})
