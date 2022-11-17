import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Link',

  setup(props, { slots }) {
    return () => <a class={'u-link'}>{ slots.default?.() }</a>
  }
})
