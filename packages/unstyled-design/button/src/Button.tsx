import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UnButton',

  setup(props, { slots }) {
    return () => {
      // eslint-disable-next-line react/no-unknown-property
      return <button class={'un-button'}>
        { slots.default ? slots.default() : 'UnButton' }
      </button>
    }
  }
})
