import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ULink',

  setup(props, { slots }) {
    return () => <a class={'u-link'}>{ slots.default?.() }</a>
  }
})
